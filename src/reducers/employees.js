import {
    GET_EMPLOYEES_FAILURE,
    GET_EMPLOYEES_REQUEST,
    GET_EMPLOYEES_SUCCESS

} from '../actions/employees';


function initializeState() {
    let data = {
        data: [],
        loaded: false,
        loading : false
    };
    return {...data};
}

export default function employees(state = initializeState(), action = {}) {
    switch (action.type) {
        case GET_EMPLOYEES_FAILURE : {
            return state
        }

        case GET_EMPLOYEES_REQUEST : {
            let newState = Object.assign({}, state);
            newState.loading = true;
            return newState;
        }
        case GET_EMPLOYEES_SUCCESS : {
            let newState = Object.assign({}, state);
            newState.loading = false;
            newState.loaded = true;
            newState.data = newState.data.concat(action.payload);
            if(action.payload.length < 20) {
                newState.fullLoaded = true
            }
            return newState;
        }
        default :
            return state;
    }
}