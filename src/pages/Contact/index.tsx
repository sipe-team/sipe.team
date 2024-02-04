import { ReactComponent as Email } from '@/assets/email.svg';
import { ReactComponent as Kakao } from '@/assets/kakao_logo.svg';
import Layout from '@/components/Layout';

import * as S from './styled';

const contacts = [
  {
    text: 'sipe.team@gmail.com',
    url: 'mailto:sipe.team@gmail.com',
    icon: <Email />,
  },
  {
    text: '@sipe',
    url: 'http://pf.kakao.com/_Bqxbxgxj',
    icon: <Kakao />,
  },
];

export default function Contact() {
  return (
    <Layout backgroundImage="/bg_dark.png">
      <S.Wrapper>
        <S.Group>
          <S.Title>
            <div>Contact</div>
            <div>
              더 궁금한 질문이 있거나 후원을 원하신다면 언제든 연락해주세요!
            </div>
          </S.Title>
          <S.Content>
            {contacts.map((contact) => (
              <S.ContactBox
                onClick={() => {
                  window.open(contact.url);
                }}
              >
                {contact.icon}
                {contact.text}
              </S.ContactBox>
            ))}
          </S.Content>
        </S.Group>
      </S.Wrapper>
    </Layout>
  );
}
