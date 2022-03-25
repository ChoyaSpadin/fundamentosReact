import React, { useState } from "react";

export default (props) => {
  const [numeros, setNumeros] = useState(Array(props.qntNumero).fill(0));

  function gerarNumerosNaoContido(array) {
    const min = 1;
    const max = 60;
    const novoNumero = parseInt(Math.random() * (max - min)) + min;
    return array.includes(novoNumero)
      ? gerarNumerosNaoContido(array)
      : novoNumero;
  }

  function gerarNumero() {
    const novoArray = Array(props.qntNumero)
      .fill(0)
      .reduce((a) => {
        const novoNumero = gerarNumerosNaoContido(a);
        return [...a, novoNumero];
      }, [])
      .sort((a, b) => a - b);
    setNumeros(novoArray);
  }

  return (
    <>
      <h3>Mega</h3>
      <h4>{numeros.join(" ")}</h4>
      <button onClick={gerarNumero}>Gerar Números</button>
    </>
  );
};
