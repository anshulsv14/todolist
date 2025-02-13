import { createSlice } from "@reduxjs/toolkit";
const todoSlice = createSlice({
    name:"todo",
    initialState:{
        task:[]
    },
    reducers:{
        Complete:(state,actions)=>{
            console.log(actions.payload);
            state.task.push(actions.payload)
        },
        Delete:(state,actions)=>{
            console.log(actions.payload);
            state.task = state.task.filter(task=> task.id != actions.payload.id)
        }, 
        CompShow:(state,actions)=>{
        }
    }
})
export const { Complete , Delete , CompShow } = todoSlice.actions;
export default todoSlice.reducer;
