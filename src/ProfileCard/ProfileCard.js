import React from "react";

const ProfileCard = ({ name, age }) => {
  return (
    <div>
      <h1>Nome: {name}</h1>
      <h2>Idade: {age ? age : "Idade não disponível"}</h2>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <ProfileCard name="João" />
      <ProfileCard name="Maria" age={25} />
    </div>
  );
};

export default App;
