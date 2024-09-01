import Image from 'next/image';

import RecruitmentStatusSection from './components/RecruitmentStatusSection';
import styles from './index.module.scss';

export default function Home() {
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
          개발자들이 함께 교류하며 성장하는 IT 커뮤니티
        </h2>
      </div>
      <RecruitmentStatusSection />
    </div>
  );
}
