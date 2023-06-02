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
      // onClick={() => window.open('https://forms.gle/fkryrx4MRjN1Ajks8')}
    >
      {/* Join us Now! */}
      To be continued...
      {size !== 's' && (
        <S.Icon size={size}>
          <StyledArrowJoin size={size} />
        </S.Icon>
      )}
    </S.Wrapper>
  );
};

const StyledArrowJoin = styled(ArrowJoin)<{ size: S.sizeType }>`
  ${mobile} {
    width: ${({ size }) => (size === 'lg' ? '16px' : '10px')};
    height: ${({ size }) => (size === 'lg' ? '16px' : '10px')};
  }
`;

export default JoinButton;
