import { memo } from 'react';
import { Position, Handle, useReactFlow } from '@xyflow/react';

const TextfieldNode = ({ id, data }) => {
  const { updateNodeData } = useReactFlow();

  return (
    <div
      style={{
        background: '#eee',
        color: '#222',
        padding: 10,
        fontsize: 12,
        borderRadius: 10,
      }}
    >
      <div>Node {id}</div>
      <div style={{ marginTop: 5 }}>
        <input
          onChange={(e) => updateNodeData(id, { text: e.target.value })}
          value={data.text}
          style={{ display: 'block' }}
          type="text"
        />
      </div>
      <Handle type="source" position={Position.Right} />
    </div>
  );
};

export default memo(TextfieldNode);
