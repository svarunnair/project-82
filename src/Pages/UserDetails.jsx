import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Picker } from "@react-native-picker/picker"; 
import { useNavigation } from "expo-router";

const UserDetails = () => {
  const [name, setName] = useState("");
  const [userClass, setUserClass] = useState("");
  const [language, setLanguage] = useState("english"); 
  const [syllabus, setSyllabus] = useState("NCRTC");
  const [classSelected, setClassSelected] = useState("10");

  const navigation = useNavigation()

  const handleSubmit = () => {
    navigation.navigate("HomeTabNav");
    console.log("Name:", name);
    console.log("Class:", userClass);
    console.log("Language:", language);
    console.log("Syllabus:", syllabus);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Details</Text>

      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />

      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={classSelected}
          onValueChange={(itemValue) => setClassSelected(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="10" value="10" />
          <Picker.Item
            label="9  (coming soon...)"
            value="9"
            style={{ backgroundColor: "#d7d7d7" }}
          />
          <Picker.Item
            label="8  (coming soon...)"
            value="8"
            style={{ backgroundColor: "#d7d7d7" }}
          />
        </Picker>
      </View>

      {/* <TextInput
        style={styles.input}
        placeholder="Class"
        value={userClass}
        onChangeText={setUserClass}
      /> */}

      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={language}
          onValueChange={(itemValue) => setLanguage(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="English" value="english" />
          <Picker.Item label="Malayalam" value="malayalam" />
        </Picker>
      </View>

      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={syllabus}
          onValueChange={(itemValue) => setSyllabus(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="NCRTC" value="ncrtc" />
          <Picker.Item label="CBSE" value="cbse" />
        </Picker>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#333",
  },
  input: {
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: "#fff",
  },
  pickerContainer: {
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "#fff",
    marginBottom: 15,
  },
  picker: {
    height: 50,
    width: "100%",
  },
  button: {
    backgroundColor: "#007bff",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default UserDetails;
