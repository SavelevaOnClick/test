import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {About, Home} from '@screens';
import AboutSvg from '../../assets/images/AboutSvg';
import HomeSvg from '../../assets/images/HomeSvg';

const HomeStack = createBottomTabNavigator();

export const HomeNavigator: React.FC = () => {
  return (
    <HomeStack.Navigator screenOptions={{headerShown: false}}>
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{tabBarIcon: ({focused}) => <HomeSvg color={focused ? 'red' : 'green'} size={24} />}}
      />
      <HomeStack.Screen
        name="About"
        component={About}
        options={{tabBarIcon: ({focused}) => <AboutSvg color={focused ? 'red' : 'green'} size={24} />}}
      />
    </HomeStack.Navigator>
  );
};
