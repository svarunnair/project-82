import { View, Text } from 'react-native'
import React from 'react'
import Home from "../Pages/Home"

const subData = [
  {
    name: "Mathematics",
    img: "../../assets/images/subjects/maths.png",
    chapters: 10,
  },
  {
    name: "Physics",
    img: "../../assets/images/subjects/physics.png",
    chapters: 4,
  },
  {
    name: "Chemistry",
    img: "../../assets/images/subjects/chem.png",
    chapters: 7,
  },
  {
    name: "English",
    img: "../../assets/images/subjects/eng.png",
    chapters: 9,
  },
  {
    name: "History",
    img: "../../assets/images/subjects/history.png",
    chapters: 13,
  },
];

const HomeContainers = () => {
  return <Home
   subData={subData}
    />;
}

export default HomeContainers