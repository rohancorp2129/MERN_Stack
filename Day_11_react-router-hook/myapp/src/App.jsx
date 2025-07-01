import React from 'react'
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Services from './Services'
import Contact from './Contact'
import PageNotFound from './PageNotFound'
import Footer from './Footer'
import Page_Layout from './Page_Layout'
import Admin_Panel from './Admin_Panel'

const App = () => {
  return (
    <>
    <Router>
       {/* Sharing routing : Outlet is used to share one component to another components without import and export , we can apply it to parent 
        like here Home is parent we did nested route in App.jsx , but here is problem we apply outlet where we want that data on every page 
          so here Home page is repeting on every component , thats why we are creating Page_Layout   and now inside app.jsx we can apply parent as page_layout.jsx 
          But still Home page (/) not working , so for that we use index routing 
          Index routing : now here inside app.jsx for home we have to apply this . 
          */}
          
      {/* <Navbar/> */}
        <Routes> 

          {/* Multiple route */}
          {/* parentt route Home , Nested Route */}
          {/* Nested Routing  */}
          <Route path='/' element={<Page_Layout/>}>

          {/* Index Routing  */}
          <Route index element={<Home/>}></Route>
          {/* child route */}
          <Route path='/about' element={<About/>}></Route>
          <Route path='/contact/:name/:id' element={<Contact/>}></Route>
          <Route path='/services' element={<Services/>}></Route>

          </Route>
          {/* Admin Panel , Parent ( nested ) */}
          {/* Outlet needed */}
          <Route path='/admin'element={<Admin_Panel/>} >

              <Route index element={<h2>Login Page</h2>}/>
              <Route path='/admin/signup'element={<h2>Sign Up Page</h2>}/>
              <Route path='/admin/Forgot_pass'element={<h2>Forgot Password</h2>}/>

          </Route>


          <Route path='/footer' element={<Footer/>}></Route>
          {/* fallback routing  */}
          <Route path='*' element={<PageNotFound/>}></Route>
        </Routes>
    </Router>
    </>
  )
}

export default App
