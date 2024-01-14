import * as S from './styled';
import { Carousel } from 'react-responsive-carousel';
import Button from '../../Button';
import { useEffect, useState } from 'react';

const chips = [
  { name: '정규 미션', value: 'mission' },
  { name: '사담콘', value: 'sipe-concert' },
  { name: '내친소', value: 'introduce-myFriend' },
  { name: '사이프톤', value: 'sipe-hackathon' },
  { name: '그 외 행사', value: 'etc' },
];

const Activity = () => {
  const [selectChip, setSelectChip] = useState<string>('mission');

  return (
    <S.Wrapper>
      <S.Title>주요 활동</S.Title>
      <S.Menus>
        {chips.map((chip) => (
          <Button
            key={chip.name}
            type="chip"
            onClick={() => setSelectChip(chip.value)}
            selected={chip.value === selectChip}
          >
            {chip.name}
          </Button>
        ))}
      </S.Menus>
      <S.Description>
        <S.DescriptionTitle>2번의 정규 미션 진행</S.DescriptionTitle>
        <S.DescriptionSubTitle>
          활동 회원은 한 기수 동안 2번의 미션을 진행합니다. 본인이 개발자로서
          성장할 수 있는 방법이라면 어떤 방식이든 수용하며, 내부 투표에 따라
          자유롭게 팀을 구성하고 미션을 진행해요.
        </S.DescriptionSubTitle>
      </S.Description>
    </S.Wrapper>
  );
};

export default Activity;
