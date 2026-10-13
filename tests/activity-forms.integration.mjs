import assert from 'node:assert/strict';
const base = 'http://127.0.0.1:6200';
async function post(action, data = {}, expected = 200) {
  const r = await fetch(base + '/api/activity-forms', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Origin: base },
    body: JSON.stringify({ action, ...data }),
  });
  const j = await r.json();
  assert.equal(r.status, expected, JSON.stringify(j));
  return j;
}
async function get(action, id) {
  const r = await fetch(
    base +
      '/api/activity-forms?' +
      new URLSearchParams({ action, ...(id ? { id } : {}) }),
  );
  return { status: r.status, data: await r.json() };
}
assert.equal(
  (await get('session')).data.demo,
  true,
  'Run only against the local demo server',
);
const id = crypto.randomUUID();
const form = {
  id,
  title: '가을 활동 · 함께할 팀 찾기',
  description: '팀 배정 기능 검증용 가상 응답입니다.',
  purpose: 'teams',
  status: 'draft',
  updatedAt: new Date().toISOString(),
  questions: [
    { id: 'name', title: '이름', type: 'short', required: true, options: [] },
    {
      id: 'role',
      title: '직무',
      type: 'single',
      required: true,
      options: ['프론트엔드', '백엔드', '디자인'],
    },
    {
      id: 'generation',
      title: '기수',
      type: 'select',
      required: true,
      options: ['5기', '6기'],
    },
  ],
};
await post('saveForm', { form });
await post('submit', { id: crypto.randomUUID(), formId: id, answers: {} }, 409);
form.status = 'open';
await post('saveForm', { form });
await post('submit', { id: crypto.randomUUID(), formId: id, answers: {} }, 400);
const people = [];
for (let i = 0; i < 12; i++) {
  const rid = crypto.randomUUID();
  const name = [
    '가온',
    '나래',
    '다온',
    '라온',
    '마루',
    '바다',
    '새봄',
    '아린',
    '여름',
    '지안',
    '하늘',
    '해솔',
  ][i];
  await post('submit', {
    id: rid,
    formId: id,
    answers: {
      name,
      role: form.questions[1].options[i % 3],
      generation: i % 2 ? '5기' : '6기',
    },
  });
  people.push({ id: rid, name, attributes: { private: 'MUST_NOT_SHARE' } });
  if (i === 0)
    await post('submit', {
      id: rid,
      formId: id,
      answers: { name, role: '백엔드', generation: '6기' },
    });
}
assert.equal((await get('responses', id)).data.length, 12);
await post(
  'saveForm',
  {
    form: {
      ...form,
      questions: [
        ...form.questions,
        {
          id: 'new',
          title: 'later',
          type: 'short',
          required: false,
          options: [],
        },
      ],
    },
  },
  409,
);
const plan = {
  id: crypto.randomUUID(),
  formId: id,
  title: '가을 활동 좌석',
  rows: 2,
  columns: 2,
  rules: { teamSize: 3, balanceBy: [], together: [], apart: [] },
  teams: [
    people.slice(0, 3),
    people.slice(3, 6),
    people.slice(6, 9),
    people.slice(9),
  ],
  createdAt: new Date().toISOString(),
  shareId: crypto.randomUUID(),
};
await post('savePlan', { plan });
const shared = await get('shared', plan.shareId);
assert.equal(shared.status, 200);
assert(!JSON.stringify(shared).includes('MUST_NOT_SHARE'));
assert(!JSON.stringify(shared).includes('rules'));
const share = plan.shareId;
delete plan.shareId;
await post('savePlan', { plan });
assert.equal((await get('shared', share)).status, 404);
form.status = 'closed';
await post('saveForm', { form });
await post(
  'submit',
  {
    id: crypto.randomUUID(),
    formId: id,
    answers: { name: 'x', role: '백엔드', generation: '5기' },
  },
  409,
);
const csrf = await fetch(base + '/api/activity-forms', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Origin: 'https://evil.example',
  },
  body: JSON.stringify({ action: 'saveForm', form }),
});
assert.equal(csrf.status, 403);
form.status = 'open';
await post('saveForm', { form });
console.log(
  'PASS: create/draft/publish/validation/12 responses/idempotency/schema lock/save/share privacy/revoke/close/CSRF',
);
console.log('Demo form:', id);
