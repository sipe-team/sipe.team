import Accordion, { AccordionProps } from '../common/Accordion';
import ContentWithTitle from '../ContentWithTitle';
import styles from './index.module.scss';

type FaqProps = {
  faqs: AccordionProps[];
};

export default function Faq({ faqs }: FaqProps) {
  return (
    <ContentWithTitle title="자주 묻는 질문">
      <div className={styles.faqs}>
        {faqs.map((faq, index) => (
          <Accordion key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </ContentWithTitle>
  );
}
