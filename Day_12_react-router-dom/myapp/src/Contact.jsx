import React from 'react'

// import hook
import {useNavigate} from 'react-router-dom'


const Contact = () => {

// must call inside fun 
const navigate = useNavigate()
    return (
        <>

            <h1 className='text-center p-4 fw-bold'>Contact Us</h1>
            <button className='btn btn-primary ps-4 fw-bold mx-2' onClick={()=>navigate('/')}> Go to Home</button>
            <button className='btn btn-primary ps-4 fw-bold' onClick={()=>navigate('/')}> Go to Home</button>

        </>
    )
}

export default Contact
