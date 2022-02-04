import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "@screens";

const HomeStack = createStackNavigator();

export const HomeNavigator: React.FC = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={Home} />
    </HomeStack.Navigator>
  );
};