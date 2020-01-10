import React, { Component } from 'react'
//import PropTypes from 'prop-types'
import Value from './Value'
import Control from './Control'

import * as actions from '../actions'

import { connect, bindActionCreater } from 'react-redux'

const propTypes = {}
const defaultProps = {}

class Counter extends Component {
    constructor(props) {
        super(props)
        console.log('Counter.js constructor')
        this.setRandomColor=this.setRandomColor.bind(this)
    }
    setRandomColor() {
        const color = [
            Math.floor(Math.random() * 55 + 200),
            Math.floor(Math.random() * 55 + 200),
            Math.floor(Math.random() * 55 + 200)
        ]

        this.props.handleSetColor(color)
    }

    render() {
        const color = this.props.color;
        const style = {
            background: `rgb(${color[0]},${color[1]},${color[2]})`
        }
        return (
            <div> 
                <Value number={this.props.number} />
                <Control
                    onPlus={this.props.handleIncrement}
                    onSubtract={this.props.handleDecrement}
                    onRandomizeColor={this.props.setRandomColor}
                />
            </div>
        )
    }
}

Counter.propTypes = propTypes
Counter.defaultProps = defaultProps

const mapStateToProps = state => {
    return {
        number: state.counter.number,
        color: state.ui.color
    }
}
const mapDispaatchToProps = dispatch => {
    //return bindActionCreater(actions, dispatch)
    return {
        handleIncrement: () => {
            dispatch(actions.increment())
        },
        handleDecrement: () => {
            dispatch(actions.decrement())
        },
        handleSetColor: color => {
            dispatch(actions.setColor(color))
        }
    }
}

export default connect(mapStateToProps, mapDispaatchToProps)(Counter)
