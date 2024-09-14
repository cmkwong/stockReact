import styles from './CombineBlock.module.css';
import Concat_logo from '../../../assets/Concat-columns.svg';
import { memo } from 'react';
import { Handle, Position } from '@xyflow/react';

const CombineBlock = () => {
  return (
    <div className={styles['combine']}>
      <div>
        <img src={Concat_logo} alt="Combine Logo" />
      </div>
      <Handle type="target" position={Position.Left} isConnectable={true} />
      <Handle type="source" position={Position.Right} isConnectable={true} />
    </div>
  );
};

export default memo(CombineBlock);
