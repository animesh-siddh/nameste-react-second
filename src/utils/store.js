import { configureStore } from "@reduxjs/toolkit";
import cartMyItem from "./createSlice";


const appStore = configureStore({

reducer:{
    cartMyItem
}

})


export default appStore