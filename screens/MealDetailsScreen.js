import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { HeaderButtons, Item } from "react-navigation-header-buttons"

import { CATEGORIES, MEALS } from "../data/dummy-data"
import HeaderButtonComp from '../components/HeaderButton';

const MealDetailsScreen = props => {

  const mealTitle = props.navigation.getParam("mealTitle")

  return (

    <View style={styles.screen}>

      <Text>{mealTitle}</Text>

    </View>

  );

}

MealDetailsScreen.navigationOptions = (navigationData) => {

  const mealTitle = navigationData.navigation.getParam("mealTitle")//Get the params from the navigationData object passed to this function

  const selectedMeal = MEALS.find(cat => cat.title === mealTitle)//Search the array for the object containing the key

  return {

    headerTitle: selectedMeal.title,
    headerRight:

      <HeaderButtons HeaderButtonComponent={HeaderButtonComp}>

        <Item title="Favourite" iconName="md-star-outline" onPress={() => console.log("Added")}/>

      </HeaderButtons>

  }

}

const styles = StyleSheet.create({

  screen: {

    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
});

export default MealDetailsScreen