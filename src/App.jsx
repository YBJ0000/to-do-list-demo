import './App.css'
import TodoList from './components/TodoList'

function App() {

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center", padding:"50px", background: "#f4f4f4", height:"100vh" }}>
        <TodoList/>
      </div>
    </>
  )
}

export default App
