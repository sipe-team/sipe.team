import Image from 'next/image';

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
        <h1 className={styles.title}>
          Sharing Insights <br /> with People Everyday
        </h1>
        <h2 className={styles.subTitle}>
          다양한 활동으로 함께 성장하는 현직 개발자들의 커뮤니티
        </h2>
      </div>
      <RecruitmentStatusSection />
    </div>
  );
}

export default Home;
