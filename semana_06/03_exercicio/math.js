// Exercícios de operações matemáticas

// Operações básicas
const a = 10;
const b = 3;

console.log("Adição:", a + b);
console.log("Subtração:", a - b);
console.log("Multiplicação:", a * b);
console.log("Divisão:", a / b);
console.log("Módulo (resto):", a % b);
console.log("Exponenciação:", a ** b); // A elevado a b

// Incremento e descremento
let counter = 5;
console.log("Valor inicial:", counter);
console.log("Pós-incremento:", counter++); // Mostrar 5, depois incrementa
console.log("Novo valor:", counter); // Agora mostrar 6
console.log("Pré-incremento:", ++counter); // Incrementa primeiro, depois mostra 7
console.log("Valor final:", counter); // Mostra 7

// Conversão de tipos
const numberAsString = "42";
console.log("String original:", numberAsString, typeof numberAsString);

const convertedNumber = Number(numberAsString);
console.log("Depois de converter:", convertedNumber, typeof convertedNumber);

// DESAFIO

// 1) Calcule a média de 3 números: 15, 25 e 38
const average = (15 + 25 + 38) / 3;
console.log("A média foi:", average);

// 2) Converta a string "123.45" em um número

const stringNumber = "123.45";
console.log("String original:", stringNumber, typeof stringNumber);

const convertedStringNumber = Number(stringNumber);
console.log("Depois de converter:",convertedStringNumber,typeof convertedStringNumber );

// 3) Arredonde o resultado de 9.7 dividido por 2 para o inteiro mais próximo

result = 9.7 / 2;
console.log("Antes do número ser arredondado:",result, "\nAgora o número depois de ser arredondado:", Math.round(result));
