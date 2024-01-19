type TodoListProps = {
  task: string;
  id: number;
  completed: boolean;
};

type ContextProps = {
  list: TodoListProps[]
  setList: React.Dispatch<React.SetStateAction<TodoListProps[]>>
}