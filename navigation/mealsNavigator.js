import {createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';


import FoodCategoriesScreen from "../screens/FoodCategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailsScreen from "../screens/MealDetailsScreen";

const MealsNavigator = createStackNavigator({

    Categories: FoodCategoriesScreen,
    CategoryMeals : CategoryMealsScreen,
    MealDetail: MealDetailsScreen

});

export default createAppContainer(MealsNavigator)