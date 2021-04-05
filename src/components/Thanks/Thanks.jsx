import React from 'react';
import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';
function Thanks() {
    const history = useHistory();
    const dispatch = useDispatch();
    const clearAllFeedback = () => {
        // clear all global states
        dispatch({type: 'CLEAR_ALL'});
    }
    const goToHome = () => {
        clearAllFeedback();
        // go back to home page
        history.push('/');
    }
    return (<>
        <h2>Thank you for your feedback!</h2>
        <button type="button" onClick={goToHome}>Leave new feedback</button>
    </>);
}

export default Thanks;