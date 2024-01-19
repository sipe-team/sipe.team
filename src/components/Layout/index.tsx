import React from 'react';

import useDeviceType from '@/hook/useDeviceType';

import * as S from './styled';
const Layout = ({ children }: { children: React.ReactNode }) => {
  const { isMobile, isTablet } = useDeviceType();

  const getWidth = () => {
    if (isMobile) {
      return 360;
    }
    if (isTablet) {
      return 780;
    }
    return 1060;
  };

  return (
    <S.Wrapper width={getWidth()}>
      <div className="layout">{children}</div>
    </S.Wrapper>
  );
};

export default Layout;
