import React from 'react';
import {
  createDrawerNavigator,
  DrawerNavigationProp,
} from '@react-navigation/drawer';
import {Button, StyleSheet, Text, View} from 'react-native';

type DrawerParamsList = {
  DrawerScreen1: undefined;
  DrawerScreen2: undefined;
};

const Drawer = createDrawerNavigator<DrawerParamsList>();

type DrawerScreen1Props = {
  navigation: DrawerNavigationProp<DrawerParamsList, 'DrawerScreen1'>;
};

type DrawerScreen2Props = {
  navigation: DrawerNavigationProp<DrawerParamsList, 'DrawerScreen2'>;
};

const DrawerScreen1: React.FC<DrawerScreen1Props> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Drawer 1</Text>
      <Button title="Open Drawer" onPress={() => navigation.openDrawer()} />
    </View>
  );
};

const DrawerScreen2: React.FC<DrawerScreen2Props> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Drawer 2</Text>
      <Button title="Open Drawer" onPress={() => navigation.openDrawer()} />
    </View>
  );
};

const DrawerNavigationDemo: React.FC = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="DrawerScreen1" component={DrawerScreen1} />
      <Drawer.Screen name="DrawerScreen2" component={DrawerScreen2} />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DrawerNavigationDemo;
