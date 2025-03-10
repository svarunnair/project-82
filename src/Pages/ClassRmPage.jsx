import { View, Text, StyleSheet, Button, TouchableOpacity, Modal } from 'react-native'
import React, { useRef, useState } from 'react'
import NavBar from '../components/NavBar';
import * as ScreenOrientation from 'expo-screen-orientation'
import {Video} from "expo-av"
import { HEIGHT, WIDTH } from '../constants/dimensions';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import Icon from "react-native-vector-icons/FontAwesome";

const ClassRmPage = (props) => {
    
    const video = useRef(null)
    const [status, setStatus] = useState({})
    const[orientationIsLandscape, setOrientationIsLandscape] = useState(true)
    const [isModalAsk,setIsModalAsk] = useState(false)

    // const videoArray = Object.values(props.videoData);
    const videoData = props.videoData[0]?.video_file;

    console.log("..))))___-videoData____...", videoData);

    const changeScreenOrientation =async()=>{
        if(orientationIsLandscape){
            ScreenOrientation.lockAsync(ScreenOrientation.Orientation.LANDSCAPE_RIGHT)
        }
        else if(!orientationIsLandscape){
            ScreenOrientation.lockAsync(ScreenOrientation.Orientation.PORTRAIT_UP)
        }
    }


    const toggleOrientation =()=>{
        setOrientationIsLandscape(!orientationIsLandscape)
        changeScreenOrientation()
    }


  return (
    <View style={styles.container}>
      <NavBar />

      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Video
          ref={video}
          style={styles.video}
          source={{ uri: videoData }}
          useNativeControls
          resizeMode="contain"
          onPlaybackStatusUpdate={(status) => setStatus(() => status)}
        />

        <TouchableOpacity
          onPress={() => setIsModalAsk(true)}
          style={{
            display: "flex",

            backgroundColor: "orange",
            width: WIDTH * 0.2,
            height: 20,
            borderRadius: 20,
          }}
        >
          <Text style={{ color: "black", textAlign: "center" }}>Ask me</Text>
        </TouchableOpacity>

        {/* <Video
          source={{ uri: videoData }}
          style={styles.video}
          controls={true} // Show built-in controls (play, pause, etc.)
          resizeMode="contain"
          paused={false}
          
        /> */}
      </View>

      <Modal
        visible={isModalAsk}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setIsModalAsk(false)}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Dark background with transparency
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: 300,
              height: HEIGHT * 0.7,
              padding: 20,
              backgroundColor: "white",
              borderRadius: 10,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.3,
              shadowRadius: 4,
              elevation: 5,
            }}
          >
            <Text
              style={{
                color: "black",
                fontWeight: 500,
                textAlign: "center",
                fontFamily: "sans-serif-medium",
              }}
            >
              Ask Me
            </Text>
          

            <ScrollView
              contentContainerStyle={{}}
              style={{ borderWidth: .2,borderRadius:5, height: "80%" }}
            ></ScrollView>

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
        </View>
      </Modal>

      {/* <Button title="Change" onPress={toggleOrientation} /> */}
    </View>
  );
}

export default ClassRmPage



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  video: {
    borderWidth: 1,
    borderColor: "red",
    height: HEIGHT * 0.5,
    width: WIDTH * 0.8,
    elevation: 2,
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