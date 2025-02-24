import { useState } from "react";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";

function TodoList() {
  const [todos, setTodos] = useState([])

  const addTodo = (text) => {
    const newTodo = { id: Date.now(), text, completed: false}
    setTodos([...todos, newTodo])
  }

  const toggleComplete = (id) => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed } : todo))
  }

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <div style={styles.container}>
      <h2>Todo List</h2>
      <TodoInput addTodo={addTodo}></TodoInput>
      <div>
        {todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} toggleComplete={toggleComplete} removeTodo={removeTodo}/>
        ))}
      </div>
    </div>
  )
}

const styles = {
  container: {
    maxWidth: "400px",
    margin: "auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    boxShadow: "2px 2px 10px rgba(0,0,0,0.1)",
    backgroundColor: "white",
    color: "black"
  },
};

export default TodoList;