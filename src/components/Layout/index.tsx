import React from 'react';

import useDeviceType from '@/hook/useDeviceType';

import * as S from './styled';
const Layout = ({ children }: { children: React.ReactNode }) => {
  const { isDesktop } = useDeviceType();

  return (
    <S.Wrapper isDesktop={isDesktop}>
      <div className="layout">{children}</div>
    </S.Wrapper>
  );
};

export default Layout;
