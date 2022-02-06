---
to: src/services/theme/themes.ts
---
import {TCommon, themeCommon} from './themeCommon';

export const themeLight: Theme = {
  ...themeCommon,
  appBackground: '#0000FF',
  text: '#FF0000',
};

export const themeDark: Theme = {
  ...themeCommon,
  appBackground: '#FFFFFF',
  text: '#000000',
};

type ThemeStyle = {
  appBackground: string;
  text: string;
};

export type Theme = TCommon & ThemeStyle;
