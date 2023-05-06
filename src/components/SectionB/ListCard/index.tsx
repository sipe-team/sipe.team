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
      <S.List>
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </S.List>
    </S.Wrapper>
  );
};

export default ListCard;
