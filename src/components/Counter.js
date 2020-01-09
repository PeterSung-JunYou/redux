import React, { Component } from "react";
//import PropTypes from 'prop-types';
import Value from "./Value";
import Control from "./Control";

const propTypes = {};
const defaultProps = {};

class Counter extends Component {
  constructor(props) {
    super(props);
    console.log("Counter.js constructor");
  }

  render() {
    return (
      <div>
        <Value />
        <Control />
      </div>
    );
  }
}

Counter.propTypes = propTypes;
Counter.defaultProps = defaultProps;

export default Counter;
