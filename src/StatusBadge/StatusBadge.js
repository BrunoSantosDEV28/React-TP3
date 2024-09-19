import React from "react";

const StatusBadge = ({ status }) => {
  const getStatusStyle = () => {
    switch (status) {
      case "ativo":
        return { backgroundColor: "green", color: "white" };
      case "inativo":
        return { backgroundColor: "gray", color: "white" };
      case "pendente":
        return { backgroundColor: "orange", color: "white" };
      default:
        return {};
    }
  };

  return (
    <span style={getStatusStyle()}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
};

const App = () => {
  return (
    <div>
      <StatusBadge status="ativo" />
      <StatusBadge status="inativo" />
      <StatusBadge status="pendente" />
    </div>
  );
};

export default App;
