import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {Button, StyleSheet, Text, View} from 'react-native';
import {StackParamsList} from './StackNavigationDemo';

type StackScreen1NavigationProps = StackNavigationProp<
  StackParamsList,
  'StackScreen1'
>;

const StackScreen1: React.FC = () => {
  const navigation = useNavigation<StackScreen1NavigationProps>();
  return (
    <View style={styles.container}>
      <Text> Stack Screen 1</Text>
      <Button
        onPress={() => navigation.navigate('StackScreen2', {itemId: 50})}
        title="Go to Stack Screen 2"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});

export default StackScreen1;
