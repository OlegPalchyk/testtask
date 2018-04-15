import {
    GET_EMPLOYEES_FAILURE,
    GET_EMPLOYEES_REQUEST,
    GET_EMPLOYEES_SUCCESS

} from '../actions/employees';


function initializeState() {
    let data = {
        employees: [],
        loaded: false,
        loading : false
    };
    return {...data};
}

export default function employees(state = initializeState(), action = {}) {
    switch (action.type) {

        default :
            return state;
    }
}