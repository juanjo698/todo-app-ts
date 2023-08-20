export interface Todo {
  id: string
  title: string
  completed: boolean
}

export type ListOfTodos = Todo[]

export type TodoId = Pick<Todo, id>
export type TodoTitle = Pick<Todo, title>
export type TodoComplete = Pick<Todo, completed>
