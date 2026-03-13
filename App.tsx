import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.xpto}>2CCA</Text>
      <Text style={styles.subtitulo}>FIAP Match</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ED145B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  xpto: {
    color: '#000',
    fontSize: 50,
    fontWeight: 'bold',
  },
  subtitulo: {
    color: '#ffffff',
    fontWeight: 'bold',
  }
});
