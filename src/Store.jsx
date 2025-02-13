
import {configureStore} from "@reduxjs/toolkit";
import todoAns from "./Todoslice";
const store=configureStore({
    reducer:{
        todo:todoAns
    }
})
export default store;


