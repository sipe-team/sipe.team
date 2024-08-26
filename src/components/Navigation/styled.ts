import styled from '@emotion/styled';
import { motion } from 'framer-motion';

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
