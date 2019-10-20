import React from 'react';
import { StyleSheet, Text, View, Button, FlatList, Dimensions, TouchableNativeFeedback } from 'react-native';
import { HeaderButton } from "react-navigation-header-buttons"
import { Ionicons } from "@expo/vector-icons"

import { CATEGORIES } from "../data/dummy-data"
import Colors from "../constants/Colors"

const HeaderButtonComp = props => {

    return (

     <HeaderButton {...props} IconComponent={Ionicons} iconSize={27} color={Colors.lightYellow}/>

    )

}

const styles = StyleSheet.create({


})

export default HeaderButtonComp