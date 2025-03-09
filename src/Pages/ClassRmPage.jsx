import { View, Text, StyleSheet, Button } from 'react-native'
import React, { useRef, useState } from 'react'
import NavBar from '../components/NavBar';
import * as ScreenOrientation from 'expo-screen-orientation'
import {Video} from "expo-av"
import { HEIGHT, WIDTH } from '../constants/dimensions';

const ClassRmPage = (props) => {
    
    const video = useRef(null)
    const [status, setStatus] = useState({})
    const[orientationIsLandscape, setOrientationIsLandscape] = useState(true)

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

        {/* <Video
          source={{ uri: videoData }}
          style={styles.video}
          controls={true} // Show built-in controls (play, pause, etc.)
          resizeMode="contain"
          paused={false}
          
        /> */}
      </View>

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
  video:{
    borderWidth:1,
    borderColor:"red",
    height:HEIGHT*.5,
    width:WIDTH*.8,
    elevation:2
  }
});