import React, { Component } from 'react'

export default class Child extends Component {

componentWillUnmount(){
    console.log("componentWillUnmount method called ")
}
  render() {
    return (
      <div>
        
        <h2>Child COmponent</h2>
        <h2>Child COmponent</h2>
        <h2>Child COmponent</h2>
        <h2>Child COmponent</h2>
      </div>
    )
  }
}
