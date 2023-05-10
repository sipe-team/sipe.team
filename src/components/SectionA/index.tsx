import data from '@/data';
import { StyledSection } from '@/styles/common';

import ImageCard from './ImageCard';
import JoinBanner from './JoinBanner';
import MainBanner from './MainBanner';

const SectionA = () => {
  return (
    <StyledSection>
      <MainBanner />
      <JoinBanner />
      <StyledSection direction="row">
        {data.imageCards.map((imageCard, i) => (
          <ImageCard
            key={i}
            src={imageCard.src}
            title={imageCard.title}
            description={imageCard.description}
          />
        ))}
      </StyledSection>
    </StyledSection>
  );
};

export default SectionA;
