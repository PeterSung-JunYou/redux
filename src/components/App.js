import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Counter from './Counter'

class App extends Component {
    constructor(props) {
        super(props);
        
    }
    
    render() {
        return (
            <div>
                <Counter />
            </div>
        );
    }
}

App.propTypes = {

};

export default App;