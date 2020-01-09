import * as types from '../actions/ActionTypes'

const initalState = {
    number: 0,
    dummy: 'dumbdumb',
    dumbObject: {
        d: 0,
        u: 1,
        m: 2,
        b: 3
    }
}

export default function counter(state = initalState, action) {
    /* 
    if (typeof(state) === 'undefiend'){
        return initalState
    } 
    */

    console.log("ACTION=counter(root) when ", action.type)
    switch (action.type) {
        case types.INCREMENT:
            console.log("ACTION=counter(IN==) when ", action.type)
            return {
                ...state,
                number: state.number + 1,
                dumbObject: {
                    ...state.dumbObject,
                    d: 0
                }
            }
        //break;

        case types.DECREMENT:
            console.log("ACTION=counter(DE==) when ", action.type)
            return { ...state, number: state.number - 1 }
        //break;

        default:
            console.log("ACTION=counter(default==) when ", action.type)
            return state
        //break;
    }
}
