import styles from './ConcatBlock.module.css';
import Concat_logo from '../../../assets/Concat-columns.svg';

const ConcatBlock = () => {
  return (
    <div className={styles['container']}>
      <div>
        <img src={Concat_logo} alt="Concat Logo" />
      </div>
    </div>
  );
};

export default ConcatBlock;
