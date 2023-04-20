import { createStore } from "redux";

const initialState = {
  message: "Hello world",
  likes: 0,
  Comment: "Type the comments",
};

function messageReducer(state = initialState, action) {
  switch (action.type) {
    case "UPDATE_MESSAGE":
      return { ...state, message: action.payload };
    default:
      return state;
  }
}

const store = createStore(messageReducer);

export default store;
