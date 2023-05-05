import data from '@/data';
import * as S from './styled';
import ProfileCard from './ProfileCard';
import { StyledSection } from '@/styles/common';

const SectionC = () => {
  const { makers } = data;

  return (
    <S.Wrapper>
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
    </S.Wrapper>
  );
};

export default SectionC;
