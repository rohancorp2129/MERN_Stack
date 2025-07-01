import React, { useContext } from 'react'

// Step 2 - Import context
import { uName, uEmail } from './contextData'

const Consumer = () => {
  // Step 3 - Use context
  const name = useContext(uName)
  const email = useContext(uEmail)

  return (
    <>
      <h2>Consumer Component</h2>
      <h2>User Name: {name}</h2>
      <h2>User Email: {email}</h2>
    </>
  )
}

export default Consumer
