import styles from './index.module.scss';

interface Props {
  text: string | undefined;
}

function Badge({ text }: Props) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.text}>{text}</div>
    </div>
  );
}

export default Badge;
