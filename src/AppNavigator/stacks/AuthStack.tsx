import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SignIn} from '@screens';

const AuthStack = createStackNavigator();

export const AuthNavigator: React.FC = () => {
  return (
    <AuthStack.Navigator screenOptions={{headerShown: false}}>
      <AuthStack.Screen name="SignIn" component={SignIn} />
    </AuthStack.Navigator>
  );
};
