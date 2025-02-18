import { View, Text, StyleSheet, Button } from 'react-native'
import React, { useRef, useState } from 'react'
import NavBar from '../components/NavBar';
import * as ScreenOrientation from 'expo-screen-orientation'
import {Video} from "expo-av"
import { WIDTH } from '../constants/dimensions';

const ClassRmPage = () => {
    
    const video = useRef(null)
    const [status, setStatus] = useState({})
    const[orientationIsLandscape, setOrientationIsLandscape] = useState(true)

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

      <View style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        <Video 
        ref={video} 
        style={styles.video} 
        source={require("../../assets/videos/video_2023-12-01_14-35-24.mp4")}
        useNativeControls
        resizeMode='contain'
        onPlaybackStatusUpdate={status=>setStatus(()=>status)}/>
      </View>

      <Button title="Change" onPress={toggleOrientation} />
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
    height:200,
    width:WIDTH*.8,
  }
});