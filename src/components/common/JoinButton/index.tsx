import * as S from './styled';

type JonButtonProps = {
  size: S.sizeType;
};

const JoinButton = ({ size }: JonButtonProps) => {
  return <S.Wrapper size={size}>Join us Now!</S.Wrapper>;
};

export default JoinButton;
