import { useState, useContext, createContext } from "react";

const LoadingContext = createContext();
const LoadingProvider = ({ children }) => {
  const [loaddata, setLoadData] = useState(false);



  return (
    <LoadingContext.Provider value={[loaddata,setLoadData]}>
      {children}
    </LoadingContext.Provider>
  );
};

// custom hook
const useLoading= () => useContext(LoadingContext);

export {useLoading,LoadingProvider};