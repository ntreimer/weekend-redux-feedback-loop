import React from 'react';
import {useHistory} from 'react-router-dom';

function Comments() {
    const history = useHistory();
    const goToReview = () => {
        history.push('/review');
    }
    return (<>
        <h2>Any comments you want to leave?</h2>
        <button type="button" onClick={goToReview}>Next</button>
    </>);
}

export default Comments;