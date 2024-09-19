import React from "react";

const Product = ({ name, price, description = "Descrição não disponível" }) => {
  return (
    <div>
      <h1>Produto: {name}</h1>
      <h2>Preço: R$ {price}</h2>
      <p>{description}</p>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Product name="Sapato" price={99.99} />
      <Product
        name="Camiseta"
        price={49.99}
        description="Camiseta 100% algodão"
      />
    </div>
  );
};

export default App;
