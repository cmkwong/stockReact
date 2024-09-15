import { memo } from 'react';
import HandleNode from './HandleNode';
import DatabaseBlock from '../OperationList/Elements/DatabaseBlock';

const DatabaseBlockNode = () => {
  return (
    <HandleNode>
      <DatabaseBlock />
    </HandleNode>
  );
};

export default memo(DatabaseBlockNode);
