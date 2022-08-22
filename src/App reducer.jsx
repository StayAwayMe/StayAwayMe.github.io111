import React, { Component } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import { useReducer } from 'react'
const initialState = {count:0}
const reducer = (state,action)=>{
  switch(action.type){
    case 'increment':
      return {count:state.count + 1} 
    case 'decrement':
      return {count:state.count - 1}
    default:
      return state
  }
}

function App(){
  const [state,dispatch] = useReducer(reducer,initialState)
  return <div>
    count:{state.count}
    <button onClick={()=>dispatch({type:"increment"})}>++</button>
    <button onClick={()=>dispatch({type:"decrement"})}>--</button>
  </div>
}


export default App
