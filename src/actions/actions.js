export const ADD_FEATURE = "ADD_FEATURE"
export const REMOVE_FEATURE = "REMOVE_FEATURE"
export const addFeature = item => {
    console.log("add new feature: ", item)
    return {
        type: ADD_FEATURE,
        payload: item 
    };
  };
  
  export const removeFeature = item => {
    // console.log("remove feature: ", item)
    return { 
        type: REMOVE_FEATURE,
        payload: item
    };
  };