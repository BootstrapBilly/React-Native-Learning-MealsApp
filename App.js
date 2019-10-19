import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useScreens } from "react-native-screens"

import * as Font from "expo-font"
import {AppLoading} from "expo"

import MealsNavigator from "./navigation/mealsNavigator"

useScreens()

const fetchFonts = () => {//returns a promise

  return Font.loadAsync({//load fonts, takes a key and the value is the path of the font

    "open-sans":require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold":require("./assets/fonts/OpenSans-Bold.ttf")

  })

}

export default function App() {

  const [appLoaded, setAppLoaded] = useState(false);

  if(!appLoaded) {//If the app is still loading(state is false)
    //Only render the AppLoading component
    //start async means the apploading waits for an async function to be called
    //when it is called, onFinish is called which executes a function
    //In the function we set the loading state to true so the app can be rendered
    return <AppLoading startAsync={fetchFonts} 
    onFinish={() => setAppLoaded(true)}
    onError={(err) => console.log(err)}
    />

  }

  return (

    <MealsNavigator/>
    
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
