import {createStore, applyMiddleware, combineReducers, compose} from "redux";
import thunkMiddleware from "redux-thunk";
import logger from "redux-logger";
import {routerReducer} from "react-router-redux";
import employees from '../reducers/employees';


const rootReducer = combineReducers({
    employees,
    routing: routerReducer

});

const initialState = {};

export default function configureStore() {
    let store;

    if (module.hot) {
        store = createStore(
            rootReducer,
            initialState,
            compose(
                applyMiddleware(thunkMiddleware, logger,),
                window.devToolsExtension ? window.devToolsExtension() : f => f
            )
        );
    } else {
        store = createStore(
            rootReducer,
            initialState,
            compose(applyMiddleware(thunkMiddleware),  f => f),

        );
    }

    return store;
}