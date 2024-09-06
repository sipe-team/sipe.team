import { useCallback, useState } from 'react';
import toast from 'react-simple-toasts';

type CopiedValue = string | null;

type CopyFn = (text: string) => Promise<boolean>;

const useCopyToClipboard = (message = '링크를 복사했어요. 🔗') => {
  const [copiedText, setCopiedText] = useState<CopiedValue>(null);

  const copy: CopyFn = useCallback(async (text) => {
    if (!navigator?.clipboard) {
      console.warn('Clipboard not supported');
      return false;
    }

    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(text);
      return true;
    } catch (error) {
      console.warn('Copy failed', error);
      setCopiedText(null);
      return false;
    }
  }, []);

  const copyToClipboard = useCallback(
    (text: string) => {
      copy(text)
        .then(() => {
          toast(message, { theme: 'dark' });
        })
        .catch(() => {
          toast('링크 복사에 실패했어요.', { theme: 'failure' });
        });
    },
    [copy],
  );

  return { copiedText, copyToClipboard };
};

export default useCopyToClipboard;
