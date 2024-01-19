import { useMediaQuery } from 'react-responsive';

export const DEVICE_TYPE = {
  DESKTOP: 'desktop',
  MOBILE: 'mobile',
} as const;

const useDeviceType = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 780px)' });
  const isTablet = useMediaQuery({ query: '(max-width: 1060px)' });
  const isDesktop = useMediaQuery({ query: '(min-width: 1060px)' });

  return { isMobile, isTablet, isDesktop };
};

export default useDeviceType;
