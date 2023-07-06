import styles from './Main.module.scss';

export const Main = ({ children }) => (
  <div className={styles.main}>{children}</div>
);