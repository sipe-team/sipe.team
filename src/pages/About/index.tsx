import Activity from '@/pages/About/components/ActivitiesSection';
import Introduce from '@/pages/About/components/IntroduceSection';
import Faq from '@/components/Faq';

import Sponsor from '@/pages/About/components/SponsorSection';
import { faqs } from './data';

export default function About() {
  return (
    <>
      <Introduce />
      <Activity />
      <Sponsor />
      <Faq faqs={faqs} />
    </>
  );
}
