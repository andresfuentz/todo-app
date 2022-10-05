import React, { useState, useEffect } from "react";

const initialFormValues = {
  title: "",
  description: "",
};

const TodoForm = ({ todoAdd, todoEdit, setTodoEdit, todoUpdate }) => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  useEffect(() => {
    if (todoEdit) {
      setFormValues(todoEdit);
    }
  }, [todoEdit]);

  const { title, description } = formValues;

  const handleInputChange = (e) => {
    const changedFormValues = {
      ...formValues,
      [e.target.name]: e.target.value,
    };
    setFormValues(changedFormValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.trim() === "") {
      setError("Debes indicar un título");

      setTimeout(() => {
        setError(null);
      }, 2000);

      return;
    }

    if (description.trim() === "") {
      setError("Debes indicar una descripción");

      setTimeout(() => {
        setError(null);
      }, 2000);

      return;
    }

    if (todoEdit) {
      todoUpdate(formValues);
      setSuccessMessage("Actualizada con éxito!");
      setTodoEdit(null);
    } else {
      todoAdd(formValues);
      setSuccessMessage("Agregada con éxito!");
    }

    setTimeout(() => {
      setSuccessMessage(null);
    }, 2000);

    setFormValues(initialFormValues);
    setError(null);
  };

  const resetFormValuesAndTodoEdit = () => {
    setTodoEdit(null);
    setFormValues(initialFormValues);
  };

  return (
    <div>
      <h2 className="text-center display-4">
        {todoEdit ? "Editar tarea" : "Nueva tarea"}
      </h2>
      {todoEdit && <p className="text-center">id: {todoEdit.id}</p>}
      <form onSubmit={handleSubmit} className="m-2">
        <input
          type="text"
          placeholder="Título"
          className="form-control mb-2"
          value={title}
          name="title"
          onChange={handleInputChange}
        />
        <textarea
          placeholder="Descripción"
          className="form-control mb-2"
          value={description}
          name="description"
          onChange={handleInputChange}
        />
        <button className="btn btn-primary w-100">
          {todoEdit ? "Actualizar tarea" : "Agregar tarea"}
        </button>
        {todoEdit && (
          <button
            className="btn btn-warning w-100 mt-2"
            onClick={resetFormValuesAndTodoEdit}
          >
            Cancelar edición
          </button>
        )}
      </form>
      {error && <div className="alert alert-danger m-2">{error}</div>}
      {successMessage && (
        <div className="alert alert-success m-2">{successMessage}</div>
      )}
    </div>
  );
};

export default TodoForm;
