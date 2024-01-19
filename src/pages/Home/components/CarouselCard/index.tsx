import CardWrapper from '@/components/CardWrapper';
import * as S from './styled';

type CarouselCardProps = {
  title: string;
  value: string;
};

export default function CarouselCard({ title, value }: CarouselCardProps) {
  return (
    <S.Wrapper>
      <div>{title}</div>
      <div>{value}</div>
    </S.Wrapper>
  );
}
