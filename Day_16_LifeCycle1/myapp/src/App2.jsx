import React, { Component } from 'react';

export default class App2 extends Component {
  // 1️⃣ Constructor - initializes state
  constructor(props) {
    super(props); // Must call super before using 'this'
    console.log("Constructor Called");
    this.state = {
      empId: 1,
      empName: 'Rohan',
      empRole: 'React Dev',
    };
  }

  // 2️⃣ getDerivedStateFromProps - runs before render, both on mount & update
  // It's static and cannot access 'this'
  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps method called");
    return null; // Return new state object to update state, or null to do nothing
  }

  // 3️⃣ componentDidMount - runs once after the component is rendered (mount phase)
  componentDidMount() {
    console.log("componentDidMount method called");
    // Good place to fetch API data or start subscriptions
  }

  // 🔁 Updating Phase Methods (run when state/props change)

  // 4️⃣ shouldComponentUpdate - controls whether to re-render the component
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate method called");
    console.log("Next State:", nextState);
    return true; // Return false to prevent re-render
  }

  // 5️⃣ getSnapshotBeforeUpdate - captures DOM state before update (rarely used)
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate method called");
    console.log("Previous State:", prevState);
    return null; // Return value passed to componentDidUpdate as 3rd argument
  }

  // 6️⃣ componentDidUpdate - runs after component updates
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate method called");

    // Check if empName has changed
    if (prevState.empName !== this.state.empName) {
      console.log("Updated Name:", this.state.empName);
    }
  }

  // 🖼️ Render Method - Required, returns JSX to display UI
  render() {
    console.log("Render called");

    // Function to update state on button click
    const updateState = () => {
      this.setState({
        empName: 'Raj',
        empRole: 'MERN Dev',
      });
    };

    return (
      <>
        <h1>React Lifecycle: Updating Phase</h1>
        <h2>Emp ID: {this.state.empId}</h2>
        <h2>Emp Name: {this.state.empName}</h2>
        <h2>Emp Role: {this.state.empRole}</h2>

        {/* Button to trigger state update */}
        <button onClick={updateState}>Update State</button>
      </>
    );
  }
}
