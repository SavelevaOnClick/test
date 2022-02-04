import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import {About} from "@screens";

const AboutStack = createStackNavigator();

export const AuthNavigator: React.FC = () => {
  return (
    <AboutStack.Navigator>
      <AboutStack.Screen
       name="About"
       component={About}
       />
    </AboutStack.Navigator>
  );
}