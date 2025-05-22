import {useNavigation} from '@react-navigation/native';
import {Button, StyleSheet, Text, View} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamsList} from '../RootNavigator';

type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamsList,
  'Home'
>;

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home screen</Text>
      <View style={styles.buttonContainer}>
        <Button
          onPress={() => navigation.navigate('StackDemo')}
          title="Stack Navigation Demo"
        />
        <Button
          onPress={() => navigation.navigate('TabDemo')}
          title="Tab Navigation Demo"
        />
        <Button
          onPress={() => navigation.navigate('DrawerDemo')}
          title="Drawer Navigation Demo"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'column',
    gap: 10,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 25,
    marginBottom: 50,
  },
});

export default HomeScreen;
