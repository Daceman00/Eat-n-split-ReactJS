import { useState } from "react";
import Button from "./Button";
import FriendsList from "./FriendsList";
import MainForm from "./MainForm";
import NewFriend from "./NewFriend";


function App() {
  const [initialFriends, setInitialFriends] = useState([
    {
      id: 118836,
      name: "Clark",
      image: "https://i.pravatar.cc/48?u=118836",
      balance: -7,
    },
    {
      id: 933372,
      name: "Sarah",
      image: "https://i.pravatar.cc/48?u=933372",
      balance: 20,
    },
    {
      id: 499476,
      name: "Anthony",
      image: "https://i.pravatar.cc/48?u=499476",
      balance: 0,
    },
  ]);

  const [showAddFriend, setShowAddFriend] = useState(false)
  const [selectedFriend, setSelectedFriend] = useState(null)

  function handleShowAddFriend() {
    setShowAddFriend((s) => !s)
  }

  function handleAddNewFriend(friend) {
    setInitialFriends((initialFriends) => [...initialFriends, friend])
    setShowAddFriend(false)
  }

  function handleSelection(friend) {
    setSelectedFriend(selected => selected?.id === friend.id ? null : friend)
    setShowAddFriend(false)
  }

  function handleSplitBill(value) {
    setInitialFriends(friends => friends.map((friend) => friend.id === selectedFriend.id ?
      { ...friend, balance: friend.balance + value } :
      friend))
    setSelectedFriend(null)

  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList initialFriends={initialFriends} onSelection={handleSelection} selectedFriend={selectedFriend} />
        {showAddFriend && <NewFriend onAddNewFriend={handleAddNewFriend} />}
        <Button onClick={handleShowAddFriend}>{showAddFriend ? "Close" : "Add Friend"}</Button>
      </div>
      {selectedFriend && <MainForm selectedFriend={selectedFriend} onSplitBill={handleSplitBill} />}
    </div>
  );
}

export default App;
