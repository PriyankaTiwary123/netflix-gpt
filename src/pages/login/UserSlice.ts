import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
  name: "user",
  initialState: {user:{}},
  reducers: {
   addUsers : (state, action) => {
      return {user:action.payload};
    },
    removeUsers: () => {
      return undefined
    },
  },
});

export const { addUsers, removeUsers} = UserSlice.actions
export default  UserSlice.reducer
