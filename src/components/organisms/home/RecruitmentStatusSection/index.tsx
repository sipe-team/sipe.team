'use client';

import { sendGAEvent } from '@next/third-parties/google';

import Button from '@/components/molecules/Button';
import RecruitmentSummary from '@/components/organisms/home/RecruitmentSummary';
import useCopy from '@/hook/useCopyToClipboard';
import { displayApplication, getCurrentStatus } from '@/libs/utils/recruit';

import styles from './index.module.scss';

function RecruitmentStatusSection() {
  const now = Date.now();
  const currentStatus = getCurrentStatus(now);
  const currentApplicationDetail = displayApplication[currentStatus];
  const { copyToClipboard } = useCopy();

  const handleClickShareLinkButton = async () => {
    await copyToClipboard('https://sipe.team');
    sendGAEvent('event', 'cilck_share_link_button', {
      screen_name: '/',
    });
  };

  const handleClickApplicationButton = () => {
    sendGAEvent('event', 'cilck_application_button', {
      screen_name: '/',
    });
  };

  return (
    <div className={styles.content}>
      <RecruitmentSummary currentStatus={currentStatus} />
      <div className={styles.buttonWrapper}>
        <Button
          href={currentApplicationDetail.formUrl}
          isExternalLink
          buttonType="home"
          buttonColor="primary"
          onClick={handleClickApplicationButton}
        >
          {currentApplicationDetail.buttonText}
        </Button>
        <Button
          buttonType="home"
          buttonColor="white"
          onClick={handleClickShareLinkButton}
        >
          링크 공유하기
        </Button>
      </div>
    </div>
  );
}

export default RecruitmentStatusSection;
