import { useState } from 'react';
import * as S from './styled';
import { ReactComponent as Arrow } from '@/assets/accordion_arrow.svg';

export type AccordionProps = {
  q: string;
  a: string;
};

export default function Accordion({ q, a }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <S.Wrapper>
      <S.Question>
        {q}
        <S.Arrow isOpen={isOpen} onClick={() => setIsOpen((v) => !v)}>
          <Arrow />
        </S.Arrow>
      </S.Question>
      {isOpen && <S.Answer>{a}</S.Answer>}
    </S.Wrapper>
  );
}
