'use client';

import dynamic from 'next/dynamic';

import { sendGAEvent } from '@next/third-parties/google';
import { Button, Flex } from '@sipe-team/side';

import RecruitmentSummarySkeleton from '@/components/organisms/home/RecruitmentSummarySkeleton';
import useCopy from '@/hook/useCopyToClipboard';
import { displayApplication, getCurrentStatus } from '@/libs/utils/recruit';

import styles from './index.module.scss';

const now = Date.now();

const RecruitmentSummary = dynamic(
  () => import('@/components/organisms/home/RecruitmentSummary'),
  {
    ssr: false,
    loading: () => (
      <RecruitmentSummarySkeleton currentStatus={getCurrentStatus(now)} />
    ),
  },
);

function RecruitmentStatusSection() {
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
    <Flex
      align="center"
      className={styles.content}
      direction="column"
      gap="40px"
    >
      <RecruitmentSummary currentStatus={currentStatus} />
      <Flex className={styles.buttonWrapper} direction="row" gap="24px">
        <Button
          asChild
          className={styles.homeButton}
          color="primary"
          onClick={handleClickApplicationButton}
        >
          <a
            href={currentApplicationDetail.formUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            {currentApplicationDetail.buttonText}
          </a>
        </Button>
        <Button
          color="white"
          className={styles.homeButton}
          type="button"
          onClick={handleClickShareLinkButton}
        >
          링크 공유하기
        </Button>
      </Flex>
    </Flex>
  );
}

export default RecruitmentStatusSection;
