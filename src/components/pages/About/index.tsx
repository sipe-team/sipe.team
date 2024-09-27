import dynamic from 'next/dynamic';

import Layout from '@/components/atoms/Layout';
import ContactSection from '@/components/organisms/about/ContactSection';
import Introduce from '@/components/organisms/about/IntroduceSection';
import Sponsor from '@/components/organisms/about/SponsorSection';
import Faq from '@/components/organisms/Faq';
import { getFaq } from '@/db';

const ActivitiesSection = dynamic(
  () => import('@/components/organisms/about/ActivitiesSection'),
  {
    ssr: false,
  },
);

function About() {
  const faq = getFaq();

  return (
    <Layout>
      <Introduce />
      <ActivitiesSection />
      <Sponsor />
      <Faq faqs={faq.about} />
      <ContactSection />
    </Layout>
  );
}

export default About;
