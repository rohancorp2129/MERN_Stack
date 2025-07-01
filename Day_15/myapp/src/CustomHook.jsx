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
