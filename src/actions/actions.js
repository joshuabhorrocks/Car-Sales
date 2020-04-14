// An action creator is a function that "creates" actions!
// AKA a function that returns an action object

// action creator
export const addNewFeature = () => {
    console.log("function running");
    // the returned object is an action
    return { type: "ADD_NEW_FEATURE" };
  };
  
  export const removeFeature = () => {
    return { type: "REMOVE_FEATURE"};
  };