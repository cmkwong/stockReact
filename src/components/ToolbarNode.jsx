import { useCallback } from 'react';
import {
  ReactFlow,
  Panel,
  NodeToolbar,
  Position,
  useNodesState,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

const initialNodes = [
  {
    id: '1',
    parentNode: 'someothernode',
    position: { x: 0, y: 0 },
    type: 'node-with-toolbar',
    data: { label: 'Select me to show the toolbar' },
  },
];

const NodeWithToolbar = ({ data }) => {
  return (
    <>
      <NodeToolbar
        isVisible={data.forceToolbarVisible || undefined}
        position={data.toolbarPosition}
      >
        <button>cut</button>
        <button>copy</button>
        <button>paste</button>
      </NodeToolbar>
      <div className="react-flow__node-default">{data?.label}</div>
    </>
  );
};
const nodeTypes = {
  'node-with-toolbar': NodeWithToolbar,
};

function ToolbarNode() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const setPosition = useCallback(
    (pos) =>
      setNodes((nodes) =>
        nodes.map((node) => ({
          ...node,
          data: { ...node.data, toolbarPosition: pos },
        }))
      ),
    [setNodes]
  );
  const forceToolbarVisible = useCallback((enabled) =>
    setNodes((nodes) =>
      nodes.map((node) => ({
        ...node,
        data: { ...node.data, forceToolbarVisible: enabled },
      }))
    )
  );

  return (
    <div style={{ height: 800 }}>
      <ReactFlow
        nodes={nodes}
        onNodesChange={onNodesChange}
        nodeTypes={nodeTypes}
        fitView
        preventScrolling={false}
      >
        <Panel>
          <h3>Node Toolbar position:</h3>
          <button onClick={() => setPosition(Position.Top)}>top</button>
          <button onClick={() => setPosition(Position.Right)}>right</button>
          <button onClick={() => setPosition(Position.Bottom)}>bottom</button>
          <button onClick={() => setPosition(Position.Left)}>left</button>
          <h3>Override Node Toolbar visibility</h3>
          <label>
            <input
              type="checkbox"
              onChange={(e) => forceToolbarVisible(e.target.checked)}
            />
            <span>Always show toolbar</span>
          </label>
        </Panel>
      </ReactFlow>
    </div>
  );
}

export default ToolbarNode;
