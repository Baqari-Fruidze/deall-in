import { createContext, ReactNode, useContext, useState } from "react";
import { iType } from "../../types/ContextType";

const hookscontext = createContext<iType>({
  test: false,
  setTest: () => {},
});

export default function ContextProvider({ children }: { children: ReactNode }) {
  const [test, setTest] = useState(false);
  return (
    <hookscontext.Provider value={{ test, setTest }}>
      {children}
    </hookscontext.Provider>
  );
}

export const MyContext = () => {
  const context = useContext(hookscontext);
  return context;
};
