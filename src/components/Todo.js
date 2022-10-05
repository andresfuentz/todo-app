import React from "react";

const Todo = ({
  todo,
  todoDelete,
  todoToggleComplete,
  todoEdit,
  setTodoEdit,
}) => {
  return (
    <div
      className={`card border ${
        todo.completed
          ? "border-danger"
          : "border-success" && todoEdit
          ? "border-primary"
          : "border-success"
      } m-2`}
    >
      <div className="card-body">
        <h3 className="card-title">{todo.title}</h3>
        <p className="card-text">{todo.description}</p>
        <hr />
        <div className="d-md-flex justify-content-end">
          <button
            onClick={() => todoToggleComplete(todo.id)}
            className="btn btn-sm btn-outline-success m-2"
            disabled={todo.completed || todoEdit}
          >
            {todo.completed ? "Terminado" : "Terminar"}
          </button>
          <button
            className={`btn btn-sm ${
              todoEdit ? "btn-primary" : "btn-outline-primary"
            } m-2`}
            onClick={() => setTodoEdit(todo)}
            disabled={todo.completed}
          >
            Editar
          </button>
          <button
            className={`btn btn-sm ${
              todo.completed ? "btn-danger" : "btn-outline-danger"
            } m-2`}
            onClick={() => todoDelete(todo.id)}
            disabled={todoEdit}
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
