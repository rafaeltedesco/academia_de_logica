console.log("Contando de 1 a 5:");
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

console.log("Loop com break:");
for (let i = 1; i <= 10; i++) {
    if (i === 6) {
        console.log("Encontrei o 6, parando o loop!");
        break;
    }
    console.log(i);
}

console.log("Pulando números pares:");
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        continue;
    }
    console.log(i);
}

const fruits = ["Maçã", "Banana", "Laranja", "Manga", "Uva"];
console.log("Lista de frutas:");
for (let i = 0; i < fruits.length; i++) {
    console.log(`Fruta ${i+1}: ${fruits[i]}`);
}

for (let i = 0; i <= 10; i++) {
    console.log("7 x " + i + " = " + (7 * i));
}

const nums = [1, 2, 3, 4, 5];
let sum = 0;
nums.forEach(num => {
    sum += num;
});

console.log("Soma dos números:", sum);

const numbers = [20, 10, 30, 40, 50];
let menor = numbers[0];

for (let num of numbers) {
    if (num < menor) {
        menor = num;
    }
}

console.log("Menor número:", menor);