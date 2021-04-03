import React from 'react';
import {useHistory} from 'react-router-dom';

function Understanding() {
    const history = useHistory();
    const goToSupport = () => {
        history.push('/support');
    }
    return (<>
        <h2>How well are you understanding the content?</h2>
        <select name="understanding-rating" id="understanding-rating">
            <option value="" disabled selected>Select a rating</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>
        <button type="button" onClick={goToSupport}>Next</button>
    </>);
}

export default Understanding;