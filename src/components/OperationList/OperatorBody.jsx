import styles from './OperatorBody.module.css';

const OperatorBody = ({ children, hide }) => {
  return (
    <div className={styles['body'] + (hide ? ` ${styles['hide']}` : '')}>
      <div className={styles['elements']}>{children}</div>
    </div>
  );
};

export default OperatorBody;
