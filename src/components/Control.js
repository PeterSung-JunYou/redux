import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    onPlus: PropTypes.func,
    onSubtract: PropTypes.func,
    onRandomizwColor: PropTypes.func
}

function createWarning(funcName) {
    return () => console.warn(funcName + 'is not defined')
}

const defaultProps = {
    onPlus: createWarning('onPlus'),
    onSubtract: createWarning('onSubtract'),
    onRandomizwColor: createWarning('onRandomizwColor')
}

class Control extends Component {
    constructor(props) {
        super(props);
        console.log('Control.js constructor')
    }
    
    render() {
        return (
            <div>
                <button onClick={this.props.onPlus}>+</button>
                <button onClick={this.props.onSubtract}>-</button>
                <button onClick={this.props.RandomizeColor}>Randomize Color</button>
            </div>
        );
    }
}

Control.propTypes = propTypes;
Control.defaultProps = defaultProps;

export default Control;