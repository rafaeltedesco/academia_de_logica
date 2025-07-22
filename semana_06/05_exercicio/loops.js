// Exercícios com loops

// Loop for básico
console.log("Contando de 1 a 5:");
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// Loop for com break
console.log("Loop com break:");
for (let i =1; i<= 10; i++){
    if (i===6) {
        console.log("Encontrei o 6, parando o loop!");
        break;
    }
    console.log(i);
}
//Loop for com continue

console.log("Pulando números pares:");
for (let i = 1; i <= 10; i++){
    if (i % 2===0) {
        continue;
    }
    console.log(i);
}
//Iterando dobre arrays

const fruits = ["Maçã", "Banana", "Laranja", "Manga", "Uva"];
console.log("Lista de frutas:");
for(let i = 0; i < fruits.length; i++){
    console.log(`Fruta ${i+1}: ${fruits [i]}`);
}

//Crie um loop que imprima a tabuada do 7 (de 1 a 10)

console.log("Tabuada de 7:");
for(let i=1; i<=10; i++){
    console.log(`7x${i} = ${7*i}`);
}
//Crie um array de números e calcule a soma deles usando um loop
const numeros = [5, 8, 12, 20, 7];
let soma = 0;
for (let i = 0; i <numeros.length; i++){
    soma+= numeros [i];
}
console.log ("soma dos números:", soma);

//Crie um loop que identifique o menor valor em um array de números

const valores = [15, 3, 22, 8, 1, 10]
let menor = valores [0];

for (let i=1;i< valores.length; i++){
    if(valores [i] < menor) {
        menor = valores [i];
    }
}
console.log("Menor valor encontrado:", menor);