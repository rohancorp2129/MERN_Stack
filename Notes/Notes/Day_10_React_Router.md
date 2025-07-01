
# React Router


# Use cases


👉Helps to navigating or redirecting to multiple components or pages without reloading of our web page.

👉Handles common operations such as handling url , params,redirecting and loading the data

👉SPA- Single Page application


# Package

Provide  declarative library  for react application


react-router-dom

latest version- 7.2.0
old version -6




# Installation

 npm i react-router-dom  - 7.2.0   
 npm i react-router-dom@6



# Setup Project

mkdir React_APP
cd React_APP
npx create-react-app myapp
cd myapp
npm start



# NavLink-  


Is a wrappepr in React router dom

Used to redirecting or navigating to one component /page to another component without reloading of our web browser/page i.e SPA

By default class i.e active

Which represents Active class i.e we get to know on Which component we are currently



 ***********************************************************************************


# hook-


👉Used in functional component
👉Is like a function to perform multiple operations,validations,manipulationns and more
👉holds the statefull logic  like state object in class component
👉Provide Built in functionality
👉React Hooks must be called in a React functional component or a custom React Hook function
👉prefix- use



# 3 Step Work

1 Import Hook
2 Must called hook as a function
3 used


# React Router DOM Hooks

# Latest version

# useNavigate - To navigate or redirect to multiple component
to see history


import { useNavigate} from 'react-router-dom'
const nav=useNavigate()
Used



****************************************************


# Old Version - V5

useHistory()


import { useHistory} from 'react-router-dom';
const history=useHistory()

history.back()
history.forward()
history.push('/about');


creates a new object and used whenever we want and return history and location object



 ************************************

#  useLocation() hook

Return JS location object

  location.pathname;
  location.key;
  location.hash

 location.replace()


# Syntax
    const loc=useLocation();
    console.log(loc);
    
    console.log(loc.pathname)
    console.log(loc.key)


     eg
     used to conditonally rendering

    if(loc.pathname==='/')
    {
        loc.replace.pathname="/about"
    }



 ***************************************

# Url Decoding

https:- NP

//www.google.com - domain

/search =path

?
q=apple+watch+series+10 //query


&-varaibles
&
oq=apple+watch
&gs_lcrp=EgZjaHJvbWUqDQgEEAAYsQMYgAQY9AUyDwgAECMYJxjjAhiABBiKBTIPCAEQLhgnGIAEGOUEGIoFMgYIAhBFGEAyEggDEEUYOxiLAxixAxiABBj0BTINCAQQABixAxiABBj0BTIGCAUQRRg8MgYIBhBFGDwyBggHEEUYPNIBCDc4ODNqMWo3qAIAsAIA

&sourceid=chrome
&ie=UTF-8





 **********************************


#  useParams

👉To access url data in a object format
👉Returns an object of key:value pairs of the dynamic
  params from the current URL that were matched by the route path.


👉Used to access match params of current <Route path="/>
👉child router inherits all paramas from their parent router





*************************************************
Without hook


const User=({match}=>{
   return{
     match.params.name
   }
 })
 

********************************************


# useMatch() hook

👉Used to create relative subroute paths that matches with particular route
require pattern argument and does not accept pattern as an array

👉Returns a PathMatch object if the given pattern matches the current URL.

👉This is useful for components that need to know "active" state, e.g. <NavLink>.

👉The useMatch hook in React Router is a powerful tool that enables us to 
determine if the current URL matches a particular path. 

👉It provides a straightforward way to conditionally render components or
Perform logic based on the matched path.


😊pathMatch Object

 {
   "params": { },
   "pathname": "/service",
     "pathnameBase": "/service",
      "pattern": {
     "path": "/service",
       "caseSensitive": false,
         "end": true
   }
 }



https://blog.logrocket.com/using-hooks-react-router/

 ***********************************************************

  # Nested routing-  one path into another path

   Eg. https://www.amazon.in/minitv/ct/web-series

 😊Solution
 

 # Shared routing- 
      
  # Outlet
         👉It Allows us to share one component to multiple other components i.e outlet-
         👉No need to import and export
         👉It also access child routes

# Index  Routing



 ************************************************************************************
 