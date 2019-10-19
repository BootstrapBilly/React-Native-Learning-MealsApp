import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableNativeFeedback } from 'react-native';

import { CATEGORIES, MEALS } from "../data/dummy-data"
import Colors from "../constants/Colors"
import MealItem from "../components/MealItem"

const CategoryMealsScreen = props => {

    const categoryKey = props.navigation.getParam("categoryKey")

    const selectedCategory = CATEGORIES.find(cat => cat.key === categoryKey)

    const categoryMeals = MEALS.filter(meal => meal.categoryKeys.indexOf(categoryKey) >= 0)

    const renderMeals = itemData => {

        return (

            <MealItem title={itemData.item.title} complexity={itemData.item.complexity} affordability={itemData.item.affordability} duration={itemData.item.duration} imgUrl={itemData.item.imageUrl} onSelectMeal={() => props.navigation.navigate({routeName: "MealDetail",params : {

                mealTitle : itemData.item.title

            }})}/>

        )

    }


    return (

        <View style={styles.screen}>

            <Text>{selectedCategory.title}</Text>

            <FlatList data={categoryMeals} renderItem={renderMeals} keyExtractor={(item, index) => item.id} style={{width: "100%", height: "100%"}}/>

        </View>

    );

}

CategoryMealsScreen.navigationOptions = (navigationData) => {

    const categoryKey = navigationData.navigation.getParam("categoryKey")//Get the params from the navigationData object passed to this function

    const selectedCategory = CATEGORIES.find(cat => cat.key === categoryKey)//Search the array for the object containing the key

    return {

        headerTitle: selectedCategory.title
    }
    
}

const styles = StyleSheet.create({

    screen: {

        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }

});

export default CategoryMealsScreen