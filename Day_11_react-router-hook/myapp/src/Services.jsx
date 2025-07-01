import React from 'react'
import { useNavigate } from 'react-router-dom'

const Services = () => {
  const nav=useNavigate()
  const goForword=()=>{
    nav(1)
  }

  return (
   <>
    <center className='my-3'>
            <h2>Services Page</h2>
            <hr/>
            <button onClick={()=>nav('/contact')} className="btn btn-sm btn-danger px-4 fw-bold mx-4">Contact Us</button>
            <button onClick={()=>nav(-1)} className="btn btn-sm btn-primary px-4 fw-bold mx-4">Go Back</button>
            <button onClick={()=>goForword()} className="btn btn-sm btn-secondary px-4 fw-bold mx-4">Go Forword</button>
            <button onClick={()=>nav(2)} className="btn btn-sm btn-info px-4 fw-bold mx-4">Go Direclty +-</button>
    </center>
   </>
  )
}

export default Services
