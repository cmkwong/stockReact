import { memo } from 'react';
import HandleNode from './HandleNode';
import ConcatBlock from '../OperationList/Elements/ConcatBlock';

const ConcatBlockNode = () => {
  return (
    <HandleNode nodeType={'concat'}>
      <ConcatBlock />
    </HandleNode>
  );
};

export default memo(ConcatBlockNode);
