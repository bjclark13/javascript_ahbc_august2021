import { useState } from 'react';
import Friend from './Friend';
import FriendForm from './FriendForm';

function FriendListRoute() {
    const [friends, setFriends] = useState<Friend[]>([{
        name: "BJ",
        favoriteSong: "Hotel California"
    }]);

    return (
        <>
            <h2>Friends</h2>

            <ul> {
                friends.map(friend => <li> {friend.name}  (Favorite Song:{friend.favoriteSong})</li>)
            }

            </ul>

            <FriendForm onSubmit={(friend) => {
                setFriends([...friends, friend])
            }} />
        </>
    )
}

export default FriendListRoute;