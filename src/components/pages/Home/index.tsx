import Image from 'next/image';

import { Typography } from '@sipe-team/side';
import { color } from '@sipe-team/tokens';

import RecruitmentStatusSection from '@/components/organisms/home/RecruitmentStatusSection';

import styles from './index.module.scss';

function Home() {
  return (
    <div className={styles.wrapper}>
      <Image
        src="/assets/home-bg.png"
        alt="배경 이미지"
        sizes="(max-width: 1060px) 100vw, 50vw"
        width={0}
        height={0}
        priority
        className={styles.background}
      />
      <div className={styles.titleWrapper}>
        <Typography
          asChild
          className={styles.title}
          color={color.white}
          lineHeight="compact"
          size={48}
        >
          <h1>
            Sharing Insights <br /> with People Everyday
          </h1>
        </Typography>
        <Typography
          asChild
          className={styles.subTitle}
          color={color.white}
          lineHeight="compact"
          size={24}
          weight="semiBold"
        >
          <h2>개발자들이 함께 교류하며 성장하는 IT 커뮤니티</h2>
        </Typography>
      </div>
      <RecruitmentStatusSection />
    </div>
  );
}

export default Home;
