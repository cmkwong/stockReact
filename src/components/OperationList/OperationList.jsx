import Zip_logo from '../../assets/OperationList-zip.svg';

import styles from './OperationList.module.css';

import OperatorBody from './OperatorBody';
import NormalBlock from './Elements/NormalBlock';
import ConcatBlock from './Elements/ConcatBlock';
import CombineBlock from './Elements/CombineBlock';
import FilterBlock from './Elements/FilterBlock';
import { useCallback, useState } from 'react';

const OperationList = () => {
  const [zipHovered, setZipHovered] = useState(false);

  const [listHide, setListHide] = useState(true);

  return (
    <div
      className={styles['container'] + (listHide ? ` ${styles['hide']}` : '')}
    >
      <div
        className={
          `${styles['zip']}` + (zipHovered ? ` ${styles['hovered']}` : '')
        }
        onMouseEnter={() => setZipHovered(true)}
        onMouseLeave={() => setZipHovered(false)}
        onClick={() => setListHide(!listHide)}
      >
        <img src={Zip_logo} alt="Zip Logo" />
      </div>
      <OperatorBody hide={listHide}>
        <NormalBlock />
        <ConcatBlock />
        <CombineBlock />
        <FilterBlock />
      </OperatorBody>
    </div>
  );
};

export default OperationList;
