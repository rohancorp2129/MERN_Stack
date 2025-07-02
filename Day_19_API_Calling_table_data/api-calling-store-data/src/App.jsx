import React, { useEffect, useState } from 'react'

const App = () => {

  // API calling 

  // 1. XMLHttpRequest method 
  // 2. Fetch method - 
  // 3. axios package 

  const [data , setData]=useState([])
  useEffect(()=>{

    fetch("http://localhost:3000/emp")
    .then((res)=>{
      res.json().then((result) =>{
        // console.log(result)

        // set data
        
        setData(result)
      })

    })
  },[])
  return (
   <>
   <h2 className='text-center text-warning bg-dark p-3'>API calling and store data in Table format </h2>

    <table className='table table-bordered table-hover'>
      <thead className='text-center'>
        <th>Sr No</th>
        <th>Id</th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Phone</th>
      </thead>
      <tbody className='text-center'>
        {
          data.map((val,index)=>{
            return(
              <tr key={index}>
                <td>{index+1}</td>
                <td>{val.id}</td>
                <td>{val.name}</td>
                <td>{val.email}</td>
                <td>{val.role}</td>
                <td>{val.phone}</td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
   
   </>
  )
}

export default App
