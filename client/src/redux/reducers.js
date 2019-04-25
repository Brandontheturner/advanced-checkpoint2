import { combineReducers } from "redux";

const heros = (state = [], action) => {
  const newState = [...state];
  switch (action.type) {
    case "LIST_HEROS":
      return action.value;
    case "CREATE_HERO":
      newState.push(action.value);
      return newState;
    case "DELETE_HERO":
      const index = newState.findIndex(h => h._id === action.value);
      newState.splice(index, 1);
      return newState;
    default:
      return state;
  }
};

export default combineReducers({
  heros
});
