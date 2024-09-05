import localFont from 'next/font/local';

export const pretendardFont = localFont({
  src: [
    {
      path: './Pretendard-Black.subset.woff2',
      weight: '900',
      style: 'normal',
    },
    {
      path: './Pretendard-ExtraBold.subset.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: './Pretendard-Bold.subset.woff2',
      weight: 'bold',
      style: 'normal',
    },
    {
      path: './Pretendard-SemiBold.subset.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: './Pretendard-Medium.subset.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './Pretendard-Regular.subset.woff2',
      weight: 'normal',
      style: 'normal',
    },
  ],
  display: 'swap',
  preload: true,
  fallback: [
    '-apple-system',
    'BlinkMacSystemFont',
    'system-ui',
    'Roboto',
    'Helvetica Neue',
    'Segoe UI',
    'Apple SD Gothic Neo',
    'Noto Sans KR',
    'Malgun Gothic',
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
    'sans-serif',
  ],
});
