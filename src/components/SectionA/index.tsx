import React, { Fragment } from 'react';

import data from '@/data';
import useDeviceType from '@/hook/useDeviceType';
import { StyledSection } from '@/styles/common';

import ImageCard from './ImageCard';
import JoinBanner from './JoinBanner';
import MainBanner from './MainBanner';

const SectionA = () => {
  const { isMobile } = useDeviceType();

  return (
    <StyledSection id="about" style={{ padding: `0 ${isMobile ? 20 : 40}px` }}>
      <MainBanner />
      <JoinBanner />
      <StyledSection direction={isMobile ? 'column' : 'row'}>
        {data.imageCards.map((imageCard, i) => (
          <ImageCard
            key={i}
            src={imageCard.src}
            title={imageCard.title}
            description={imageCard.description
              .split('\n')
              .map((lineText, index) => (
                <Fragment key={index}>
                  {lineText}
                  <br />
                </Fragment>
              ))}
          />
        ))}
      </StyledSection>
    </StyledSection>
  );
};

export default SectionA;
