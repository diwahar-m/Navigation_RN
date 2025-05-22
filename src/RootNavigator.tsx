import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import HomeScreen from './screens/HomeScreen';
import StackNavigationDemo from './components/stack/StackNavigationDemo';
import TabNavigationDemo from './components/tab/tabNavigationDemo';
import DrawerNavigationDemo from './components/drawer/drawerNavigationdemo';

export type RootStackParamsList = {
  Home: undefined;
  StackDemo: undefined;
  TabDemo: undefined;
  DrawerDemo: undefined;
};

const Stack = createStackNavigator<RootStackParamsList>();

const RootNavigator: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen
        options={{headerShown: false}}
        name="StackDemo"
        component={StackNavigationDemo}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="TabDemo"
        component={TabNavigationDemo}
      />
      <Stack.Screen
        name="DrawerDemo"
        options={{headerShown: false}}
        component={DrawerNavigationDemo}
      />
    </Stack.Navigator>
  );
};

export default RootNavigator;
