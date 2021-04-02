import React from 'react';
import {useHistory} from 'react-router-dom';

function Feelings() {
    const history = useHistory();
    const goToUnderstanding = () => {
        history.push('/understanding');
    }
    return (<>
        <h2>How are you feeling today?</h2>
        <button type="button" onClick={goToUnderstanding}>Next</button>
    </>);
}

export default Feelings;