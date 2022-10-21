import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginuser: (state, action) => {
      state.user = action.payload;
    },
    logoutuser: (state) => {
      state.user = null;
    },
  },
});

export const { loginuser, logoutuser } = userSlice.actions;

export const selectuser = (state) => state.user.user;

export default userSlice.reducer;
