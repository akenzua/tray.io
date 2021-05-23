import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import logger from "redux-logger";

import { reducer } from "./userSignUpSlice";

const middleware = [...getDefaultMiddleware(), logger];
export default configureStore({
  reducer,
  middleware,
});
