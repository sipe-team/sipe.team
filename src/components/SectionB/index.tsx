import data from '@/data';
import { StyledSection } from '@/styles/common';

import JoinButton from '../common/JoinButton';
import EventBanner from './EventBanner';
import EventCard from './EventCard';
import ListCard from './ListCard';
import MainBanner from './MainBanner';

const SectionB = () => {
  const { recruitment, qualification } = data;

  return (
    <StyledSection style={{ padding: '0 40px' }}>
      <MainBanner />
      <StyledSection direction="row">
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
