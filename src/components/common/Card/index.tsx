import * as S from './styled';

const CardList = [
  {
    title: '서류 접수',
    process_date: '02.05(월) ~ 02.16(금)',
    subTitle: '23:59:59 마감',
  },
  {
    title: '서류 결과 발표',
    process_date: '02.21(수)',
    subTitle: '오후 8시 예정',
  },
  {
    title: '오프라인 인터뷰',
    process_date: '03.01(금) ~ 03.03(일)',
    subTitle: '서류합격자 개별연락',
  },

  {
    title: '최종 합격 발표',
    process_date: '03.06(수)',
    subTitle: '오후 8시 예정',
  },
  {
    title: '정규 활동 시작',
    process_date: '03.16(토)',
    subTitle: 'OT 진행',
  },
];

const Card = () => {
  return (
    <S.Wrapper>
      {CardList.map((card) => (
        <S.CardWrapper>
          <S.Title>{card.title}</S.Title>
          <S.HighLightTitle>{card.process_date}</S.HighLightTitle>
          <S.SubTitle>{card.subTitle}</S.SubTitle>
        </S.CardWrapper>
      ))}
    </S.Wrapper>
  );
};

export default Card;
