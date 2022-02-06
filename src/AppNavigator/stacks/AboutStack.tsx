import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Test1, Test2} from '@screens';

const TestStack = createStackNavigator();

export const AuthNavigator: React.FC = () => {
  return (
    <TestStack.Navigator screenOptions={{headerShown: false}}>
      <TestStack.Screen name="Test1" component={Test1} />
      <TestStack.Screen name="Test2" component={Test2} />
    </TestStack.Navigator>
  );
}
