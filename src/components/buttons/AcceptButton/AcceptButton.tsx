import React, {FC} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Text} from '@components';
import styles from './styles';

type TProps = {
  onPress: () => void;
  btnTitle: string;
};
export const AcceptButton: FC<TProps> = ({onPress, btnTitle, ...props}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.btn} {...props}>
      <Text style={styles.test}>{btnTitle}</Text>
    </TouchableOpacity>
  );
};
