import React from 'react'
import D from './D'

const C = (EmpName,role,eid) => {
  return (
    <>
        <h2>C Components</h2>
        
        <D
        EmpName={EmpName}
        Role={role}
        Eid={eid}
        />
    </>
  )
}

export default C
