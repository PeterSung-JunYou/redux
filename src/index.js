import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

import { createStore } from 'redux'
import reducers from './reducers'
import * as actions from './actions'

console.log(reducers)

const store = createStore(reducers)

console.log(store.getState())
store.subscribe(() => console.log(store.getState()))

ReactDOM.render(<App />, document.getElementById('root'))
