// Clock.js
import React, { Component } from 'react';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleTimeString()
    };
  }

  // Set up the timer when the component mounts
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  // Clear the timer when the component unmounts
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  // Update the time every second
  tick() {
    this.setState({
      time: new Date().toLocaleTimeString()
    });
  }

  render() {
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '20px',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        height: '100vh',
        margin: 'auto'
      }}
      >
        <h2 style={{backgroundColor: 'black', color: 'white', padding: '10px', borderRadius: '10px'}}>Welcome to the Clock App</h2>
        <h3>Current Time: {this.state.time}</h3>
      </div>
    );
  }
}

export default Clock;
