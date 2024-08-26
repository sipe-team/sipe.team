import clsx from 'clsx';

import { EmailIcon } from '@/assets/icons';
import { KakaoLogo } from '@/assets/logos';
import Layout from '@/components/Layout';

import styles from './index.module.scss';

const contacts = [
  {
    id: 1,
    text: 'sipe.team@gmail.com',
    // url: 'mailto:sipe.team@gmail.com',
    icon: <EmailIcon />,
  },
  {
    id: 2,
    text: '@sipe',
    url: 'http://pf.kakao.com/_Bqxbxgxj',
    icon: <KakaoLogo />,
  },
];

export default function Contact() {
  return (
    <Layout backgroundImage="/bg_dark.png">
      <div className={styles.wrapper}>
        <div className={styles.group}>
          <div className={styles.title}>
            <div>Contact</div>
            <div>
              더 궁금한 질문이 있거나 후원을 원하신다면 언제든 연락해주세요!
            </div>
          </div>
          <div className={styles.content}>
            {contacts.map((contact) => (
              <div
                className={clsx(styles.contentBox, {
                  [styles.clickable]: !!contact.url,
                })}
                key={contact.id}
                onClick={() => {
                  if (contact.url) {
                    window.open(contact.url);
                  }
                }}
              >
                {contact.icon}
                {contact.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
