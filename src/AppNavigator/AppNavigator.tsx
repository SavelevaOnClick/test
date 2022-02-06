import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {connect} from 'react-redux';
import {navigationRef, onStateChange} from '@services';
import {TGlobalState} from '@types';
import {
  Onboarding, Test1, Test2, // ADD NEW SCREEN
} from '../screens';
import {AuthNavigator} from './stacks/AuthStack';
import {HomeNavigator} from './stacks/HomeStack';

type TProps = {
  global: TGlobalState['global'];
};

const RootStack = createStackNavigator();
const AppNavigator: React.FC<TProps> = ({global}) => {
  console.log('global', global);
  return (
    <NavigationContainer ref={navigationRef} onStateChange={onStateChange}>
      <RootStack.Navigator screenOptions={{headerShown: false, gestureEnabled: false}}>
        {global.firstOpenApp ? (
          <RootStack.Screen name="Onboarding" component={Onboarding} options={{headerShown: false}} />
        ) : global.token ? (
          <>
            <RootStack.Screen name="HomeNavigator" component={HomeNavigator} />
            <RootStack.Screen name="test1" component={Test1} />
            <RootStack.Screen name="test2" component={Test2} />
          </>
        ) : (
          <RootStack.Screen name="AuthNavigator" component={AuthNavigator} />
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

const mapStateToProps = (state: TGlobalState) => ({
  global: state.global,
});

export default connect(mapStateToProps)(AppNavigator);
