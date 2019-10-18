import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const FoodCategoriesScreen = props => {

    return (

        <View style={styles.screen}>

            <Text>The categories Screen</Text>

            <Button title="Go To Meals" onPress={() => {

                props.navigation.navigate({routeName: "CategoryMeals"})

            }} />

        </View>

    );

}

const styles = StyleSheet.create({

    screen: {

        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "red"
    }
});

export default FoodCategoriesScreen