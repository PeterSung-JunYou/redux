import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Value from './Value';
import Control from './Control';

class Counter extends Component {
    constructor(props) {
        super(props);
        
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

Counter.propTypes = {

}; 

export default Counter;