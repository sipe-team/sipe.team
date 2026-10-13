export type QuestionType =
  | 'short'
  | 'long'
  | 'single'
  | 'multiple'
  | 'select'
  | 'rating'
  | 'date';
export interface Question {
  id: string;
  title: string;
  type: QuestionType;
  required: boolean;
  options: string[];
}
export interface ActivityForm {
  id: string;
  title: string;
  description: string;
  purpose: 'review' | 'teams';
  status: 'draft' | 'open' | 'closed';
  questions: Question[];
  updatedAt: string;
}
export type Answers = Record<string, string | string[]>;
export interface FormResponse {
  id: string;
  formId: string;
  answers: Answers;
  createdAt: string;
}
export interface Participant {
  id: string;
  name: string;
  attributes: Record<string, string>;
}
export interface AssignmentRules {
  teamSize: number;
  balanceBy: string[];
  together: [string, string][];
  apart: [string, string][];
}
export interface TeamPlan {
  id: string;
  formId: string;
  title: string;
  rows: number;
  columns: number;
  rules: AssignmentRules;
  teams: Participant[][];
  createdAt: string;
  shareId?: string;
}
export const questionTypes: Record<QuestionType, string> = {
  short: '단답형',
  long: '장문형',
  single: '객관식',
  multiple: '체크박스',
  select: '드롭다운',
  rating: '점수 (1–5)',
  date: '날짜',
};
export const uid = () => crypto.randomUUID();
export function createForm(purpose: ActivityForm['purpose']): ActivityForm {
  const question = (
    title: string,
    type: QuestionType,
    options: string[] = [],
  ): Question => ({ id: uid(), title, type, options, required: true });
  return {
    id: uid(),
    title: purpose === 'review' ? '오늘의 활동 후기' : '함께할 팀을 만들어요',
    description:
      purpose === 'review'
        ? '오늘의 경험을 들려주세요. 여러분의 이야기가 다음 활동을 만듭니다.'
        : '서로를 알아가는 첫걸음. 팀 배정을 위한 정보를 남겨주세요.',
    purpose,
    status: 'draft',
    updatedAt: new Date().toISOString(),
    questions:
      purpose === 'review'
        ? [
            question('이름', 'short'),
            question('오늘 활동은 어떠셨나요?', 'rating'),
            question('가장 기억에 남는 순간은?', 'long'),
            { ...question('다음 활동에 바라는 점', 'long'), required: false },
          ]
        : [
            question('이름', 'short'),
            question('직무', 'single', [
              '프론트엔드',
              '백엔드',
              '모바일',
              '디자인',
              '기타',
            ]),
            question('기수', 'select', [
              '1기',
              '2기',
              '3기',
              '4기',
              '5기',
              '6기',
            ]),
          ],
  };
}
export function validateAnswers(
  form: ActivityForm,
  answers: Answers,
): Record<string, string> {
  const errors: Record<string, string> = {};
  for (const q of form.questions) {
    const v = answers[q.id];
    const empty =
      v === undefined || (typeof v === 'string' ? !v.trim() : v.length === 0);
    if (empty) {
      if (q.required) errors[q.id] = '필수 질문에 답해주세요.';
      continue;
    }
    if (q.type === 'multiple') {
      if (
        !Array.isArray(v) ||
        v.some((x) => !q.options.includes(x)) ||
        new Set(v).size !== v.length
      )
        errors[q.id] = '선택지를 확인해주세요.';
    } else if (typeof v !== 'string' || v.length > 10000)
      errors[q.id] = '올바른 답변을 입력해주세요.';
    else if (['single', 'select'].includes(q.type) && !q.options.includes(v))
      errors[q.id] = '선택지를 확인해주세요.';
    else if (q.type === 'rating' && !/^[1-5]$/.test(v))
      errors[q.id] = '1~5점 중 선택해주세요.';
    else if (
      q.type === 'date' &&
      (!/^\d{4}-\d{2}-\d{2}$/.test(v) ||
        Number.isNaN(Date.parse(v)) ||
        new Date(v).toISOString().slice(0, 10) !== v)
    )
      errors[q.id] = '유효한 날짜를 입력해주세요.';
  }
  return errors;
}
export function validateForm(form: ActivityForm): string | null {
  if (!form.title?.trim() || form.title.length > 200)
    return '제목을 200자 이내로 입력해주세요.';
  if (
    !['review', 'teams'].includes(form.purpose) ||
    !['draft', 'open', 'closed'].includes(form.status)
  )
    return '폼 설정이 올바르지 않습니다.';
  if (typeof form.description !== 'string' || form.description.length > 5000)
    return '설명은 5,000자 이내로 입력해주세요.';
  if (
    !Array.isArray(form.questions) ||
    !form.questions.length ||
    form.questions.length > 50
  )
    return '질문은 1~50개까지 만들 수 있습니다.';
  if (new Set(form.questions.map((q) => q.id)).size !== form.questions.length)
    return '중복된 질문이 있습니다.';
  for (const q of form.questions) {
    if (
      !q.id ||
      typeof q.title !== 'string' ||
      !q.title.trim() ||
      q.title.length > 500 ||
      !Object.hasOwn(questionTypes, q.type) ||
      typeof q.required !== 'boolean'
    )
      return '질문 제목과 종류를 확인해주세요.';
    if (
      !Array.isArray(q.options) ||
      q.options.length > 50 ||
      q.options.some((o) => typeof o !== 'string' || o.length > 300)
    )
      return '선택지를 확인해주세요.';
    if (
      ['single', 'multiple', 'select'].includes(q.type) &&
      (q.options.length < 2 ||
        q.options.some((o) => !o.trim()) ||
        new Set(q.options).size !== q.options.length)
    )
      return '선택형 질문에는 서로 다른 선택지가 2개 이상 필요합니다.';
  }
  return null;
}
export function responseCsv(
  form: ActivityForm,
  responses: FormResponse[],
): string {
  const cell = (v: string) =>
    '"' + (/^[=+\-@\t\r]/.test(v) ? "'" + v : v).replaceAll('"', '""') + '"';
  return (
    '\uFEFF' +
    [
      ['제출 시각', ...form.questions.map((q) => q.title)],
      ...responses.map((r) => [
        r.createdAt,
        ...form.questions.map((q) =>
          Array.isArray(r.answers[q.id])
            ? (r.answers[q.id] as string[]).join(', ')
            : ((r.answers[q.id] || '') as string),
        ),
      ]),
    ]
      .map((row) => row.map(cell).join(','))
      .join('\r\n')
  );
}
