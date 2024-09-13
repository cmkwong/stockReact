import { createContext, useContext, useState } from 'react';

export const DnDContext = createContext([null, (_) => {}]);

export default DnDProvider = ({ children }) => {
  const [type, setType] = useState(null);

  return (
    <>
      <DnDContext.Provider value={[type, setType]}>
        {children}
      </DnDContext.Provider>
    </>
  );
};

export const useDnD = () => {
  return useContext(DnDContext);
};
