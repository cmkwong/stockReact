import { ReactFlowProvider } from '@xyflow/react';

import './App.css';
import First_Flow from './components/First_Flow';
import Node_Toolbar from './components/ToolbarNode';

function App() {
  return (
    <ReactFlowProvider>
      <First_Flow />
      {/* <Node_Toolbar /> */}
    </ReactFlowProvider>
  );
}

export default App;
