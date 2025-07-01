import React, {useEffect, useState } from 'react'



const App = () => {
  
// const[state , setState]=useState("initial value")
  // we can pass any type of data as a initial value 
// const [name , setName]=useState("Rohan"/123/{}/[]/null);
const [name , setName]=useState("Rohan");

const updateState = ()=>{
    setName('Rahul')

}

// updating count 
const [count , setCount ] = useState(0);
const incrCount=()=>{
  // setCount(count+1)
  setCount(count => count+1)
}

const [colorName, setColor]=useState('orange');


// ***************************************************

const[bgcolor, setBgcolor] = useState('red');

// **********************************************

// useEffect(callback_fun , dependency) 
// useEffect=(()=>{
  
// },[])
// Perform side effects of our application / component 
// called after rendering 
// [] must pass dependencies , to avoid call after rerendering 

// useEffect(()=>{
//   // alert("useeffect called")
//   // after dependencies
//   alert("useeffect called after rendering ( first time only ) ")
// },[])

// below side effect called only for state name 
// useEffect(()=>{
//   // it called initially but after that only called for name 
//     alert("this is called after rendering name state hook  ")
// },[name])

const UpdateBgColor=()=>{
  setBgcolor('black')
}
useEffect(()=>{

    // changing bg color after 3 sec using settimeout 
    setTimeout(() => {
        setBgcolor('purple')
    }, 3000);

    // same after 5 sec 
    setTimeout(() => {
      setBgcolor('tomato')
    }, 5000);

},[bgcolor])


  return (
    <>
      <center>
      <h2 className='text-center p-3 text-primary bg-dark'>Welcome to React useState , useEffect Hooks ,</h2>
        
      <h1>Your Name is : {name}</h1>

      <button  className="btn btn-sm btn-outline-primary" onClick={()=>updateState()}>Chnage name </button>
      <hr />
      <h2>Initial Count : {count}</h2>
      <button className='btn btn-sm mx-3 px-3 text-center btn-primary ' onClick={()=>incrCount()}>Incraese Count</button>
      <button className='btn btn-sm mx-3 px-3 text-center btn-danger 'onClick={()=>setCount(count-1)}>Decrease Count</button>

      <hr />
      <h3 style={{color:colorName}}>Color is : {colorName}</h3>
      <button className='btn btn-sm mx-3 px-3 text-center btn-primary ' onMouseOver={()=>setColor('blue')}>Change Color</button>

      <hr />
      <h1 style={{color:'yellow' , background:bgcolor}}>Chnage my BG Color</h1>
      <button className='btn btn-sm mx-3 px-3 text-center btn-danger 'onClick={()=>UpdateBgColor()}>Update BG Color</button>
      </center>
      {/* useState : 

                It is a Hook in a functional component 
                used to manage state,/ holds the data / containg info about our component 
                it is mutable 

                syntax : 

                  const[state,setState]=useState(initialStateData)
        */}
    </>
  )
}

export default App
