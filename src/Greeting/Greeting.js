import React from "react";

const Greeting = ({ name, age }) => {
  return (
    <h1>
      Olá, {name}! Você tem {age} anos.
    </h1>
  );
};

const App = () => {
  return (
    <div>
      <Greeting name="João" age={30} />
      <Greeting name="Maria" age={25} />
      <Greeting name="Carlos" age={40} />
    </div>
  );
};

export default App;
