/**
|--------------------------------------------------
| PROJECT/src/index.js
|--------------------------------------------------
*/

import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
//import Counter from './components/Counter'

// 1. 프러바이더를 리엑트리덕스에서 불러오세요..connect() ....
import { Provider } from 'react-redux'   

import { createStore } from 'redux'
import reducers from './reducers'

//import * as actions from './actions' // action creater.... { type: 'SET_COLOR', color: [200,200,200] }
// usage: actions.funcName()

//import { increment, decrement, setColor } from './actions' // action creater
// usage: funcName()

console.log('____index.html  index.js start____')
console.log('____getState_befor_createStore____')
const store = createStore(reducers)
console.log('____getState_on_createStore____', store.getState())
console.dir(store)

/* 
const unsubscribe = store.subscribe(() =>
    console.log('onSubscribe: ', store.getState())
)
 */

 //store.dispatch(actions.increment())
//store.dispatch({ type: 'SET_COLOR', color: [200, 200, 200] })

//unsubscribe()

//ReactDOM.render(<App />, document.getElementById('root'))
ReactDOM.render(
    <Provider store={store} >
        <App />
    </Provider>,
    document.getElementById('root')
)

/* 

// 아래는 사용법에 대한 내용입니다.... 잘 알아두세요.

const store = createStore(reducers)

console.log('REDUCERS:', reducers)

console.log('GETSTATE#########111111111111', store.getState())

const unsubscribe = store.subscribe(function() {
    console.count('Subscribe counter')
    console.time('Subscirbe function timer')
    console.log('log=', { a: '' })
    console.dir({ a: '' })
    console.log('dirOgj=', console.dir({ b: '' }))
    console.log('log=', function() {})
    console.log(
        'dirFunc=',
        console.dir(function() {})
    )
    console.log('state가 변경되면 Subscribe this##변경값##.', store.getState())
    console.timeEnd('Subscirbe function timer')
})
const string = 'this is string'
console.log(string)
store.dispatch(actions.increment())
store.dispatch(actions.increment())
store.dispatch(actions.decrement())
store.dispatch(actions.setColor([122, 122, 122]))

console.log('GETSTATE#########22222222222', store.getState())
store.dispatch(increment())
store.dispatch(increment())
store.dispatch(decrement())
store.dispatch(setColor([122, 122, 122]))

unsubscribe()
store.dispatch(actions.setColor([200, 200, 200])) 

*/
