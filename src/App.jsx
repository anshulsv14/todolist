
import { useState } from "react";
import {useSelector, useDispatch} from "react-redux";
import Table from 'react-bootstrap/Table';
import { addTask, taskDelete, taskComplete, taskInComplete, taskeditSave } from "./todoSlice";
import Button from 'react-bootstrap/Button';

const App=()=>{
  const  [val, setVal] = useState("");
  const [btnStatus, setBtnStatus] = useState(true);
  const [workId, setWorkId] = useState("");
  const mytask=useSelector(state=>state.todo.task);

  const dispatch= useDispatch();

  console.log(mytask);

  const myComplete=(id)=>{
    dispatch(taskComplete({id:id}));
     
  }

  const myInComplete=(id)=>{
    dispatch(taskInComplete({id:id}));
  }

  const mydataEdit=(id, work)=>{
    setVal(work)
    setWorkId(id)
    setBtnStatus(false)
  }

  const myEditSave=()=>{
        dispatch(taskeditSave({id:workId, data:val}));
        setBtnStatus(true)
  }


  let sno=0;
const ans=mytask.map((key)=>{
      sno++;
           return(
            <>
              <tr>
                <td>{sno} </td>
                <td> 
                  
                  {key.CompStatus ? (<> 
                  
                   <span style={{color:"red", textDecoration:"line-through"}}> {key.work}  </span> 
                  </>) : (<> 
                  
                    {key.work}
                  </>)}
                  
                  
                  
                   </td>
                <td>
                <Button variant="danger" size="sm" onClick={()=>{dispatch(taskDelete({id:key.id}))}}>Delete</Button>
                   </td>
                   <td>
                 
                 {key.CompStatus? (<> 
                 
                 <Button variant="primary"  size="sm" onClick={()=>{myInComplete(key.id)}} >InComplete</Button>
                 
                   </> ) : (<>
                   
                    <Button variant="primary"  size="sm" onClick={()=>{myComplete(key.id)}} >Complete</Button>
               

                    </>)}
                 
                  
               
                 </td>

                 <td>
                 <Button variant="warning"  size="sm"
                 onClick={()=>{mydataEdit(key.id, key.work)}} >Edit</Button>
              
                 </td>
              </tr>
            </>
           )
})

  return(
    <>
     <center>
       <h1> To Do App List</h1>
       Enter Your Task : <input type="text" value={val} onChange={(e)=>{setVal(e.target.value)}} />
     {btnStatus?(<>
      <button onClick={()=>{dispatch(addTask({id:Date.now(), work:val, CompStatus:false}))}}>Add</button>
      
     </>):(<>
     
      <button onClick={myEditSave}>Edit</button>
     </>)}
     
      
       
       <hr />
       <Table striped bordered hover style={{width:"50%"}}>
      <thead>
        <tr>
          <th>#</th>
          <th>My Work</th>
          <th> </th>
          <th></th>
          <th> </th>
        </tr>
      </thead>
      <tbody>
          {ans}
      </tbody>
      </Table>
      
     </center>
    </>
  )
}

export default App;
