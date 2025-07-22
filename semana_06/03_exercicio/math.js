const a = 10;
const b = 3;

console.log("Adição:", a + b);
console.log("Subtração:", a - b);
console.log("Multiplicação:", a * b);
console.log("Divisão:", a / b);
console.log("Módulo (resto):", a % b);
console.log("Exponenciação:", a ** b);


let counter = 5;
console.log("Valor inicial:", counter);
console.log("Pós-incremento:", counter++);
console.log("Novo valor:", counter);
console.log("Pré-incremento:", ++counter);
console.log("Valor final:", counter);

const numberAsString = "42";
console.log("String original:", numberAsString, typeof numberAsString);

const convertedNumber = Number(numberAsString);
console.log("Depois de converter:", convertedNumber, typeof convertedNumber);


let nums = [15, 25, 38];

let sum = 0;
nums.forEach(num => {
    sum += num;
});


console.log("A média dos números:", sum / nums.length);

let numString = "123.45";
let parsedNumber = parseFloat(numString);
console.log("Número convertido de string:", parsedNumber);

let result = Math.round(9.7 / 2);

console.log("Resultado arredondado de 9.7 / 2:", result);