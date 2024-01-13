import styled from '@emotion/styled';

import { ReactComponent as Logo } from '@/assets/logo.svg';
import { ReactComponent as Menu } from '@/assets/menu.svg';
import useDeviceType from '@/hook/useDeviceType';
import { useNavigate, useLocation } from 'react-router-dom';

import * as S from './styled';
import Button from '../Button';
import { ApplyButton } from '../Button/styled';

const menus = [
  { name: 'About', path: '/about' },
  { name: 'Recruit', path: '/recruit' },
  { name: 'People', path: '/people' },
  { name: 'Activity', path: '/activity' },
  { name: 'Contact', path: '/contact' },
];

const Header = () => {
  const { isMobile } = useDeviceType();
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <S.Wrapper>
      <S.Group>
        <div onClick={() => navigate('/')}>
          <Logo />
        </div>
        <S.Buttons>
          {isMobile ? (
            <Menu />
          ) : (
            <S.Menus>
              {menus.map((menu) => (
                <Button
                  key={menu.name}
                  type="menu"
                  selected={menu.path === location.pathname}
                  onClick={() => navigate(menu.path)}
                >
                  {menu.name}
                </Button>
              ))}
            </S.Menus>
          )}
          <ApplyButton>Join Us</ApplyButton>
        </S.Buttons>
      </S.Group>
    </S.Wrapper>
  );
};

export default Header;
