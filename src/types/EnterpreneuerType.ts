// export interface IEnterpreneuer {
//   username: string;
//   email: string;
//   first_name: string;
//   last_name: string;
//   date_birth: string;
//   id_number: string | null;
//   physical_address: string | null;
//   legal_address: string | null;
//   mobile_number: string | null;
//   first_citizenship: string | null;
//   second_citizenship: string | null;
//   gender: string | null;
//   name?: string | undefined;
//   picture?: string | null;
// }

export type UserInfo = {
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  date_birth: string;
  id_number: string;
  physical_address: string;
  legal_address: string;
  mobile_number: string;
  first_citizenship: string;
  second_citizenship: string;
  gender: string;
  name: string;
  picture: string;
};

export type IEnterpreneuer = {
  access: string;
  refresh: string;
  user_info: UserInfo;
};
