import clsx from 'clsx';

import { CheckCircleIcon } from '@/assets/icons';
import GlowArea from '@/components/GlowArea';

import Badge from '../common/Badge';
import styles from './index.module.scss';

interface TableProps {
  isApplicant: boolean;
  dataList: DataListProps[];
}

interface TableDataProps {
  isApplicant: boolean;
  data: TableProps['dataList'][number];
}

interface DataListProps {
  recurring_date?: string;
  text: string;
  badge?: string | undefined;
  highlight?: boolean | undefined;
}

function Table({ dataList, isApplicant }: TableProps) {
  return (
    <div className={styles.wrapper}>
      {dataList.map((data, index) =>
        data.highlight ? (
          <GlowArea key={index} rx={12}>
            <TableData isApplicant={isApplicant} data={data} />
          </GlowArea>
        ) : (
          <TableData key={index} isApplicant={isApplicant} data={data} />
        ),
      )}
    </div>
  );
}

function TableData({ data, isApplicant }: TableDataProps) {
  return (
    <div className={clsx(styles.table, { [styles.isApplicant]: isApplicant })}>
      {isApplicant ? (
        <CheckCircleIcon />
      ) : (
        <div className={styles.subText}>{data.recurring_date}</div>
      )}
      <div className={clsx(styles.text, { [styles.isApplicant]: isApplicant })}>
        {data.text}
      </div>
      {!isApplicant && data.badge && <Badge text={data.badge} />}
    </div>
  );
}

export default Table;
