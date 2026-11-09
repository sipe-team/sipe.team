'use client';

import { useEffect, useState } from 'react';

import SummaryCard from '@/components/organisms/home/SummaryCards';
import { CURRENT_GENERATION } from '@/libs/constants/recruit';
import { shouldShowRecruitmentClosedNotice } from '@/libs/utils/recruit';

import styles from './index.module.scss';

function RecruitmentClosedSummary() {
  const [showNotice, setShowNotice] = useState(false);

  useEffect(() => {
    const updateNotice = () =>
      setShowNotice(shouldShowRecruitmentClosedNotice(Date.now()));
    updateNotice();
    const interval = setInterval(updateNotice, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!showNotice) return <SummaryCard />;

  return (
    <div className={styles.notice}>
      <p className={styles.title}>
        {CURRENT_GENERATION}기 모집이 마무리되었습니다.
      </p>
      <p className={styles.description}>
        {CURRENT_GENERATION + 1}기 모집 오픈을 기다려 주세요!
      </p>
    </div>
  );
}

export default RecruitmentClosedSummary;
