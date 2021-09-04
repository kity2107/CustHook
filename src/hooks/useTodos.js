import { useState } from "react";
const useTodos = initialTodos => {
  const [todos, setTodos] = useState(initialTodos);

  const addTodo = newTodo => {
    //genera un numero en base a la fecha actual
    newTodo.id = Date.now();
    //a todo los tados q habbi agregamos uno nuevo
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = todoId => {
    setTodos(todos.filter(todo => todo.id !== todoId));
  };

  return [todos, addTodo, deleteTodo];
};
export default useTodos;
