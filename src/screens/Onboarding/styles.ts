import {StyleSheet} from 'react-native';
import {top} from '@constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: top,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    backgroundColor: 'blue',
    opacity: 0.3,
  },
  text: {
    fontSize: 44,
    color: 'grey',
    opacity: 0.7,
    flex: 1,
  },
});
