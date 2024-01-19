import Badge from '@/components/Badge';
import * as S from './styled';
import useDeviceType from '@/hook/useDeviceType';

interface CardProps {
  src: string;
  index: number;
  badgeText: string;
  title: string;
  subTitle: string;
}

const Card = ({ src, index, badgeText, title, subTitle }: CardProps) => {
  const { isTablet } = useDeviceType();
  const isOdd = index % 2 !== 0;
  return (
    <S.Section index={index} isTablet={isTablet}>
      {isOdd || (!isOdd && isTablet) ? (
        <S.Image isTablet={isTablet} src={src} />
      ) : null}
      <S.Description isTablet={isTablet}>
        <Badge text={badgeText} />
        <S.Title>{title}</S.Title>
        <S.SubTitle>{subTitle}</S.SubTitle>
      </S.Description>
      {!isOdd && !isTablet ? <S.Image isTablet={isTablet} src={src} /> : null}
    </S.Section>
  );
};

export default Card;
