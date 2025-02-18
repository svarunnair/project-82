import { View, Text } from 'react-native'
import React from 'react'
import IntroPage from '../Pages/IntroPage'

const IntroContainer = ({route}) => {
     const { Chapter, index } = route.params;
  return <IntroPage 
   Chapter={Chapter}
   index={index} />;
}

export default IntroContainer