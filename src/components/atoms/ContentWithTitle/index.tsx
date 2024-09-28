import styles from './index.module.scss';

type ContentWithTitleProps = {
  title: string;
  children: React.ReactNode | React.ReactNode[];
};

function ContentWithTitle({ title, children }: ContentWithTitleProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>{title}</div>
      {children}
    </div>
  );
}

export default ContentWithTitle;
