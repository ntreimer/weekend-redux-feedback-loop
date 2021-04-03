import React, { useState } from 'react';
import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';

function Feelings() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [feelings, setFeelings] = useState('');
    const userFeelings = (event) => {
        setFeelings(event.target.value);
        dispatch({
            type: 'SET_FEELINGS',
            payload: event.target.value
        })
    }
    const goToUnderstanding = () => {
        history.push('/understanding');
    
    }
    return (<>
        <h2>How are you feeling today?</h2>
        <select name="feeling-rating" id="feeling-rating" defaultValue={'DEFAULT'} onChange={userFeelings}>
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