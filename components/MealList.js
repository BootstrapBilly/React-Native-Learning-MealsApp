import React from 'react';
import { StyleSheet, Text, View, Button, FlatList, Dimensions, TouchableNativeFeedback, ImageBackground } from 'react-native';

import MealItem from "../components/MealItem"

const MealList = props => {

    const renderMeals = itemData => {

        return (

            <MealItem title={itemData.item.title} complexity={itemData.item.complexity} affordability={itemData.item.affordability} duration={itemData.item.duration} imgUrl={itemData.item.imageUrl} onSelectMeal={() => props.navigation.navigate({routeName: "MealDetail",params : {

                mealTitle : itemData.item.title

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