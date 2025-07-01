import React, { Component } from 'react'
import Child from './Child';

export default class App extends Component {

  constructor(){
    // 1
    console.log("constructor called")
    super();
    this.state=({
      id:1,
      name:'Rohan',
      role:'react dev',
      ctc:'10 lpa',

      show:true
    })
  }

//3 
static getDerivedStateFromProps(props , state){
  console.log("getDerivedStateFromProps called")

}

//4 
componentDidMount(){
  console.log("componentDidMount called")
}

// upadting state
updateState=()=>{

  this.setState=({
    name:'Raj',
    role:'Tester'
  })
  
}

shouldComponentUpdate(props , state){
  console.log("shouldComponentUpdate called")
  return true
}

getSnapshotBeforeUpdate(prevProps, prevState){
  console.log("getSnapshotBeforeUpdate called")
}

componentDidUpdate(prevProps,prevState,snapshot){
  console.log("componentDidUpdate called")
}


// upmounting Phase : destroy component from DOM 
// we can do cleanup after work is done 

// componentWillUnmount method : 

ToggleComponent = ()=>{
// alert()
  this.setState=({
  show: !this.state.show
  })
}


  render() {
    //2 
    console.log("render called")
    return (
      <>
      <h2>Lifecycle : Unmounting and its method </h2>

      <h3>Your Name :{this.state.name} </h3>
      <h3>Your Role :{this.state.role} </h3>

      <button onClick={()=>this.updateState()}>Update State</button>

      <hr />
      {
        this.state.show ? <Child/> : <p>Unmount Component</p>
      }

      <hr />
      <button onClick={()=>this.ToggleComponent()}>Toggler</button>
      </>
    )
  }
}
