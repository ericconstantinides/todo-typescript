import React from 'react'

export interface TodoProps {
  title: string
  isCompleted: boolean
}

interface TodoItemProps {

}

const TodoItem: React.FC<TodoProps> = ({ title, isCompleted}) => {
  return (
    <tr>
      <td>{title}</td>
      <td style={{textAlign: 'center'}}>{isCompleted ? '✅': ''}</td>
    </tr>
  )
}

export default TodoItem
