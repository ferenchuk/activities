import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    };

    this.handleIncrementClick = this.handleIncrementClick.bind(this);
    this.handleDecrementClick = this.handleDecrementClick.bind(this);
  }

  handleIncrementClick() {
    this.setState({counter: this.state.counter + 1});
  }

  handleDecrementClick() {
    if (this.state.counter > 0) {
      this.setState({counter: this.state.counter - 1});
    }
  }

  render() {
    return (
      <div className="counter">
        <span className="increment" onClick={this.handleIncrementClick}>+</span>
        <input type="text" value={this.state.counter} readOnly/>
        <span className="decrement" onClick={this.handleDecrementClick}>-</span>
      </div>
    );
  }
}

export default Counter;
