import styled from '@emotion/styled';

import { ReactComponent as ArrowJoin } from '@/assets/arrow_join.svg';
import { mobile } from '@/styles/media-query';

import * as S from './styled';

type JonButtonProps = {
  size: S.sizeType;
};

const JoinButton = ({ size }: JonButtonProps) => {
  return (
    <S.Wrapper
      size={size}
      onClick={() => window.open('https://forms.gle/fkryrx4MRjN1Ajks8')}
    >
      Join us Now!
      {size !== 's' && (
        <S.Icon>
          <StyledArrowJoin />
        </S.Icon>
      )}
    </S.Wrapper>
  );
};

const StyledArrowJoin = styled(ArrowJoin)`
  ${mobile} {
    width: 10px;
    height: 10px;
  }
`;

export default JoinButton;
