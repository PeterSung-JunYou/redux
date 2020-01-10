import * as types from '../actions/ActionTypes'

const initalState = {
    color: [255, 255, 255],
    dummy: 'dumbdumb',
    dumbObject: {
        d: 0,
        u: 1,
        m: 2,
        b: 3
    }
}

export default function ui(state = initalState, action) {
    /* 
    if (typeof state === 'undefiend'){
        return initalState
    } 
    */
    console.log('<==reducers.ui(state, action)==>', action.type)
    console.dir(state)
    console.dir(action)

    if (action.type === types.SET_COLOR) {
        return {
            ...state,
            color: action.color,
            dumbObject: {
                ...state.dumbObject,
                d: 20000
            }
        }
    } else {
        return state
    }
}
