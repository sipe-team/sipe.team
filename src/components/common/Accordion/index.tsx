import { useState } from 'react';

import Arrow from '@/assets/accordion_arrow.svg';
import useDeviceType from '@/hook/useDeviceType';

import * as S from './styled';

export type AccordionProps = {
  q: string;
  a: string;
};

export default function Accordion({ q, a }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { isDesktop } = useDeviceType();

  return (
    <S.Wrapper isDesktop={isDesktop} onClick={() => setIsOpen((v) => !v)}>
      <S.Question isDesktop={isDesktop}>
        {q}
        <S.Arrow isOpen={isOpen} isDesktop={isDesktop}>
          <Arrow />
        </S.Arrow>
      </S.Question>
      {isOpen && <S.Answer isDesktop={isDesktop}>{a}</S.Answer>}
    </S.Wrapper>
  );
}
