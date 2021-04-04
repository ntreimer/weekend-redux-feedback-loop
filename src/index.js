import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

// redux
import {combineReducers, createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';

const feelingsRating = (state = '', action) => {
    if (action.type === 'SET_FEELINGS') {
        return state = action.payload;
    }
    else if (action.type === 'CLEAR_ALL') {
        return state = '';
    }
    return state;
}
const understandingRating = (state = '', action) => {
    if (action.type === 'SET_UNDERSTANDING') {
        return state = action.payload;
    }
    else if (action.type === 'CLEAR_ALL') {
        return state = '';
    }
    return state;
}
const supportRating = (state = '', action) => {
    if (action.type === 'SET_SUPPORT') {
        return state = action.payload;
    }
    else if (action.type === 'CLEAR_ALL') {
        return state = '';
    }
    return state;
}
const comments = (state = '', action) => {
    if (action.type === 'SET_COMMENTS') {
        return state = action.payload;
    }
    else if (action.type === 'CLEAR_ALL') {
        return state = '';
    }
    return state;
}

const myStore = createStore(
    combineReducers({
        feelingsRating: feelingsRating,
        supportRating: supportRating,
        understandingRating: understandingRating,
        comments: comments
    }),
    applyMiddleware(logger)
)

ReactDOM.render(<Provider store={myStore}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
