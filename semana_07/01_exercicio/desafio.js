// 1. Crie uma função que recebe um objeto person e retorna um novo objeto com todas as propriedades do original, mais uma propriedade "isAdult" (true se age >= 18)

function addIsAdultProperty(personObject) {
  return {
    ...personObject,
    isAdult: personObject.age >= 18,
  };
}

const person = { name: "Maria", age: 18 };
const adultPerson = addIsAdultProperty(person);

console.log("Objeto original:", person);
console.log("Novo objeto (adulto):", adultPerson);

// 2. Crie uma função que aceita múltiplos arrays como parâmetros e retorna um array combinado com todos os elementos (use rest e spread)

function combineArrays(...arrays) {
  const combined = [];

  for (const arr of arrays) {
    combined.push(...arr);
  }

  return combined;
}

const arrayNumbersOne = ["Maça", "Tomate", "Uva"];
const arrayNumbersTwo = [6, 7, 8, 9, 10];

console.log(
  "Arrays combinados:",
  combineArrays(arrayNumbersOne, arrayNumbersTwo)
);
