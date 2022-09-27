import React from "react";
import Todo from "./Todo";

const TodoList = ({
  todos,
  todoDelete,
  todoToggleComplete,
  todoEdit,
  setTodoEdit,
}) => {
  return (
    <div>
      <h2 className="text-center display-4">Lista de tareas</h2>

      {todos.length === 0 ? (
        <div className="alert alert-primary">
          No hay tareas. Por favor agrega una {":)"}
        </div>
      ) : (
        todos.map((todo) => {
          return (
            <Todo
              todo={todo}
              key={todo.id}
              todoDelete={todoDelete}
              todoToggleComplete={todoToggleComplete}
              todoEdit={todoEdit}
              setTodoEdit={setTodoEdit}
            />
          );
        })
      )}
    </div>
  );
};

export default TodoList;
