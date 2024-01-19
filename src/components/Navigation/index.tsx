import { ReactComponent as Logo } from '@/assets/logo.svg';
import { ReactComponent as Menu } from '@/assets/menu.svg';
import { ReactComponent as MenuClose } from '@/assets/menu_close.svg';
import useDeviceType from '@/hook/useDeviceType';
import { useNavigate, useLocation } from 'react-router-dom';

import * as S from './styled';
import Button from '../Button';
import { ApplyButton } from '../Button/styled';
import { useState } from 'react';
import Layout from '../Layout';

const menus = [
  { name: 'About', path: '/about' },
  { name: 'Recruit', path: '/recruit' },
  { name: 'People', path: '/people' },
  { name: 'Activity', path: '/activity' },
  { name: 'Contact', path: '/contact' },
];

export default function Navigation() {
  const { isDesktop } = useDeviceType();
  const navigate = useNavigate();
  const location = useLocation();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavigate = (path: string) => {
    setIsMobileMenuOpen(false);
    navigate(path);
  };

  return (
    <S.Wrapper>
      <Layout>
        <S.Group>
          <div
            onClick={() => handleNavigate('/')}
            style={{ cursor: 'pointer' }}
          >
            <Logo />
          </div>
          {isDesktop ? (
            <S.Buttons>
              <S.Menus>
                {menus.map((menu) => (
                  <Button
                    key={menu.name}
                    type="menu"
                    selected={menu.path === location.pathname}
                    onClick={() => handleNavigate(menu.path)}
                  >
                    {menu.name}
                  </Button>
                ))}
              </S.Menus>
              <ApplyButton isDesktop={isDesktop}>Join Us</ApplyButton>
            </S.Buttons>
          ) : isMobileMenuOpen ? (
            <MenuClose
              style={{ cursor: 'pointer' }}
              onClick={() => setIsMobileMenuOpen(false)}
            />
          ) : (
            <Menu
              style={{ cursor: 'pointer' }}
              onClick={() => setIsMobileMenuOpen(true)}
            />
          )}
        </S.Group>
        {isMobileMenuOpen && !isDesktop && (
          <S.MobileMenus>
            {menus.map((menu) => (
              <Button
                key={menu.name}
                type="menu"
                selected={menu.path === location.pathname}
                onClick={() => handleNavigate(menu.path)}
              >
                {menu.name}
              </Button>
            ))}
            <ApplyButton isDesktop={isDesktop}>Join Us</ApplyButton>
          </S.MobileMenus>
        )}
      </Layout>
    </S.Wrapper>
  );
}
