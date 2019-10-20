import React from 'react';
import { StyleSheet, Text, View, Button, FlatList, Dimensions, TouchableOpacity } from 'react-native';

import { CATEGORIES } from "../data/dummy-data"
import Colors from "../constants/Colors"

import CatergoryGrid from "../components/CategoryGrid"
import { HeaderButtons, Item } from "react-navigation-header-buttons"
import HeaderButtonComp from '../components/HeaderButton';

const FoodCategoriesScreen = props => {

    const renderGridItem = (itemData) => {

        return (

            <CatergoryGrid title={itemData.item.title} color={itemData.item.color} onSelect={() => {
                
                props.navigation.navigate({routeName: "CategoryMeals", params: {

                    categoryKey : itemData.item.key

                }})
                
            } 

        }/>

        )
        
    }

    return (

        <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2} />

    );

}

FoodCategoriesScreen.navigationOptions = navData => {
    
    return {

    headerTitle: "Meal Categories",
    headerLeft: 
      
    <HeaderButtons HeaderButtonComponent={HeaderButtonComp}>

      <Item title="Menu-Icon" iconName="md-menu" onPress={() => navData.navigation.toggleDrawer()}/>

    </HeaderButtons>

    }
}

const styles = StyleSheet.create({

    screen: {

        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "red"
    },

});

export default FoodCategoriesScreen