import { IEnterpreneuer } from "./EnterpreneuerType";

export interface iType {
  enterpreneuerData: IEnterpreneuer;
  setEnterpreneuerData: React.Dispatch<React.SetStateAction<IEnterpreneuer>>;
}
