import React, { useState } from 'react'

const AddTodo = ({handleAddTodo}) => {
  const [title, setTitle] = useState('')
  return (
    <div>
      <form onSubmit={(event) => {
        event.preventDefault()
        handleAddTodo(title)
        setTitle('')
      }}>
        <input
          type="text"
          onChange={(event) => {
            setTitle(event.target.value)
          }}
          value={title}
        />
        <input type="submit" value="Add Todo" />
      </form>
    </div>
  )
}

export default AddTodo
