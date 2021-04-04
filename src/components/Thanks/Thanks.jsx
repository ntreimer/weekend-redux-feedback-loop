import React from 'react';
import {useHistory} from 'react-router-dom';

function Thanks() {
    const history = useHistory();
    const goToHome = () => {
        history.push('/');
    }
    return (<>
        <h2>Thank you for your feedback!</h2>
        <button type="button" onClick={goToHome}>Leave new feedback</button>
    </>);
}

export default Thanks;