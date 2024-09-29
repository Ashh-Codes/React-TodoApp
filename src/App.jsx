import { useState } from 'react'
import Todo from './Components/Todo'

import './App.css'

function App() {


  return (
    <>
    <h1 className='mt-5 text-center' style={{fontSize:'40px'}}>To-Do App</h1>
   <div style={{minHeightheight:'50vh'}} className="d-flex justify-content-center align-items-center w-100">
    <Todo/>
   </div>
    </>
  )
}

export default App
