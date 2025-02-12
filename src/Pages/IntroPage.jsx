import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import NavBar from '../components/NavBar'

const IntroPage = () => {
  return (
    <View style={styles.container}>
      <NavBar />
      
    </View>
  );
}

export default IntroPage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    // padding: 14,
  },
});