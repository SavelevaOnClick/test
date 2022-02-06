import React, {FC} from 'react';
import {View, Text} from 'react-native';
import {PrevButton} from '../../components/buttons/PrevButton/PrevButton';
import styles from './styles';

const Test2: FC = () => {
  return (
    <View style={styles.container}>
      <PrevButton />
      <Text style={styles.text}>TEEEST222222222222222</Text>
    </View>
  );
};

export default Test2;
