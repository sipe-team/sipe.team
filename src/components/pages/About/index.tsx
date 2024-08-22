import Faq from '@/components/Faq';
import Layout from '@/components/Layout';
import Activity from '@/components/pages/About/components/ActivitiesSection';
import Introduce from '@/components/pages/About/components/IntroduceSection';
import Sponsor from '@/components/pages/About/components/SponsorSection';

import { faqs } from './data';

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
