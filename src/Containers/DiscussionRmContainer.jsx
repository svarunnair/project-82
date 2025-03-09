import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import DiscussionRoom from "../Pages/DiscussionRoom";
import { postNodeData } from '../constants/config';
import ShowToast from '../components/ShowToast';

const DiscussionRmContainer = () => {
    const [chatText,setChatText] = useState("")
    const [chatResponse,setChatResponse] = useState("")


    console.log("........///...chatResponse//././.....", chatResponse);






    const postChatData = async (res) => {
    // const nodeToken = await getNodeToken()
    const requestBody = {
      question:chatText,
    };
    try {
      const response = await postNodeData(
        "get-response/",
        requestBody,
        // nodeToken,
        // { user: props.nodeUserData.user }
      );

      console.log("....response....///.", response);
      setChatResponse(response.response);
      setChatText("")
      if (response.statusCode !== 200) {
        ShowToast(response.message)
       
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
    //   setIsLoading(false);
         
    } catch (error) {
    //   setIsLoading(false);
      console.error('Error:', error);
      
    }
   };





    console.log("....chatText.....", chatText);
  return (
    <DiscussionRoom
        chatText={chatText}
      chatResponse={chatResponse}
      postChatData={postChatData}
      setChatText={setChatText}
    />
  );
}

export default DiscussionRmContainer