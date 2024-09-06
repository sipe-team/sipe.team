import { useCallback } from 'react';
import toast from 'react-simple-toasts';

import useCopyToClipboard from '@/hook/useCopyToClipboard';

const useCopy = (message: string) => {
  const [copiedText, copy] = useCopyToClipboard();

  const copyToClipboard = useCallback(
    (text: string) => {
      copy(text)
        .then(() => {
          toast(message, { theme: 'dark' });
        })
        .catch((error) => {
          toast('링크 복사에 실패했습니다.', { theme: 'failure' });
          console.error('Failed to copy!', error);
        });
    },
    [copy],
  );

  return {
    copiedText,
    copyToClipboard,
  };
};

export default useCopy;
