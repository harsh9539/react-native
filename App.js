import { StatusBar } from 'expo-status-bar';
import {StyleSheet, View } from 'react-native';
import TodoList from './components/todolist/TodoList';

export default function App() {
  return (
    <View style={styles.container}>
      <TodoList/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
