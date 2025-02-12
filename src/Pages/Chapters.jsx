import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { WIDTH } from "../constants/dimensions";
import NavBar from "../components/NavBar";
import { useNavigation } from "expo-router";

const Chapters = ({ subject, dataChapt }) => {

    const navigation = useNavigation()

    const handleChapter = (item, index) => {
      navigation.navigate("IntroContainer", { Chapter: item, index: index });
    };

  return (
    <View style={styles.container}>
      <NavBar onBackPress={() => navigation.goBack()} />

      <View style={styles.inner}>
        <Image
          style={styles.img}
          source={require("../../assets/images/subjects/maths.png")}
        />
        <Text style={styles.subjectName}>{subject?.name}</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {dataChapt?.map((item, index) => (
          <TouchableOpacity
            onPress={() => handleChapter(item, index)}
            key={index}
            style={styles.box}
          >
            <Text style={{ color: "grey" }}>Chapter : {index + 1}</Text>
            <Text style={styles.chapterText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default Chapters;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  inner: {
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
  img: {
    width: WIDTH * 0.85,
    height: 150,
    borderRadius: 8,
    resizeMode: "cover",
  },
  subjectName: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
  },
  scrollContent: {
    paddingBottom: 100,
    paddingHorizontal: 16,
    gap: 12,
    paddingTop:15
  },
  box: {
    backgroundColor: "#fff",
    padding: 14,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5, 
    display:"flex",
    // flexDirection:"row",
    gap:5,
    paddingHorizontal:20
    // justifyContent:"space-between"
  },
  chapterText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#444",
  },
});
