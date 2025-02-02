import { View, Text, Platform, ToastAndroid } from 'react-native'
import React from 'react'

const ShowToast = (msg) => {
  if(Platform.OS==="android"){
    msg&&ToastAndroid.show(msg,ToastAndroid.LONG)
  }
  else{
    msg&&alert(msg)
  }
}

export default ShowToast