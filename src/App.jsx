import { ReactFlowProvider } from '@xyflow/react';
import { DnDProvider } from './store/DnDContext';
import './App.css';
import First_Flow from './components/First_Flow';
import Node_Toolbar from './components/ToolbarNode';

function App() {
  return (
    <ReactFlowProvider>
      <DnDProvider>
        <First_Flow />
        {/* <Node_Toolbar /> */}
      </DnDProvider>
    </ReactFlowProvider>
  );
}

export default App;
