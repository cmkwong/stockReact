import OperationList from './OperationList/OperationList';
import styles from './First_Flow.module.css';
import { makeComplexId } from '../utils/strFn';

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
import { useDnD } from '../store/DnDContext';
import NormalBlock from './OperationList/Elements/NormalBlock';
import CombineBlock from './OperationList/Elements/CombineBlock';
import ConcatBlock from './OperationList/Elements/ConcatBlock';
import FilterBlock from './OperationList/Elements/FilterBlock';

import NormalBlockNode from './Nodes/NormalBlockNode';
import CombineBlockNode from './Nodes/CombineBlockNode';
import ConcatBlockNode from './Nodes/ConcatBlockNode';
import FilterBlockNode from './Nodes/FilterBlockNode';

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

const nodeTypes = {
  normal: NormalBlockNode,
  combine: CombineBlockNode,
  concat: ConcatBlockNode,
  filter: FilterBlockNode,
};

const initialEdges = [
  { id: 'e1-2', source: ' 1', target: '2', label: 'edge-1' },
];

const First_Flow = () => {
  const reactFlow = useReactFlow();
  const [count, setCount] = useState(0);
  const edgeReconnectSuccessful = useRef(true);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const { screenToFlowPosition } = useReactFlow();

  const dnDContext = useDnD();

  // const countNodes = useCallback(() => {
  //   setCount(reactFlow.getNodes().length);
  // }, [reactFlow]);

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

  // when edge connection end
  const onReconnectEnd = useCallback(
    (_, edge) => {
      if (!edgeReconnectSuccessful.current) {
        setEdges((eds) => eds.filter((e) => e.id !== edge.id));
      }
      edgeReconnectSuccessful.current = true;
    },
    [setEdges]
  );

  const onDrop = useCallback(
    (e) => {
      e.preventDefault();

      // check if the dropped element is valid
      if (!dnDContext.nodeType) return;

      const position = screenToFlowPosition({
        x: e.clientX,
        y: e.clientY,
      });

      const id = makeComplexId(8);
      const newNode = {
        id,
        type: dnDContext.nodeType,
        position,
        data: { label: `${dnDContext.nodeType} node - ${id}` },
      };
      setNodes((nds) => nds.concat(newNode));
    },
    [screenToFlowPosition, dnDContext.nodeType]
  );

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  return (
    <>
      <div style={{ position: 'absolute', zIndex: 100 }}>
        <OperationList />
      </div>
      <div className={styles['reactflow-wrapper']}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onReconnect={onReconnect}
          onReconnectStart={onReconnectStart}
          onReconnectEnd={onReconnectEnd}
          onConnect={onConnect}
          onDrop={onDrop}
          onDragOver={onDragOver}
          onNodeDoubleClick={(e, node) => console.log(e, node)}
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
