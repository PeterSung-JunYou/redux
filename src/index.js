import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

import { createStore } from "redux";
import reducers from "./reducers";
import * as actions from "./actions"; // action creater

console.log("REDUCERS:", reducers);

const store = createStore(reducers);

console.log("GETSTATE1", store.getState());
const unsubscribe = store.subscribe(function() {
	console.log("state가 변경되면 Subscribe this##변경값##.", store.getState());
});

store.dispatch(actions.increment());
store.dispatch(actions.increment());
store.dispatch(actions.decrement());
store.dispatch(actions.setColor([ 122, 122, 122 ]));

unsubscribe();
store.dispatch(actions.setColor([ 200, 200, 200 ]));

ReactDOM.render(<App />, document.getElementById("root"));
