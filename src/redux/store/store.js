// import { createStore, combineReducer } from "react-redux";
import { combineReducers, createStore } from "redux";
import userReducer from "../reducers/usersReducer";

const mainReducer = combineReducers({
  user: userReducer,
});

const commonData = {
  user: {
    item: [
      { id: 1, gender: "Mr", firstName: "Mohit", lastName: "singh" },
      { id: 2, gender: "Ms", firstName: "reena", lastName: "singh" },
    ],
  },
};

const  store = createStore(mainReducer,commonData)

export default store;
