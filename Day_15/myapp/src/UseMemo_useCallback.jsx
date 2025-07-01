import React, { useMemo, useState } from 'react'

const UseMemo_useCallback = () => {

const [count , setCount]=useState(1)
const [item ,setItem]=useState(0)

const updateCount=()=>{
    setCount(count+1)
}
const updateItem=()=>{
    setItem(item+1)
}

// this fun calling only when we update count
const demo=useMemo(()=>{
        console.log("useMemo - Demo fun called ")
},[count])
  return (
    <div>
        <h2>UseMemo useCallback for performance optimication </h2>
        <h3>Initial Count :{count} </h3>
        <h3>Initial Iteam :{item} </h3>
        <hr />
        <button onClick={()=>updateCount()}>Update Count</button>
        <button onClick={()=>updateItem()}>Update Item</button>
    </div>
  )
}

export default UseMemo_useCallback
