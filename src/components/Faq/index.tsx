import Accordion, { AccordionProps } from '../common/Accordion';
import ContentWithTitle from '../ContentWithTitle';
import Layout from '../Layout';
import styles from './index.module.scss';

type FaqProps = {
  faqs: AccordionProps[];
};

export default function Faq({ faqs }: FaqProps) {
  return (
    <Layout>
      <ContentWithTitle title="자주 묻는 질문">
        <div className={styles.faqs}>
          {faqs.map((faq, index) => (
            <Accordion key={index} q={faq.q} a={faq.a} />
          ))}
        </div>
      </ContentWithTitle>
    </Layout>
  );
}
