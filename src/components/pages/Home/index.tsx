import Image from 'next/image';

import { color, Flex, Typography } from '@sipe-team/side';

import RecruitmentStatusSection from '@/components/organisms/home/RecruitmentStatusSection';

import styles from './index.module.scss';

function Home() {
  return (
    <Flex
      align="center"
      className={styles.wrapper}
      direction="column"
      gap="16px"
      justify="center"
    >
      <Image
        src="/assets/home-bg.png"
        alt="배경 이미지"
        sizes="(max-width: 1060px) 100vw, 50vw"
        width={0}
        height={0}
        priority
        className={styles.background}
      />
      <Flex
        align="center"
        className={styles.titleWrapper}
        direction="column"
        gap="16px"
      >
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
      </Flex>
      <RecruitmentStatusSection />
    </Flex>
  );
}

export default Home;
