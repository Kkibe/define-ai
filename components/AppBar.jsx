import { StyleSheet } from "react-native";
import { Text, View } from "react-native";

export default AppBar = ({title}) => (
  <View style={styles.appBar}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const styles = StyleSheet.create({
  appBar: {
    height: 50,
    backgroundColor: '#2196f3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});