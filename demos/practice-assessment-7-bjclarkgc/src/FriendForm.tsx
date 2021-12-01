import { useState } from "react"
import Friend from "./Friend";

function FriendForm({ onSubmit }: { onSubmit: (friend: Friend) => void }) {
    const [name, setName] = useState('');
    const [favoriteSong, setFavoriteSong] = useState('');

    const clear = () => {
        setFavoriteSong('');
        setName('');
    }

    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            onSubmit({ name, favoriteSong });
            clear();
        }}>
            <p>
                <label>
                    Name
                    <input name="name" value={name} onChange={(e) => setName(e.target.value)} />
                </label>
            </p>

            <p>

                <label>
                    Favorite Song
                    <input name="favoriteSong" value={favoriteSong} onChange={(e) => setFavoriteSong(e.target.value)} />
                </label>
            </p>
            <button>Submit</button>
        </form>
    )
}

export default FriendForm;