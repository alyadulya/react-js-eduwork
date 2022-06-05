import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import counterReducer from "./features/Counter/reducer";

let rootReducers = combineReducers({
    counter: counterReducer
});

// removable
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// removable

let store = createStore(rootReducers, composeEnhancers(applyMiddleware(thunk)));

export default store;