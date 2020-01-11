import React, { Component } from 'react'
//import PropTypes from 'prop-types'
import Value from './Value'
import Control from './Control'

import * as actions from '../actions'

// 2. 컨넥트를 리엑트리덕스에서 불러온다...
import { connect } from 'react-redux'
//import { connect, bindActionCreater } from 'react-redux'

const propTypes = {}
const defaultProps = {}

class Counter extends Component {
    constructor(props) {
        super(props)
        console.log('Counter.js constructor')

        this.setRandomColor = this.setRandomColor.bind(this)
    }

    setRandomColor() {
        const color = [
            Math.floor((Math.random() * 155) + 100),
            Math.floor((Math.random() * 155) + 100),
            Math.floor((Math.random() * 155) + 100)
        ]

        this.props.handleSetColor(color)
    }

    render() {
        const color = this.props.color
        const style = {
            background: `rgb(${color[0]},${color[1]},${color[2]})`
        }
        return (
            <div style={style}>
                <Value  number={this.props.number} />
                <Control
                    onPlus={this.props.handleIncrement}
                    onSubtract={this.props.handleDecrement}
                    onRandomizeColor={this.setRandomColor}
                />
            </div>
        )
    }
}

Counter.propTypes = propTypes
Counter.defaultProps = defaultProps

// 리덕스 스테이트 안에 있는 것을 이컴포넌트의 프롭스로 매핑해 주는 것?
const mapStateToProps = state => {
    return {
        number: state.counter.number,
        color: state.ui.color
    }
}
const mapDispatchToProps = dispatch => {
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

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
