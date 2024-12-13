import { createContext, ReactNode, useContext, useState } from "react";
import { iType } from "../../types/ContextType";
import { IEnterpreneuer } from "../../types/EnterpreneuerType";

const hookscontext = createContext<iType>({
  enterpreneuerData: {
    access: "",
    refresh: "",
    user_info: {
      username: "",
      email: "",
      first_name: "",
      last_name: "",
      date_birth: "",
      id_number: "",
      physical_address: "",
      legal_address: "",
      mobile_number: "",
      first_citizenship: "",
      second_citizenship: "",
      gender: "",
      name: "",
      picture: "",
    },
  },
  setEnterpreneuerData: () => {},
});

export default function ContextProvider({ children }: { children: ReactNode }) {
  const [enterpreneuerData, setEnterpreneuerData] = useState<IEnterpreneuer>({
    access: "",
    refresh: "",
    user_info: {
      username: "",
      email: "",
      first_name: "",
      last_name: "",
      date_birth: "",
      id_number: "",
      physical_address: "",
      legal_address: "",
      mobile_number: "",
      first_citizenship: "",
      second_citizenship: "",
      gender: "",
      name: "",
      picture: "",
    },
  });
  return (
    <hookscontext.Provider value={{ enterpreneuerData, setEnterpreneuerData }}>
      {children}
    </hookscontext.Provider>
  );
}

export const MyContext = () => {
  const context = useContext(hookscontext);
  return context;
};
