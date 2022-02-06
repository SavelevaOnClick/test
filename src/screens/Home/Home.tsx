import React, {Dispatch, FC} from 'react';
import {ActivityIndicator, FlatList} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {connect} from 'react-redux';
import {View, Text} from '@components';
import {useEffect, useCallback} from '@hooks';
import {resetGlobal} from '@reducers/global';
import {getUsers} from '@reducers/users/reduser';
import {navigate} from '@services';
import type {TGlobalState} from '@types';
import {TGetUsers, TResetGlobal} from '@types';
import {AcceptButton} from '../../components/buttons/AcceptButton/AcceptButton';
import {ResetButton} from '../../components/buttons/ResetButton/ResetButton';
import {UserImageItem} from './components';
import styles from './styles';

type TData = TGlobalState['users'];

type TProps = {
  reset: () => void;
  getUsersImages: () => void;
  users: TData;
};
export type TUsers = {
  id: number;
  avatar_url: string;
};
const Home: FC<TProps> = ({reset, getUsersImages, users}) => {
  const onPressToTest1 = useCallback(() => navigate('test1'), []);
  const onPressToTest2 = useCallback(() => navigate('test2'), []);

  useEffect(() => {
    getUsersImages();
  }, [getUsersImages]);

  const onPressReset = useCallback(() => {
    reset();
  }, [reset]);

  const renderItem = useCallback(({item}) => <UserImageItem userData={item} />, []);

  console.log('home');
  return (
    <LinearGradient colors={['#6e45e2', '#88d3ce']} style={styles.forGrad} start={{x: 0, y: 0}} end={{x: 1, y: 1}}>
      <View style={styles.container}>
        <Text>Screen</Text>
        {users?.users ? (
          <View style={styles.listContainer}>
            <FlatList
              data={users.users}
              renderItem={renderItem}
              horizontal={true}
              keyExtractor={item => String(item.id)}
            />
          </View>
        ) : (
          <ActivityIndicator size="large" color="#00ff00" />
        )}
        <View style={styles.buttonWrapper}>
          <ResetButton onPress={onPressReset} style={{width: 400}} />
          <AcceptButton onPress={onPressToTest1} btnTitle="TEST1" />
          <AcceptButton onPress={onPressToTest2} btnTitle="TEST2" />
        </View>
      </View>
    </LinearGradient>
  );
};
const mapStateToProps = (state: TGlobalState) => ({
  users: state.users,
});

const mapDispatchToProps = (dispatch: Dispatch<TResetGlobal | TGetUsers>) => ({
  reset: () => dispatch(resetGlobal()),
  getUsersImages: () => dispatch(getUsers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
