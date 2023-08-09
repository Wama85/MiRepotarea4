import sumar from "./aritmetica.js";

describe("Sumar", () => {
  it("deberia sumar dos números", () => {
    expect(sumar(3, 2)).toEqual(5);
  });
});
describe("Multiplicar", () => {
  it("deberia multiplicar dos números", () => {
    expect(multiplicar(3, 3)).toEqual(9);
  });
});
