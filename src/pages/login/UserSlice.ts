import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
   addUsers : (state, action) => {
      return action.payload;
    },
    removeUsers: () => {
      return undefined
    },
  },
});

export const { addUsers, removeUsers} = UserSlice.actions
export default  UserSlice.reducer
