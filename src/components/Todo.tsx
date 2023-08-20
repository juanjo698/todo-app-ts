import { type Todo as TodoType } from '../types'

interface Props extends TodoType {
  onRemoveTodo: () => void
}

export const Todo: React.FC<Props> = ({ title, completed, onRemoveTodo }) => {
  return (
    <div className="view">
      <input
        className="toggle"
        checked={completed}
        type="checkbox"
        onChange={() => {}}
      />
      <label>{title}</label>
      <button className="destroy" onClick={onRemoveTodo}/>
    </div>
  )
}
