import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
  StyleSheet,
  Text,
} from "react-native";
import ChatNavBar from "../components/ChatNavBar";
import { WIDTH } from "../constants/dimensions";
import Icon from "react-native-vector-icons/FontAwesome";
import LoadingModel from '../constants/Loading'

const DiscussionRoom = (props) => {
 

  return (
    <>
      <ChatNavBar />

      <LoadingModel loading={props.isLoading} />

      <View
        style={{
          backgroundColor: "white",
          borderWidth: 0.2,
          borderRadius: 5,
          padding: 10,
        }}
      >
        <Text style={{ color: "black" }}>{props.chatResponse}</Text>
      </View>
      <View style={styles.container}>
        {/* Chat Input Box */}
        <View style={[styles.chatBox]}>
          <TouchableOpacity style={styles.sendButton}>
            <Icon name="image" size={12} color="white" />
          </TouchableOpacity>
          <TextInput
            value={props.chatText}
            onChangeText={(e) => props.setChatText(e)}
            style={styles.input}
            placeholder="Type your message..."
            placeholderTextColor="#777"
          />
          <TouchableOpacity
            onPress={props.postChatData}
            style={styles.sendButton}
          >
            <Icon name="send" size={12} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F2",
    justifyContent: "flex-end", // Keeps everything at the bottom
  },
  chatBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginHorizontal: 10,
    borderWidth: 0.5,
    borderColor: "#ddd",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
    position: "absolute",
    bottom: 10, // Keeps it fixed at the bottom
    left: 10,
    right: 10,
  },
  chatBoxWithKeyboard: {
    bottom: 50, // Moves input up when keyboard appears
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "black",
    paddingHorizontal: 10,
  },
  sendButton: {
    backgroundColor: "#007AFF",
    padding: 10,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default DiscussionRoom;
