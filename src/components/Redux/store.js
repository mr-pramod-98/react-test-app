import { createStore, combineReducers } from 'redux';
import { userReducer, windowReducer } from './reducer';

const rootReducer = combineReducers({
    userReducer,
    windowReducer
});

const store = createStore(
    rootReducer, /* preloadedState, */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;