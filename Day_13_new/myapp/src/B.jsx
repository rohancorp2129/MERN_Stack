import React from 'react'
import C from './C'

const B = (EmpName,role,eid) => {
    
  return (
    <>
        <h3>B component </h3>

        <C
        EmpName={EmpName}
        Role={role}
        Eid={eid}
        />
    </>
  )
}

export default B
