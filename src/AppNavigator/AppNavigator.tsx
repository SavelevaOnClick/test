import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  Onboarding,
  // ADD NEW SCREEN
} from '../screens';
import {navigationRef, onStateChange} from '@services';
import {connect} from 'react-redux';
import {TGlobalState} from '@types';
import { HomeNavigator } from './stacks/HomeStack';
import { AuthNavigator } from './stacks/AuthStack';

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
		 <RootStack.Screen
              name={'Onboarding'}
              component={Onboarding}
              options={{headerShown: false}}
		  />
		) :
		 global.token ? (
          <RootStack.Screen
            name="HomeNavigator"
            component={HomeNavigator}
            options={{headerShown: false}}
             />
        ) : (
          <RootStack.Screen
           name="AuthNavigator"
            component={AuthNavigator}
            options={{headerShown: false}} />
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

const mapStateToProps = (state: TGlobalState) => ({
  global: state.global,
});

export default connect(mapStateToProps)(AppNavigator);
