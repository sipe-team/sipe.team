import { Flex } from '@sipe-team/side';

import ContentWithTitle from '@/components/atoms/ContentWithTitle';
import ExternalLink from '@/components/atoms/ExternalLink';
import { EmailIcon } from '@/libs/assets/icons';

// import { KakaoLogo } from '@/libs/assets/logos';
import styles from './index.module.scss';

function ContactSection() {
  return (
    <ContentWithTitle title="문의">
      <Flex
        align="center"
        className={styles.wrapper}
        direction="column"
        gap="32px"
        justify="center"
      >
        <div className={styles.title}>
          더 궁금한 질문이 있거나 후원을 원하신다면 언제든 연락해 주세요!
        </div>
        <div className={styles.content}>
          <Flex
            align="center"
            asChild
            className={styles.contentBox}
            gap="12px"
          >
            <ExternalLink
              href="mailto:sipe.team@gmail.com"
              withTextUnderline={false}
            >
              <EmailIcon width={24} height={24} />
              <span>sipe.team@gmail.com</span>
            </ExternalLink>
          </Flex>
          {/* <ExternalLink
            href="http://pf.kakao.com/_Bqxbxgxj"
            className={styles.contentBox}
            withTextUnderline={false}
          >
            <KakaoLogo width={24} height={24} />
            <span>@sipe</span>
          </ExternalLink> */}
        </div>
      </Flex>
    </ContentWithTitle>
  );
}

export default ContactSection;
