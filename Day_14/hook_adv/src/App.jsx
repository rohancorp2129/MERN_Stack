import React, { useReducer } from 'react'

const App = () => {

// reduce fun define , handle logical part 
const reducer=(state, action )=>{
    // alert(state.count)
    // alert(action.type)

    switch(action.type){
        case 'INC': return {count : state.count+1} 

        case 'DEC': return {count : state.count-1}

        default : return state.count
    }
}
const[state , dispatch]=useReducer(reducer ,{count: 0})
  return (
    <>
    <center>
        <h1>useReducer Hook  , Performance Optimization  (Alternative to useState hook) </h1>
        <hr />
        <h2>Initial Count : {state.count} </h2>

        <button class="btn px-3 mx-3 btn-primary" onClick={()=>dispatch({type : 'INC'})}>Update Count </button>
        <button class="btn px-3 mx-3 btn-danger" onClick={()=>dispatch({type : 'DEC'})}>Reduce Count </button>
    </center>
    </>
  )
}

export default App
