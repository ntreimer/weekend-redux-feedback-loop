import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom';

function Support() {
    const history = useHistory();
    const dispatch = useDispatch();
    const [support, setSupport] = useState('');
    const userSupport = (event) => {
        setSupport(event.target.value);
        dispatch({
            type: 'SET_SUPPORT', 
            payload: event.target.value})
    }
    const goToComments = () => {
        if (support !== '') {
            history.push('/comments');
        }
        else {
            alert('Please select a rating.')
        }
    }
    return (<>
        <h2>How well are you being supported?</h2>
        <select name="support-rating" id="support-rating" defaultValue={'DEFAULT'} onChange={userSupport}>
            <option value="DEFAULT" disabled>Choose a rating</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>
        <button type="button" onClick={goToComments}>Next</button>
    </>);
}

export default Support;