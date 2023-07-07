import { useState } from 'react';

function Todo() {
  const [todoInput, setTodoInput] = useState('');
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      task: 'Learn React',
    },
    {
      id: 2,
      task: 'Learn Angular',
    },
  ]);
  const [nextId, setNextId] = useState(3);
  const [editingTodo, setEditingTodo] = useState(null);

  function addNewTodo() {
    if (todoInput === '') {
      alert('Add some task');
    } else {
      const newTodos = [
        ...todoList,
        {
          id: nextId,
          task: todoInput,
        },
      ];
      setTodoList(newTodos);
      setNextId(nextId + 1);
      setTodoInput('');
    }
  }

  function deleteTodo(id) {
    const filteredTodos = todoList.filter((todo) => todo.id !== id);
    setTodoList(filteredTodos);
  }

  function editTodo(id, newTask) {
    const updatedTodos = todoList.map((todo) =>
      todo.id === id ? { ...todo, task: newTask } : todo
    );
    setTodoList(updatedTodos);
  }

  function handleEditClick(todo) {
    setEditingTodo(todo);
  }

  function handleEditChange(event) {
    const newTask = event.target.value;
    setEditingTodo({ ...editingTodo, task: newTask });
  }

  function handleEditSave() {
    editTodo(editingTodo.id, editingTodo.task);
    setEditingTodo(null);
  }

  return (
    <div className="container mt-5 w-50">
      <h3 className="text-center">Todo App using React</h3>
      <div className="input-group">
        <input
          className="form-control"
          onChange={(e) => setTodoInput(e.target.value)}
          type="text"
          value={todoInput}
        />
        <button onClick={addNewTodo} className="btn btn-primary">
          Add
        </button>
      </div>
      <ul className="list-group mt-4">
        {todoList.map((todo) =>
          editingTodo && editingTodo.id === todo.id ? (
            <li key={todo.id} className="list-group-item">
              <input
                type="text"
                value={editingTodo.task}
                onChange={handleEditChange}
              />
              <button onClick={handleEditSave}>Save</button>
            </li>
          ) : (
            <li key={todo.id} className="list-group-item">
              <p>{todo.task}</p>
              <button onClick={() => deleteTodo(todo.id)} className="btn">
                delete
              </button>
              <button onClick={() => handleEditClick(todo)}>Edit</button>
            </li>
          )
        )}
      </ul>
    </div>
  );
}

export default Todo;
*150*06#   333# 