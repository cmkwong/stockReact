import styles from './HandleNode.module.css';
import { makeComplexId } from '../../utils/strFn';

import { Handle, Position } from '@xyflow/react';
import { useDnD } from '../../store/DnDContext';
import { useCallback } from 'react';

const HandleNode = ({ children }) => {
  return (
    <div className={styles['container']}>
      {children}
      <Handle
        // id={makeComplexId(8)}
        type="target"
        position={Position.Left}
        isConnectable={true}
        style={{ background: '#0866FF' }}
      />
      <Handle
        // id={makeComplexId(8)}
        type="source"
        position={Position.Right}
        isConnectable={true}
        style={{ background: 'red' }}
      />
    </div>
  );
};

export default HandleNode;
