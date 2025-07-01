import React, { useState } from 'react'
import A from './A'

const App = () => {
  const [name ,SetName]=useState("Rohan")
  return (
    <div>
          <A    
            EmpName={name} role='react-dev' eid={123456}
          />
    </div>
  )
}

export default App
