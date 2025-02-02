import React from "react";
import { View, Text, StyleSheet, ActivityIndicator, Image } from "react-native";

const SplashScreen = () => {
  return (
    <View style={styles.container}>
    
    <Image source={require('../../assets/images/eduLog.png')}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
  },
});

export default SplashScreen;
