import { useDispatch } from "react-redux";

export const updateMessage = (newMessage) => {
  return {
    type: "UPDATE_MESSAGE",
    payload: newMessage,
  };
};
