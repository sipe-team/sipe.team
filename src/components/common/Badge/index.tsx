import styles from './index.module.scss';

interface Text {
  text: string | undefined;
}

const Badge = ({ text }: Text) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.text}>{text}</div>
    </div>
  );
};

export default Badge;
