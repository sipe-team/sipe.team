import Activity from '@/pages/About/components/ActivitiesSection';
import Introduce from '@/pages/About/components/IntroduceSection';
import Faq from '@/components/Faq';

import Sponsor from '@/pages/About/components/SponsorSection';
import { faqs } from './data';
import Layout from '@/components/Layout';

export default function About() {
  return (
    <Layout>
      <Introduce />
      <Activity />
      <Sponsor />
      <Faq faqs={faqs} />
    </Layout>
  );
}
