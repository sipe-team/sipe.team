import Badge from '../common/Badge';
import * as S from './styled';
import { ReactComponent as Circle } from '@/assets/check_circle.svg';

interface TableProps {
  title: string;
  isApplicant: boolean;
  dataList: DataListProps[];
}

interface DataListProps {
  recurring_date?: string;
  text: string;
  badge?: string | undefined;
}

const Table = ({ title, dataList, isApplicant }: TableProps) => {
  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      <S.TableWrapper>
        {dataList.map((data) => (
          <S.Table>
            {isApplicant ? (
              <Circle />
            ) : (
              <S.SubText>{data.recurring_date}</S.SubText>
            )}
            <S.Text isApplicant={isApplicant}>{data.text}</S.Text>
            {!isApplicant && data.badge && <Badge text={data.badge} />}
          </S.Table>
        ))}
      </S.TableWrapper>
    </S.Wrapper>
  );
};

export default Table;
