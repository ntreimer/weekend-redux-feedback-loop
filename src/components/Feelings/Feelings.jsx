import React, { useState } from 'react';
import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';

function Feelings() {
    const dispatch = useDispatch();
    const history = useHistory();
    // use local state to check if dropdown is empty
    const [feelings, setFeelings] = useState('');
    const userFeelings = (event) => {
        // set local
        setFeelings(event.target.value);
        // send to store
        dispatch({
            type: 'SET_FEELINGS',
            payload: event.target.value
        })
    }
    const goToUnderstanding = () => {
        // if empty, require input
        if (feelings !== '') {
            history.push('/understanding');
        }
        else {
            alert('Please select a rating.')
        }
    }
    return (<>
        <h2>How are you feeling today?</h2>
        <select name="feelings-rating" id="feelings-rating" defaultValue={'DEFAULT'} onChange={userFeelings}>
            <option value="DEFAULT" disabled>Choose a rating</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>
        <button type="button" onClick={goToUnderstanding}>Next</button>
    </>);
}

export default Feelings;