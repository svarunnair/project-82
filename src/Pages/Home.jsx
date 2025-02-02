import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import {WIDTH} from '../constants/dimensions'
import ShowToast from '../components/ShowToast'

const Home = () => {

  const handlePress =()=>{
    ShowToast("Haiiiiiii")
  }
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>EduLearn</Text>
        <MaterialIcons name="notifications" size={24} color="#000" />
      </View>

      {/* Search Bar */}
      <View style={styles.searchBar}>
        <MaterialIcons name="search" size={24} color="#888" />
        <TextInput placeholder="Search Subject" placeholderTextColor="grey" style={{ borderWidth: .2, width: WIDTH*.75 }} />
      
      </View>

      {/* Categories */}
      <Text style={styles.sectionTitle}>Categories</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.categoriesContainer}
      >
        <TouchableOpacity style={styles.categoryCard} onPress={handlePress}>
          <Image
            source={require("../../assets/images/icon.png")}
            style={styles.categoryImage}
          />
          <Text style={styles.categoryText}>Math</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryCard}>
          <Image
            source={require("../../assets/images/icon.png")}
            style={styles.categoryImage}
          />
          <Text style={styles.categoryText}>Science</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryCard}>
          <Image
            source={require("../../assets/images/icon.png")}
            style={styles.categoryImage}
          />
          <Text style={styles.categoryText}>History</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryCard}>
          <Image
            source={require("../../assets/images/icon.png")}
            style={styles.categoryImage}
          />
          <Text style={styles.categoryText}>Art</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Featured Courses */}
      <Text style={styles.sectionTitle}>Featured Courses</Text>
      <View style={styles.featuredCoursesContainer}>
        <TouchableOpacity style={styles.courseCard}>
          <Image
            source={require("../../assets/images/icon.png")}
            style={styles.courseImage}
          />
          <Text style={styles.courseTitle}>Introduction to Algebra</Text>
          <Text style={styles.courseInstructor}>By John Doe</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.courseCard}>
          <Image
            source={require("../../assets/images/icon.png")}
            style={styles.courseImage}
          />
          <Text style={styles.courseTitle}>Physics 101</Text>
          <Text style={styles.courseInstructor}>By Jane Smith</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
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
  searchPlaceholder: {
    marginLeft: 10,
    color: "#888",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  categoriesContainer: {
    marginBottom: 20,
  },
  categoryCard: {
    alignItems: "center",
    marginRight: 15,
  },
  categoryImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  categoryText: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: "500",
  },
  featuredCoursesContainer: {
    marginBottom: 20,
  },
  courseCard: {
    marginBottom: 15,
  },
  courseImage: {
    width: "100%",
    height: 150,
    borderRadius: 10,
  },
  courseTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 5,
  },
  courseInstructor: {
    fontSize: 14,
    color: "#888",
  },
});

export default Home;
