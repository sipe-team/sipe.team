import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.black};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
`;

export const MobileMenus = styled(motion.nav)`
  width: 100%;
  display: flex;
`;

export const MenuList = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 9px;
  padding-bottom: 20px;
`;
