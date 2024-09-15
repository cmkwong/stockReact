import { ReactFlowProvider } from '@xyflow/react';
import { DnDProvider } from './store/DnDContext';
import './App.css';
import First_Flow from './components/First_Flow';

function App() {
  return (
    <ReactFlowProvider>
      <DnDProvider>
        <First_Flow />
      </DnDProvider>
    </ReactFlowProvider>
  );
}

export default App;
