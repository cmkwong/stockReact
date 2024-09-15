import styles from './DatabaseBlock.module.css';
import Database_logo from '../../../assets/Database.svg';

const DatabaseBlock = () => {
  return (
    <div className={styles['container']}>
      <div>
        <img src={Database_logo} alt="Database Logo" />
        <input type="text" />
      </div>
    </div>
  );
};

export default DatabaseBlock;
