'use client';

import { useEffect, useState } from 'react';

import type { Route } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { api, download } from './api';
import { assignTeams } from './assignment';
import {
  ActivityForm,
  Answers,
  AssignmentRules,
  createForm,
  FormResponse,
  Participant,
  Question,
  QuestionType,
  questionTypes,
  responseCsv,
  TeamPlan,
  uid,
  validateAnswers,
  validateForm,
} from './model';

import styles from './forms.module.scss';

const url = (p = '') => ('/forms' + p) as Route;
const statusText = {
  draft: '임시저장',
  open: '응답 받는 중',
  closed: '응답 마감',
};
function Notice({ children }: { children: React.ReactNode }) {
  return (
    <p role="status" className={styles.notice}>
      {children}
    </p>
  );
}
function ErrorMessage({ message }: { message: string }) {
  return message ? (
    <p className={styles.error} role="alert">
      {message}
    </p>
  ) : null;
}
function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className={styles.field}>
      <span>{label}</span>
      {children}
    </label>
  );
}
function Intro({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div className={styles.intro}>
      <p className={styles.eyebrow}>{eyebrow}</p>
      <h1>{title}</h1>
      {children && <p>{children}</p>}
    </div>
  );
}

export default function FormWorkspace({ path }: { path: string[] }) {
  const [session, setSession] = useState<{
    admin: boolean;
    demo: boolean;
    configured: boolean;
  }>();
  const [error, setError] = useState('');
  const publicPage = path[0] === 'respond' || path[0] === 'shared';
  useEffect(() => {
    api<{ admin: boolean; demo: boolean; configured: boolean }>('session')
      .then(setSession)
      .catch((e) => setError(e.message));
  }, []);
  return (
    <div className={styles.app} data-activity-forms>
      <header className={styles.header}>
        <Link href={url()} className={styles.brand}>
          sipe<span>forms</span>
          <i />
        </Link>
        <span className={styles.headerCaption}>작은 기록, 더 좋은 연결.</span>
        {session?.admin && !publicPage && (
          <button
            onClick={async () => {
              await api('logout', {});
              location.reload();
            }}
            className={styles.ghost}
          >
            로그아웃
          </button>
        )}
      </header>
      <main className={styles.workspace}>
        {session?.demo && (
          <Notice>
            로컬 체험 모드 · 이 서버에만 저장됩니다. 운영 배포에서는 활성화되지
            않습니다.
          </Notice>
        )}
        <ErrorMessage message={error} />
        {!session ? (
          <Notice>불러오는 중…</Notice>
        ) : !session.configured ? (
          <Intro eyebrow="SETUP" title="아직 준비 중이에요">
            폼 저장소를 연결한 뒤 이용할 수 있습니다.
          </Intro>
        ) : publicPage ? (
          path[0] === 'respond' ? (
            <Respond key={path[1]} id={path[1]} />
          ) : (
            <Shared key={path[1]} id={path[1]} />
          )
        ) : !session.admin ? (
          <Login onLogin={() => setSession({ ...session, admin: true })} />
        ) : path[0] === 'new' ? (
          <Editor purpose={path[1] === 'teams' ? 'teams' : 'review'} />
        ) : path[0] === 'edit' ? (
          <Editor key={path[1]} id={path[1]} />
        ) : path[0] === 'results' ? (
          <Results key={path[1]} id={path[1]} />
        ) : (
          <Dashboard />
        )}
      </main>
      <footer className={styles.footer}>
        SIPE · 함께 배우고, 함께 자라는 시간
      </footer>
    </div>
  );
}
function Login({ onLogin }: { onLogin: () => void }) {
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);
  return (
    <div className={styles.narrow}>
      <Intro eyebrow="FOR ORGANIZERS" title="다시 만나 반가워요">
        운영진 계정으로 폼과 활동 기록을 관리하세요.
      </Intro>
      <form
        className={styles.card}
        onSubmit={async (e) => {
          e.preventDefault();
          const data = new FormData(e.currentTarget);
          setBusy(true);
          setError('');
          try {
            await api('login', {
              email: data.get('email'),
              password: data.get('password'),
            });
            onLogin();
          } catch (e) {
            setError((e as Error).message);
          } finally {
            setBusy(false);
          }
        }}
      >
        <Field label="이메일">
          <input type="email" name="email" autoComplete="username" required />
        </Field>
        <Field label="비밀번호">
          <input
            type="password"
            name="password"
            autoComplete="current-password"
            required
          />
        </Field>
        <ErrorMessage message={error} />
        <button className={styles.primary} disabled={busy}>
          {busy ? '로그인 중…' : '로그인'}
        </button>
      </form>
    </div>
  );
}
function Dashboard() {
  const [forms, setForms] = useState<ActivityForm[]>();
  const [error, setError] = useState('');
  useEffect(() => {
    api<ActivityForm[]>('forms')
      .then(setForms)
      .catch((e) => setError(e.message));
  }, []);
  return (
    <>
      <Intro eyebrow="ACTIVITY WORKSPACE" title="함께한 순간을, 다음 연결로.">
        활동의 이야기를 모으고, 새로운 팀을 만나보세요.
      </Intro>
      <div className={styles.templates}>
        <Link href={url('/new/review')} className={styles.template}>
          <span className={styles.icon}>✎</span>
          <div>
            <small>RECORD</small>
            <h2>활동 후기 기록</h2>
            <p>오늘의 경험이 다음 활동의 시작이 돼요.</p>
          </div>
          <b>↗</b>
        </Link>
        <Link href={url('/new/teams')} className={styles.template}>
          <span className={styles.icon}>⊞</span>
          <div>
            <small>CONNECT</small>
            <h2>팀 배정</h2>
            <p>서로 다른 우리가, 함께할 수 있도록.</p>
          </div>
          <b>↗</b>
        </Link>
      </div>
      <div className={styles.sectionHeading}>
        <h2>
          내 활동 폼 <span>{forms?.length || 0}</span>
        </h2>
        <p>기록부터 배정까지 한곳에서</p>
      </div>
      <ErrorMessage message={error} />
      {!forms ? (
        <Notice>폼을 불러오는 중…</Notice>
      ) : !forms.length ? (
        <div className={styles.empty}>
          <span>＋</span>
          <h3>첫 활동을 시작해볼까요?</h3>
          <p>위에서 템플릿을 선택하면 질문이 준비돼요.</p>
        </div>
      ) : (
        <div className={styles.formList}>
          {forms.map((f) => (
            <article className={styles.listCard} key={f.id}>
              <span className={styles.badge} data-status={f.status}>
                {statusText[f.status]}
              </span>
              <h3>{f.title}</h3>
              <p>{f.description}</p>
              <small>
                {new Date(f.updatedAt).toLocaleDateString('ko-KR')} ·{' '}
                {f.purpose === 'teams' ? '팀 배정' : '활동 후기'}
              </small>
              <div className={styles.actions}>
                <Link href={url('/edit/' + f.id)}>질문 편집 ↗</Link>
                <Link href={url('/results/' + f.id)}>응답·결과 →</Link>
              </div>
            </article>
          ))}
        </div>
      )}
    </>
  );
}
function Editor({
  id,
  purpose = 'review',
}: {
  id?: string;
  purpose?: ActivityForm['purpose'];
}) {
  const router = useRouter();
  const [form, setForm] = useState<ActivityForm>();
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [busy, setBusy] = useState(false);
  const [locked, setLocked] = useState(false);
  useEffect(() => {
    if (id) {
      api<ActivityForm>('form', undefined, id)
        .then(setForm)
        .catch((e) => setError(e.message));
      api<FormResponse[]>('responses', undefined, id)
        .then((r) => setLocked(r.length > 0))
        .catch((e) => setError(e.message));
    } else setForm(createForm(purpose));
  }, [id, purpose]);
  const update = (patch: Partial<ActivityForm>) => {
    setForm((f) => f && { ...f, ...patch });
    setMessage('변경 사항을 저장해주세요.');
  };
  const question = (index: number, patch: Partial<Question>) =>
    form &&
    update({
      questions: form.questions.map((q, i) =>
        i === index ? { ...q, ...patch } : q,
      ),
    });
  async function persist(status: ActivityForm['status']) {
    if (!form) return;
    setError('');
    const next = { ...form, status };
    const error = validateForm(next);
    if (error) {
      setError(error);
      return;
    }
    setBusy(true);
    try {
      await api('saveForm', { form: next });
      setForm(next);
      setMessage(
        status === 'open'
          ? '공개했습니다. 응답 링크를 공유하세요.'
          : '저장했습니다.',
      );
      if (!id) router.replace(url('/edit/' + form.id));
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setBusy(false);
    }
  }
  async function duplicate() {
    if (!form) return;
    const copy = {
      ...form,
      id: uid(),
      title: form.title + ' (복사)',
      status: 'draft',
    };
    try {
      await api('saveForm', { form: copy });
      router.push(url('/edit/' + copy.id));
    } catch (e) {
      setError((e as Error).message);
    }
  }
  return (
    <>
      <Link className={styles.back} href={url()}>
        ← 모든 폼
      </Link>
      <Intro eyebrow="FORM BUILDER" title="어떤 이야기를 나눌까요?">
        질문을 만들고, 링크 하나로 이야기를 모으세요.
      </Intro>
      <ErrorMessage message={error} />
      {!form ? (
        <Notice>불러오는 중…</Notice>
      ) : (
        <div className={styles.editorLayout}>
          <div>
            <section className={styles.card}>
              <Field label="폼 제목">
                <input
                  value={form.title}
                  maxLength={200}
                  onChange={(e) => update({ title: e.target.value })}
                />
              </Field>
              <Field label="소개 문구">
                <textarea
                  value={form.description}
                  maxLength={5000}
                  rows={3}
                  onChange={(e) => update({ description: e.target.value })}
                />
              </Field>
            </section>
            {locked && (
              <Notice>
                응답이 모인 폼의 질문은 보호됩니다. 새로운 질문은 폼을 복제해서
                작성하세요.
              </Notice>
            )}
            {form.questions.map((q, i) => (
              <section className={styles.card} key={q.id}>
                <div className={styles.questionHead}>
                  <span>QUESTION {String(i + 1).padStart(2, '0')}</span>
                  <div className={styles.actions}>
                    <button
                      disabled={locked || i === 0}
                      aria-label={`${i + 1}번 질문 위로 이동`}
                      onClick={() => {
                        const a = [...form.questions];
                        [a[i - 1], a[i]] = [a[i], a[i - 1]];
                        update({ questions: a });
                      }}
                    >
                      ↑
                    </button>
                    <button
                      disabled={locked || i === form.questions.length - 1}
                      aria-label={`${i + 1}번 질문 아래로 이동`}
                      onClick={() => {
                        const a = [...form.questions];
                        [a[i + 1], a[i]] = [a[i], a[i + 1]];
                        update({ questions: a });
                      }}
                    >
                      ↓
                    </button>
                    <button
                      disabled={locked || form.questions.length === 1}
                      onClick={() =>
                        update({
                          questions: form.questions.filter(
                            (x) => x.id !== q.id,
                          ),
                        })
                      }
                    >
                      삭제
                    </button>
                  </div>
                </div>
                <Field label="질문">
                  <input
                    disabled={locked}
                    value={q.title}
                    maxLength={500}
                    onChange={(e) => question(i, { title: e.target.value })}
                  />
                </Field>
                <div className={styles.inline}>
                  <Field label="질문 종류">
                    <select
                      disabled={locked}
                      value={q.type}
                      onChange={(e) =>
                        question(i, {
                          type: e.target.value as QuestionType,
                          options: q.options.length
                            ? q.options
                            : ['선택지 1', '선택지 2'],
                        })
                      }
                    >
                      {Object.entries(questionTypes).map(([v, label]) => (
                        <option value={v} key={v}>
                          {label}
                        </option>
                      ))}
                    </select>
                  </Field>
                  <label className={styles.check}>
                    <input
                      type="checkbox"
                      disabled={locked}
                      checked={q.required}
                      onChange={(e) =>
                        question(i, { required: e.target.checked })
                      }
                    />
                    필수 응답
                  </label>
                </div>
                {['single', 'multiple', 'select'].includes(q.type) && (
                  <Field label="선택지 (한 줄에 하나씩)">
                    <textarea
                      disabled={locked}
                      rows={Math.min(q.options.length + 1, 8)}
                      value={q.options.join('\n')}
                      onChange={(e) =>
                        question(i, { options: e.target.value.split('\n') })
                      }
                    />
                  </Field>
                )}
              </section>
            ))}
            <button
              className={styles.add}
              disabled={locked || form.questions.length >= 50}
              onClick={() =>
                update({
                  questions: [
                    ...form.questions,
                    {
                      id: uid(),
                      title: '',
                      type: 'short',
                      required: false,
                      options: [],
                    },
                  ],
                })
              }
            >
              ＋ 질문 추가
            </button>
          </div>
          <aside className={styles.sidebar}>
            <div className={styles.card}>
              <span className={styles.badge} data-status={form.status}>
                {statusText[form.status]}
              </span>
              <h3>준비되면 공유하세요</h3>
              <p>임시저장한 폼은 운영진만 볼 수 있어요.</p>
              <button
                className={styles.secondary}
                disabled={busy}
                onClick={() => persist(form.status)}
              >
                변경 사항 저장
              </button>
              <button
                className={styles.primary}
                disabled={busy}
                onClick={() =>
                  persist(form.status === 'open' ? 'closed' : 'open')
                }
              >
                {form.status === 'open'
                  ? '응답 마감하기'
                  : '공개하고 응답 받기'}
              </button>
              {id && (
                <>
                  <Link
                    className={styles.secondary}
                    href={url('/respond/' + id)}
                  >
                    응답 화면 미리보기
                  </Link>
                  <Link
                    className={styles.secondary}
                    href={url('/results/' + id)}
                  >
                    응답·팀 배정 보기
                  </Link>
                  <button className={styles.ghost} onClick={duplicate}>
                    폼 복제
                  </button>
                  {form.status !== 'draft' && (
                    <button
                      className={styles.ghost}
                      onClick={async () => {
                        try {
                          await navigator.clipboard.writeText(
                            location.origin + '/forms/respond/' + id,
                          );
                          setMessage('응답 링크를 복사했습니다.');
                        } catch {
                          setError(
                            '링크를 복사하지 못했습니다. 응답 화면 주소를 복사해주세요.',
                          );
                        }
                      }}
                    >
                      응답 링크 복사
                    </button>
                  )}
                </>
              )}
              {message && <Notice>{message}</Notice>}
            </div>
          </aside>
        </div>
      )}
    </>
  );
}
function QuestionInput({
  q,
  value,
  onChange,
}: {
  q: Question;
  value?: string | string[];
  onChange: (v: string | string[]) => void;
}) {
  const key = 'answer-' + q.id;
  if (q.type === 'long')
    return (
      <textarea
        id={key}
        aria-label={q.title}
        rows={4}
        value={typeof value === 'string' ? value : ''}
        maxLength={10000}
        onChange={(e) => onChange(e.target.value)}
      />
    );
  if (q.type === 'single' || q.type === 'multiple' || q.type === 'rating')
    return (
      <div className={q.type === 'rating' ? styles.ratings : styles.choices}>
        {(q.type === 'rating' ? ['1', '2', '3', '4', '5'] : q.options).map(
          (option) => (
            <label key={option} className={styles.choice}>
              <input
                type={q.type === 'multiple' ? 'checkbox' : 'radio'}
                name={q.id}
                value={option}
                checked={
                  Array.isArray(value)
                    ? value.includes(option)
                    : value === option
                }
                onChange={(e) =>
                  onChange(
                    q.type === 'multiple'
                      ? e.target.checked
                        ? [...(Array.isArray(value) ? value : []), option]
                        : (Array.isArray(value) ? value : []).filter(
                            (v) => v !== option,
                          )
                      : option,
                  )
                }
              />
              <span>{option}</span>
            </label>
          ),
        )}
      </div>
    );
  if (q.type === 'select')
    return (
      <select
        id={key}
        aria-label={q.title}
        value={typeof value === 'string' ? value : ''}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">선택해주세요</option>
        {q.options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    );
  return (
    <input
      id={key}
      aria-label={q.title}
      type={q.type === 'date' ? 'date' : 'text'}
      value={typeof value === 'string' ? value : ''}
      maxLength={10000}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
function Respond({ id }: { id: string }) {
  const [form, setForm] = useState<ActivityForm>();
  const [answers, setAnswers] = useState<Answers>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [error, setError] = useState('');
  const [notice, setNotice] = useState('');
  const [done, setDone] = useState(false);
  const [busy, setBusy] = useState(false);
  const [responseId] = useState(uid);
  useEffect(() => {
    api<ActivityForm>('form', undefined, id)
      .then(setForm)
      .catch((e) => setError(e.message));
  }, [id]);
  const draftKey = 'sipe-form-answer:' + id;
  if (done)
    return (
      <div className={styles.success}>
        <span>✓</span>
        <Intro eyebrow="THANK YOU" title="소중한 기록, 잘 받았어요.">
          함께 나눈 이야기가 다음 만남을 더 좋게 만들 거예요.
        </Intro>
        <p>창을 닫아도 괜찮아요.</p>
      </div>
    );
  return (
    <div className={styles.narrow}>
      <ErrorMessage message={error} />
      {!form ? (
        !error && <Notice>폼을 불러오는 중…</Notice>
      ) : (
        <>
          <Intro
            eyebrow={
              form.purpose === 'review'
                ? 'YOUR EXPERIENCE MATTERS'
                : 'MEET YOUR TEAM'
            }
            title={form.title}
          >
            {form.description}
          </Intro>
          {form.status !== 'open' ? (
            <Notice>
              {form.status === 'draft'
                ? '미리보기입니다. 공개 후 응답을 제출할 수 있어요.'
                : '응답이 마감되었습니다.'}
            </Notice>
          ) : (
            <p className={styles.muted}>
              별표(*)는 필수 질문입니다. 응답은 운영진만 확인할 수 있어요.
            </p>
          )}
          <form
            noValidate
            onSubmit={async (e) => {
              e.preventDefault();
              const errors = validateAnswers(form, answers);
              setErrors(errors);
              if (Object.keys(errors).length) {
                document
                  .getElementById('question-' + Object.keys(errors)[0])
                  ?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                return;
              }
              setBusy(true);
              setError('');
              try {
                await api('submit', { formId: id, id: responseId, answers });
                try {
                  localStorage.removeItem(draftKey);
                } catch {
                  /* Submission already succeeded. */
                }
                setDone(true);
              } catch (e) {
                setError((e as Error).message);
              } finally {
                setBusy(false);
              }
            }}
          >
            {form.questions.map((q, i) => (
              <fieldset
                className={styles.card}
                key={q.id}
                id={'question-' + q.id}
              >
                <legend>
                  {String(i + 1).padStart(2, '0')}{' '}
                  <span>
                    {q.title} {q.required && <em>*</em>}
                  </span>
                </legend>
                <QuestionInput
                  q={q}
                  value={answers[q.id]}
                  onChange={(v) => setAnswers((a) => ({ ...a, [q.id]: v }))}
                />
                {q.type === 'rating' && (
                  <div className={styles.ratingLabels}>
                    <span>아쉬워요</span>
                    <span>아주 좋아요</span>
                  </div>
                )}
                <ErrorMessage message={errors[q.id]} />
              </fieldset>
            ))}
            <div className={styles.actions}>
              <button
                type="button"
                className={styles.secondary}
                onClick={() => {
                  try {
                    localStorage.setItem(draftKey, JSON.stringify(answers));
                    setNotice(
                      '이 기기에 임시저장했습니다. 공용 기기에서는 사용 후 지워주세요.',
                    );
                  } catch {
                    setError('이 기기에 임시저장할 수 없습니다.');
                  }
                }}
              >
                임시저장
              </button>
              <button
                type="button"
                className={styles.ghost}
                onClick={() => {
                  try {
                    const saved = localStorage.getItem(draftKey);
                    if (saved) {
                      setAnswers(JSON.parse(saved));
                      setNotice('임시 응답을 불러왔습니다.');
                    } else setNotice('저장된 임시 응답이 없습니다.');
                  } catch {
                    setError('저장된 응답을 불러오지 못했습니다.');
                  }
                }}
              >
                불러오기
              </button>
              <button
                className={styles.primary}
                disabled={busy || form.status !== 'open'}
              >
                {busy ? '제출 중…' : '응답 제출 →'}
              </button>
            </div>
            {notice && <Notice>{notice}</Notice>}
          </form>
        </>
      )}
    </div>
  );
}
function Results({ id }: { id: string }) {
  const [form, setForm] = useState<ActivityForm>();
  const [responses, setResponses] = useState<FormResponse[]>([]);
  const [tab, setTab] = useState<'summary' | 'responses' | 'teams'>('summary');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const load = async () => {
    setLoading(true);
    setError('');
    try {
      const [f, r] = await Promise.all([
        api<ActivityForm>('form', undefined, id),
        api<FormResponse[]>('responses', undefined, id),
      ]);
      setForm(f);
      setResponses(r);
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    void load(); /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, [id]);
  return (
    <>
      <Link href={url()} className={styles.back}>
        ← 모든 폼
      </Link>
      <ErrorMessage message={error} />
      {!form ? (
        loading && <Notice>불러오는 중…</Notice>
      ) : (
        <>
          <Intro eyebrow="RESPONSES & CONNECTIONS" title={form.title}>
            쌓인 이야기를 살펴보고, 다음 만남을 준비하세요.
          </Intro>
          <div className={styles.resultTop}>
            <div>
              <strong>{responses.length}</strong>
              <span>개의 응답</span>
            </div>
            <div className={styles.actions}>
              <button
                className={styles.secondary}
                disabled={loading}
                onClick={load}
              >
                새로고침
              </button>
              <button
                className={styles.secondary}
                onClick={() =>
                  download(form.title + '.csv', responseCsv(form, responses))
                }
              >
                CSV 다운로드 ↓
              </button>
              <Link className={styles.ghost} href={url('/edit/' + id)}>
                폼 편집
              </Link>
            </div>
          </div>
          <nav className={styles.tabs} aria-label="결과 보기">
            {(
              [
                ['summary', '응답 요약'],
                ['responses', '개별 응답'],
                ['teams', '팀·좌석 배정'],
              ] as const
            ).map(([v, label]) => (
              <button
                key={v}
                aria-current={tab === v ? 'page' : undefined}
                onClick={() => setTab(v)}
              >
                {label}
              </button>
            ))}
          </nav>
          {tab === 'summary' &&
            (!responses.length ? (
              <div className={styles.empty}>
                <h3>아직 응답이 없어요</h3>
                <p>폼을 공개하고 응답 링크를 공유해보세요.</p>
              </div>
            ) : (
              <div className={styles.summaryGrid}>
                {form.questions.map((q) => {
                  const values = responses.flatMap((r) =>
                    r.answers[q.id] === undefined
                      ? []
                      : Array.isArray(r.answers[q.id])
                        ? (r.answers[q.id] as string[])
                        : [r.answers[q.id] as string],
                  );
                  const choice = [
                    'single',
                    'multiple',
                    'select',
                    'rating',
                  ].includes(q.type);
                  return (
                    <section key={q.id} className={styles.card}>
                      <h3>{q.title}</h3>
                      <p className={styles.muted}>
                        {
                          responses.filter((r) => r.answers[q.id]?.length)
                            .length
                        }
                        명 응답
                      </p>
                      {choice ? (
                        (q.type === 'rating'
                          ? ['1', '2', '3', '4', '5']
                          : q.options
                        ).map((v) => {
                          const count = values.filter((x) => x === v).length;
                          return (
                            <div className={styles.barRow} key={v}>
                              <span>{v}</span>
                              <div>
                                <i
                                  style={{
                                    width: `${(count / responses.length) * 100}%`,
                                  }}
                                />
                              </div>
                              <b>{count}</b>
                            </div>
                          );
                        })
                      ) : (
                        <ul className={styles.answerList}>
                          {values.slice(0, 5).map((v, i) => (
                            <li key={i}>{v}</li>
                          ))}
                          {values.length > 5 && (
                            <li>나머지는 개별 응답에서 확인하세요.</li>
                          )}
                        </ul>
                      )}
                    </section>
                  );
                })}
              </div>
            ))}
          {tab === 'responses' && (
            <div className={styles.formList}>
              {responses.map((r, i) => (
                <section className={styles.card} key={r.id}>
                  <div className={styles.questionHead}>
                    <span>응답 {i + 1}</span>
                    <time>{new Date(r.createdAt).toLocaleString('ko-KR')}</time>
                  </div>
                  {form.questions.map((q) => (
                    <div className={styles.answer} key={q.id}>
                      <h4>{q.title}</h4>
                      <p>
                        {Array.isArray(r.answers[q.id])
                          ? (r.answers[q.id] as string[]).join(', ')
                          : r.answers[q.id] || '—'}
                      </p>
                    </div>
                  ))}
                </section>
              ))}
              {!responses.length && <Notice>아직 응답이 없습니다.</Notice>}
            </div>
          )}
          {tab === 'teams' && <TeamBuilder form={form} responses={responses} />}
        </>
      )}
    </>
  );
}
function Seating({
  plan,
}: {
  plan: Pick<TeamPlan, 'rows' | 'columns' | 'teams'>;
}) {
  return (
    <div className={styles.seatingScroll}>
      <div
        className={styles.seating}
        style={{
          gridTemplateColumns: `repeat(${plan.columns}, minmax(150px, 1fr))`,
        }}
      >
        {Array.from({ length: plan.rows * plan.columns }, (_, i) => (
          <div
            key={i}
            className={styles.table}
            data-empty={!plan.teams[i]?.length}
          >
            <span>{i + 1}번 테이블</span>
            {plan.teams[i]?.length ? (
              <>
                <h3>
                  {i + 1}조 <small>{plan.teams[i].length}명</small>
                </h3>
                <ul>
                  {plan.teams[i].map((p) => (
                    <li key={p.id}>{p.name}</li>
                  ))}
                </ul>
              </>
            ) : (
              <p>빈 테이블</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
function TeamBuilder({
  form,
  responses,
}: {
  form: ActivityForm;
  responses: FormResponse[];
}) {
  const [nameKey, setNameKey] = useState(
    form.questions.find((q) => q.title.includes('이름'))?.id ||
      form.questions[0].id,
  );
  const [rules, setRules] = useState<AssignmentRules>({
    teamSize: 5,
    balanceBy: [],
    together: [],
    apart: [],
  });
  const [rows, setRows] = useState(3);
  const [columns, setColumns] = useState(3);
  const [plan, setPlan] = useState<TeamPlan>();
  const [saved, setSaved] = useState<TeamPlan[]>([]);
  const [error, setError] = useState('');
  const [notice, setNotice] = useState('');
  const [busy, setBusy] = useState(false);
  const [pairA, setPairA] = useState('');
  const [pairB, setPairB] = useState('');
  const [relation, setRelation] = useState<'together' | 'apart'>('apart');
  const [attempt, setAttempt] = useState(0);
  const people: Participant[] = responses.map((r, i) => ({
    id: r.id,
    name: String(r.answers[nameKey] || `참가자 ${i + 1}`),
    attributes: Object.fromEntries(
      form.questions.map((q) => [q.id, String(r.answers[q.id] || '')]),
    ),
  }));
  useEffect(() => {
    api<TeamPlan[]>('plans', undefined, form.id)
      .then(setSaved)
      .catch((e) => setError(e.message));
  }, [form.id]);
  function generate() {
    setError('');
    setNotice('');
    try {
      if (
        !Number.isInteger(rows) ||
        !Number.isInteger(columns) ||
        rows < 1 ||
        columns < 1 ||
        rows > 20 ||
        columns > 20
      )
        throw new Error('행·열은 1~20으로 입력해주세요.');
      const { teams } = assignTeams(people, rules);
      if (teams.length > rows * columns)
        throw new Error(
          `${teams.length}개 조를 배치하려면 테이블 수를 늘려주세요.`,
        );
      setPlan({
        id: uid(),
        formId: form.id,
        title: form.title + ' · 팀 배정',
        rows,
        columns,
        rules: structuredClone(rules),
        teams,
        createdAt: new Date().toISOString(),
      });
      setAttempt((n) => n + 1);
      setNotice('새 배정입니다. 저장하기 전까지 기존 저장 결과는 유지돼요.');
    } catch (e) {
      setError((e as Error).message);
    }
  }
  async function store(share: boolean, revoke = false) {
    if (!plan) return;
    setError('');
    setBusy(true);
    const next = {
      ...plan,
      ...(share ? { shareId: plan.shareId || uid() } : {}),
      ...(revoke ? { shareId: undefined } : {}),
    };
    try {
      await api('savePlan', { plan: next });
      setPlan(next);
      setSaved((s) => [next, ...s.filter((p) => p.id !== next.id)]);
      setNotice(
        revoke
          ? '공유를 종료했습니다. 기존 링크는 더 이상 열리지 않습니다.'
          : share
            ? '공유 링크를 만들었습니다. 이름과 배치만 공개됩니다.'
            : '배정을 저장했습니다. 언제든 불러올 수 있어요.',
      );
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setBusy(false);
    }
  }
  return (
    <div className={styles.teamLayout}>
      <aside>
        <section className={styles.card}>
          <h3>배정 조건</h3>
          <Field label="이름으로 표시할 질문">
            <select
              value={nameKey}
              onChange={(e) => setNameKey(e.target.value)}
            >
              {form.questions
                .filter((q) => ['short', 'long'].includes(q.type))
                .map((q) => (
                  <option value={q.id} key={q.id}>
                    {q.title}
                  </option>
                ))}
            </select>
          </Field>
          <Field label="조별 최대 인원">
            <input
              type="number"
              min={1}
              max={30}
              value={rules.teamSize}
              onChange={(e) =>
                setRules({ ...rules, teamSize: Number(e.target.value) })
              }
            />
          </Field>
          <div className={styles.inline}>
            <Field label="테이블 행">
              <input
                type="number"
                min={1}
                max={20}
                value={rows}
                onChange={(e) => setRows(Number(e.target.value))}
              />
            </Field>
            <Field label="테이블 열">
              <input
                type="number"
                min={1}
                max={20}
                value={columns}
                onChange={(e) => setColumns(Number(e.target.value))}
              />
            </Field>
          </div>
          <p className={styles.muted}>
            테이블 하나에 한 조를 배치합니다. 작은 화면에서는 좌우로
            스크롤하세요.
          </p>
          <h4>고르게 섞을 항목</h4>
          {form.questions
            .filter((q) => ['single', 'select'].includes(q.type))
            .map((q) => (
              <label className={styles.check} key={q.id}>
                <input
                  type="checkbox"
                  checked={rules.balanceBy.includes(q.id)}
                  onChange={(e) =>
                    setRules({
                      ...rules,
                      balanceBy: e.target.checked
                        ? [...rules.balanceBy, q.id]
                        : rules.balanceBy.filter((k) => k !== q.id),
                    })
                  }
                />
                {q.title}
              </label>
            ))}
          <p className={styles.muted}>
            균등 분배는 가능한 범위에서 적용합니다. 같은 조·다른 조 조건과 최대
            인원을 먼저 지킵니다.
          </p>
          <details>
            <summary>같은 조·다른 조 조건</summary>
            <Field label="참가자 A">
              <select value={pairA} onChange={(e) => setPairA(e.target.value)}>
                <option value="">선택</option>
                {people.map((p, i) => (
                  <option key={p.id} value={p.id}>
                    {p.name} (응답 {i + 1})
                  </option>
                ))}
              </select>
            </Field>
            <Field label="참가자 B">
              <select value={pairB} onChange={(e) => setPairB(e.target.value)}>
                <option value="">선택</option>
                {people.map((p, i) => (
                  <option key={p.id} value={p.id}>
                    {p.name} (응답 {i + 1})
                  </option>
                ))}
              </select>
            </Field>
            <Field label="관계">
              <select
                value={relation}
                onChange={(e) =>
                  setRelation(e.target.value as 'together' | 'apart')
                }
              >
                <option value="apart">다른 조</option>
                <option value="together">같은 조</option>
              </select>
            </Field>
            <button
              className={styles.secondary}
              disabled={
                !pairA ||
                !pairB ||
                pairA === pairB ||
                rules[relation].length >= 100
              }
              onClick={() => {
                if (
                  !rules[relation].some(
                    ([a, b]) =>
                      (a === pairA && b === pairB) ||
                      (a === pairB && b === pairA),
                  )
                )
                  setRules({
                    ...rules,
                    [relation]: [...rules[relation], [pairA, pairB]],
                  });
              }}
            >
              조건 추가
            </button>
            {(['together', 'apart'] as const).flatMap((type) =>
              rules[type].map(([a, b], i) => (
                <div className={styles.rule} key={type + i}>
                  <span>
                    {people.find((p) => p.id === a)?.name} ·{' '}
                    {people.find((p) => p.id === b)?.name}
                    <small>{type === 'together' ? '같은 조' : '다른 조'}</small>
                  </span>
                  <button
                    aria-label="조건 삭제"
                    onClick={() =>
                      setRules({
                        ...rules,
                        [type]: rules[type].filter((_, index) => index !== i),
                      })
                    }
                  >
                    ×
                  </button>
                </div>
              )),
            )}
          </details>
          <button
            className={styles.primary}
            disabled={!people.length || busy}
            onClick={generate}
          >
            ⤨ {attempt ? '다시 랜덤 배정' : '랜덤 배정하기'}
          </button>
          <p className={styles.muted}>
            {people.length}명 · {attempt}회 배정
          </p>
        </section>
        <section className={styles.card}>
          <h3>저장한 배정</h3>
          {saved.length ? (
            saved.map((p) => (
              <button
                key={p.id}
                className={styles.savedPlan}
                onClick={() => {
                  setPlan(p);
                  setRules(p.rules);
                  setRows(p.rows);
                  setColumns(p.columns);
                  setNotice('저장한 배정을 불러왔습니다.');
                }}
              >
                {p.title}
                <small>
                  {new Date(p.createdAt).toLocaleString('ko-KR')} ·{' '}
                  {p.teams.length}개 조
                </small>
              </button>
            ))
          ) : (
            <p className={styles.muted}>저장한 배정이 여기에 표시돼요.</p>
          )}
        </section>
      </aside>
      <div>
        <ErrorMessage message={error} />
        {notice && <Notice>{notice}</Notice>}
        {!plan ? (
          <div className={styles.empty}>
            <span>⊞</span>
            <h3>새로운 연결이 시작되는 자리</h3>
            <p>배정 조건을 선택하고 랜덤 배정을 눌러보세요.</p>
          </div>
        ) : (
          <>
            <div className={styles.card}>
              <Field label="배정 이름">
                <input
                  maxLength={200}
                  value={plan.title}
                  onChange={(e) => setPlan({ ...plan, title: e.target.value })}
                />
              </Field>
              <div className={styles.actions}>
                <button
                  className={styles.secondary}
                  disabled={busy}
                  onClick={() => store(false)}
                >
                  배정 임시저장
                </button>
                <button
                  className={styles.primary}
                  disabled={busy}
                  onClick={() => store(true)}
                >
                  저장 후 공유
                </button>
              </div>
              {plan.shareId && (
                <div className={styles.shareBox}>
                  <p>
                    링크를 받은 사람은 참가자 이름과 좌석 배치를 볼 수 있어요.
                  </p>
                  <Link target="_blank" href={url('/shared/' + plan.shareId)}>
                    공유 페이지 열기 ↗
                  </Link>
                  <button
                    className={styles.ghost}
                    onClick={async () => {
                      try {
                        await navigator.clipboard.writeText(
                          location.origin + '/forms/shared/' + plan.shareId,
                        );
                        setNotice('공유 링크를 복사했습니다.');
                      } catch {
                        setError('공유 페이지에서 주소를 복사해주세요.');
                      }
                    }}
                  >
                    링크 복사
                  </button>
                  <button
                    className={styles.ghost}
                    disabled={busy}
                    onClick={() => store(false, true)}
                  >
                    공유 종료
                  </button>
                </div>
              )}
            </div>
            <div className={styles.stage}>SCREEN / 진행 방향</div>
            <Seating plan={plan} />
            <p className={styles.muted}>
              조건을 바꾼 후에는 ‘다시 랜덤 배정’을 눌러 적용하세요.
            </p>
          </>
        )}
      </div>
    </div>
  );
}
function Shared({ id }: { id: string }) {
  const [plan, setPlan] = useState<TeamPlan>();
  const [error, setError] = useState('');
  useEffect(() => {
    api<TeamPlan>('shared', undefined, id)
      .then(setPlan)
      .catch((e) => setError(e.message));
  }, [id]);
  return (
    <>
      <ErrorMessage message={error} />
      {plan ? (
        <>
          <Intro eyebrow="FIND YOUR CONNECTION" title={plan.title}>
            우리의 만남이 시작되는 자리. 이름을 찾아 테이블로 이동해주세요.
          </Intro>
          <div className={styles.stage}>SCREEN / 진행 방향</div>
          <Seating plan={plan} />
        </>
      ) : (
        !error && <Notice>배치를 불러오는 중…</Notice>
      )}
    </>
  );
}
