import {StyleSheet, Text, View} from 'react-native';

const TabScreen2: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Tab Screen 2</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'skyblue',
  },
});
export default TabScreen2;
