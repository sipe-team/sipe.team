'use client';

import { useEffect, useState } from 'react';

import { ApplicationStatusKey, getCurrentStatus } from '@/libs/utils/recruit';

export default function useApplicationStatus() {
  const [status, setStatus] = useState<ApplicationStatusKey>('before');

  useEffect(() => {
    const updateStatus = () => setStatus(getCurrentStatus(Date.now()));
    updateStatus();
    const interval = setInterval(updateStatus, 1000);
    return () => clearInterval(interval);
  }, []);

  return status;
}
