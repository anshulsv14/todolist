import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Complete , Delete , CompShow } from './Todoslice'
import { MdDelete } from "react-icons/md";
const App = () => {
    const[mytask,setMytask] = useState("")
    const myval = useSelector(state=>state.mytask.task)
    const dis = useDispatch();
    const CompShow = (id) =>{
        
    } 
    const ans = myval.map((key)=>{
        return(
            <>
            <tr>
                <td>{key.data}</td>
                <td><button onClick={()=>{dis(CompShow({id:key.id}))}}>Complete</button></td>
                <td><MdDelete onClick={()=>{dis(Delete({id:key.id}))}} /></td>
            </tr>
            </>
        )
    })
  return (
    <>
    <h1>To Do List</h1>
    <input type="text" value={mytask} onChange={(e)=>{setMytask(e.target.value)}} />
    <button onClick={()=>{dis(Complete({data:mytask , id:Date.now()}))}}>Add</button>
    <hr />
    <table  border={1}>
            <thead>
            <tr>
                <th>Task</th>
                <th>Delete</th>
            </tr>
            </thead>
            <tbody>
            {ans}
            </tbody>
        </table>
    </>
  )
}
export default App

