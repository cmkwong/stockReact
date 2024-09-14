import styles from './NormalBlock.module.css';
import Normal_Block_svg from '../../../assets/Normal-block.svg';

import { memo } from 'react';
import { Handle, Position } from '@xyflow/react';

const NormalBlock = () => {
  return (
    <div>
      <div className={styles['container']}>
        <img src={Normal_Block_svg} alt="Normal Block" />
        <div className={styles['text_container']}>
          <p>Normal Block</p>
        </div>
      </div>
      {/* <div className={styles['block']}>
      </div> */}
      <Handle type="target" position={Position.Left} isConnectable={true} />
      <Handle type="source" position={Position.Right} isConnectable={true} />
    </div>
  );
};

export default memo(NormalBlock);
