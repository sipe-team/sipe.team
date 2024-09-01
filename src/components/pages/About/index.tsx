import dynamic from 'next/dynamic';

import Faq from '@/components/Faq';
import Layout from '@/components/Layout';
import Contact from '@/components/pages/About/components/ContactSection';
import Introduce from '@/components/pages/About/components/IntroduceSection';
import Sponsor from '@/components/pages/About/components/SponsorSection';
import { getFaq } from '@/db';

const Activity = dynamic(
  () => import('@/components/pages/About/components/ActivitiesSection'),
  {
    ssr: false,
  }
);

function About() {
  const faq = getFaq();

  return (
    <Layout>
      <Introduce />
      <Activity />
      <Sponsor />
      <Faq faqs={faq.about} />
      <Contact />
    </Layout>
  );
}

export default About;
