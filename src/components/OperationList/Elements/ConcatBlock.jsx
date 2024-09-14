import styles from './ConcatBlock.module.css';
import Concat_logo from '../../../assets/Concat-columns.svg';
import { Handle, Position } from '@xyflow/react';

const ConcatBlock = () => {
  return (
    <div className={styles['concat']}>
      <div>
        <img src={Concat_logo} alt="Concat Logo" />
      </div>
      <Handle type="target" position={Position.Left} isConnectable={true} />
      <Handle type="source" position={Position.Right} isConnectable={true} />
    </div>
  );
};

export default ConcatBlock;
