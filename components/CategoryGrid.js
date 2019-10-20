import React from 'react';
import { StyleSheet, Text, View, Button, FlatList, Dimensions, TouchableNativeFeedback } from 'react-native';

import { CATEGORIES } from "../data/dummy-data"
import Colors from "../constants/Colors"

const CategoryGrid = props => {

    return (

        <View style={styles.gridItem}>
            <TouchableNativeFeedback style={{flex:1}} onPress={props.onSelect}>
            <View style={{...{backgroundColor: props.color}, ...styles.tileContainer}}><Text style={styles.cardTitle}>{props.title}</Text></View></TouchableNativeFeedback>
        </View>
    )

}

const styles = StyleSheet.create({

    
    gridItem : {

        flex: 1,
        height: Dimensions.get("window").height = 600 ? Dimensions.get("window").height * 0.2 : Dimensions.get("window").height * 0.15,
        margin: 15,
        overflow: "hidden",
        elevation: 5


    },

    tileContainer : {

        width: "100%",
        height: "100%",
        textAlign: "center",

        justifyContent:"flex-end",
        alignItems: "flex-end",
        borderRadius: 20,
        padding : 15,
        overflow: "hidden"
    },

    cardTitle : {

        fontFamily: "open-sans-bold",
        fontSize: 18
    }

    
})

export default CategoryGrid