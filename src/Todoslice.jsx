
import { createSlice } from "@reduxjs/toolkit";
const todoSlice= createSlice({
      name:"todo",
      initialState:{
        task:[]
      },
    reducers:{
        addTask:(state, actions)=>{
            console.log(actions.payload);
            state.task.push(actions.payload);
        },
        taskDelete:(state, actions)=>{
            state.task=state.task.filter(item=>item.id!=actions.payload.id);
        },
        taskComplete:(state, actions)=>{
            for (var i=0; i<state.task.length; i++)
            {
                if (state.task[i].id==actions.payload.id)
                {
                    state.task[i].CompStatus=true;
                }
            }
             console.log(actions.payload.id);
        },
        taskInComplete:(state, actions)=>{
            for (var i=0; i<state.task.length; i++)
            {
                if (state.task[i].id==actions.payload.id)
                {
                    state.task[i].CompStatus=false;
                }
            }
             console.log(actions.payload.id);
        },
        taskeditSave:(state, actions)=>{
            for(var i=0; i<state.task.length; i++)
            {
                if (state.task[i].id==actions.payload.id)
                {
                    state.task[i].work=actions.payload.data;
                }
            }
        }
    }
})
export const {addTask, taskDelete, taskComplete, taskInComplete, taskeditSave} = todoSlice.actions;
export default todoSlice.reducer
