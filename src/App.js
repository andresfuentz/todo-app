import React, { useState, useEffect } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const initialTodos = [];

const localTodos = JSON.parse(localStorage.getItem("todos"));

const App = () => {
  const [todos, setTodos] = useState(localTodos || initialTodos);
  const [todoEdit, setTodoEdit] = useState(null);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const todoDelete = (todoId) => {
    const changedTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(changedTodos);
  };

  const todoToggleComplete = (todoId) => {
    // const changedTodos = todos.map((todo) => {
    //   const editedTodo = {
    //     ...todo,
    //     completed: !todo.completed,
    //   };

    //   if (todo.id === todoId) {
    //     return editedTodo;
    //   } else {
    //     return todo;
    //   }
    // });

    const changedTodos = todos.map((todo) =>
      todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
    );

    setTodos(changedTodos);
  };

  const todoAdd = (todo) => {
    const newTodo = {
      id: Date.now(),
      ...todo,
      completed: false,
    };

    const changedTodos = [newTodo, ...todos];
    setTodos(changedTodos);
  };

  const todoUpdate = (todoEdit) => {
    const changedTodos = todos.map((todo) =>
      todo.id === todoEdit.id ? todoEdit : todo
    );
    setTodos(changedTodos);
  };

  return (
    <div className="row g-0">
      <div className="col-8 g-0">
        <div className="vh-100 w-100">
          <TodoList
            todos={todos}
            todoDelete={todoDelete}
            todoToggleComplete={todoToggleComplete}
            todoEdit={todoEdit}
            setTodoEdit={setTodoEdit}
          />
        </div>
      </div>
      <div className="col-4 g-0">
        <div className="vh-100 w-100">
          <TodoForm
            todoAdd={todoAdd}
            todoEdit={todoEdit}
            setTodoEdit={setTodoEdit}
            todoUpdate={todoUpdate}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
