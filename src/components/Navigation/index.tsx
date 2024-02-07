import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { ReactComponent as Logo } from '@/assets/logo.svg';
import useDeviceType from '@/hook/useDeviceType';
import { useJoinUs } from '@/hook/useJoinUs';

import Button from '../Button';
import { ApplyButton } from '../Button/styled';
import HamburgerButton from '../HamburgerButton';
import Layout from '../Layout';
import * as S from './styled';

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

  const { handleJoinUs } = useJoinUs();

  const handleNavigate = (path: string) => {
    setIsMobileMenuOpen(false);
    navigate(path);
    scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleClickJoinButton = () => {
    setIsMobileMenuOpen(false);
    handleJoinUs();
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
                    buttonType="menu"
                    selected={menu.path === location.pathname}
                    onClick={() => handleNavigate(menu.path)}
                  >
                    {menu.name}
                  </Button>
                ))}
              </S.Menus>
              <ApplyButton
                isDesktop={isDesktop}
                onClick={handleClickJoinButton}
              >
                Join Us
              </ApplyButton>
            </S.Buttons>
          ) : (
            <HamburgerButton
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              isOpened={isMobileMenuOpen}
            />
          )}
        </S.Group>
        <AnimatePresence>
          {isMobileMenuOpen && !isDesktop && (
            <S.MobileMenus
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {menus.map((menu) => (
                <Button
                  key={menu.name}
                  buttonType="menu"
                  selected={menu.path === location.pathname}
                  onClick={() => handleNavigate(menu.path)}
                >
                  {menu.name}
                </Button>
              ))}
              <ApplyButton
                isDesktop={isDesktop}
                onClick={handleClickJoinButton}
              >
                Join Us
              </ApplyButton>
            </S.MobileMenus>
          )}
        </AnimatePresence>
      </Layout>
    </S.Wrapper>
  );
}
