import React, { useState } from 'react'
import TodoItem, { TodoProps } from './TodoItem'
import AddTodo from './AddTodo'
import './styles.css'

const defaultTodos: TodoProps[] = [
  {
    title: 'mow the lawn',
    isCompleted: false
  },
  {
    title: 'read the newspaper',
    isCompleted: false
  },
  {
    title: 'eat pizza for breakfast',
    isCompleted: true
  },
]

export default function App() {
  const [todos, setTodos] = useState(defaultTodos)
  const handleAddTodo = (newTitle: string) => {
    setTodos([...todos, {
      title: newTitle,
      isCompleted: false
    }])
  }
  return (
    <div className="App">
      <h1>Todo</h1>
      <table>
        <thead>
          <tr>
            <th>title</th>
            <th>complete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todoItem, i) => {
            return <TodoItem key={i} {...todoItem} />
          })}
        </tbody>
      </table>
      <AddTodo {...{handleAddTodo}} />
    </div>
  )
}
