import React, { Component } from "react";
import "./index.css";

export default class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initial: this.props.initial,
      timerID: null,
    };
  }

  componentDidMount() {
    this.setState({
      timerID: setInterval(() => {
        this.tick();
      }, 1000),
    });
  }

  tick() {
    if (this.state.initial > 0) {
      this.setState((state, props) => ({
        initial: state.initial - 1,
      }));
    } else {
      this.setState((state, props) => ({
        timerID: clearInterval(state.timerID),
      }));
    }
  }
  handleClick(props) {
    this.setState((state, props) => ({
      timerID: clearInterval(state.timerID),
    }));
  }

  render() {
    return (
      <div className="mt-100 layout-column align-items-center justify-content-center">
        <div className="timer-value" data-testid="timer-value">
          {this.state.initial}
        </div>
        <button
          onClick={() => this.handleClick(this.state.timerID)}
          className="large"
          data-testid="stop-button"
        >
          Stop Timer
        </button>
      </div>
    );
  }
}
