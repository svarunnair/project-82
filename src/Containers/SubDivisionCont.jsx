import { View, Text } from 'react-native'
import React from 'react'
import SubDivision from '../Pages/SubDevision'



const data = [
  "Portion 1",
  "Portion 2",
  "Portion 3",
  "Portion 4",
  "Portion 5",
  "Portion 6",
  "Portion 7",
  "Portion 8",
];


const SubDivisionCont = ({route}) => {
  const { Chapter, index } = route.params;
  return <SubDivision 
  Chapter={Chapter} 
  index={index} 
  data={data} />;
}

export default SubDivisionCont