import { render, screen } from '@testing-library/react';

import Card from './index';

vi.mock('@/components/atoms/Badge', () => ({
  default: ({ text }: { text: string }) => <div data-testid="badge">{text}</div>,
}));

vi.mock('@/components/molecules/Image', () => ({
  default: ({ alt, src }: { alt: string; src: string }) => <img alt={alt} src={src} />,
}));

describe('Card', () => {
  it('renders the badge, image, title, and subtitle', () => {
    render(
      <Card
        src="/card.png"
        badgeText="후원사"
        title="카드 제목"
        subTitle="카드 설명"
      />,
    );

    expect(screen.getByTestId('badge')).toHaveTextContent('후원사');
    expect(screen.getByAltText('카드 제목')).toBeInTheDocument();
    expect(screen.getByText('카드 제목')).toBeInTheDocument();
    expect(screen.getByText('카드 설명')).toBeInTheDocument();
  });
});
