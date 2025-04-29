import { View, Text, StyleSheet, TouchableOpacity, Button, SafeAreaView } from 'react-native'
import React, { Suspense } from 'react'
import NavBar from '../components/NavBar'
import { useNavigation } from 'expo-router'
import { Canvas } from '@react-three/fiber/native'
import Character from '../components/Character'
import Teacher from '../components/TeacherModal'
import { Environment } from '@react-three/drei'

const IntroPage = (props:any) => {
  const navigation = useNavigation()
  return (
    // <View style={styles.container}>
    //

    //   <Button
    //     onPress={() =>
    //       navigation.navigate("SubDivisionCont", {
    //         Chapter: props.Chapter,
    //         index: props.index,
    //       })
    //     }
    //     title="Skip"
    //   ></Button>
    // </View>

    <SafeAreaView style={styles.container}>
      {/* <NavBar /> */}
      <View style={styles.modelContainer}>
        <Canvas
          onCreated={(state) => {
            const _gl:any = state.gl.getContext();

            const pixelStorei = _gl.pixelStorei.bind(_gl);
            _gl.pixelStorei = function (...args:any) {
              const [parameter] = args;

              switch (parameter) {
                // expo-gl only supports the flipY param
                case _gl.UNPACK_FLIP_Y_WEBGL:
                  return pixelStorei(...args);
              }
            };
          }}
        >
          {/* Lights should be outside of Suspense */}
          <Environment preset="sunset" />
          <ambientLight intensity={0.07} />
          <directionalLight position={[3, 2, 5]} intensity={0.5} />{" "}
          <Suspense fallback={null}>
            {/* <Character /> */}
            <Teacher />
          </Suspense>
        </Canvas>
      </View>
    </SafeAreaView>
  );
}

export default IntroPage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    // padding: 14,
  },
  modelContainer:{
    flex:1
  }
});