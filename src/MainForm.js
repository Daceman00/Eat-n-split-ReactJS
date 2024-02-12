import React, { useState } from 'react'
import Button from './Button'

const MainForm = ({selectedFriend, onSplitBill}) => {

  const [bill, setBill] = useState("")
  const [myExpense, setMyExpense] = useState("")
  const friendExpense = bill ?  bill - myExpense : "";
  const [whoIsPaying, setWhoIsPaying] = useState("user")

  function handleSubmit(e) {
    e.preventDefault();

    if(!bill || !myExpense) return;
    onSplitBill(whoIsPaying === "user" ? friendExpense : -myExpense);

  }
  

  return (
    <form className='form-split-bill' onSubmit={handleSubmit}>
        <h2>Split a bill with {selectedFriend.name}</h2>

        <label>💰 Bill value</label>
        <input type='text' value={bill} onChange={(e) => setBill(Number(e.target.value))}/>

        <label>👱‍♂️ Your expense</label>
        <input type='text' value={myExpense} onChange={(e) => setMyExpense(Number(e.target.value) > bill ? myExpense : Number(e.target.value))}/>

        <label>👨‍👦 {selectedFriend.name} expense</label>
        <input type='text' value={friendExpense} disabled/>

        <label>🤑 Who is paying the bill</label>
        <select value={whoIsPaying} onChange={(e) => setWhoIsPaying(e.target.value)}>
            <option value="user">You</option>
            <option value="friend">{selectedFriend.name}</option>
        </select>

        <Button>Split bill</Button>
    </form>
  )
}

export default MainForm