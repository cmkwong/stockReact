import styles from './RubbishBin.module.css';

const RubbishBin = () => {
  return (
    <div className={styles['container']}>
      <section>
        <span className={styles['trash']}>
          <span></span>
          <i></i>
        </span>
      </section>
    </div>
  );
};

export default RubbishBin;
