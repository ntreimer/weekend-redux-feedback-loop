import {React, useState} from 'react';
import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';

function Comments() {
    const history = useHistory();
    const dispatch = useDispatch();
    // local state for comments so we can use that for submission
    const [comments, setComments] = useState('');
    const userComments = (event) => {
        setComments(event.target.value)
    }
    const goToReview = () => {
        history.push('/review');
        // use local state to send to redux store
        dispatch({type: 'SET_COMMENTS', payload: comments});
    }
    return (<>
        <h2>Any comments you want to leave?</h2>
        <input type="text" onChange={userComments}/>
        <button type="button" onClick={goToReview}>Next</button>
    </>);
}

export default Comments;