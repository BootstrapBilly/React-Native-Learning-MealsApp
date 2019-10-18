import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const CategoryMealsScreen = props => {


    return (

        <View style={styles.screen}>

            <Text>The categories Meals Screen</Text>

            <Button title="Go To Meal detail" onPress={() => {

                props.navigation.navigate({ routeName: "MealDetail" })

            }} />

        </View>

    );

}

const styles = StyleSheet.create({

    screen: {

        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "blue"
    }

});

export default CategoryMealsScreen