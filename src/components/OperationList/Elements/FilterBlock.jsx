import styles from './FilterBlock.module.css';
import Filter_logo from '../../../assets/Filter-triangle.svg';
import { Handle, Position } from '@xyflow/react';

const FilterBlock = () => {
  return (
    <div>
      <div className={styles['filter']}>
        <img src={Filter_logo} alt="Filter Logo" />
      </div>
      <Handle type="target" position={Position.Left} isConnectable={true} />
      <Handle type="source" position={Position.Right} isConnectable={true} />
    </div>
  );
};

export default FilterBlock;
