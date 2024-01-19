import * as S from './styled';

type ContentWithTitleProps = {
  title: string;
  children: React.ReactNode | React.ReactNode[];
};

export default function ContentWithTitle({
  title,
  children,
}: ContentWithTitleProps) {
  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      {children}
    </S.Wrapper>
  );
}
