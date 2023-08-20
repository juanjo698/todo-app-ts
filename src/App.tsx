import { useState } from 'react'
import { Todos } from './components/Todos.tsx'

const mockTodos = [
  {
    id: '1',
    title: 'Ver video de midu',
    completed: true
  },
  {
    id: '2',
    title: 'Aprender react con TypeScript',
    completed: false
  },
  {
    id: '3',
    title: 'Subir a Github',
    completed: false
  }
]

const App = (): JSX.Element => {
  const [todos, setTodos] = useState(mockTodos)
  const handleRemove = (id: string): void => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }
  return (
    <div className="todoapp">
      <Todos onRemoveTodo={handleRemove} todos={todos}/>
    </div>

  )
}

export default App
