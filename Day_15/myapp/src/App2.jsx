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
