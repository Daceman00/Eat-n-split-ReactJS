import React from 'react'
import Button from './Button'

const Friend = ({ friend, onSelection, selectedFriend }) => {

    const isSelected = selectedFriend?.id === friend.id

    return (
        <li className={isSelected ? "selected" : ""}>
            <h3>{friend.name}</h3>
            <img src={friend.image} alt={friend.image} />
            <p className={friend.balance === 0 ? "" : friend.balance > 0 ? "green" : "red"}>
                {friend.balance === 0 ?
                    `You and ${friend.name} are even` : friend.balance < 0 ?
                        `You owe ${friend.name} ${Math.abs(friend.balance)}$` :
                        `${friend.name} owes you ${Math.abs(friend.balance)}$`}</p>

            <Button onClick={() => onSelection(friend)}>{isSelected ? "Close" : "Select"}</Button>
        </li>
    )
}

export default Friend