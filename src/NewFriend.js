import React, { useState } from 'react'
import Button from './Button'

const NewFriend = ({onAddNewFriend}) => {
  const [name, setName] = useState("")
  const [imageUrl, setImageUrl] = useState("https://i.pravatar.cc/48")

  function handleSubmit(e) {
    e.preventDefault()

    if(!name || !imageUrl) return;

    const id = crypto.randomUUID()
    const newFriend = {
      id,
      name,
      imageUrl: `${imageUrl}?=${id}`,
      balance: 1,
      
    }
    onAddNewFriend(newFriend)
    setName("")
    setImageUrl("https://i.pravatar.cc/48")
  }

  return (
    <form className='form-add-friend' onSubmit={handleSubmit}>
        <label>🙍‍♂️ Friend name</label>
        <input type='text' value={name} onChange={(e) => setName(e.target.value)}/>
        <label>🛣 Image URL</label>
        <input type='text' value={imageUrl} onChange={(e) => setImageUrl(e.target.value)}/>
        <Button>Add</Button>
    </form>
  )
}

export default NewFriend