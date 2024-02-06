import Badge from '@/components/Badge';
import useDeviceType from '@/hook/useDeviceType';

import * as S from './styled';

interface CardProps {
  src: string;
  index: number;
  badgeText: string;
  title: string;
  subTitle: string;
}

const Card = ({ src, index, badgeText, title, subTitle }: CardProps) => {
  const { isTablet, isMobile } = useDeviceType();
  const isOdd = index % 2 !== 0;
  return (
    <S.Section index={index} isTablet={isTablet}>
      {isOdd || (!isOdd && isTablet) ? (
        <S.Image isTablet={isTablet} isMobile={isMobile} src={src} />
      ) : null}
      <S.Description isTablet={isTablet}>
        <Badge text={badgeText} />
        <S.Title isTablet={isTablet}>{title}</S.Title>
        <S.SubTitle>{subTitle}</S.SubTitle>
      </S.Description>
      {!isOdd && !isTablet ? (
        <S.Image isTablet={isTablet} isMobile={isMobile} src={src} />
      ) : null}
    </S.Section>
  );
};

export default Card;
