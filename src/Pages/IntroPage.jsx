import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native'
import React from 'react'
import NavBar from '../components/NavBar'
import { useNavigation } from 'expo-router'

const IntroPage = (props) => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <NavBar />

      <Button
        onPress={() =>
          navigation.navigate("SubDivisionCont", {
            Chapter: props.Chapter,
            index: props.index,
          })
        }
        title="Skip"
      ></Button>
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