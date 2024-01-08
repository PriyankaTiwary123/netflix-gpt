import {configureStore } from "@reduxjs/toolkit"
import UserReducer from "./pages/login/UserSlice"


const appStore = configureStore({
    reducer: UserReducer
})

export default appStore