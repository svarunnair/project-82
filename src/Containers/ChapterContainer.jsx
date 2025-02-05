import { View, Text } from 'react-native'
import React from 'react'
import Chapters from '../Pages/Chapters'


const dataChapt = [
  "Algibra",
  "Circles",
  "Pythagores Theorm",
  "Algibra",
  "Circles",
  "Pythagores Theorm",
  "Circles",
  "Pythagores Theorm",
];

const ChapterContainer = ({route}) => {

    const {subject} = route.params

  return <Chapters
   subject={subject}
    dataChapt={dataChapt} 
    />;
}

export default ChapterContainer