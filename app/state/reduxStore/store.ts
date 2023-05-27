import { configureStore } from "@reduxjs/toolkit";
import { default as user } from "./userSlice";


export const store =  configureStore({
    reducer: {
        user,
    }
});