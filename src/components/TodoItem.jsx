function TodoItem({ todo, toggleComplete, removeTodo }) {
  return (
    <div style={styles.item}>
      <input
        type="checkbox" 
        checked={todo.completed}
        onChange={() => toggleComplete(todo.id)}
      />
      <span style={{ textDecoration: todo.completed ? "line-through" : "none"}}>
        {todo.text}
      </span>
      <button onClick={() => removeTodo(todo.id)} style={styles.button}>❌</button>
    </div>
  )
}

const styles = {
  item: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "8px",
    borderBottom: "1px solid #ccc",
  },
  button: {
    background: "none",
    border: "none",
    color: "red",
    cursor: "pointer",
  },
};

export default TodoItem;