import OperationList from './OperationList/OperationList';
import styles from './First_Flow.module.css';

import { useCallback, useEffect, useRef, useState } from 'react';
import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  reconnectEdge,
  addEdge,
  useNodesState,
  useEdgesState,
  useReactFlow,
} from '@xyflow/react';

import '@xyflow/react/dist/style.css';

const initialNodes = [
  {
    id: '1',
    type: 'input',
    position: { x: 500, y: 500 },
    data: { label: 'Node 1' },
  },
  {
    id: '2',
    type: 'output',
    position: { x: 500, y: 600 },
    data: { label: 'Node 2' },
  },
  { id: '3', position: { x: 700, y: 600 }, data: { label: 'Node 3' } },
];

const initialEdges = [
  { id: 'e1-2', source: ' 1', target: '2', label: 'edge-1' },
];

const First_Flow = () => {
  const reactFlow = useReactFlow();
  const [count, setCount] = useState(0);
  const edgeReconnectSuccessful = useRef(true);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const countNodes = useCallback(() => {
    setCount(reactFlow.getNodes().length);
  }, [reactFlow]);

  useEffect(() => {
    console.log(`Node Count: ${count}`);
  }, [count]);

  const onConnect = useCallback(
    (params) => setEdges((els) => addEdge(params, els)),
    [setEdges]
  );

  const onReconnectStart = useCallback(() => {
    edgeReconnectSuccessful.current = false;
  }, []);

  const onReconnect = useCallback(
    (oldEdge, newConnection) => {
      edgeReconnectSuccessful.current = true;
      setEdges((els) => reconnectEdge(oldEdge, newConnection, els));
    },
    [setEdges]
  );

  const onReconnectEnd = useCallback(
    (_, edge) => {
      if (!edgeReconnectSuccessful.current) {
        setEdges((eds) => eds.filter((e) => e.id !== edge.id));
      }
      edgeReconnectSuccessful.current = true;
    },
    [setEdges]
  );

  return (
    <>
      <div style={{ position: 'absolute', zIndex: 100 }}>
        <OperationList />
      </div>
      <div className={styles['reactflow-wrapper']}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onReconnect={onReconnect}
          onReconnectStart={onReconnectStart}
          onReconnectEnd={onReconnectEnd}
          onConnect={onConnect}
        >
          <Controls />
          <MiniMap />
          <Background variant="dots" gap={12} size={1} />
        </ReactFlow>
      </div>
    </>
  );
};

export default First_Flow;
