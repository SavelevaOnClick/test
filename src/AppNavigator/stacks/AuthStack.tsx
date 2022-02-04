import { createStackNavigator } from "@react-navigation/stack";
import { SignIn } from "@screens";
import React from 'react';

const AuthStack = createStackNavigator();

export const AuthNavigator: React.FC = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="SignIn" component={SignIn} />
    </AuthStack.Navigator>
  );
};