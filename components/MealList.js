import React from 'react';
import { StyleSheet, Text, View, Button, FlatList, Dimensions, TouchableNativeFeedback, ImageBackground } from 'react-native';

import MealItem from "../components/MealItem"

import { useSelector, useDispatch } from "react-redux";

const MealList = props => {

    const favMeals = useSelector(store => store.meals.favouriteMeals)

    const renderMeals = itemData => {

        console.log(favMeals)

        return (

            <MealItem title={itemData.item.title} complexity={itemData.item.complexity} affordability={itemData.item.affordability} duration={itemData.item.duration} imgUrl={itemData.item.imageUrl} onSelectMeal={() => props.navigation.navigate({routeName: "MealDetail",params : {

                mealId : itemData.item.id,
                mealTitle: itemData.item.title,
                mealIsFav: favMeals.some(meal => meal.id === itemData.item.id)
                


            }})}/>

        )

    }

    return (
    <View style={styles.list}>

        <FlatList data={props.data} renderItem={renderMeals} keyExtractor={(item, index) => item.id} style={{width: "100%", height: "100%"}}/>

    </View>
    )

}

const styles = StyleSheet.create({

    list: {

        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }

});

export default MealList