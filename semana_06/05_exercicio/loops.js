// Exercícios com loops

// loop for básico
console.log("Contando de 1 a 5:");
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// Loop for com break
console.log("Loop com break:");
for (let i = 1; i <= 10; i++) {
  if (i === 6) {
    console.log("Encontrei o 6, parando o loop!");
    break;
  }
  console.log(i);
}

// Loop for com continue
console.log("Pulando número pares:");
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    continue; // Pula o resto da iteração
  }
  console.log(i);
}

// Iterando sobre arrays
const fruits = ["Maça", "Banana", "Laranja", "Manga", "Uva"];
console.log("Lista de frutas: ");
for (let i = 0; i < fruits.length; i++) {
  console.log(`Fruta ${i + 1}: ${fruits[i]}`);
}

// DESAFIO

// 1) Crie um loop que imprima a tabuada do 7 (de 1 a 10)
console.log("Tabuada do 7:");
for (let i = 1; i <= 10; i++) {
  result = i * 7;
  console.log(`7 x ${i} = ${result}`);
}

// 2) Crie um array de números e calcule a soma deles usando um loop

const arrayNumbers = [1, 2, 3, 4, 5];
let resultNumber = 0;

for (i = 0; i < arrayNumbers.length; i++) {
  resultNumber += arrayNumbers[i];
  console.log(`Após somar ${arrayNumbers[i]}, total parcial: ${resultNumber}`);
}
console.log(`Soma total dos valores do array: ${resultNumber}`);

// 3) Crie um loop que identifique o menor valor em um array de números

const arrayNumbersLowest = [2, 4, 3, 2, 1, 5];
let lowestValue = arrayNumbersLowest[0];

for (i = 0; i < arrayNumbersLowest.length; i++) {
  if (arrayNumbersLowest[i] < lowestValue) {
    lowestValue = arrayNumbersLowest[i];
  }
}
console.log(`O menor valor do array é ${lowestValue}`);
