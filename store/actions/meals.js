//Set up unique identifiers to be used by redux
export const TOGGLE_FAVOURITE = "TOGGLE_FAVOURITE";
export const TOGGLE_FILTERS = "TOGGLE_FILTERS"

//export a function that creates the action from  identifier
export const toggleFavourite = (id) => {

    return {type: TOGGLE_FAVOURITE, mealId: id}

}

//export a function that creates the action from  identifier
export const toggleFilters = filterSettings => {

    return {type: TOGGLE_FILTERS, filters : filterSettings}

}