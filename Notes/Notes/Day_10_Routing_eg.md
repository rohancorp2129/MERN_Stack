

# Routing Setup Eg


# 1


function AppLayout() {
    return (
      <>
      <Header/>
      <Outlet/> // Placeholder for nested routes 
      <Footer/>
      </>
    );
  }


function App() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div>
    <div className= "mouse-cursor style4" > </div>
    <Router>
    <Routes>
    <Route path="/" element = {< AppLayout />}>
      <Route index element = {< Slider />} />
        <Route path = "about" element = {< Aboutus />} />
        <Route path = "services" element = {< Services />}
        <Route path="*" element = {< PageNotFound />} />
   </Route>





#  Separate Admin Routes 

<Route path="/admin" element = {< AdminLogin />}>
  <Route index element = {< AdminMenu />} />
    <Route path = "/forgotpassword" element = {< ForegtPassword />} />
      <Route path = "login" element = {< AdminLogin />} />
        </Route>
        </Routes>
        </Router>
        </div>
  );
}

export default App;

**************************************************************************************

# 2

  function MainLayout() {
    return (
      <>
      <Header/>
      <Outlet/> {/* Placeholder for nested routes */ }
      <Footer/>
      </>
    );
  }

function App() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div>
    <div className= "mouse-cursor style4" > </div>
    < Router >
    <Routes>
    {/* Main App Routes */ }
    < Route element = {< MainLayout />}>
      <Route path="/" element = {< Slider />} />
        < Route path = "about" element = {< Aboutus />} />
          < Route path = "services" element = {< Services />} />
            < Route path = "career" element = {< Career />} />
              < Route path = "blog" element = {< Blog />} />
                < Route path = "contact" element = {< Contact />} />
                  < Route path = "blog-detail/:id" element = {< BlogDetail />} />
                    < Route path = "*" element = {< PageNotFound />} />
                      < /Route>


#  Admin Routes - Directly defined without MainLayout 


<Route path="/admin" element = {< AdminMenu />}>
  <Route path="forgotpassword" element = {< ForegtPassword />} />
    < Route path = "login" element = {< AdminLogin />} />
      < Route path = "users" element = {< Users />} />
        < /Route>
        < /Routes>
        < /Router>
        < /div>
  );
}

*****************************************************************************

# Same Page Scrolling

import React from 'react';
import { Link as ScrollLink, Element } from 'react-scroll';

function Admin() {
    return (
        <div>
            <h1>Admin Page</h1>
            <nav>
                <ScrollLink 
                    to="signup" 
                    smooth={true} 
                    duration={500} 
                    offset={-50} 
                >
                    Signup
                </ScrollLink>
                <ScrollLink 
                    to="forgot" 
                    smooth={true} 
                    duration={500} 
                    offset={-50} 
                >
                    Forgot Password
                </ScrollLink>
            </nav>
            <Element name="signup" style={{ padding: '100px 0' }}>
                <h2>Signup Section</h2>
                <p>This is the Signup section content.</p>
            </Element>
            <Element name="forgot" style={{ padding: '100px 0' }}>
                <h2>Forgot Password Section</h2>
                <p>This is the Forgot Password section content.</p>
            </Element>
        </div>
    );
}

export default Admin;

*************************************************************



# AOS  Integration

To Integrate AOS 

npm install aos --save

👉index.js

import AOS from 'aos';
import 'aos/dist/aos.css';

👉App.js

useEffect(() => {
    AOS.init({
      duration: 1200,  // animation duration
    });
  }, []);

**********************************************
