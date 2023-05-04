import * as S from './styled';
import { ReactComponent as ArrowJoin } from '@/assets/arrow_join.svg';

type JonButtonProps = {
  size: S.sizeType;
};

const JoinButton = ({ size }: JonButtonProps) => {
  return (
    <S.Wrapper size={size}>
      Join us Now!
      {size !== 's' && (
        <S.Icon>
          <ArrowJoin />
        </S.Icon>
      )}
    </S.Wrapper>
  );
};

export default JoinButton;
