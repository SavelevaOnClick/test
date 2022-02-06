---
to: src/components/typography/TextInput/TextInput.tsx
unless_exists: true
---
import React, {forwardRef, ForwardRefRenderFunction} from 'react';
import {TextInput as TI, TextInputProps} from 'react-native';
import {useStyles} from './styles';

const TextInput: ForwardRefRenderFunction<TI, TextInputProps> = ({style, ...otherProps}, ref) => {
  const {styles} = useStyles();
  return <TI ref={ref} style={[styles.defaultText, style]} {...otherProps} />;
};

export default forwardRef(TextInput);
