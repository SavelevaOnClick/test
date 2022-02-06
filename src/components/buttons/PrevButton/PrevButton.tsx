import React, {FC} from 'react';
import {Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {goBack} from '@services';
import Arrow from '../../../assets/images/Arrow';
import {styles} from './styles';

export const PrevButton: FC = () => {
  const onPress = () => goBack();
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.svgWrapper}>
        <Arrow color={'black'} size={50} />
      </Text>
    </TouchableOpacity>
  );
};
