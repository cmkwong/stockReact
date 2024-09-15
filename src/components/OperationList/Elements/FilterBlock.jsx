import styles from './FilterBlock.module.css';
import Filter_logo from '../../../assets/Filter-triangle.svg';
import { Handle, Position } from '@xyflow/react';

const FilterBlock = ({ isConnectable }) => {
  return (
    <div>
      <div className={styles['filter']}>
        <img src={Filter_logo} alt="Filter Logo" />
      </div>
      {isConnectable && (
        <Handle
          type="target"
          position={Position.Left}
          isConnectable={isConnectable}
        />
      )}
      {isConnectable && (
        <Handle
          type="source"
          position={Position.Right}
          isConnectable={isConnectable}
        />
      )}
    </div>
  );
};

export default FilterBlock;
