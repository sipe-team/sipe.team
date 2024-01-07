import styled from '@emotion/styled';

export const Wrapper = styled.div<{ type: 'BASIC' | 'CONTENT' }>`
  padding: ${({ type }) => (type === 'BASIC' ? '20px' : '16px')};
`;
