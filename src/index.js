import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

// redux
import {combineReducers, createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';

const feelingRating = (state = 0, action) => {
    if (action.type === 'SET_FEELINGS') {
        return state = action.payload;
    }
    return state;
}

const myStore = createStore(
    combineReducers({
        feelingRating: feelingRating
    }),
    applyMiddleware(logger)
)

ReactDOM.render(<Provider store={myStore}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
