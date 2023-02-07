import React, { useState } from "react";
import "../App.css";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [todosPerPage] = useState(3);

  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, input]);
    setInput("");
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  // const editTodo = (index) => {
  //   setInput(todos[index]);
  //   deleteTodo(index);
  // };

  const pinTodo = (index) => {
    let pinnedTodo = todos[index];
    deleteTodo(index);
    setTodos([pinnedTodo, ...todos]);
  };

  const indexOfLastTodo = currentPage * todosPerPage;
  const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
  const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
        <h1>TodoList</h1>
        <div className="inputBoxList">
      <form onSubmit={addTodo}>
        <input
          type="text" placeholder="write something"
          value={input}
          onChange={(event) => setInput(event.target.value)} required
        /><br />
        <button type="submit">Add Todo</button>
      </form>
      <div className="todo-list">
        {currentTodos.map((todo, index) => (
          <div className="todo-card" key={index}>
            <p>{todo}</p>
            <div className="todo-buttons">
              <button className="pinCard" onClick={() => pinTodo(index)}>Pin</button>
              {/* <button onClick={() => editTodo(index)}>Edit</button> */}
              <button className="delCard" onClick={() => deleteTodo(index)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
      </div>
      <div className="pagination">
        {[...Array(Math.ceil(todos.length / todosPerPage)).keys()].map(
          (page, index) => (
            <span
              className={currentPage === index + 1 ? "active" : ""}
              key={index}
              onClick={() => paginate(index + 1)}
            >
              {index + 1}
            </span>
          )
        )}
      </div>
    </div>
  );
};

export default TodoList;
