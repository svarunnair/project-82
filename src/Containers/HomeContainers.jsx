import { View, Text } from 'react-native'
import React from 'react'
import Home from "../Pages/Home"

const subData = [
  {
    name: "Mathematics",
    img: "../../assets/images/icon.png",
    chapters: 10,
  },
  {
    name: "Physics",
    img: "../../assets/images/icon.png",
    chapters: 10,
  },
  {
    name: "Chemistry",
    img: "../../assets/images/icon.png",
    chapters: 10,
  },
  {
    name: "English",
    img: "../../assets/images/icon.png",
    chapters: 10,
  },
  {
    name: "History",
    img: "../../assets/images/icon.png",
    chapters: 10,
  },
];

const HomeContainers = () => {
  return <Home
   subData={subData}
    />;
}

export default HomeContainers