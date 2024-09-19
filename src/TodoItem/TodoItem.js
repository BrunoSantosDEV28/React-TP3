import React, { useState } from "react";

const TodoItem = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTask, setNewTask] = useState(task);

  const toggleEdit = () => setIsEditing(!isEditing);

  return (
    <li>
      {isEditing ? (
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
      ) : (
        <span>{newTask}</span>
      )}
      <button onClick={toggleEdit}>{isEditing ? "Salvar" : "Editar"}</button>
    </li>
  );
};

const TodoList = () => {
  const tasks = ["Tarefa 1", "Tarefa 2"];
  return (
    <ul>
      {tasks.map((task, index) => (
        <TodoItem key={index} task={task} />
      ))}
    </ul>
  );
};

export default TodoList;
