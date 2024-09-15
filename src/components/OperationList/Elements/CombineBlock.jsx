import styles from './CombineBlock.module.css';
import Concat_logo from '../../../assets/Concat-columns.svg';
import { memo } from 'react';
import { Handle, Position } from '@xyflow/react';

const CombineBlock = ({ isConnectable }) => {
  return (
    <div className={styles['combine']}>
      <div>
        <img src={Concat_logo} alt="Combine Logo" />
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

export default memo(CombineBlock);
