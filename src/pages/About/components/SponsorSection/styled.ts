import styled from '@emotion/styled';

export const ImageList = styled.div`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  gap: 32px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

export const Image = styled.img`
  width: 320px;
  height: 180px;
  position: relative;
  background: linear-gradient(0deg, white 0%, white 100%);
  border-radius: 12px;
`;
