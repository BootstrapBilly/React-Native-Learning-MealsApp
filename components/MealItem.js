import React from 'react';
import { StyleSheet, Text, View, Button, FlatList, Dimensions, TouchableNativeFeedback, ImageBackground } from 'react-native';

const MealItem = props => {

    return (

    <View style={styles.mealItem}>

        <TouchableNativeFeedback onPress={props.onSelectMeal}>

            <View>

                <View style={{...styles.mealText, ...styles.mealHeader}}>

                    <ImageBackground source={{uri: props.imgUrl}} style={{width: '100%', height: '100%', justifyContent: "flex-end", alignItems: "flex-end"}} imageStyle={{opacity: 0.9}}>

                        <Text style={styles.mealHeaderText}>{props.title}</Text>

                    </ImageBackground></View>

                <View style={{...styles.mealText, ...styles.mealDetails}}>

                    <Text style={styles.mealInfoText}>{props.complexity.toUpperCase()}</Text>
                    <Text style={styles.mealInfoText}>{props.duration}</Text>
                    <Text style={styles.mealInfoText}>{props.affordability.toUpperCase()}</Text>
                    
                </View>

            </View>

        </TouchableNativeFeedback>

    </View>

    )

}

const styles = StyleSheet.create({

    mealItem : {

        height: Dimensions.get("window").height = 600 ? 200: Dimensions.get("window").height * 150,
        width: "90%",
        backgroundColor: "white",
        margin: 20,
        flex: 1,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        elevation: 5,
        overflow: "hidden"

    },

    mealText : {

        flexDirection: "row",
    },

    mealInfoText : {

        fontFamily: "open-sans-bold"

    },

    mealHeader : {

        height: "88%",
        justifyContent: "flex-end", 
        alignItems: "flex-end",

    },

    mealHeaderText : {

        fontFamily: "open-sans-bold",
        fontSize: 20,
        color: "white",
        backgroundColor: "rgba(0,0,0,0.7)",
        paddingVertical: 2,
        paddingHorizontal: 10,
        textAlign: "center",
        margin: 10,
        borderRadius: 30

    },

    mealDetails : {

        justifyContent: "space-between",
        paddingHorizontal: 30,
        fontFamily: "open-sans",

    }

})

export default MealItem