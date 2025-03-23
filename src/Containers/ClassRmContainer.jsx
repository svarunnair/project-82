import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import ClassRmPage from '../Pages/ClassRmPage'
import {getNodeData} from '../constants/config.js'
import ShowToast from '../components/ShowToast'



const ClassRmContainer = () => {

  const [videoData, setVideoData] = useState("")
  const [chatText,setChatText] = useState("")


  useEffect(()=>{
    getEvents()
  },[])




  const getEvents = async () => {
    // setIsLoading(true);
    try {
        // const nodeToken = await getNodeToken();
        const response = await getNodeData(
          `videos/1/1`,
          {}
          // nodeToken,
          // { user: props.nodeUserData.user }
        );

        console.log('....getEvents......response___',response)
        setVideoData(response)

        if (response?.statusCode !== 200) {
            ShowToast(response?.message);
            setIsLoading(false);
            
        }
    } catch (error) {
        console.error('Error fetching events:', error);
        setIsLoading(false);
    }
};





  return (
    <ClassRmPage setChatText={setChatText}
     videoData={videoData} 
    chatText ={chatText}/>
  );
}

export default ClassRmContainer


