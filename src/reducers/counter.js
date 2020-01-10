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
    console.log('<==reducers.counter(state, action)==>',action.type)
    console.dir(state)
    console.dir(action)

    switch (action.type) {
        case types.INCREMENT:
            return {
                ...state,
                number: state.number + 1,
                dumbObject: {
                    ...state.dumbObject,
                    d: 1000000000000
                }
            }
        //break;

        case types.DECREMENT:
            return { ...state, number: state.number - 1 }
        //break;

        default:
            return state
        //break;
    }
}
