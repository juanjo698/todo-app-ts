import { useState } from 'react'
import { Todos } from './components/Todos.tsx'
import { type TodoId, type Todo as TodoType } from './types'

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
  const handleRemove = ({ id }: TodoId): void => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  const handleCompleted = ({ id, completed }: Pick<TodoType, 'id' | 'completed'>): void => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed
        }
      }

      return todo
    })

    setTodos(newTodos)
  }

  return (
    <div className="todoapp">
      <Todos
        onToggleCompletedTodo={handleCompleted}
        onRemoveTodo={handleRemove}
        todos={todos}
      />
    </div>

  )
}

export default App
