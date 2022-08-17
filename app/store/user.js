import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

const slice = createSlice({
  name: "user",
  initialState: {
    auth: null,
  },
  reducers: {
    userLoggedIn: (user, action) => {
      user.auth = action.payload;
    },

    userLoggedOut: (user, action) => {
      user.auth = null;
    },
  },
});

const { userLoggedIn, userLoggedOut } = slice.actions;

export const loginUser = (user) => userLoggedIn(user);

export const logoutUser = () => userLoggedOut();

export const selectUser = () =>
  createSelector(
    (state) => state.user,
    (user) => user.auth
  );

export default slice.reducer;
