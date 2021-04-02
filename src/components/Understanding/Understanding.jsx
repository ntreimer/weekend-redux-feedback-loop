import React from 'react';
import {useHistory} from 'react-router-dom';

function Understanding() {
    const history = useHistory();
    const goToSupport = () => {
        history.push('/support');
    }
    return (<>
        <h2>How well are you understanding the content?</h2>
        <button type="button" onClick={goToSupport}>Next</button>
    </>);
}

export default Understanding;