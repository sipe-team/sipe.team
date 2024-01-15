import * as S from './styled';
import Card from '../Card';
import { cardData } from '../../../data/cardData';

const Introduce = () => {
  return (
    <S.Wrapper>
      <S.Title>사이프 소개</S.Title>
      {cardData.map((card) => (
        <Card key={card.index} {...card} />
      ))}
    </S.Wrapper>
  );
};

export default Introduce;
