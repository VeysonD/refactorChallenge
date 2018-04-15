import React, { Component } from 'react';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.interval = null;
    this.updateTimer = this.updateTimer.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval(this.updateTimer, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  updateTimer() {
    let { count } = this.state;
    this.setState({
      count: count += 1,
    });
  }

  render() {
    const { count } = this.state;
    return (
      <div>
        <h2>Seconds so Far:</h2>
        <p>{count}</p>
      </div>
    );
  }
}

export default Timer;
