---
to: src/services/theme/makeStyles.ts
---
import {useContext} from '@hooks';
import {StyleSheet} from 'react-native';
import {ThemeContext} from './Provider';
import {Theme} from './themes';

type StyleCreator<T, P> = T | ((theme: Theme, props: P) => T);
type Result<T> = {styles: T; theme: Theme};

export function makeStyles<T extends StyleSheet.NamedStyles<T> | StyleSheet.NamedStyles<any>>(
  styles: StyleCreator<T, void>,
): () => Result<T>;
export function makeStyles<T extends StyleSheet.NamedStyles<T> | StyleSheet.NamedStyles<any>, P>(
  styles: StyleCreator<T, P>,
): (props: P) => Result<T>;
export function makeStyles<T extends StyleSheet.NamedStyles<T> | StyleSheet.NamedStyles<any>, P>(
  styles: StyleCreator<T, P>,
) {
  return (props: P): Result<T> => {
    const {theme} = useContext(ThemeContext);
    const css = typeof styles === 'function' ? styles(theme, props) : styles;
    return {styles: StyleSheet.create(css), theme};
  };
}
