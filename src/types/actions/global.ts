import {Languages} from '@constants';
import {TUsers} from '../../screens/Home/Home';

export type TSetLangAsync = {
  type: string;
  data: Languages;
};
export type TSetFirstOpenApp = {
  type: string;
  data: boolean;
};
export type TResetGlobal = {
  type: string;
};
export type TSetToken = {
  type: string;
  data: 'authToken';
};
export type TGetUsers = {
  type: string;
  data: TUsers[];
};
