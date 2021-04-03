import React from 'react';
import {useHistory} from 'react-router-dom';

function Feelings() {
    const history = useHistory();
    const goToUnderstanding = () => {
        history.push('/understanding');
    }
    return (<>
        <h2>How are you feeling today?</h2>
        <select name="feeling-rating" id="feeling-rating">
            <option value="" disabled selected>Select a rating</option>
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