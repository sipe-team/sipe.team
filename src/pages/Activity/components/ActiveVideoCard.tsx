import React from 'react';

import Image from '@/components/Image';
import { StyledH6 } from '@/styles/common';

import * as S from './styled';

type ActiveVideoCardProps = React.ComponentProps<'div'> & {
  thumbnail: string;
  contentTitle: string;
  userName: string;
  link: string;
  createDate: string;
};

export const ActiveVideoCard = ({
  thumbnail,
  contentTitle,
  userName,
  createDate,
  link,
  className,
}: ActiveVideoCardProps) => {
  const handleClick = () => {
    if (!link.match(/^https?:\/\//i)) {
      link = 'https://' + link;
    }
    window.open(link);
  };

  return (
    <S.VideoWrapper className={className}>
      <Image
        style={{ borderRadius: '12px' }}
        className="thumbnail"
        src={thumbnail}
      />
      <S.VideoContentsWrapper className="contents">
        <section className="contents-info">
          <StyledH6 className="title">{contentTitle}</StyledH6>
          <div className="body">
            <span className="username">{userName}</span>
            <span className="date">{createDate}</span>
          </div>
        </section>
        <button className="link-button" onClick={handleClick}>
          보러가기
        </button>
      </S.VideoContentsWrapper>
    </S.VideoWrapper>
  );
};
