import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Modal from "react-native-modal";
// import { BubblesLoader } from "react-native-indicator";

import { DotIndicator } from "react-native-indicators";
import { WIDTH} from "./dimensions";

class LoadingModel extends Component {
  render() {
    return (
      <Modal
        isVisible={this.props.loading}
        backdropOpacity={0.65}
        animationIn={"fadeIn"}
        animationOut={"zoomOut"}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <DotIndicator color={"#3A86FF"} size={30} dotRadius={6} />
            <View
              style={{
                position: "absolute",
                bottom: 15,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* <TextLoader textStyle={{color: '#000'}} /> */}
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}
export default LoadingModel;

const styles = StyleSheet.create({
  appLogo: {
    width: WIDTH / 3.8,
    height: WIDTH / 3.5,
  },

  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  modalView: {
    backgroundColor: "#fff",
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    justifyContent: "center",
    padding: 30,
  },
});
