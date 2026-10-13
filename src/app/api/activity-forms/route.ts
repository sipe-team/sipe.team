import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

import {
  ActivityForm,
  FormResponse,
  TeamPlan,
  validateAnswers,
  validateForm,
} from '@/features/forms/model';
import { configured, demoMode, list, save } from '@/features/forms/store';

export const dynamic = 'force-dynamic';
const cookie = 'sipe_activity_admin';
const uuid = (v: unknown): v is string =>
  typeof v === 'string' &&
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(v);
const reply = (data: unknown, status = 200) =>
  NextResponse.json(data, { status, headers: { 'Cache-Control': 'no-store' } });
async function admin(): Promise<boolean> {
  if (demoMode()) return true;
  const token = cookies().get(cookie)?.value;
  if (!token || !configured()) return false;
  const res = await fetch(`${process.env.SUPABASE_URL}/auth/v1/user`, {
    headers: {
      apikey: process.env.SUPABASE_SERVICE_ROLE_KEY!,
      Authorization: `Bearer ${token}`,
    },
    cache: 'no-store',
  });
  if (!res.ok) return false;
  const user = await res.json();
  return Boolean(
    user.email_confirmed_at &&
      process.env.ACTIVITY_FORMS_ADMIN_EMAILS?.split(',')
        .map((x) => x.trim().toLowerCase())
        .includes(user.email?.toLowerCase()),
  );
}
async function formById(id: string) {
  return (await list('forms', { column: 'id', value: id }))[0];
}
export async function GET(req: NextRequest) {
  try {
    const action = req.nextUrl.searchParams.get('action');
    const id = req.nextUrl.searchParams.get('id') || '';
    if (action === 'session')
      return reply({
        admin: await admin(),
        demo: demoMode(),
        configured: configured(),
      });
    if (!configured())
      return reply(
        { error: '저장소 연결 전입니다. 운영진에게 문의해주세요.' },
        503,
      );
    if (action === 'shared' && uuid(id)) {
      const plan = (await list('plans', { column: 'share_id', value: id }))[0];
      if (!plan)
        return reply({ error: '공유가 종료되었거나 잘못된 링크입니다.' }, 404);
      return reply({
        title: plan.title,
        rows: plan.rows,
        columns: plan.columns,
        teams: plan.teams.map((t) =>
          t.map((p) => ({ id: p.id, name: p.name, attributes: {} })),
        ),
      });
    }
    const isAdmin = await admin();
    if (action === 'form' && uuid(id)) {
      const form = await formById(id);
      if (!form || (!isAdmin && form.status === 'draft'))
        return reply({ error: '폼을 찾을 수 없습니다.' }, 404);
      return reply(form);
    }
    if (!isAdmin) return reply({ error: '운영진 로그인이 필요합니다.' }, 401);
    if (action === 'forms') return reply(await list('forms'));
    if ((action === 'responses' || action === 'plans') && uuid(id))
      return reply(await list(action, { column: 'form_id', value: id }));
    return reply({ error: '잘못된 요청입니다.' }, 400);
  } catch {
    return reply(
      { error: '데이터를 불러오지 못했습니다. 잠시 후 다시 시도해주세요.' },
      500,
    );
  }
}
export async function POST(req: NextRequest) {
  try {
    if (
      !req.headers.get('origin') ||
      new URL(req.headers.get('origin')!).host !== req.headers.get('host')
    )
      return reply({ error: '허용되지 않은 요청입니다.' }, 403);
    const raw = await req.text();
    if (raw.length > 200000)
      return reply({ error: '입력 내용이 너무 큽니다.' }, 413);
    const body = JSON.parse(raw);
    const { action } = body;
    if (action === 'logout') {
      cookies().delete(cookie);
      return reply({ ok: true });
    }
    if (!configured())
      return reply(
        { error: '저장소 연결 전입니다. 운영진에게 문의해주세요.' },
        503,
      );
    if (action === 'login') {
      if (typeof body.email !== 'string' || typeof body.password !== 'string')
        return reply({ error: '이메일과 비밀번호를 입력해주세요.' }, 400);
      const allowed = process.env.ACTIVITY_FORMS_ADMIN_EMAILS?.split(',')
        .map((x) => x.trim().toLowerCase())
        .includes(body.email.toLowerCase());
      if (!allowed)
        return reply(
          { error: '로그인 정보 또는 운영진 권한을 확인해주세요.' },
          401,
        );
      const res = await fetch(
        `${process.env.SUPABASE_URL}/auth/v1/token?grant_type=password`,
        {
          method: 'POST',
          headers: {
            apikey: process.env.SUPABASE_SERVICE_ROLE_KEY!,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email: body.email, password: body.password }),
          cache: 'no-store',
        },
      );
      if (!res.ok)
        return reply(
          { error: '로그인 정보 또는 운영진 권한을 확인해주세요.' },
          401,
        );
      const session = await res.json();
      if (!session.user?.email_confirmed_at)
        return reply({ error: '이메일 인증이 필요합니다.' }, 401);
      cookies().set(cookie, session.access_token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        path: '/',
        maxAge: Math.min(session.expires_in || 3600, 3600),
      });
      return reply({ ok: true });
    }
    if (action === 'submit') {
      if (
        !uuid(body.formId) ||
        !uuid(body.id) ||
        !body.answers ||
        typeof body.answers !== 'object' ||
        Array.isArray(body.answers)
      )
        return reply({ error: '응답 형식이 올바르지 않습니다.' }, 400);
      const form = await formById(body.formId);
      if (!form || form.status !== 'open')
        return reply({ error: '현재 응답을 받지 않는 폼입니다.' }, 409);
      const errors = validateAnswers(form, body.answers);
      if (Object.keys(errors).length)
        return reply({ error: '답변을 확인해주세요.', fields: errors }, 400);
      const response: FormResponse = {
        id: body.id,
        formId: form.id,
        answers: Object.fromEntries(
          form.questions
            .filter((q) => body.answers[q.id] !== undefined)
            .map((q) => [q.id, body.answers[q.id]]),
        ),
        createdAt: new Date().toISOString(),
      };
      await save('responses', response, true);
      return reply({ ok: true });
    }
    if (!(await admin()))
      return reply({ error: '운영진 로그인이 필요합니다.' }, 401);
    if (action === 'saveForm') {
      const form: ActivityForm = body.form;
      if (!form || !uuid(form.id))
        return reply({ error: '잘못된 폼입니다.' }, 400);
      const error = validateForm(form);
      if (error) return reply({ error }, 400);
      const old = await formById(form.id);
      if (
        old &&
        JSON.stringify(old.questions) !== JSON.stringify(form.questions) &&
        (await list('responses', { column: 'form_id', value: form.id })).length
      )
        return reply(
          {
            error:
              '응답이 있는 폼은 질문을 변경할 수 없습니다. 폼을 복제해주세요.',
          },
          409,
        );
      await save('forms', { ...form, updatedAt: new Date().toISOString() });
      return reply({ ok: true });
    }
    if (action === 'savePlan') {
      const plan: TeamPlan = body.plan;
      if (
        !plan ||
        !uuid(plan.id) ||
        !uuid(plan.formId) ||
        !Number.isInteger(plan.rows) ||
        !Number.isInteger(plan.columns) ||
        plan.rows < 1 ||
        plan.columns < 1 ||
        plan.rows > 20 ||
        plan.columns > 20 ||
        !Array.isArray(plan.teams) ||
        plan.teams.length > plan.rows * plan.columns ||
        !plan.title?.trim() ||
        plan.title.length > 200 ||
        (plan.shareId !== undefined && !uuid(plan.shareId))
      )
        return reply({ error: '배치 설정을 확인해주세요.' }, 400);
      const form = await formById(plan.formId);
      if (!form) return reply({ error: '폼을 찾을 수 없습니다.' }, 404);
      const responses = await list('responses', {
        column: 'form_id',
        value: form.id,
      });
      const members = plan.teams.flat();
      if (
        members.length > 200 ||
        members.length !== responses.length ||
        new Set(members.map((p) => p.id)).size !== members.length ||
        members.some(
          (p) =>
            !responses.some((r) => r.id === p.id) ||
            typeof p.name !== 'string' ||
            p.name.length > 500,
        )
      )
        return reply(
          {
            error: '참가자 목록이 변경되었습니다. 새로 불러온 뒤 배정해주세요.',
          },
          409,
        );
      await save('plans', {
        ...plan,
        teams: plan.teams.map((t) =>
          t.map((p) => ({ id: p.id, name: p.name, attributes: {} })),
        ),
      });
      return reply({ ok: true });
    }
    return reply({ error: '잘못된 요청입니다.' }, 400);
  } catch {
    return reply(
      {
        error:
          '요청을 처리하지 못했습니다. 입력 내용과 저장소 설정을 확인해주세요.',
      },
      500,
    );
  }
}
