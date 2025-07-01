# React Hook 

1. # useState : use in stateless fun . component 
Use to holds the state of our application i.e used to manage state of our component 
    It is mutable , we can change or update it at any time . 

Syntax : useState

const [state , setState] = useState(initialState) ;
Ex.
const [count , setCount] = useState(0) ;



    in class component - state object 
    this.state=({

    });

    this.useState({

    });

2. # useEffect hook 

    Used to perform side effect on our application
    do something after data rendering 
    ex.
    used while API calling 
    Handle neetwork request 

    Side effect - event trigger / animated like setTimeout . setInterval

    useEffect hook called after rendering 

    [] : must pass dependancy to avoid multi call after rendering 

    


# useReducer Hook :
    replacement of useState hook 
    Used while Performance Optmization
    Used when u have complex multiple state logic
    i.e Used to handle multiple cases, operations at a same time
use to hancle mutable objetct data ( continously change ho raha hain vo data ) to avaid re-rendering  ...


    
rafce : react arrow funtion component Example


syntax : 
const [state, setState]=useState(initialState);

syntax: 
const [state, dispatch]=useReducer (reducer, initialState)

dispatch : handling events 
reducer : contain logical things. 


* No need to add break keywork under switch , cause it will stop execution and default happened same as per our logic 


* Additional Points:
useReducer is usually preferable to useState
when you have complex state logic that involves multiple sub values.
It also lets you optimize performance
for components that trigger deep updates because you can pass dispatch down instead of callbacks


#useRef- hook 
(uncontroll component )
    Used for performance optmization
    Used to handle mutable object data like form Handling using current and Ref attribute/Property
    return mutable ref object data

    * Avoid rendering cause

    It can be used to store a mutable value that does not cause a re-render when updated. ex . form handling ke time pe use karte hain 

    * It can be used to access a DOM element directly.
    
    #Does Not Cause Re-renders
    If we tried to count how many times our application renders using the useState Hook, we would be caught in an infinite loop since this Hook itself causes a re-render.

# Custom Hook in react js : 

    Create your own hook 

# CustomHook.jsx
import React, { useState } from 'react'

const CustomHook = () => {

// 1 
const [count , setCount] =useState(0)

//2 define hook 
const countHandler=()=>{
    setCount(count+5)
}
const CountHandler2=()=>{
    setCount(count-2)
}
// 3 {}
  return {
        count,
        countHandler,
        CountHandler2
  }
}

export default CustomHook

# App2.jsx 
    import React from 'react'
// 1 import 
import CustomHook from './CustomHook';


const App2 = () => {

    //  2 call 

    const data=CustomHook()
//  we can use same hook multiple time by stored in a another variable 

const data2 =CustomHook()
  return (
    <>      <center>
            <h2>custom hook in react js </h2>
            <hr />
            {/* 3 use  */}

            <h2>Initial Count : {data.count} </h2>

            <hr />
            <button onClick={data.countHandler}>Update Count</button>

            <hr />
            <h2>Initial Count 2 : {data2.count} </h2>
            <button onClick={()=>{data2.countHandler()}}>Update Count 2 </button>           
            <button onClick={()=>{data2.CountHandler2()}}>Reduce Count 2 </button>
            </center>

    </>
  )
}

export default App2


# useMemo useCallback : hook  ( both are similar )
User for performance optimizayion 

useMemo : 
useCallback : it return memoized value 

function does not execute each an every rendering , it called when we want 

syntax : 
    useMemo(callback,['dependancy'])

Additional Hooks : 

# useId  : Use to generate ID 

# useTransition : 

# useOptimistic :

# useImperativeHandle 

