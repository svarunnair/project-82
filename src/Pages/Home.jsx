import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { WIDTH } from "../constants/dimensions";
import ShowToast from "../components/ShowToast";
import { useNavigation } from "expo-router";

const Home = (props) => {
  
  const navigation = useNavigation()

  const handleSubject =(i)=>{
    navigation.navigate("ChapterContainer",{subject:i});
  }

  console.log("...props.subData....", props.subData);

  const renderData = ({ item }) => (
    <TouchableOpacity
    onPress={()=>handleSubject(item)}
     style={styles.subBox}>
      <Image
        style={styles.courseImage}
        source={require("../../assets/images/subjects/maths.png")}
      />
      <View style={{ display: "flex",}}>
        <Text style={styles.courseTitle}>{item.name}</Text>
        <Text style={styles.courseChapters}> Chapters : {item.chapters}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>EduLearn</Text>
        <MaterialIcons name="notifications" size={24} color="#000" />
      </View>

      {/* Search Bar */}
      <View style={styles.searchBar}>
        <MaterialIcons name="search" size={24} color="#888" />
        <TextInput
          placeholder="Search Subject"
          placeholderTextColor="grey"
          style={styles.searchInput}
        />
      </View>

      {/* Featured Courses */}
      <Text style={styles.sectionTitle}>Featured Courses</Text>

      <FlatList
        data={props.subData}
        renderItem={renderData}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.flatListContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f1f1f1",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 20,
  },
  searchInput: {
    borderWidth: 0,
    width: WIDTH * 0.75,
    marginLeft: 8,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  flatListContainer: {
    paddingBottom: 20,
  },
  subBox: {
    width: WIDTH * 0.9, // 90% of screen width
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    padding: 12,
    // alignItems: "center",
    alignSelf: "center", // Centers each item
    marginBottom: 15,
    elevation: 3, // Adds shadow effect
  },
  courseImage: {
    width: "100%",
    height: 150,
    borderRadius: 8,
  },
  courseTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
    marginTop: 8,
    textAlign: "left",
  },
  courseChapters: {
    fontSize: 14,
    color: "#666",
    marginTop: 4,
  },
});

export default Home;
