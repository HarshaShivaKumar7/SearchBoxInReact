import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateMessage } from "./actions";
import store from "./store";

const App = () => {
  const message = useSelector((state) => state.message);
  const dispatch = useDispatch();

  const handleUpdate = () => {
    dispatch(updateMessage("Updated State  from redux"));
  };

  // useEffect(() => {
  //   const unsubscribe = store.subscribe(() => {
  //     const state = store.getState();
  //     console.log(state);
  //   });
  //   return () => {
  //     unsubscribe();
  //   };
  // }, []);

  return (
    <div>
      <h1>{message}</h1>
      <button onClick={handleUpdate}>Update message</button>
    </div>
  );
};

export default App;
