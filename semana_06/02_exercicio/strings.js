// Exercícios de manipulação de strings

// 1. Declaração e concatenção
const firstName = "Maria";
const lastName = "Silva";
const fullName = firstName + " " + lastName;
console.log(fullName);

// 2. Template strings (ES6)
const greeting = `Olá, meu nome é ${firstName} ${lastName}!`;
console.log(greeting);

// 3. Propriedades e métodos de strings
console.log("Comprimento do nome:", fullName.length);
console.log("Nome em maiúsculas:", fullName.toUpperCase());
console.log("Nome em minúsculas:", fullName.toLowerCase());

// Desafio.

// 1) Extraia o primeiro nome usando o método slice ou substring.

console.log(fullName.slice(6)); // Método Slice
console.log(fullName.substring(6)); // Método Substring

// 2) Verifique se o nome completo contém a letra 'a'

for (let i = 0; i < fullName.length; i++) {
  if ("a" == fullName[i]) {
    console.log("A letra A está presente:", fullName[i]);
    break;
  }
}

// 3) Substitua "Silva" por outro sobrenome usando replace

console.log(fullName.replace("Silva", "Sousa"));
