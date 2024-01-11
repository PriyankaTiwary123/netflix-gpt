import { createSlice } from "@reduxjs/toolkit";

const appConfigSlice = createSlice({
  name: "configSlice",
  initialState: {
    selectedLang: 'en'
  },
  reducers: {
    selectLanguage: (state, action) => {
      state.selectedLang = action.payload
    },
  },
});

export const { selectLanguage } = appConfigSlice.actions;
export default appConfigSlice.reducer;
