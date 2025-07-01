
# Hooks


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



# useState -Used in Stateless functional Component

Used In functional compoment
Used to holds the state of our application i.e used to manage state of our component
Holds the data / state full logic
Mutable- We can change or update our state whenever we want


i.e Returns a stateful value, and a function to update it.

# Syntax-

const[state,setState]=useState(initialState);
eg
const[data,setData]=useState(initialdata/100/""/[]/{})



In class Component- state object 

this.state=({

})

this.setState({

})



# useEffect hook

Used to perform side effect on our application
Do something after data rendering
Eg

Used while API calling
Handle network request

Side effect- Event/Tigger / Animated like setTimeout/setInterval

useEffect hook Called after rendering
 

 syntax

 useEffect(effect,dependency)
 
 eg

 useEffect(()=>{

 },[])

 []-   must pass dependency to avoid multiple time rendering


*******************************************************8

# useRef- hook


Used for performance optmization

Used to handle mutable object data like form Handling using current and Ref attribute/Property

return mutable ref object data

Avoid rendering cause


It can be used to store a mutable value that does not cause a re-render when updated.

It can be used to access a DOM element directly.

# Does Not Cause Re-renders

If we tried to count how many times our application renders using the useState Hook, we would be caught in an infinite loop since this Hook itself causes a re-render.

To avoid this, we can use the useRef Hook.



******************************************************


# Task


3 Array Object - Emp

const emp1=[{emp_id:1, emp_name:'Daulat', emp_email:'dault@gmail.com',emp_CTC:'20LPA'}];

const emp2=[{emp_id:2, emp_name:'Atharv', emp_email:'atharvav@gmail.com',emp_CTC:'40LPA'} ];

const emp3=[{emp_id:3, emp_name:'Rehman', emp_email:'rehman@gmail.com',emp_CTC:'10LPA'}];





<!-- ************************************************************* -->


# Scenario

App - Parent Main Component

Child Component - A

App 👉 A 👉 B 👉 C 👉 D




Data A - D ( data want)
Unwantedly We are passing data to each component through Props


# prop Drilling  - problem

Code becomes complex
Developement time increase
Performance down
reduced maintainability.
more


# What is Prop Drilling and How to Avoid it?

Prop drilling in React refers to the process of passing data (props) from a parent component 
down to deeply nested child components through multiple intermediate components, 
even if those intermediate components do not directly use the data. 
This can lead to unnecessary complexity and reduced maintainability.


# Solution- 

👉ContextAPI Mechanism - useContext hook

Used in small scale application

The React Context API provides a way to share values (like state, functions, or constants) between components without explicitly passing props.


Large scale application

👉Redux- state mgmt library



<!-- ******************************************** -->

ContextAPI

# Create Context

         4 steps Work

         1- Import Create Context function from react
                import {createContext} from 'react'
            
         2- Defined context variable and called createContext
         var user_name=createContext()

         3- Pass data / value inside into context variables though provider and value property 

            <user_name.Provider value="ABC">
                 <Consumer>
            </user_name.Provider>

         

         4- Export created context to reused 

           

# Use Context

  4 Steps To use

         1 Import useContext Hook

         Accepts a context object (the value returned from React.createContext) 
         and returns the current context value, as given by the nearest context
         provider for the given context.

        2 Import created context which u export
        3 Defined varaible and called useContext hook and inside pass imported context
        4 Used




************************************************

# useReducer hook

Alternatative to 'useState' hook
Used while Performance Optmization
Used when u have complex multiple state logic 
i.e Used to handle multiple cases, operations at a same time


useState
const[data,setData]=useState(initial state)


useReducer
const[state,dispatch]=useReducer(reducer,initialState)


👉Additional Points: 

useReducer is usually preferable to useState 
when you have complex state logic that involves multiple sub - values.
It also lets you optimize performance
for components that trigger deep updates because you can pass dispatch down instead of callbacks.

*********************************************************************************

# useMemo

Used for performance optimization
To Avoid reloading of our application due to Multiple function callbacks

i.e
We called functions only when we required

useMemo will only recompute the memoized value when one of the deps has changed.


memoized - Function doesnt execute on each and every rendering but call only when one if its dependepency / value changed

syntax

useMemo(callback,[dependency])



# useCallback


The React useCallback Hook returns a memoized callback function.


The useMemo and useCallback Hooks are similar.
The main difference is that useMemo returns a memoized value and useCallback returns a memoized function

This allows us to isolate resource intensive functions so that they will not automatically run on every render.

The useCallback Hook only runs when one of its dependencies update.

This can improve performance.