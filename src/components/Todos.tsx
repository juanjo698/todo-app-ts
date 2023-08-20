import { type ListOfTodos, type Todo as TodoType, type TodoId } from '../types'
import { Todo } from './Todo.tsx'

interface Props {
  todos: ListOfTodos
  onToggleCompletedTodo: ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => void
  onRemoveTodo: ({ id }: TodoId) => void
}

export const Todos: React.FC<Props> = ({ todos, onToggleCompletedTodo, onRemoveTodo }) => {
  return (
  <ul className="todo-list">
    {todos.map((todo) => (
      <li key={todo.id} className={`${todo.completed ? 'completed' : ''}`}>
        <Todo
          key={todo.id}
          id={todo.id}
          title={todo.title}
          completed={todo.completed}
          onToggleCompletedTodo={onToggleCompletedTodo}
          onRemoveTodo={() => { onRemoveTodo({ id: todo.id }) }}
        />
      </li>
    ))}
  </ul>
  )
}
