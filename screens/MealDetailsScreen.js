import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const MealDetailsScreen = props => {

  return (

    <View style={styles.screen}>
      
      <Button title={"Go back to cats"} onPress={ () => {

        props.navigation.replace("Categories")

      }
        
    }
      />

    </View>

  );

}

const styles = StyleSheet.create({

    screen: {

        flex:1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "purple"
    }
});

export default MealDetailsScreen