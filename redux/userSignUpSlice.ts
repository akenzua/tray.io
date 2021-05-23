import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Info, Privacy, User } from "../type";

const userSignUp: User = {
  info: {
    name: "",
    role: "",
    email: "",
    password: "",
  },
  privacy: {
    update: false,
    communication: false,
  },
  done: false,
  error: [],
};

const userSignUpSlice = createSlice({
  name: "user",
  initialState: userSignUp,
  reducers: {
    info: (state, { payload }: PayloadAction<Info>) => {
      return { ...state, info: payload };
    },
    privacy: (state, { payload }: PayloadAction<Privacy>) => {
      return { ...state, privacy: payload };
    },
    finished: (state, { payload }: PayloadAction<boolean>) => {
      return { ...state, done: payload };
    },
  },
});

export const {
  info: userInfoActionCreator,
  privacy: privacyActionCreator,
  finished: doneActionCreator,
} = userSignUpSlice.actions;

export const reducer = {
  user: userSignUpSlice.reducer,
};
