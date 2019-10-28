import React, { Component } from 'react';

import { increment, decrement } from './actions';
import { connect } from "react-redux";
import Child from "./child"


class Parent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: ""
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  render() {
    const { title } = this.state;

    return (
      <div>
        <h1>Counter {this.props.counter}</h1>
        <button onClick={() => this.props.increment()}>+</button>
        <button onClick={() => this.props.decrement()}>-</button>
        
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={this.handleChange}
        />
        <Child dataFromParent={this.state.title}></Child>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    counter: state.counter
  }
}

export default connect(mapStateToProps, {increment, decrement})(Parent);
