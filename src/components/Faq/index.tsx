import { Accordion, AccordionItem } from '@/components/common/accordion';
import type { Faq as FaqItem } from '@/db/model';

import ContentWithTitle from '../ContentWithTitle';
import styles from './index.module.scss';

type FaqProps = {
  faqs: FaqItem[];
};

function Faq({ faqs }: FaqProps) {
  return (
    <ContentWithTitle title="자주 묻는 질문">
      <Accordion className={styles.faqs}>
        {faqs.map((faq) => (
          <AccordionItem
            key={faq.key}
            title={faq.question}
            value={faq.answer}
          />
        ))}
      </Accordion>
    </ContentWithTitle>
  );
}

export default Faq;
