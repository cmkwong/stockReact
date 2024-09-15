import { memo } from 'react';
import HandleNode from './HandleNode';
import NormalBlock from '../OperationList/Elements/NormalBlock';

const NormalBlockNode = () => {
  return (
    <HandleNode nodeType={'normal'}>
      <NormalBlock />
    </HandleNode>
  );
};

export default memo(NormalBlockNode);
