import { createSlice } from "@reduxjs/toolkit";

const TodoSlice =createSlice({
    name:'tosoSlice',
    initialState:[]
        
    
    ,
    reducers:{
        addToList :(state,valueFromComponent)=>{
           // todos.push(valueFromComponent.payload)
           state.push(valueFromComponent.payload)

        },
        removeList :(state,valueFromComponent)=>{
        return state.filter(item=>item.id!=valueFromComponent.payload)

        },
        toggleItemList:(state,valueFromComponent)=>{
           return state.map((item)=>item.id===valueFromComponent.payload?{
            ...item,
            completed:!item.completed,
           
           }:
           item
        )
        
        }
    }
})

export const {addToList,removeList,toggleItemList} = TodoSlice.actions
export default TodoSlice.reducer