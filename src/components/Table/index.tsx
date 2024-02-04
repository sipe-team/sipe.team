import { ReactComponent as Circle } from '@/assets/check_circle.svg';
import useDeviceType from '@/hook/useDeviceType';

import Badge from '../Badge';
import * as S from './styled';

interface TableProps {
  isApplicant: boolean;
  dataList: DataListProps[];
}

interface DataListProps {
  recurring_date?: string;
  text: string;
  badge?: string | undefined;
}

const Table = ({ dataList, isApplicant }: TableProps) => {
  const { isMobile } = useDeviceType();

  return (
    <S.Wrapper isMobile={isMobile}>
      {dataList.map((data) => (
        <S.Table isMobile={isMobile} isApplicant={isApplicant}>
          {isApplicant ? (
            <Circle />
          ) : (
            <S.SubText>{data.recurring_date}</S.SubText>
          )}
          <S.Text isApplicant={isApplicant}>{data.text}</S.Text>
          {!isApplicant && data.badge && <Badge text={data.badge} />}
        </S.Table>
      ))}
    </S.Wrapper>
  );
};

export default Table;
