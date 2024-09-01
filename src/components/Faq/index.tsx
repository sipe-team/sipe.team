import type { Faq as FaqItem } from '@/db/model';

import Accordion from '../common/Accordion';
import ContentWithTitle from '../ContentWithTitle';
import styles from './index.module.scss';

type FaqProps = {
  faqs: FaqItem[];
  className?: string;
};

function Faq({ faqs }: FaqProps) {
  return (
    <ContentWithTitle title="자주 묻는 질문">
      <div className={styles.faqs}>
        {faqs.map((faq) => (
          <Accordion
            key={faq.key}
            question={faq.question}
            answer={faq.answer}
          />
        ))}
      </div>
    </ContentWithTitle>
  );
}

export default Faq;
