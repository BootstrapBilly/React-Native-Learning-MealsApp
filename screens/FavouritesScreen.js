import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from "react-redux";

import Colors from "../constants/Colors"
import MealItem from "../components/MealItem"
import { HeaderButtons, Item } from "react-navigation-header-buttons"
import HeaderButtonComp from '../components/HeaderButton';



import MealList from "../components/MealList"
import { CATEGORIES } from "../data/dummy-data"

const FavouritesScreen = props => {

  const favouriteMeals = useSelector(state => state.meals.favouriteMeals)


  if(favouriteMeals.length === 0){

    return <Text>No Fav meals</Text>
    
  }

  const availableMeals = useSelector(state => state.meals.favouriteMeals)

  const favMeals = availableMeals.filter(meal => meal.id === "m1" || meal.id === "m2" || meal.id === "m3")

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
      headerTintColor: "white",
      headerLeft: 

      <HeaderButtons HeaderButtonComponent={HeaderButtonComp}>

        <Item title="Menu-Icon" iconName="md-menu" onPress={() => navData.navigation.toggleDrawer()}/>

      </HeaderButtons>

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