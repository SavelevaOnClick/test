import React from 'react';
import {Theme, themeLight} from './themes';

export const ThemeContext = React.createContext({theme: themeLight});

type TProps = {
  theme: Theme;
};

export const ThemeProvider: React.FC<TProps> = ({children, theme}) => {
  return <ThemeContext.Provider value={{theme}}>{children}</ThemeContext.Provider>;
};

ThemeProvider.defaultProps = {
  theme: themeLight,
};
