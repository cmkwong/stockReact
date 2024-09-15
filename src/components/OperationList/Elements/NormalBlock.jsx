import styles from './NormalBlock.module.css';

const NormalBlock = () => {
  return (
    <div className={styles['container']}>
      <div className={styles['text_wrapper']}>
        <input type="text" placeholder="Normal Block" />
      </div>
    </div>
  );
};

export default NormalBlock;
