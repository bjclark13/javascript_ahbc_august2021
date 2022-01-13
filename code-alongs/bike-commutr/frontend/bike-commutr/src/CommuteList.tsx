import axios from 'axios';

import { useEffect, useState } from 'react';
import CommuteItem from './CommuteItem';

function CommuteList() {
    const apiUrl = 'https://us-central1-bike-commutr.cloudfunctions.net/api/commute'

    const [commutes, setCommutes] = useState([]);

    const [username, setUsername] = useState('');

    useEffect(() => {
        // getting the commutes from the api 
        axios.get(apiUrl + '/' + username).then((response) => {
            const commutes = response.data;

            // set them to a state 
            setCommutes(commutes);
        })
    }, [username])

    return (
        <div>
            <input value={username} onChange={e => setUsername(e.target.value)} />
            <h2>Results for {username} </h2>
            <ul>{
                commutes.map((commute) => {
                    return <CommuteItem commute={commute} />
                })
            }</ul>
        </div>
    )
}

export default CommuteList;