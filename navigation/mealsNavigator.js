import {createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';


import FoodCategoriesScreen from "../screens/FoodCategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailsScreen from "../screens/MealDetailsScreen";

import Colors from "../constants/Colors"

const MealsNavigator = createStackNavigator({

    Categories: FoodCategoriesScreen,
    CategoryMeals : CategoryMealsScreen,
    MealDetail: MealDetailsScreen

}, {
    defaultNavigationOptions: {//Sets the default navigation options for every screen

        headerStyle: {
            backgroundColor: Colors.lightBlue
        },
        headerTintColor: Colors.blue
    }
});

export default createAppContainer(MealsNavigator)