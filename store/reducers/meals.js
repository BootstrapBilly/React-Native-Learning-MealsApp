import {MEALS} from "../../data/dummy-data"
import { TOGGLE_FAVOURITE, TOGGLE_FILTERS } from "../actions/meals";

//initial state which sets the state when the app launches
const initialState = {
    meals: MEALS,
    filteredMeals: MEALS,
    favouriteMeals: [],
}

//First param is the current state, action is the action responsible for changing the state
const mealsReducer = (state = initialState, action) => {

    switch(action.type){//run a switch statement on the action and handle the various cases it could send

        //if the action is toggle favourite
        case TOGGLE_FAVOURITE:

        //check the array of favourite meals by comparing the id of the meals in the array, 
        //to the id of the meal associated/passed in by the action which we defined in the action folder
        //!IT COMPARES THE MEAL ID FROM THE ARRAY OF MEALS TO THE RETURNED mealId PROVIDED BY THE MEAL ACTION FUNCTION
        //- THE AFFORMENTIONED FUNCTION TAKES IN AN ID OF THE MEAL TO TOGGLE AND RETURNS IT ALONG WITH THE ACTION TYPE
        const existingIndex = state.favouriteMeals.findIndex(meal => meal.id === action.mealId)

        //if the element was inside the array of favourite meals already
        if(existingIndex >= 0){

            //create a copy of the favourite meals to be modified
            const updatedFavouriteMeals = [...state.favouriteMeals]

            //remove the element that we found up there under toggle favourite
            updatedFavouriteMeals.splice(existingIndex, 1)

            //return the current state and set the favourite meals array to the new one we just modified
            //! A STATE MUST BE RETURNED BY THE REDUCER FUNCTION
            return {...state, favouriteMeals: updatedFavouriteMeals }
            
        } 
        //if it wasnt
        else {

            //find the meal they favourited in the list of meals by its id
            const mealToAdd = state.meals.find(meal => meal.id === action.mealId)
            //return the old state along with an updated favourite meals array with the new meal added via concat
            //! the new favourite meals is now the old favourite meals (accessed from the current state)
            //- plus the new meal
            return { ...state, favouriteMeals: state.favouriteMeals.concat(mealToAdd)}

        }

        case TOGGLE_FILTERS :

        const appliedFilters = action.filters

        console.log(appliedFilters)

        const filterMeals = state.meals.filter(meal => {

            if(appliedFilters.glutenFree && !meal.isGlutenFree){
                return false;
            }

            if(appliedFilters.lactoseFree && !meal.isLactoseFree){
                return false;
            }

            if(appliedFilters.vegetarian && !meal.isVegetarian){
                return false;
            }

            if(appliedFilters.vegan && !meal.isVegetarian){
                return false;
            }

            return true;
        })

        return {...state, filteredMeals: filterMeals}
        
        default://set the default to return state

            return state;

    }
    

}

export default mealsReducer;