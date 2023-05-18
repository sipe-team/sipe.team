import data from '@/data';
import useDeviceType from '@/hook/useDeviceType';
import { StyledSection } from '@/styles/common';

import JoinButton from '../common/JoinButton';
import EventBanner from './EventBanner';
import EventCard from './EventCard';
import ListCard from './ListCard';
import MainBanner from './MainBanner';

const SectionB = () => {
  const { recruitment, qualification } = data;
  const { isMobile } = useDeviceType();

  return (
    <StyledSection style={{ padding: `0 ${isMobile ? 20 : 40}px` }}>
      <MainBanner />
      <StyledSection id="apply" direction={isMobile ? 'column' : 'row'}>
        <ListCard flex={472} {...recruitment} />
        <ListCard flex={948} {...qualification} />
      </StyledSection>
      <EventBanner />
      <EventCard />
      <JoinButton size="lg" />
    </StyledSection>
  );
};

export default SectionB;
