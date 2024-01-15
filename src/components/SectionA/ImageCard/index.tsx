import * as S from './styled';

type ImageCardType = {
  src: string;
  title: string;
  description: string | JSX.Element[];
};

const ImageCard = ({ src, title, description }: ImageCardType) => {
  return (
    <S.Wrapper>
      <S.Image src={src} />
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
    </S.Wrapper>
  );
};

export default ImageCard;
