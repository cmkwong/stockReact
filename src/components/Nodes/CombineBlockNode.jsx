import { memo } from 'react';
import HandleNode from './HandleNode';
import CombineBlock from '../OperationList/Elements/CombineBlock';

const CombineBlockNode = () => {
  return (
    <HandleNode nodeType={'combine'}>
      <CombineBlock />
    </HandleNode>
  );
};

export default memo(CombineBlockNode);
