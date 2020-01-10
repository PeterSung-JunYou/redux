import React, { Component } from 'react'
//import PropTypes from 'prop-types'
import Counter from './Counter'

const propTypes = {}
const defaultProps = {}

class App extends Component {
    constructor(props) {
        super(props)
        console.log('App.js constructor')
    }

    render() {
        return (
            <div>
                <Counter />
            </div>
        )
    }
}

Counter.propTypes = propTypes
Counter.defaultProps = defaultProps

export default App
