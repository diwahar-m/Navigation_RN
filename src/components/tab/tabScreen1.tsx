import {StyleSheet, Text, View} from 'react-native';

const TabScreen1: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={{fontWeight: 800, fontSize: 50}}>Tab Screen 1</Text>
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

export default TabScreen1;
