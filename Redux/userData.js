import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: null,
};

export const dataLayer = createSlice({
  name: "user",
  initialState,
  reducer: {
    setUsername: (state, action) => {
      state.origin = action.payload;
    },
  },
});

export const { setUsername } = dataLayer.actions;

// Selectors - pulling data from dataLayer
export const selectUsername = (state) => state.user.username;

export default dataLayer.reducer;
