import React, { useState } from "react";

const TodoItem = ({ task }) => {
  return <li>{task}</li>;
};

const TodoList = ({ tasks }) => {
  return (
    <ul>
      {tasks.map((task, index) => (
        <TodoItem key={index} task={task} />
      ))}
    </ul>
  );
};

const App = () => {
  const [tasks, setTasks] = useState(["Tarefa 1", "Tarefa 2"]);

  return (
    <div>
      <TodoList tasks={tasks} />
    </div>
  );
};

export default App;
