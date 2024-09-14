import { useState } from 'react';
import { useContext, createContext } from 'react';

const DnDContext = createContext(null, () => {});

export const DnDProvider = ({ children }) => {
  const [nodeType, setNodeType] = useState(null);

  return (
    <DnDContext.Provider value={{ nodeType, setNodeType }}>
      {children}
    </DnDContext.Provider>
  );
};

export default DnDContext;

export const useDnD = () => {
  return useContext(DnDContext);
};
