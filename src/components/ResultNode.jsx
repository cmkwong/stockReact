import { memo } from 'react';
import {
  Handle,
  Position,
  useHandleConnections,
  useNodesData,
} from '@xyflow/react';

const isTextNode = (node) => {
  return node.type === 'text' || node.type === 'uppercase';
};

const ResultNode = () => {
  // create connection about target Handle point
  const connections = useHandleConnections({ type: 'target' });
  // getting the node data from source
  const nodesData = useNodesData(
    connections.map((connection) => connection.source)
  );
  const textNodes = nodesData.filter(isTextNode);

  return (
    <div
      style={{
        background: '#eee',
        color: '#222',
        padding: 10,
        fontSize: 12,
        borderRadius: 10,
      }}
    >
      <Handle type="target" position={Position.Left} />
      <div>
        incoming texts:{' '}
        {textNodes.map(({ data }, i) => <div key={i}>{data.text}</div>) ||
          'none'}
      </div>
    </div>
  );
};

export default memo(ResultNode);
