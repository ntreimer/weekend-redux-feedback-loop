import React from 'react';
import {useHistory} from 'react-router-dom';

function Review() {
    const history = useHistory();
    const goToThanks = () => {
        history.push('/thanks');
    }
    return (<>
        <h2>Is this the feedback you wish to submit?</h2>
        <button type="button" onClick={goToThanks}>Next</button>
    </>);
}

export default Review;