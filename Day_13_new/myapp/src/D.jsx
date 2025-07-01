import React from 'react'

const D = (EmpName,role,eid) => {
    
  return (
    <>
        <h1>D component</h1>

        <mark>
            <h3>YOur Name : {EmpName}</h3>
            <h3>YOur Role: {role}</h3>
            <h3>YOur Eid : {eid}</h3>
        </mark>
    </>
  )
}

export default D
