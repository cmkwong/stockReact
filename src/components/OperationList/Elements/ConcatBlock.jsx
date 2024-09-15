import styles from './ConcatBlock.module.css';
import Concat_logo from '../../../assets/Concat-columns.svg';
import { Handle, Position } from '@xyflow/react';

const ConcatBlock = ({ isConnectable }) => {
  return (
    <div className={styles['concat']}>
      <div>
        <img src={Concat_logo} alt="Concat Logo" />
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

export default ConcatBlock;
