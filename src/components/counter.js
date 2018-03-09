import React, { Component } from 'react';

class Counter extends Component {

  constructor() {
    super();

    this.state = {
      count: 0,
    }
  }

  onIncreaseCount = () => {
    const count = this.state.count += 5;
    this.setState({
      count
    })
  }

  onDecreaseCount = () => {
    const count = this.state.count -= 5;
    this.setState({
      count
    })
  }

  resetCount = () => {
    this.setState({
      count: 0
    })
  }

  render() {
    return(
      <div className="counter">

        <div className="counter__display">{this.state.count}</div>
        <button
          className="counter__btn counter__btn-increase"
          onClick={this.onIncreaseCount}
          >+</button>
        <button
          className="counter__btn counter__btn-decrease"
          onClick={this.onDecreaseCount}
          >-</button>
        <button
          className="counter__btn counter__btn-reset"
          onClick={this.resetCount}
          >Reset</button>
      </div>
    )
  }
}

export default Counter;
