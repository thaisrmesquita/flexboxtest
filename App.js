import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
     <View style={styles.box1}></View>
     <View style={styles.box2}></View>
     <View style={styles.box3}>
      <View style={styles.subbox}></View>
      <View style={styles.subbox}></View>
      <View style={styles.subbox}></View>
     </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'space-between',
    flexDirection:'column'
  },
  box1: {
    flex: 1,
    backgroundColor:'blue',
    margin: 4
  },
  box2: {
    flex: 2,
    backgroundColor:'blue',
    margin: 4
  },
  box3: {
    flex: 3,
    backgroundColor:'blue',
    margin: 4,
    flexDirection:'row'
  },
  subbox: {
    flex: 1,
    margin: 4,
    backgroundColor:'yellow'
  }
});
