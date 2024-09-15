import { memo } from 'react';
import HandleNode from './HandleNode';
import CombineBlock from '../OperationList/Elements/CombineBlock';

const CombineBlockNode = () => {
  return (
    <HandleNode>
      <CombineBlock />
    </HandleNode>
  );
};

export default memo(CombineBlockNode);
