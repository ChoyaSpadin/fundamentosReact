import React, { useState } from "react"
import "./Contador.css";
import Display from "./Display";
import PassoForm from "./PassoForm";
import Botoes from "./Botoes";

function soma(x, y) {
    return x + y
}

soma(10, 20)

nums = {
  num1: 10,
  num2: 20  
}

function multiplicar(nums) {
    return nums.num1 * nums.num2
}

multiplicar({
    num1: 10,
    num2: 20  
})

// props = {
//     passo: ???
// }

export default function TestContador(props) {
    const [passo, setPasso] = useState(props.passo || 1)
}

// TestContador({ passo: 10, valor: 20 })
{/* <TestContador passo={10} valor={20} /> */}

