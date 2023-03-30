import { configureStore } from "@reduxjs/toolkit";
import listSlice from "./data";

const store=configureStore({reducer:{list:listSlice.reducer}})

export default store;