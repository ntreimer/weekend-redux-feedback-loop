import {React, useState} from 'react';
import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';

function Understanding() {
    const history = useHistory();
    const dispatch = useDispatch();

    const [understanding, setUnderstanding] = useState('');
    const userUnderstanding = (event) => {
        // set local
        setUnderstanding(event.target.value);
        // set global
        dispatch({
            type: 'SET_UNDERSTANDING',
            payload: event.target.value
        })
    }
    const goToSupport = () => {
        // if not empty, go to support
        if (understanding !== '') {
            history.push('/support');
        }
        else {
            alert('Please select a rating.')
        }
    }
    return (<>
        <h2>How well are you understanding the content?</h2>
        <select name="understanding-rating" id="understanding-rating" defaultValue={'DEFAULT'} onChange={userUnderstanding}>
            <option value="DEFAULT" disabled>Choose a rating</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>
        <button type="button" onClick={goToSupport}>Next</button>
    </>);
}

export default Understanding;