import MainBanner from './MainBanner';
import JoinBanner from './JoinBanner';
import { StyledSection } from '@/styles/common';

const Section1 = () => {
  return (
    <StyledSection>
      <MainBanner />
      <JoinBanner />
    </StyledSection>
  );
};

export default Section1;
