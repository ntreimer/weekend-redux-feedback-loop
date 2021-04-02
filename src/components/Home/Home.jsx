import React from 'react';
import {useHistory} from 'react-router-dom';

function Home() {
    const history = useHistory();
    const goToFeelings = () => {
        history.push('/feelings');
    }
    return (<>
        <h2>Would you like to leave feedback?</h2>
        <button type="button" onClick={goToFeelings}>Let's get started!</button>
    </>);
}

export default Home;