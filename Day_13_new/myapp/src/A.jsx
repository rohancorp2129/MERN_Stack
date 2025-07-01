import React from 'react'
import B from './B'

const A = (EmpName,role,eid) => {
  return (
    <>
        <h4>A component </h4>
        {/* <p>{props.EmpName}</p>
        <p>{props.role}</p>
        <p>{props.eid}</p> */}
        <hr/>

        <B 
        EmpName={EmpName}
        Role={role}
        Eid={eid}
            />
    </>
  )
}

export default A
