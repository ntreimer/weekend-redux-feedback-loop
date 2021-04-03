import React from 'react';
import {useHistory} from 'react-router-dom';
import {useSelector} from 'react-redux';

function Review() {
    const history = useHistory();
    const goToThanks = () => {
        history.push('/thanks');
    }
    const feelings = useSelector((store) => {
        return store.feelingRating;
    })
    return (<>
        <h2>Is this the feedback you wish to submit?</h2>
        <ul>
            <li>Feelings: {feelings}</li>
        </ul>
        <button type="button" onClick={goToThanks}>Submit</button>
    </>);
}

export default Review;