import Badge from '@/components/Badge';
import * as S from './styled';

interface CardProps {
  src: string;
  index: number;
  badgeText: string;
  title: string;
  subTitle: string;
}

const Card = ({ src, index, badgeText, title, subTitle }: CardProps) => {
  const isOdd = index % 2 !== 0;
  return (
    <S.Section index={index}>
      {isOdd ? <S.Image src={src} /> : null}
      <S.Description>
        <Badge text={badgeText} />
        <S.Title>{title}</S.Title>
        <S.SubTitle>{subTitle}</S.SubTitle>
      </S.Description>
      {!isOdd ? <S.Image src={src} /> : null}
    </S.Section>
  );
};

export default Card;
