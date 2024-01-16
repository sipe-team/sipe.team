import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  max-width: 1060px;
  margin: auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
  margin-bottom: 160px;
  gap: 40px;
`;

export const Title = styled.div`
  font-size: 36px;
  font-weight: 800;
  line-height: 50px;
  color: ${({ theme }) => theme.colors.white};
`;

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
