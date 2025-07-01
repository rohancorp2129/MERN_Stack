import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Admin_Panel = () => {
  return (
    <div>
        <h2>Admin Panel</h2>
        <NavLink to={'/admin/signup'}> Sign Up</NavLink>
        <br/>
        <NavLink to={'/admin/forgot_pass'}> Forgot Pass</NavLink>
        <hr/>

        <Outlet/>
      
    </div>
  )
}

export default Admin_Panel
