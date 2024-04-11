let initialState = [];

function bugsReducer(currentState = initialState, action) {
  switch (action.type) {
    case "BUGS_ADD":
      // create new state and return
      return [...currentState, action.payload];
    case "BUGS_REPLACE":
      return currentState.map((bug) =>
        bug.id === action.payload.id ? action.payload : bug
      );
    case "BUGS_REMOVE":
      return currentState.filter((bug) => bug.id !== action.payload.id);
    case "BUGS_INIT":
      return action.payload;
    default:
      return currentState;
  }
}

export default bugsReducer;