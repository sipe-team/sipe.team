import FormWorkspace from '@/features/forms/Workspace';

export const metadata = {
  title: 'SIPE Forms · 함께한 순간을 기록해요',
  robots: { index: false, follow: false },
};
export default function Page({ params }: { params: { path?: string[] } }) {
  return <FormWorkspace path={params.path || []} />;
}
