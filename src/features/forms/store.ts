import 'server-only';

import { promises as fs } from 'fs';
import path from 'path';

import { ActivityForm, FormResponse, TeamPlan } from './model';

type Collections = {
  forms: ActivityForm;
  responses: FormResponse;
  plans: TeamPlan;
};
type Database = { [K in keyof Collections]: Collections[K][] };
const tables = {
  forms: 'activity_forms',
  responses: 'activity_form_responses',
  plans: 'activity_team_plans',
};
export const demoMode = () =>
  process.env.NODE_ENV === 'development' &&
  process.env.ACTIVITY_FORMS_DEMO === 'true';
const file = () =>
  path.join(process.cwd(), '.activity-forms.local', 'data.json');
let queue: Promise<unknown> = Promise.resolve();
async function local(): Promise<Database> {
  try {
    return JSON.parse(await fs.readFile(file(), 'utf8'));
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code !== 'ENOENT') throw error;
    return { forms: [], responses: [], plans: [] };
  }
}
export function configured() {
  return (
    demoMode() ||
    Boolean(
      process.env.SUPABASE_URL &&
        process.env.SUPABASE_SERVICE_ROLE_KEY &&
        process.env.ACTIVITY_FORMS_ADMIN_EMAILS,
    )
  );
}
export async function list<K extends keyof Collections>(
  collection: K,
  filter?: { column: 'id' | 'form_id' | 'share_id'; value: string },
): Promise<Collections[K][]> {
  if (demoMode()) {
    await queue;
    const db = await local();
    return db[collection].filter(
      (item) =>
        !filter ||
        (filter.column === 'id'
          ? item.id
          : filter.column === 'form_id'
            ? (item as FormResponse | TeamPlan).formId
            : (item as TeamPlan).shareId) === filter.value,
    );
  }
  if (!configured()) throw new Error('저장소 설정이 필요합니다.');
  const query = new URLSearchParams({
    select: 'document',
    order: collection === 'forms' ? 'updated_at.desc' : 'created_at.asc',
  });
  if (filter) query.set(filter.column, 'eq.' + filter.value);
  // Page through PostgREST's default row limit so exports and team assignment never silently truncate.
  const all: Collections[K][] = [];
  for (let offset = 0; ; offset += 500) {
    const res = await fetch(
      `${process.env.SUPABASE_URL}/rest/v1/${tables[collection]}?${query}`,
      {
        headers: {
          apikey: process.env.SUPABASE_SERVICE_ROLE_KEY!,
          Authorization: `Bearer ${process.env.SUPABASE_SERVICE_ROLE_KEY}`,
          Range: `${offset}-${offset + 499}`,
        },
        cache: 'no-store',
      },
    );
    if (!res.ok)
      throw new Error(
        '데이터를 불러오지 못했습니다. 저장소 설정을 확인해주세요.',
      );
    const rows: { document: Collections[K] }[] = await res.json();
    all.push(...rows.map((r) => r.document));
    if (rows.length < 500) return all;
  }
}
export async function save<K extends keyof Collections>(
  collection: K,
  item: Collections[K],
  insertOnly = false,
): Promise<void> {
  if (demoMode()) {
    const task = queue.then(async () => {
      const db = await local();
      const items = db[collection] as Collections[K][];
      const index = items.findIndex((x) => x.id === item.id);
      if (index >= 0 && insertOnly) return;
      if (index >= 0) items[index] = item;
      else items.push(item);
      await fs.mkdir(path.dirname(file()), { recursive: true });
      await fs.writeFile(file() + '.tmp', JSON.stringify(db), { mode: 0o600 });
      await fs.rename(file() + '.tmp', file());
    });
    queue = task.catch(() => undefined);
    return task;
  }
  if (!configured()) throw new Error('저장소 설정이 필요합니다.');
  const row = {
    id: item.id,
    document: item,
    ...(collection === 'forms'
      ? { updated_at: new Date().toISOString() }
      : { form_id: (item as FormResponse | TeamPlan).formId }),
    ...(collection === 'plans'
      ? { share_id: (item as TeamPlan).shareId || null }
      : {}),
  };
  const res = await fetch(
    `${process.env.SUPABASE_URL}/rest/v1/${tables[collection]}?on_conflict=id`,
    {
      method: 'POST',
      headers: {
        apikey: process.env.SUPABASE_SERVICE_ROLE_KEY!,
        Authorization: `Bearer ${process.env.SUPABASE_SERVICE_ROLE_KEY}`,
        'Content-Type': 'application/json',
        Prefer: `resolution=${insertOnly ? 'ignore' : 'merge'}-duplicates`,
      },
      body: JSON.stringify(row),
      cache: 'no-store',
    },
  );
  if (!res.ok) throw new Error('저장하지 못했습니다. 다시 시도해주세요.');
}
