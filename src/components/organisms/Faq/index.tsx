import { Flex } from '@sipe-team/side';

import ContentWithTitle from '@/components/atoms/ContentWithTitle';
import { Accordion, AccordionItem } from '@/components/molecules/accordion';
import type { Faq as FaqItem } from '@/db/model';

import styles from './index.module.scss';

type FaqProps = {
  faqs: FaqItem[];
};

function Faq({ faqs }: FaqProps) {
  return (
    <ContentWithTitle title="자주 묻는 질문">
      <Flex align="stretch" asChild={true} direction="column" gap="32px">
        <Accordion className={styles.faqs}>
          {faqs.map((faq) => (
            <AccordionItem
              key={faq.key}
              title={faq.question}
              value={faq.answer}
            />
          ))}
        </Accordion>
      </Flex>
    </ContentWithTitle>
  );
}

export default Faq;
