import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from "react-navigation-tabs"
import {createDrawerNavigator} from "react-navigation-drawer"
import {createStackNavigator} from 'react-navigation-stack';
import {Ionicons} from "@expo/vector-icons"
import {createMaterialBottomTabNavigator} from "react-navigation-material-bottom-tabs"
import { StyleSheet, Text, View } from 'react-native';

import FoodCategoriesScreen from "../screens/FoodCategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailsScreen from "../screens/MealDetailsScreen";
import FavouritesScreen from "../screens/FavouritesScreen";
import FiltersScreen from "../screens/FiltersScreen"

import Colors from "../constants/Colors"

const stackNavSecondArg = {

    defaultNavigationOptions: {//Sets the default navigation options for every screen

        headerStyle: {
            backgroundColor: Colors.midBlue
        },
        headerTintColor: "white",
        headerTitleStyle : {
            fontFamily: "open-sans"
        }
    }

}

const MealsNavigator = createStackNavigator({

    Categories: FoodCategoriesScreen,
    CategoryMeals : CategoryMealsScreen,
    MealDetail: MealDetailsScreen

}, stackNavSecondArg);

const favStackNavigator = createStackNavigator({

    Favourites: FavouritesScreen,
    MealDetail: MealDetailsScreen

}, stackNavSecondArg )

//! Tab navigator
const MealsFavTabNavigator = createMaterialBottomTabNavigator({

    Meals: {
        screen:MealsNavigator,//use the meals stack navigator as the screen
        navigationOptions: {//set the navigation options, takes a function

            tabBarIcon: tabInfo => {//the function takes in the info/config of the tab bar and returns jsx

                return <Ionicons name="ios-restaurant" size={29} color={tabInfo.tintColor}/>//make it return an iconon, and set the color to the color of the tab (supplied by tabInfo)

            },
            tabBarColor: Colors.midBlue,//set the color of the tab bar
            tabBarLabel: <Text style={{fontFamily: "open-sans"}}>Meals</Text>
        }

    },
    Favourites: {
        screen:favStackNavigator,//use the meals stack navigator as the screen
        navigationOptions: {//set the navigation options, takes a function

            tabBarIcon: tabInfo => {//the function takes in the info/config of the tab bar and returns jsx

                return <Ionicons name="ios-star" size={29} color={tabInfo.tintColor}/>//make it return an iconon, and set the color to the color of the tab (supplied by tabInfo)

            },
            tabBarColor: Colors.midYellow,//set the color of the tabbar
            tabBarLabel: <Text style={{fontFamily: "open-sans"}}>Favourites</Text>
        }

    }

}, {
//SYNTAX DIFFERS HERE
    defaultNavigationOptions: {

            activeColor : "white",
            shifting: true,//makes the icons pop

    }
});

//= Draw navigator

//?Filters stack to give it a header
const filterStack = createStackNavigator({//create the filter stack so it has a header

    filters: FiltersScreen //assign the filters screen to be the only page on the stack

})

const mainNavigator = createDrawerNavigator({

    FavMeals: {
        screen: MealsFavTabNavigator,
        navigationOptions: {
            drawerLabel : "Meals"
        }
    },
    Filters: filterStack

},{
    contentOptions: {
        
        activeTintColor : Colors.midYellow,
        labelStyle: {
            fontSize: 18,
            fontFamily: "open-sans-bold"
        }
    },
    drawerWidth: 179
});

export default createAppContainer(mainNavigator)