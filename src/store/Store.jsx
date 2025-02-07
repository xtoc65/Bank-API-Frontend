import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserSlice";
import formReducer from "./FormSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    form: formReducer,
  },
});
export default store;
