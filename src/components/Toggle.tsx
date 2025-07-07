type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

type Props = {
  todo: Todo;
  onToggle: (id: number) => void;
};

function TodoItem({ todo, onToggle }: Props) {
  return (
    <div onClick={() => onToggle(todo.id)}>
      <input type="checkbox" checked={todo.completed} readOnly />
      {todo.completed ? <s>{todo.text}</s> : todo.text}
    </div>
  );
}

export default TodoItem;
