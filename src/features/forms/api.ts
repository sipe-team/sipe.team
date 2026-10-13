export async function api<T>(
  action: string,
  data?: Record<string, unknown>,
  id?: string,
): Promise<T> {
  const response = await fetch(
    '/api/activity-forms' +
      (data
        ? ''
        : '?' + new URLSearchParams({ action, ...(id ? { id } : {}) })),
    data
      ? {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ action, ...data }),
        }
      : { cache: 'no-store' },
  );
  const result = await response.json();
  if (!response.ok)
    throw new Error(result.error || '요청을 처리하지 못했습니다.');
  return result;
}
export function download(name: string, content: string) {
  const url = URL.createObjectURL(
    new Blob([content], { type: 'text/csv;charset=utf-8;' }),
  );
  const a = document.createElement('a');
  a.href = url;
  a.download = name;
  a.click();
  URL.revokeObjectURL(url);
}
