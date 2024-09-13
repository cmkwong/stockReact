import styles from './FilterBlock.module.css';
import Filter_logo from '../../../assets/Filter-triangle.svg';

const FilterBlock = () => {
  return (
    <div className={styles['filter']}>
      <img src={Filter_logo} alt="Filter Logo" />
    </div>
  );
};

export default FilterBlock;
