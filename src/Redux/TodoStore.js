import { configureStore } from "@reduxjs/toolkit";
import TodoSlice from "./TodoSlice";

const TodoStore =configureStore({
    reducer:{
        TodoReducer:TodoSlice
    }
})
export default TodoStore