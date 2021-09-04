import useTodos from "./hooks/useTodos";

const initialTodos = [
  {
    id: 1,
    title: "Learn React",
  },
  {
    id: 2,
    title: "Learn node.js",
  },
];

export const TodoApp = () => {
  const [todos, addTodo, deleteTodo] = useTodos(initialTodos);
  return (
    <div>
      <h1>TodoApp</h1>
      <hr />
      <button onClick={() => addTodo({ title: "Nueva tarea" })}>Agregar</button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.title}{" "}
            <button onClick={() => deleteTodo(todo.id)}>delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
