import { combineReducers } from "redux";

const addCard = (state = [], action) => {
  switch (action.type) {
    case "ADD_CARD":
      return action.payload;
    default:
      return state;
  }
};

const userName = (state = [], action) => {
  switch (action.type) {
    case "USERNAME":
      return action.payload;
    default:
      return state;
  }
};

const getCard = (state = [], action) => {
  switch (action.type) {
    case "GET_CARD":
      return action.payload;
    default:
      return state;
  }
};

const editCard = (state = [], action) => {
  switch (action.type) {
    case "EDIT_CARD":
      return action.payload;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  addCard,
  getCard,
  editCard,
  userName,
});

export default rootReducer;
