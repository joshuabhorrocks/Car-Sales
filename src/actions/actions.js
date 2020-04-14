
export const ADD_NEW_FEATURE = "ADD_NEW_FEATURE";

export const addNewFeature = item => {
    // console.log("add new feature: ", item)
    return {
        type: ADD_NEW_FEATURE,
        payload: item 
    };
  };

  export const REMOVE_FEATURE = "REMOVE_FEATURE;"
  
  export const removeFeature = item => {
    // console.log("remove feature: ", item)
    return { 
        type: "REMOVE_FEATURE",
        payload: item
    };
  };