import React from 'react';
import {useHistory} from 'react-router-dom';

function Support() {
    const history = useHistory();
    const goToComments = () => {
        history.push('/comments');
    }
    return (<>
        <h2>How well are you being supported?</h2>
        <button type="button" onClick={goToComments}>Next</button>
    </>);
}

export default Support;