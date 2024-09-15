import styles from './NormalBlock.module.css';

const NormalBlock = () => {
  return (
    <div className={styles['block']}>
      <div className={styles['text_container']}>
        <input type="text" placeholder="Normal Block" />
      </div>
    </div>
  );
};

export default NormalBlock;
