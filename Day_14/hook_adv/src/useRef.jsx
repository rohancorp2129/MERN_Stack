import React, { useRef } from 'react'

const UseRef = () => {

const data =useRef(null)

const GetData=()=>{
        // document.getElementById('username').value 
    // console.log(data)
    // console.log(data.current)
    console.log(data.current.value)

    data.current.style.color='orange'

    // set value 
    data.current.value='Rahul'
}
  return (
    <>
    <center>
        <h1>useRef Hook : used to Form Handling - DIrectly access to form Data  </h1>
        <hr />
        {/* <h1>Your Name : {data.current.value} </h1> */}
        <label htmlFor="">Enter your Name :</label>
        <input type="text" name='username' id='username' ref={data} onChange={()=>GetData()} placeholder='user name' />

        <br /> <hr />

    </center>
    </>
  )
}

export default UseRef
