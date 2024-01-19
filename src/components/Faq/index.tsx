import Accordion, { AccordionProps } from '../Accordion';
import ContentWithTitle from '../ContentWithTitle';
import Layout from '../Layout';
import * as S from './styled';

type FaqProps = {
  faqs: AccordionProps[];
};

export default function Faq({ faqs }: FaqProps) {
  return (
    <Layout>
      <ContentWithTitle title="자주 묻는 질문">
        <S.Faqs>
          {faqs.map((faq) => (
            <Accordion q={faq.q} a={faq.a} />
          ))}
        </S.Faqs>
      </ContentWithTitle>
    </Layout>
  );
}
