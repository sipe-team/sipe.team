import clsx from 'clsx';

import { CheckCircleIcon } from '@/assets/icons';

import Badge from '../common/Badge';
import styles from './index.module.scss';

interface TableProps {
  isApplicant: boolean;
  dataList: DataListProps[];
}

interface DataListProps {
  recurring_date?: string;
  text: string;
  badge?: string | undefined;
}

function Table({ dataList, isApplicant }: TableProps) {
  return (
    <div className={styles.wrapper}>
      {dataList.map((data, index) => (
        <div
          className={clsx(styles.table, { [styles.isApplicant]: isApplicant })}
          key={index}
        >
          {isApplicant ? (
            <CheckCircleIcon />
          ) : (
            <div className={styles.subText}>{data.recurring_date}</div>
          )}
          <div
            className={clsx(styles.text, { [styles.isApplicant]: isApplicant })}
          >
            {data.text}
          </div>
          {!isApplicant && data.badge && <Badge text={data.badge} />}
        </div>
      ))}
    </div>
  );
}

export default Table;
