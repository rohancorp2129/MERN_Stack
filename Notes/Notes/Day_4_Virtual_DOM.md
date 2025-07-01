
# Virtual DOM-  

Copy of regular dom stored on your browser memory
i.e lightweight representation of your regular dom
React is a Faster
Its updating and rendering results faster than regular dom


# Reconcilation

https://www.geeksforgeeks.org/reactjs-reconciliation/


# What is Reconciliation in ReactJS?

React Reconciliation refers to React’s process of comparing the current and previous states of the Virtual DOM and updating the DOM efficiently. It makes the DOM updates faster in React. It updates the virtual DOM first and then uses the diffing algorithm to make efficient and optimized updates in the Real DOM.

😊Eg

When UI element render - Create A copy ( Virtual DOM) => if state of object changed => 

create new copy of VD =>

pass it to first => if same => Avoid rendering =>

Either rendering component => Update on Real Browser DOM



👉Updates the Browser DOM with the least number of changes possible without rendering the entire DOM

Regular DOM-takes time to updating and rendering the results like in Jquery,js,Angular


# Diffing Alogorithm - Comparsaion done by alogorithm

*********************************************


