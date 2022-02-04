import {Languages} from '@constants';

export type TSetLangAsync = {
	type: string;
	data: Languages;
}
export type TSetFirstOpenApp = {
	type: string;
	data: boolean;
}
export type TResetGlobal = {
	type: string
}