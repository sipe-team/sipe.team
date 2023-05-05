import { StyledSection } from '@/styles/common';
import MainBanner from './MainBanner';
import ListCard from './ListCard';
import data from '@/data';
import EventBanner from './EventBanner';
import EventCard from './EventCard';
import JoinButton from '../common/JoinButton';

const SectionB = () => {
  const { recruitment, qualification } = data;

  return (
    <StyledSection>
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
