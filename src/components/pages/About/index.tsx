import dynamic from 'next/dynamic';

import Faq from '@/components/Faq';
import Layout from '@/components/Layout';
import Contact from '@/components/pages/About/components/ContactSection';
import Introduce from '@/components/pages/About/components/IntroduceSection';
import Sponsor from '@/components/pages/About/components/SponsorSection';

import { faqs } from './data';

const Activity = dynamic(
  () => import('@/components/pages/About/components/ActivitiesSection'),
  {
    ssr: false,
  }
);

export default function About() {
  return (
    <Layout>
      <Introduce />
      <Activity />
      <Sponsor />
      <Faq faqs={faqs} />
      <Contact />
    </Layout>
  );
}
