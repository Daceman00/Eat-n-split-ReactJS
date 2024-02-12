import React from 'react'
import Friend from "./Friend"

const FriendsList = ({ initialFriends, onSelection, selectedFriend }) => {
    return (
        <ul>
            {initialFriends.map((friend) =>
                <Friend friend={friend} key={friend.id} onSelection={onSelection} selectedFriend={selectedFriend}/>
            )}
        </ul>

    )
}

export default FriendsList