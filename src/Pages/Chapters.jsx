import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { WIDTH } from '../constants/dimensions';

const Chapters = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Image
        style={styles.img}
         source={require("../../assets/images/subjects/maths.png")} />
        <Text>{props.subject?.name}</Text>
      </View>
    </View>
  ); 
}

export default Chapters

const styles = StyleSheet.create({
    container :{
        flex:1,
        backgroundColor:"white"
    },
    inner:{
        padding:14,
        justifyContent:"center",
        alignItems:"center",

    },
    img:{
        width:WIDTH*.85,
        height:150,
        borderRadius:5
    }
})