import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToList,removeList,toggleItemList} from '../Redux/TodoSlice'


const Todo = () => {

     const mytodoList =useSelector(state=>state.TodoReducer)
     const dispatch = useDispatch()
     const [text,setText] = useState("")

     const completedCount = mytodoList.filter(todo => todo.completed).length;

     const handleAddText=()=>{
        dispatch(addToList({
            id:new Date().getTime(),
            text,
            completed:false
        }))
        setText("")
     }

       
  return (
    <div>
        <div className='border rounded p-5 text-center shadow bg-dark'>
                <div className="d-flex justify-content-between align-items-center mt-2">
                 <input  onChange={(e) =>setText(e.target.value)} value={text} type="text" placeholder='Enter To Do Task' className='form-control' />
                 <button style={{width:'150px'}}  onClick={handleAddText} className='btn btn-primary ms-3'>Add to list</button>
                
                </div>
                <p className='text-white mt-4'> You can strike out completed Tasks!!!!</p>
                <div className='mt-2 text-center'>
                    <ol className='text-white'>
                        {
                           mytodoList.length>0?
                           <>
                           {
                           mytodoList.map(item=>(

                            <div className='d-flex mt-2'>
                            <li key={item.id}  onClick={()=>dispatch(toggleItemList(item.id))}  style={{width:'300px',textDecoration: item.completed ? 
                                "line-through" : "none",
                                color: item.completed ? 
                                "red" : "white",}} className='text-start' >{item.text}</li>
                            <button style={{width:'100px'}} onClick={()=>dispatch(removeList(item.id))} className='btn btn-danger ms-5'>Remove</button>
                            
                            </div>
                            ))
                          }
                          <p className='text-center'>Completed Tasks:{completedCount}</p>
                          </>

                    :
                           <div>
                            <p className='text-danger'>Your To-Do list is empty!!!</p>
                        </div>
                           
                        }
                        
                        
                        
                        
                    </ol>
                </div>
        </div>
    </div>
  )
}

export default Todo
