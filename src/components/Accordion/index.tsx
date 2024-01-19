import { useState } from 'react';
import * as S from './styled';
import { ReactComponent as Arrow } from '@/assets/accordion_arrow.svg';
import useDeviceType from '@/hook/useDeviceType';

export type AccordionProps = {
  q: string;
  a: string;
};

export default function Accordion({ q, a }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { isDesktop } = useDeviceType();

  return (
    <S.Wrapper isDesktop={isDesktop}>
      <S.Question isDesktop={isDesktop}>
        {q}
        <S.Arrow
          isOpen={isOpen}
          onClick={() => setIsOpen((v) => !v)}
          isDesktop={isDesktop}
        >
          <Arrow />
        </S.Arrow>
      </S.Question>
      {isOpen && <S.Answer isDesktop={isDesktop}>{a}</S.Answer>}
    </S.Wrapper>
  );
}
