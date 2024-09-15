import { memo } from 'react';
import HandleNode from './HandleNode';
import FilterBlock from '../OperationList/Elements/FilterBlock';

const FilterBlockNode = () => {
  return (
    <HandleNode>
      <FilterBlock />
    </HandleNode>
  );
};

export default memo(FilterBlockNode);
