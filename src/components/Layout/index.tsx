import React from 'react';

import useDeviceType from '@/hook/useDeviceType';

import * as S from './styled';
const Layout = ({
  children,
  backgroundImage,
}: {
  children: React.ReactNode;
  backgroundImage?: string;
}) => {
  const { isDesktop } = useDeviceType();

  return (
    <S.Wrapper isDesktop={isDesktop} backgroundImage={backgroundImage}>
      <div className="layout">{children}</div>
    </S.Wrapper>
  );
};

export default Layout;
