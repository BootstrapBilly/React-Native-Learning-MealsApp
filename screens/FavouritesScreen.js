import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Colors from "../constants/Colors"
import MealItem from "../components/MealItem"

import MealList from "../components/MealList"
import { CATEGORIES, MEALS } from "../data/dummy-data"

const FavouritesScreen = props => {

  const favMeals = MEALS.filter(meal => meal.id === "m1" || meal.id === "m2" || meal.id === "m3")

  return (

    <MealList data={favMeals} navigation={props.navigation}/>

  );

}

FavouritesScreen.navigationOptions = (navigationData) => {

  return {

      headerTitle: "Favourites",
      headerStyle: {
          backgroundColor: Colors.midYellow
      },
      headerTintColor: "white"
  }
  
}

const styles = StyleSheet.create({

    screen: {

        flex:1,
        justifyContent: "center",
        alignItems: "center"

    }
});

export default FavouritesScreen