const { test } = require('node:test');
const assert = require('node:assert/strict');
const ts = require('typescript');
const fs = require('node:fs');
const vm = require('node:vm');
const crypto = require('node:crypto');
function load(file, deps = {}, context = {}) {
  const source = fs.readFileSync(file, 'utf8');
  const code = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2022,
    },
  }).outputText;
  const loadedModule = { exports: {} };
  vm.runInNewContext(code, {
    module: loadedModule,
    exports: loadedModule.exports,
    require: (name) => deps[name],
    crypto,
    console,
    ...context,
  });
  return loadedModule.exports;
}
const model = load('src/features/forms/model.ts');
const { assignTeams } = load('src/features/forms/assignment.ts', {
  './model': model,
});
const people = Array.from({ length: 45 }, (_, i) => ({
  id: String(i),
  name: '사람' + i,
  attributes: { role: i % 2 ? 'backend' : 'frontend' },
}));
const rules = {
  teamSize: 5,
  balanceBy: ['role'],
  together: [['0', '1']],
  apart: [['2', '3']],
};
test('45 people assigned exactly once; size and pair constraints respected across rerolls', () => {
  for (let run = 0; run < 20; run++) {
    const { teams } = assignTeams(people, rules);
    assert.equal(teams.length, 9);
    assert.equal(new Set(teams.flat().map((p) => p.id)).size, 45);
    assert(teams.every((t) => t.length === 5));
    assert(
      teams.some(
        (t) => t.some((p) => p.id === '0') && t.some((p) => p.id === '1'),
      ),
    );
    assert(
      !teams.some(
        (t) => t.some((p) => p.id === '2') && t.some((p) => p.id === '3'),
      ),
    );
  }
});
test('conflicting transitive together/apart constraints fail explicitly', () => {
  assert.throws(
    () =>
      assignTeams(people, {
        ...rules,
        together: [
          ['0', '1'],
          ['1', '2'],
        ],
        apart: [['0', '2']],
      }),
    /충돌/,
  );
});
test('impossible capacity and invalid size do not drop participants', () => {
  assert.throws(
    () =>
      assignTeams(people.slice(0, 3), {
        ...rules,
        teamSize: 2,
        together: [
          ['0', '1'],
          ['1', '2'],
        ],
        apart: [],
      }),
    /최대 인원/,
  );
  assert.throws(() => assignTeams(people, { ...rules, teamSize: 0 }), /1~30/);
  assert.throws(() => assignTeams([], rules), /없습니다/);
});
test('small and uneven groups maintain exact membership', () => {
  for (const n of [1, 2, 6, 11, 46]) {
    const p = Array.from({ length: n }, (_, i) => ({
      id: String(i),
      name: String(i),
      attributes: {},
    }));
    const { teams } = assignTeams(p, {
      teamSize: 5,
      balanceBy: [],
      together: [],
      apart: [],
    });
    assert.equal(teams.flat().length, n);
    assert(teams.every((t) => t.length > 0 && t.length <= 5));
    assert(
      Math.max(...teams.map((t) => t.length)) -
        Math.min(...teams.map((t) => t.length)) <=
        1,
    );
  }
});
test('required fields, options, ratings and calendar dates validate on server model', () => {
  const form = model.createForm('review');
  assert(Object.keys(model.validateAnswers(form, {})).length > 0);
  const answers = Object.fromEntries(
    form.questions.map((q) => [q.id, q.type === 'rating' ? '5' : 'hello']),
  );
  assert.equal(Object.keys(model.validateAnswers(form, answers)).length, 0);
  answers[form.questions[1].id] = '99';
  assert(model.validateAnswers(form, answers)[form.questions[1].id]);
  const date = {
    ...form,
    questions: [
      { id: 'date', title: '날짜', type: 'date', required: true, options: [] },
    ],
  };
  assert(model.validateAnswers(date, { date: '2026-02-31' }).date);
  assert.equal(
    Object.keys(model.validateAnswers(date, { date: '2026-02-28' })).length,
    0,
  );
  const choices = {
    ...form,
    questions: [
      {
        id: 'choice',
        title: '선택',
        type: 'multiple',
        required: true,
        options: ['a', 'b'],
      },
    ],
  };
  assert(model.validateAnswers(choices, { choice: ['evil'] }).choice);
  assert.equal(
    Object.keys(model.validateAnswers(choices, { choice: ['a', 'b'] })).length,
    0,
  );
});
test('form validation rejects blank or duplicate choices', () => {
  const form = model.createForm('teams');
  assert.equal(model.validateForm(form), null);
  form.questions[1].options = ['a', 'a'];
  assert(model.validateForm(form));
});
test('CSV quotes multiline text and neutralizes spreadsheet formulas', () => {
  const form = { questions: [{ id: 'x', title: '이름' }] };
  const csv = model.responseCsv(form, [
    { createdAt: 'now', answers: { x: '=1+1' } },
  ]);
  assert(csv.includes("'=1+1"));
  assert(
    model
      .responseCsv(form, [{ createdAt: 'now', answers: { x: 'a"b\nc' } }])
      .includes('a""b\nc'),
  );
});

function routeHarness({
  token,
  email = 'outsider@example.com',
  confirmed = true,
} = {}) {
  let writes = 0;
  const routes = load(
    'src/app/api/activity-forms/route.ts',
    {
      'next/headers': {
        cookies: () => ({ get: () => (token ? { value: token } : undefined) }),
      },
      'next/server': {
        NextResponse: {
          json: (data, init) => new Response(JSON.stringify(data), init),
        },
      },
      '@/features/forms/model': model,
      '@/features/forms/store': {
        configured: () => true,
        demoMode: () => false,
        list: async () => [],
        save: async () => {
          writes++;
        },
      },
    },
    {
      URL,
      process: {
        env: {
          SUPABASE_URL: 'https://example.supabase.co',
          SUPABASE_SERVICE_ROLE_KEY: 'test-only',
          ACTIVITY_FORMS_ADMIN_EMAILS: 'admin@example.com',
        },
      },
      fetch: async () =>
        new Response(
          JSON.stringify({
            email,
            email_confirmed_at: confirmed ? '2026-01-01' : null,
          }),
        ),
    },
  );
  return { ...routes, writes: () => writes };
}
function request(action, payload = {}, origin = 'https://sipe.team') {
  return {
    nextUrl: new URL('https://sipe.team/api/activity-forms?action=' + action),
    headers: new Headers({ origin, host: 'sipe.team' }),
    text: async () => JSON.stringify({ action, ...payload }),
  };
}
test('production management rejects anonymous, non-admin and unconfirmed users', async () => {
  for (const config of [
    {},
    { token: 't' },
    { token: 't', email: 'admin@example.com', confirmed: false },
  ]) {
    const route = routeHarness(config);
    assert.equal((await route.GET(request('forms'))).status, 401);
    assert.equal(
      (
        await route.POST(
          request('saveForm', { form: model.createForm('review') }),
        )
      ).status,
      401,
    );
    assert.equal(route.writes(), 0);
  }
});
test('confirmed allowlisted administrator can read forms; forged origin still rejected', async () => {
  const route = routeHarness({ token: 't', email: 'admin@example.com' });
  assert.equal((await route.GET(request('forms'))).status, 200);
  assert.equal(
    (
      await route.POST(
        request(
          'saveForm',
          { form: model.createForm('review') },
          'https://evil.example',
        ),
      )
    ).status,
    403,
  );
  assert.equal(route.writes(), 0);
});
