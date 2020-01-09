import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  number: PropTypes.number
};

const defaultProps = {
  number: -1
};

class Value extends React.Component {
    constructor(props) {
        super(props);
        console.log('Value.js constructor')
    }
    
  render() {
    return (
      <div>
        <h1>{this.props.number}</h1>
      </div>
    );
  }
}

Value.propTypes = propTypes;
Value.defaultProps = defaultProps;

export default Value;

/* 
import React from 'react';
//import styled from 'styled-components';
import PropTypes from 'prop-types';

// #region constants

// #endregion

// #region styled-components

// #endregion

// #region functions

// #endregion

// #region component
const propTypes = {
  number: PropTypes.number
};

const defaultProps = {
  number: -1
};

class Value extends React.Component {
constructor(props) {
  super(props);

  this.state = {
  };
}

  render() {
    return <div><h1>{this.props.number}</h1></div>;
  }
}

Value.propTypes = propTypes;
Value.defaultProps = defaultProps;
// #endregion

export default Value;
 */