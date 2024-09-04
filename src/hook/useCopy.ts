import { useEffect } from 'react';
import toast, { toastConfig } from 'react-simple-toasts';
import { useCopyToClipboard } from 'react-use';

toastConfig({ theme: 'dark' });

export const useCopy = (message?: string) => {
  const [clipboardState, copyToClipboard] = useCopyToClipboard();

  useEffect(() => {
    if (!clipboardState.value) {
      return;
    }

    toast(message);
  }, [message, clipboardState]);

  return {
    clipboardState,
    copyToClipboard,
  };
};

export default useCopy;
