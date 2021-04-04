import React from 'react';
import {useHistory} from 'react-router-dom';
import {useSelector} from 'react-redux';
import axios from 'axios';

function Review() {
    const history = useHistory();
    const postFeedback = () => {
        console.log('in postfeedback');
        const objectToSend = {
            comments: comments,
            feelings: feelings,
            support: support,
            understanding: understanding
        }
        console.log(objectToSend);
        axios.post('/feedback', objectToSend).then((response) => {
            console.log(response);
            history.push('/thanks');
        }).catch((err) => {
            console.log(err);
            alert('An error occurred while submitting your feedback. Please ensure all fields are complete.');
        })
    }
    const comments = useSelector((store) => {
        return store.comments;
    })
    const feelings = useSelector((store) => {
        return store.feelingsRating;
    })
    const support = useSelector((store) => {
        return store.supportRating;
    })
    const understanding = useSelector((store) => {
        return store.understandingRating;
    })
    return (<>
        <h2>Is this the feedback you wish to submit?</h2>
        <p>Feelings: {feelings}</p>
        <p>Understanding: {understanding}</p>
        <p>Support: {support}</p>
        <p>Comments: {comments}</p>
        <button type="button" onClick={postFeedback}>Submit</button>
    </>);
}

export default Review;