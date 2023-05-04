import * as S from './styled';

type ImageCardType = {
  src: string;
  title: string;
  description: string;
};

const ImageCard = ({ src, title, description }: ImageCardType) => {
  return (
    <S.Wrapper>
      <S.Image />
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
    </S.Wrapper>
  );
};

export default ImageCard;
