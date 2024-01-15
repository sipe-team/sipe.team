import React from 'react';

import useDeviceType from '@/hook/useDeviceType';

import * as S from './styled';
const Layout = ({ children }: { children: React.ReactNode }) => {
  const { isMobile, isTablet, isDesktop } = useDeviceType();
  const getWidth = () => {
    if (isTablet) {
      return 740;
    }
    if (isMobile) {
      return 280;
    }

    return 1060;
  };

  return (
    <S.Wrapper maxWidth={getWidth()}>
      <div className="layout">{children}</div>
    </S.Wrapper>
  );
};

export default Layout;
