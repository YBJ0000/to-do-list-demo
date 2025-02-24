import { useState } from "react";

function TodoInput({ addTodo }) {
  const [task, setTask] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!task.trim()) return // prevent empty task
    addTodo(task)
    setTask("") // clear input
  }

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <input 
        type="text"
        placeholder="Enter a task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
        style={styles.input}
      />
      <button type="submit" style={styles.button}></button>
    </form>
  )
}

const styles = {
  form: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
  },
  input: {
    flex: 1,
    padding: "8px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "8px 15px",
    borderRadius: "5px",
    border: "none",
    background: "#28a745",
    color: "white",
    cursor: "pointer",
  },
};

export default TodoInput