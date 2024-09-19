import React from "react";

const Temperature = ({ temp }) => {
  return <h1>{temp > 25 ? "Está quente!" : "Está frio!"}</h1>;
};

const App = () => {
  return <Temperature temp={30} />;
};

export default App;
