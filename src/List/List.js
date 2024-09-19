import React from "react";

const List = ({ numbers }) => {
  return (
    <div>
      {numbers.length === 0 ? (
        <p>A lista está vazia</p>
      ) : (
        <ul>
          {numbers.map((number, index) => (
            <li key={index}>{number}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

const App = () => {
  const numbers = [1, 2, 3];
  return <List numbers={numbers} />;
};

export default App;
