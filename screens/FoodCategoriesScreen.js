import React from 'react';
import { StyleSheet, Text, View, Button, FlatList, Dimensions } from 'react-native';

import { CATEGORIES } from "../data/dummy-data"

const renderGridItem = (itemData) => {

    return <View style={styles.gridItem}><Text>{itemData.item.title}</Text></View>
}

const FoodCategoriesScreen = props => {

    return (

        <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2} />

    );

}

const styles = StyleSheet.create({

    screen: {

        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "red"
    },

    gridItem : {

        flex: 1,
        height: Dimensions.get("window").height = 600 ? Dimensions.get("window").height * 0.2 : Dimensions.get("window").height * 0.15,
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        borderColor: "black",
        borderWidth: 1
    }
});

export default FoodCategoriesScreen