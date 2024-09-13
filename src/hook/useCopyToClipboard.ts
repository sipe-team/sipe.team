import { useCallback, useState } from 'react';
import toast from 'react-simple-toasts';

const useCopyToClipboard = (message = '링크를 복사했어요. 🔗') => {
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const copyToClipboard = useCallback(
    async (text: string) => {
      if (!navigator?.clipboard) {
        toast('링크 복사가 지원하지 않는 브라우저에요.', { theme: 'failure' });
        setCopiedText(null);

        return;
      }

      try {
        await navigator.clipboard.writeText(text);
        toast(message, { theme: 'dark' });

        setCopiedText(text);
      } catch (error) {
        console.error('Copy failed', error);

        toast('링크 복사에 실패했어요.', { theme: 'failure' });
        setCopiedText(null);
      }
    },
    [message],
  );

  return { copiedText, copyToClipboard };
};

export default useCopyToClipboard;
