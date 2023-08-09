import {sumar,multiplicar} from "./aritmetica";

const first = document.querySelector("#primer-numero");
const second = document.querySelector("#segundo-numero");

const div = document.querySelector("#resultado-div");
const suma=document.querySelector("#sumar-button");
const producto=document.querySelector(".multiplicar-button");

suma.addEventListener("click", (env) => {
  env.preventDefault();
  const firstNumber = Number.parseInt(first.value);
const secondNumber = Number.parseInt(second.value);
  div.innerHTML = "<p> La Suma es:" + sumar(firstNumber, secondNumber)+"</p>";
});

producto.addEventListener("click", (env) => {
  env.preventDefault();
  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  div.innerHTML = "<p> La Multiplicación es:" + multiplicar(firstNumber, secondNumber)+"</p>";
});


