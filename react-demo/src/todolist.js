// import React, { useState } from "react";
// //import "./App.css";

// function Todo() {
//   const [todos, setTodos] = useState([]);
//   const [todoInput, setTodoInput] = useState("");

//   const handleInputChange = (e) => {
//     setTodoInput(e.target.value);
//   };

//   const handleAddTodo = () => {
//     setTodos([...todos, todoInput]);
//     setTodoInput("");
//   };

//   return (
//     <div className="App">
//       <h1>Todo List</h1>
//       <input type="text" value={todoInput} onChange={handleInputChange} />
//       <button onClick={handleAddTodo}>Add Todo</button>
//       <ul>
//         {todos.map((todo, index) => (
//           <li key={index}>{todo}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Todo;
import React, { useState } from "react";
//import "./App.css";

function Todo() {
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingValue, setEditingValue] = useState("");

  const handleInputChange = (e) => {
    setTodoInput(e.target.value);
  };

  const handleAddTodo = () => {
    if (todoInput !== "") {
      setTodos([...todos, todoInput]);
      setTodoInput("");
    }
  };

  const handleEditTodo = (index) => {
    setEditingIndex(index);
    setEditingValue(todos[index]);
  };

  const handleSaveEditTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index] = editingValue;
    setTodos(newTodos);
    setEditingIndex(null);
    setEditingValue("");
  };

  const handleCancelEditTodo = () => {
    setEditingIndex(null);
    setEditingValue("");
  };

  const handleDeleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <input type="text" value={todoInput} onChange={handleInputChange} />
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {editingIndex === index ? (
              <>
                <input
                  type="text"
                  value={editingValue}
                  onChange={(e) => setEditingValue(e.target.value)}
                />
                <button onClick={() => handleSaveEditTodo(index)}>Save</button>
                <button onClick={handleCancelEditTodo}>Cancel</button>
              </>
            ) : (
              <>
                {todo}
                <button onClick={() => handleEditTodo(index)}>Edit</button>
                <button onClick={() => handleDeleteTodo(index)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
