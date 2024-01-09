import {configureStore } from "@reduxjs/toolkit"
import UserReducer from "./pages/login/UserSlice"


const appStore = configureStore({
    reducer: {
        user: UserReducer
    }
})

export default appStore