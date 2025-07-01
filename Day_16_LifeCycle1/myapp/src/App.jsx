import React from "react";

export default class App extends React.Component {
    constructor(props) {
      console.log("Constructor Called")
      super(props);
      this.state=({
          
      })
      
    }

    static getDerivedStateFromProps(){

    }
    componentDidMount(){
      console.log("componentDidMount method Called ")
    }
    render(){

      return(
        <>
        <center>
          <h2>React LifeCycle </h2>
          <h3>Constructor</h3>
          <h3>render</h3>
          <h3>static getDerivedStateFromProps</h3>
          <h3>componentDidMount</h3>

          <hr /><hr />
          <h2>Your Name :{this.props.name} </h2>
          
          </center>
        </>
      )
    }
}