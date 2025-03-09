import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons"; // Using Ionicons for icons
import { useNavigation } from "expo-router";

const ChatNavBar = ({ onNotificationPress }) => {
    const navigation = useNavigation()
    const onBackPress =()=>{
        navigation.goBack()
    }
  return (
    <View style={styles.container}>
      {/* Back Button */}

      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 15,
        }}
      >
        <TouchableOpacity onPress={onBackPress} style={styles.iconButton}>
          <Icon name="arrow-back" size={24} color="black" />
        </TouchableOpacity>

        {/* Title */}
        <Text style={styles.title}>Discussion Box</Text>
      </View>

      {/* Notification Bell */}
      {/* <TouchableOpacity onPress={onNotificationPress} style={styles.iconButton}>
        <Icon name="notifications" size={24} color="black" />
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
    backgroundColor: "#fff", // Change as needed
    elevation: 3, // Shadow for Android
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    borderBottomWidth:.3
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    
  },
  iconButton: {
    padding: 5,
  },
});

export default ChatNavBar;
