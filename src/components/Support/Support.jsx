import React from 'react';
import {useHistory} from 'react-router-dom';

function Support() {
    const history = useHistory();
    const goToComments = () => {
        history.push('/comments');
    }
    return (<>
        <h2>How well are you being supported?</h2>
        <select name="support-rating" id="support-rating">
            <option value="" disabled selected>Select a rating</option>
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