import * as S from './styled';

type ProfileCardProps = {
  index: number;
  src: string;
  name: string;
  role: string;
};

const ProfileCard = ({ index, src, name, role }: ProfileCardProps) => {
  return (
    <S.Wrapper>
      <S.Photo src={src} />
      <S.BadgeGroup>
        <S.Badge i={index} isName>
          {name}
        </S.Badge>
        <S.Badge i={index}>{role}</S.Badge>
      </S.BadgeGroup>
    </S.Wrapper>
  );
};

export default ProfileCard;
