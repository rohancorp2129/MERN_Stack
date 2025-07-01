
# Lifecycle Methods  in a Class component




# Stages of your react application component

# 3 Phases of your component

👉Mounting – Birth of your component- Add component to the DOM Tree
👉Update – Growth of your component - Updates
👉Unmount – Death of your component - Remove or Destroy From DOM Node Tree


👉ErrorHandling- 

static getDerivedStateFromErrors()
{

}

# Mounting phase-  initial stage of your react application

Mounting

The mounting means to put elements into the DOM. 
React uses virtual DOM to put all the elements into the memory. It has four built-in methods to mount a component namely


1️⃣getinitialstate()- executed before creation of component


1️⃣constructor()
2️⃣render()
3️⃣getDerivedStateFromProps(props,state)- each and every rendering called

 It takes props and state as an argument and returns an object with changes to the state.

 This method should be static

👉static - 

Defined as a static method
The static keyword defines static methods for classes.
Static methods are called directly on the class (Car from the example above) - 
without creating an instance/object (mycar) of the class.


class A()
{

    constructor(id,name)
    {
        this.id=id;
        this.name=name
    }

}

var s1=new A(12,"Daulat")
var s2=new A(12,"Daulat")


4️⃣componentDidMount()-

   Similar like 'useEffect' hook
   Used to perform side effect on our application
   Called after render method
   Do something after data rendering
   Used for API calling, Handle netowork requests and set , Triggers events



**********************************************************************************************


# Updating Phase - when we Updating something in our component

This is the second phase of the React lifecycle.

👉 Built in Methods

shouldComponentUpdate()

getSnapshotBeforeUpdate()
componentDidUpdate()


# shouldComponentUpdate

Called to determine whether the change in props and state should trigger a re-render.
Component always returns true.
PureComponent implements a shallow comparison on 
 props and state and returns true if any props or states have changed.

If false is returned, Component#render, componentWillUpdate and componentDidUpdate will not be called.


shouldComponentUpdate(nextProps,nextState)
{
 return true;
}



# getSnapshotBeforeUpdate() is another new lifecycle method introduced in React recently.

 This will be a safer alternative to the previous lifecycle method componentWillUpdate().
 It is called right before the DOM is updated.
The value that is returned from getSnapshotBeforeUpdate() is passed on to componentDidUpdate().

Keep in mind that this method should also be used rarely or not used at all.

getSnapShotBeforeUpdate(prevProps,prevState)
{
return null;
}

*********************************************************************

# componentDidUpdate


Called immediately after updating occurs. Not called for the initial render.
The snapshot is only present if getSnapshotBeforeUpdate is present and returns non-null.


componentDidUpdate(prevProps,prevState,snapshot)
{
    return true;
  
}


***************************************************

# Unmounting Phase


The final or the end of the react lifecycle is Unmounting. This is used when a component is removed from the DOM. React has only one built-in method that gets called when a component is unmounted

👉componentWillUnmount()


Called immediately before a component is destroyed or Unmounted
Perform any necessary cleanup in this method, 
such as cancelled network requests, 
or cleaning up any DOM elements created in componentDidMount.


👉Test Cases: 

If there are any cleanup actions like canceling API calls 
or clearing any caches in storage you can perform that in the 
componentWillUnmount method.


    componentWillUnmount()
    {

    }

we cannot call setState() 
during this lifecycle method.component will never be re-rendered and because of that 




***************************************************************************


# Interview Question

How to use lifecycle methods in functional components in React.js? useEffect() hook Example Tutorial


# Reference
https://www.java67.com/2021/09/ow-to-use-lifecycle-methods-in-functinal.html




# componentDidMount()


useEffect Hook
The useEffect() hook has two arguments - a callback function and a dependency array. The callback function is mandatory while the dependency array is optional.



useEffect(()=>{
    console.log("This code will execute when the component is mounted");

},[])

# componentDidUpdate


useEffect(() => {

    console.log("This code will execute when the component updates");

  }, [counter]);

  The useEffect() hook will execute only when the value of “counter” is changed.


# componentWillUnmount

The componentWillUnmount() method executes when the component is unmounted, 
or removed from the DOM tree. 


useEffect(()=>{


return ()=>{

      console.log("Behavior right before the component is removed from the DOM.");

}

},[])





************************************************************************************