import Activity from '@/components/About/ActivitiesSection';
import Introduce from '@/components/About/IntroduceSection';
import { StyledSection } from '@/styles/common';

export default function About() {
  return (
    <StyledSection>
      <Introduce />
      <Activity />
    </StyledSection>
  );
}
