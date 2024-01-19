import React from 'react';

import useDeviceType from '@/hook/useDeviceType';

import * as S from './styled';
const Layout = ({ children }: { children: React.ReactNode }) => {
  const { isMobile, isTablet } = useDeviceType();
  const getWidth = () => {
    if (isTablet) {
      return 780;
    }
    if (isMobile) {
      return 360;
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
