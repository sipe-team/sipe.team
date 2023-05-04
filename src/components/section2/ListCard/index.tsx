import * as S from './styled';

type ListCardProps = {
  title: string;
  flex: number;
  list: string[];
};

const ListCard = ({ title, flex, list }: ListCardProps) => {
  return (
    <S.Wrapper flex={flex}>
      <S.Title>{title}</S.Title>
      {list.map((item, i) => (
        <div key={i}>{item}</div>
      ))}
    </S.Wrapper>
  );
};

export default ListCard;
