import { UserIcon } from '@/assets/icons';
import CardWrapper from '@/components/CardWrapper';
import Image from '@/components/Image';
import useDeviceType from '@/hook/useDeviceType';
import { StyledH5 } from '@/styles/common';

import * as S from './styled';

type ActiveCardProps = React.ComponentProps<'div'> & {
  thumbnail?: string;
  profile?: string;
  contentTitle: string;
  contentBody: string;
  userName: string;
  link: string;
  createDate: string;
};

export const ActiveCard = ({
  thumbnail,
  profile,
  contentTitle,
  contentBody,
  userName,
  createDate,
  link,
  className,
}: ActiveCardProps) => {
  const handleClick = () => {
    if (!link.match(/^https?:\/\//i)) {
      link = 'https://' + link;
    }
    window.open(link);
  };

  const { isMobile } = useDeviceType();

  return (
    <CardWrapper
      type="CONTENT"
      minHeight={isMobile ? 333 : 252}
      onClick={handleClick}
      className={className}
    >
      <S.Wrapper isMobile={isMobile}>
        <Image
          style={{ borderRadius: '4px' }}
          className="thumbnail"
          src={thumbnail}
        />
        <S.ContentsWrapper isMobile={isMobile}>
          <section className="contents">
            <StyledH5 className="title">{contentTitle}</StyledH5>
            <p className="body">{contentBody}</p>
          </section>
          <section className="poster-user-info">
            <div className="user-wrapper">
              {profile ? (
                <img src={profile} alt="user profile" className="user-icon" />
              ) : (
                <UserIcon className="user-icon" />
              )}
              <label className="user-name">{userName}</label>
            </div>
            <label className="create-date">{createDate}</label>
          </section>
        </S.ContentsWrapper>
      </S.Wrapper>
    </CardWrapper>
  );
};
