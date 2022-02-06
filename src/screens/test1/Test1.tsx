import React, {FC} from 'react';
import {View, Text} from 'react-native';
import {PrevButton} from '../../components/buttons/PrevButton/PrevButton';
import styles from './styles';

const Test1: FC = () => {
  return (
    <View style={styles.container}>
      <PrevButton />
      <Text style={styles.text}>TEEEST11111111111111</Text>
    </View>
  );
};
export default Test1;
