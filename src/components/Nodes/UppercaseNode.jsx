import { memo, useEffect } from 'react';
import {
  Position,
  NodeProps,
  useReactFlow,
  Handle,
  useHandleConnections,
  useNodesData,
} from '@xyflow/react';

const isTextNode = (node) => {
  return node.type === 'text' || node.type === 'uppercase';
};

const UppercaseNode = ({ id }) => {
  const { updateNodeData } = useReactFlow();
  // create connection about target Handle point
  const connections = useHandleConnections({
    type: 'target',
  });
  // finding the node which connected to this node
  const nodesData = useNodesData(connections[0]?.source); // assume only one node that connect to
  const textNode = isTextNode(nodesData) ? nodesData : null;

  useEffect(() => {
    updateNodeData(id, { text: textNode?.data.text.toUpperCase() });
  }, [textNode]);

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
      <Handle
        type="target"
        position={Position.Left}
        isConnectable={connections.length === 0}
      />
      <div>Uppercase Transform</div>
      <Handle type="source" position={Position.Right}></Handle>
    </div>
  );
};

export default memo(UppercaseNode);
