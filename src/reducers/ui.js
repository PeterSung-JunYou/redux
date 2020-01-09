import * as types from "../actions/ActionTypes";

const initalState = {
	color: [ 255, 255, 255 ],
	dummy: "dumbdumb",
	dumbObject: {
		d: 0,
		u: 1,
		m: 2,
		b: 3
	}
};

export default function ui(state = initalState, action) {
	/* 
    if (typeof state === 'undefiend'){
        return initalState
    } 
    */

	console.log("ACTION=ui(root) when ", action.type);
	if (action.type === types.SET_COLOR) {
		console.log("ACTION=ui(setColor) when ", action.type);
		return { ...state, color: action.color };
	} else {
    console.log("ACTION=ui(default) when ", action.type);
		return state;
	}
}
