import {TUsers} from '../screens/Home/Home';

export type TGlobalState = {
  global: {
    firstOpenApp: boolean;
    token: string;
    lang: string;
  };
  users: {
    users: TUsers[] | null;
  };
};
