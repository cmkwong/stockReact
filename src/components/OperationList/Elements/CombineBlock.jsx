import styles from './CombineBlock.module.css';
import Concat_logo from '../../../assets/Concat-columns.svg';

const CombineBlock = () => {
  return (
    <div className={styles['combine']}>
      <div>
        <img src={Concat_logo} alt="Combine Logo" />
      </div>
    </div>
  );
};

export default CombineBlock;
