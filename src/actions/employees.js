import {callApi} from '../utils/apiUtils';
export const GET_EMPLOYEES_REQUEST = 'GET_EMPLOYEES_REQUEST';
export const GET_EMPLOYEES_SUCCESS = 'GET_EMPLOYEES_SUCCESS';
export const GET_EMPLOYEES_FAILURE = 'GET_EMPLOYEES_FAILURE';

export  function  getEmployees(page) {
    const config = {
        method: "get",
        headers: {
            'Content-Type': 'application/json'
        }

    };
    return callApi(
        `/employees?_page=${page}&_limit=20`,
        config,
        getEmployessRequest(),
        getEmployessSuccess,
        getEmployessFailure
    );

}

function getEmployessRequest() {
    return {
        type  : GET_EMPLOYEES_REQUEST,
        payload : {}
    }
}

function getEmployessSuccess(response) {
    return {
        type  : GET_EMPLOYEES_SUCCESS,
        payload : response
    }
}
function getEmployessFailure(error) {
    return {
        type  : GET_EMPLOYEES_FAILURE,
        error
    }
}