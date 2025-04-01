import { color, Flex, Typography } from '@sipe-team/side';
import clsx from 'clsx';

import Badge from '@/components/atoms/Badge';
import GlowArea from '@/components/molecules/GlowArea';
import { CheckCircleIcon } from '@/libs/assets/icons';

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
    <Flex
      align="center"
      className={styles.wrapper}
      direction="column"
      inline={true}
      gap="32px"
      justify="center"
    >
      {dataList.map((data, index) =>
        data.highlight ? (
          <GlowArea key={index} rx={12}>
            <TableData isApplicant={isApplicant} data={data} />
          </GlowArea>
        ) : (
          <TableData key={index} isApplicant={isApplicant} data={data} />
        ),
      )}
    </Flex>
  );
}

function TableData({ data, isApplicant }: TableDataProps) {
  return (
    <Flex
      align="center"
      className={clsx(styles.table, { [styles.isApplicant]: isApplicant })}
      direction="row"
      gap="20px"
      inline={true}
      justify="space-between"
    >
      {isApplicant ? (
        <CheckCircleIcon />
      ) : (
        <Typography className={styles.subText} size={14}>
          {data.recurring_date}
        </Typography>
      )}
      <Typography
        color={color.white}
        className={clsx(styles.text, { [styles.isApplicant]: isApplicant })}
        size={20}
        weight="bold"
      >
        {data.text}
      </Typography>
      {!isApplicant && data.badge && <Badge text={data.badge} />}
    </Flex>
  );
}

export default Table;
