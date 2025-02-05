import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";
import Navbar from "../components/NavBar";
import { TouchableOpacity } from "react-native";

const SubDivision = (props) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.innerBox}>
      <Text style={styles.text}>{item}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Navbar />
      <View style={{padding:14}}>
        <View style={styles.header}>
          <Text style={styles.chapterText}>Chapter : {props.index + 1}</Text>
          <Text style={styles.title}>{props.Chapter}</Text>
        </View>

        <FlatList
          data={props.data}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          numColumns={2}
          contentContainerStyle={styles.scroll}
        />
      </View>
    </View>
  );
};

export default SubDivision;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    // padding: 14,
  },
  header: {
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
    marginBottom: 10,
    borderWidth: 0.1,
    padding: 20,
    marginTop: 10,
    borderRadius: 15,
    backgroundColor: "#fcfcf7",
  },
  chapterText: {
    fontWeight: "300",
    fontSize: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: "500",
    textAlign: "center",
  },
  scroll: {
    gap: 10,
  },
  innerBox: {
    flex: 1,
    margin: 8,
    padding: 15,
    borderWidth: 0.1,
    borderRadius: 8,
    backgroundColor: "#eaeff5",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  text: {
    fontSize: 15,
    textAlign: "center",
    fontWeight: 500,
  },
});
