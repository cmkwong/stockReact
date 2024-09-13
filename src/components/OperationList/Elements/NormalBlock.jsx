import styles from './NormalBlock.module.css';

const NormalBlock = () => {
  return (
    <div className={styles['block']} draggable>
      <div className={styles['text_container']}>
        <p>Normal Block</p>
      </div>
    </div>
  );
};

export default NormalBlock;
