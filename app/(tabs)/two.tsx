import { StyleSheet } from 'react-native';

import ExampleForm from '../../components/ExampleForm';
import { Text, View } from '../../components/Themed';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Form page can be tested here</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <ExampleForm />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {   
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    width: "100%",
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 8,
    height: 1,
    width: '100%',
  },
});
