import Accordion, { AccordionProps } from '../Accordion';
import * as S from './styled';

type FaqProps = {
  faqs: AccordionProps[];
};

export default function Faq({ faqs }: FaqProps) {
  return (
    <S.Wrapper>
      <S.Title>자주 묻는 질문</S.Title>
      <S.Faqs>
        {faqs.map((faq) => (
          <Accordion q={faq.q} a={faq.a} />
        ))}
      </S.Faqs>
    </S.Wrapper>
  );
}
