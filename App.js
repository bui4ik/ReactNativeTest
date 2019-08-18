import React from 'react';
import { StyleSheet, View } from 'react-native';
import Posts from "./components/Posts";

export default function App() {

  return (
    <View style={styles.container}>
      <Posts />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    margin: 0,
    padding: 0
  },
});
