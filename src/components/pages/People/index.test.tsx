import type { ReactNode } from 'react';

import { render, screen } from '@testing-library/react';

import type { PeopleGeneration, PeopleItem } from '@/db/model';

import People from './index';

vi.mock('@/components/atoms/Layout', () => ({
  default: ({ children }: { children: ReactNode }) => (
    <div data-testid="layout">{children}</div>
  ),
}));

vi.mock('@/components/atoms/ContentWithTitle', () => ({
  default: ({ children, title }: { children: ReactNode; title: string }) => (
    <section data-testid="content-with-title">
      <h1>{title}</h1>
      {children}
    </section>
  ),
}));

vi.mock('@/components/molecules/Button', () => ({
  default: ({
    children,
    active,
  }: {
    children: ReactNode;
    active?: boolean;
  }) => <button aria-pressed={active}>{children}</button>,
}));

vi.mock('@/components/organisms/people/UserCard', () => ({
  default: ({ name }: { name: string }) => (
    <article data-testid="user-card">{name}</article>
  ),
}));

const peopleGenerations: PeopleGeneration[] = ['1', '2', '3'];
const currentPeople: PeopleItem[] = [
  {
    id: '1',
    period: '3',
    isOrganizer: false,
    thumbnail: '/person-1.png',
    name: '홍길동',
    part: 'Backend',
    introduce: '안녕하세요',
    review: '',
  },
  {
    id: '2',
    period: '3',
    isOrganizer: true,
    thumbnail: '/person-2.png',
    name: '김영희',
    part: 'Frontend',
    introduce: '반갑습니다',
    review: '좋았어요',
  },
];

describe('People page', () => {
  it('renders generation buttons and user cards', () => {
    render(
      <People
        currentPeople={currentPeople}
        peopleGenerations={peopleGenerations}
        selectedPeopleGeneration="3"
      />,
    );

    expect(screen.getByText('사이퍼 소개')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '1기' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '2기' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '3기' })).toBeInTheDocument();
    expect(screen.getAllByTestId('user-card')).toHaveLength(2);
    expect(screen.getByText('홍길동')).toBeInTheDocument();
    expect(screen.getByText('김영희')).toBeInTheDocument();
  });
});
