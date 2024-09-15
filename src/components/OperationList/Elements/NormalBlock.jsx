import styles from './NormalBlock.module.css';
import { makeComplexId } from '../../../utils/strFn';

import { memo } from 'react';
import { Handle, Position } from '@xyflow/react';

const NormalBlock = ({ isConnectable }) => {
  return (
    <div className={styles['block']}>
      <div className={styles['text_container']}>
        <input type="text" placeholder="Normal Block" />
      </div>
      {isConnectable && (
        <Handle
          type="target"
          position={Position.Left}
          isConnectable={isConnectable}
          style={{ background: 'blue' }}
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

export default memo(NormalBlock);
