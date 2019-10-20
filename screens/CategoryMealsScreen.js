import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableNativeFeedback } from 'react-native';

import { CATEGORIES, MEALS } from "../data/dummy-data"
import Colors from "../constants/Colors"
import MealList from "../components/MealList"


const CategoryMealsScreen = props => {

    const categoryKey = props.navigation.getParam("categoryKey")

    const selectedCategory = CATEGORIES.find(cat => cat.key === categoryKey)

    const categoryMeals = MEALS.filter(meal => meal.categoryKeys.indexOf(categoryKey) >= 0)

    return (

        <MealList data={categoryMeals} navigation={props.navigation}/>

    );

}

CategoryMealsScreen.navigationOptions = (navigationData) => {

    const categoryKey = navigationData.navigation.getParam("categoryKey")//Get the params from the navigationData object passed to this function

    const selectedCategory = CATEGORIES.find(cat => cat.key === categoryKey)//Search the array for the object containing the key

    return {

        headerTitle: selectedCategory.title

    }
    
}

export default CategoryMealsScreen