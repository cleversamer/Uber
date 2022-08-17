import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

const slice = createSlice({
  name: "nav",
  initialState: {
    destination: null,
    origin: null,
    travelTimeInfo: null,
  },
  reducers: {
    originSet: (nav, action) => {
      nav.origin = action.payload;
    },
    destinationSet: (nav, action) => {
      nav.destination = action.payload;
    },
    travelTimeInfoSet: (nav, action) => {
      nav.travelTimeInfo = action.payload;
    },
  },
});

const { originSet, destinationSet, travelTimeInfoSet } = slice.actions;

// Actions
export const setOrigin = (origin) => originSet(origin);

export const setDestination = (destination) => destinationSet(destination);

export const setTravelTimeInfo = (travelTimeInfo) =>
  travelTimeInfoSet(travelTimeInfo);

// Selectors
export const selectOrigin = () =>
  createSelector(
    (state) => state.nav,
    (nav) => nav.origin
  );

export const selectDestination = () =>
  createSelector(
    (state) => state.nav,
    (nav) => nav.destination
  );

export const selectTravelTimeInfo = () =>
  createSelector(
    (state) => state.nav,
    (nav) => nav.travelTimeInfo
  );

export default slice.reducer;
