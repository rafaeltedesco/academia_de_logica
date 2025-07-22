//Crie uma função que recebe um objeto person e retorna um novo objeto com todas as propriedades do original, mais uma propriedade "isAdult" (true se age >= 18)
//2. Crie uma função que aceita múltiplos arrays como parâmetros e retorna um array combinado com todos os elementos (use rest e spread)

let person = { name: "Maria Joaquina", age: 20 }
let person2 = { name: "Wemerson Morais", age: 15 }

function isAdult (... age) {
    if (age >= 18) {
        return "is adult";
    }
    else {
        return "is not adult";
    }
}

console.log(`Name: ${person.name}, age: ${person.age} - ${isAdult(person.age)}`);
console.log(`Name: ${person2.name}, age: ${person2.age} - ${isAdult(person2.age)}`);
