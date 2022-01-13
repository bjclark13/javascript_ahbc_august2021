import axios from 'axios';
import { useState } from 'react';

const apiUrl = 'https://us-central1-bike-commutr.cloudfunctions.net/api/commute/';


function AddCommuteForm() {
    const [user, setUser] = useState("");
    const [commute, setCommute] = useState("");
    const [distance, setDistance] = useState("");

    return (
        <form onSubmit={(e) => {
            e.preventDefault(); // preventing the form from refreshing the page

            // submit to our API
            axios.post(apiUrl, {
                user,
                commute,
                distance
            })
        }}>
            <p>
                <label>User:
                    <input
                        value={user}
                        onChange={e => setUser(e.target.value)}
                        name="user" />
                </label>
            </p>

            <p>
                <label>Commute:
                    <input
                        name="commute"
                        value={commute}
                        onChange={e => setCommute(e.target.value)}
                    />
                </label>
            </p>
            <p>
                <label>Distance:
                    <input
                        type="number" name="distance"
                        value={distance}
                        onChange={e => setDistance(e.target.value)}
                    />
                </label>
            </p>

            <p>
                <button> Add Commute </button>
            </p>
        </form>
    )
}

export default AddCommuteForm;