import { IEnterpreneuer } from "./EnterpreneuerType";

export interface iType {
  enterpreneuerType: IEnterpreneuer;
  setEnterpreneuerType: React.Dispatch<React.SetStateAction<IEnterpreneuer>>;
}
