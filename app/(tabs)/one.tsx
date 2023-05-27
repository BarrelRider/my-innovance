import { StyleSheet } from 'react-native';

import { Text, View } from '../../components/Themed';
import Lipsum from '../../components/Lipsum';
import { useSelector } from 'react-redux';
import { UserState } from '../../constants/types/UserState';

export default function TabOneScreen() {
  const user  = useSelector((state:{user: UserState}) => state.user);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Page for Lipsum - Logged as {user.name}</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Lipsum />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 16,
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
