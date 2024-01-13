import * as S from './styled';

interface Text {
  text: string;
}

const Badge = ({ text }: Text) => {
  return (
    <S.Wrapper>
      <S.Text>{text}</S.Text>
    </S.Wrapper>
  );
};

export default Badge;
