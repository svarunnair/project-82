import { View, Text, StatusBar } from 'react-native'
import React, { useEffect, useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Home from '../src/Pages/Home'
import SingnUp from '../src/Pages/SignUp'
import UserDetails from "../src/Pages/UserDetails";
import SplashScreen from "../src/components/SplashScreen";
import HomeTabNav from "../src/Pages/HomeTabNav";


const index = () => {

  const Stack = createStackNavigator()

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      setTimeout(() => {
        setIsLoading(false);
      }, 1500); 
    }, []);

    if (isLoading) {
      return <SplashScreen />;
    }


  return (
    <>
      <StatusBar backgroundColor="grey" barStyle="light-content" />
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "grey" },
          headerTintColor: "#fff",
          headerShown: false,
          headerTitleStyle: { fontWeight: "bold" },
        }}
      >
        <Stack.Screen name="Signup" component={SingnUp} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="UserDetails" component={UserDetails} />
        <Stack.Screen name="HomeTabNav" component={HomeTabNav} />
      </Stack.Navigator>
    </>
  );
}

export default index