import { useCounter } from "./hooks/useCounter";
import { MouseApp } from "./MouseApp";
import { TodoApp } from "./TodoApp";

function App() {
  const [counter, increment, reset] = useCounter(5);
  return (
    <div>
      <div>
        <h1>click:{counter}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={reset}>reset</button>
      </div>

      <div>
        <div>
          <TodoApp />
        </div>
        <div>
          <MouseApp />
        </div>
      </div>
    </div>
  );
}

export default App;
