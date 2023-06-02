import JoinButton from '@/components/common/JoinButton';

import * as S from './styled';

const JoinBanner = () => {
  return (
    <S.Wrapper>
      <S.TextWrapper>
        {/* <S.Text>현재 SIPE 1기 멤버 모집중!!</S.Text>
        <S.Text>05/19 ~ 06/02</S.Text> */}
        <S.Text>SIPE 1기 모집 마감!! 2기를 기다려주세요 :)</S.Text>
        <S.Text></S.Text>
      </S.TextWrapper>
      <S.JoinButtonWrapper>
        <JoinButton size="m" />
      </S.JoinButtonWrapper>
    </S.Wrapper>
  );
};

export default JoinBanner;
