import { useState } from "react";

export const Contador = () => {
  const [contador, setContador] = useState(1);

  function adicionarContador() {
    setContador(contador + 1);
  }

  return (
    <>
      <div>{contador}</div>
      <button onClick={adicionarContador}>Adicionar</button>
    </>
  );
};
