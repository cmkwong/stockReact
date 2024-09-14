import Zip_logo from '../../assets/OperationList-zip.svg';

import styles from './OperationList.module.css';

import OperatorBody from './OperatorBody';
import NormalBlock from './Elements/NormalBlock';
import ConcatBlock from './Elements/ConcatBlock';
import CombineBlock from './Elements/CombineBlock';
import FilterBlock from './Elements/FilterBlock';

import { useCallback, useState } from 'react';
import { useDnD } from '../../store/DnDContext';

const OperationList = () => {
  const dnDContext = useDnD();

  const [zipHovered, setZipHovered] = useState(false);

  const [listHide, setListHide] = useState(true);

  const onDragStart = (e, nodeType) => {
    dnDContext.setNodeType(nodeType);
    e.dataTransfer.effectAllowed = 'move';
  };

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
        <div onDragStart={(e) => onDragStart(e, 'normal')} draggable>
          <NormalBlock />
        </div>
        <div onDragStart={(e) => onDragStart(e, 'concat')} draggable>
          <ConcatBlock />
        </div>
        <div onDragStart={(e) => onDragStart(e, 'combine')} draggable>
          <CombineBlock />
        </div>
        <div onDragStart={(e) => onDragStart(e, 'filter')} draggable>
          <FilterBlock />
        </div>
      </OperatorBody>
    </div>
  );
};

export default OperationList;
