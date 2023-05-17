import data from '@/data';
import { StyledSection } from '@/styles/common';

import ProfileCard from './ProfileCard';
import * as S from './styled';

const SectionC = () => {
  const { makers } = data;

  return (
    <S.Container id="makers">
      <S.Line />
      <S.Wrapper>
        <div>
          <S.Title>
            The
            <br />
            Makers
          </S.Title>
          <StyledSection direction="row">
            {makers.map((maker, i) => (
              <ProfileCard key={i} index={i} {...maker} />
            ))}
          </StyledSection>
        </div>
      </S.Wrapper>
      <S.Line />
    </S.Container>
  );
};

export default SectionC;
