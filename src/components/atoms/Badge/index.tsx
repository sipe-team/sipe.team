import { Flex } from '@sipe-team/side';

import styles from './index.module.scss';

interface Props {
  text: string | undefined;
}

function Badge({ text }: Props) {
  return (
    <Flex
      align="center"
      className={styles.wrapper}
      gap="12px"
      inline={true}
      justify="center"
    >
      <div className={styles.text}>{text}</div>
    </Flex>
  );
}

export default Badge;
