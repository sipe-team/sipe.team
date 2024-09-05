import { EmailIcon } from '@/assets/icons';
import { KakaoLogo } from '@/assets/logos';
import ExternalLink from '@/components/common/ExternalLink';
import ContentWithTitle from '@/components/ContentWithTitle';

import styles from './index.module.scss';

const ContactSection = () => {
  return (
    <ContentWithTitle title="문의">
      <div className={styles.wrapper}>
        <div className={styles.title}>
          더 궁금한 질문이 있거나 후원을 원하신다면 언제든 연락해 주세요!
        </div>
        <div className={styles.content}>
          <ExternalLink
            href="mailto:sipe.team@gmail.com"
            className={styles.contentBox}
            withTextUnderline={false}
          >
            <EmailIcon width={24} height={24} />
            <span>sipe.team@gmail.com</span>
          </ExternalLink>
          <ExternalLink
            href="http://pf.kakao.com/_Bqxbxgxj"
            className={styles.contentBox}
            withTextUnderline={false}
          >
            <KakaoLogo width={24} height={24} />
            <span>@sipe</span>
          </ExternalLink>
        </div>
      </div>
    </ContentWithTitle>
  );
};

export default ContactSection;
