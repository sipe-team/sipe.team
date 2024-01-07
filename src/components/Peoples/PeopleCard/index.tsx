import Box from '@/components/common/Box';
import * as S from './styled';

const PeopleCard = () => {
  return (
    <Box type="CONTENT" className="people-box">
      <S.Meta>meta area</S.Meta>
      <S.Introduce>introduce area</S.Introduce>
      <S.Review>review area</S.Review>
    </Box>
  );
};

export default PeopleCard;
