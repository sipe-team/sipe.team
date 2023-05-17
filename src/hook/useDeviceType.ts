import { useMediaQuery } from 'react-responsive';

export const DEVICE_TYPE = {
  DESKTOP: 'desktop',
  MOBILE: 'mobile',
} as const;

const useDeviceType = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 799px)' });
  const isTablet = useMediaQuery({ query: '(min-width: 800px)' });
  const isDesktop = useMediaQuery({ query: '(min-width: 1100px)' });

  return { isMobile, isTablet, isDesktop };
};

export default useDeviceType;
