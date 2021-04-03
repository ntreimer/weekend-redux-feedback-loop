import React from 'react';
import {useHistory} from 'react-router-dom';
import {useSelector} from 'react-redux';

function Review() {
    const history = useHistory();
    const goToThanks = () => {
        history.push('/thanks');
    }
    const comments = useSelector((store) => {
        return store.comments;
    })
    const feelings = useSelector((store) => {
        return store.feelingRating;
    })
    const support = useSelector((store) => {
        return store.supportRating;
    })
    const understanding = useSelector((store) => {
        return store.understandingRating;
    })
    return (<>
        <h2>Is this the feedback you wish to submit?</h2>
        <ul>
            <li>Feelings: {feelings}</li>
            <li>Understanding: {understanding}</li>
            <li>Support: {support}</li>
            <li>Comments: {comments}</li>
        </ul>
        <button type="button" onClick={goToThanks}>Submit</button>
    </>);
}

export default Review;