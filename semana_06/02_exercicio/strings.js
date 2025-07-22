// Exercícios de manipulação de strings
//1. Declaração e concatenação
const firstName = "Vitória";
const lastName = "Mignon";
const fullName = firstName + " " + lastName;
console.log ("Nome Completo", fullName)

// // 2. Template strings (ES6

const greeting = `Olá, meu nome é ${firstName} ${lastName}!`;
console.log(greeting);

// // 3. Propriedades e métodos de strings
console.log("Comprimento do nome:", fullName.length);
console.log("Nome em maiúsculas:", fullName. toUpperCase());
console.log("Nome em minúsculas:", fullName.toLowerCase());

//1. Extraia o primeiro nome usando o método slice ou substring
const primeiroNome = fullName.slice( firstName, (0,7));
console.log("Primeiro nome:",firstName);

// const fatiamento = fullName.slice(0, 7);
// console.log(fatiamento);

//2. Verifique se o nome completo contém a letra 'a'
const contemLetraA = fullName.includes( fullName );
console.log("Contém a letra 'a'?", contemLetraA);

//3. Substitua "Silva" por outro sobrenome usando replace
const novoNome = fullName.replace( "Mignon", "Menezes");
console.log("Sobrenome alterado:", novoNome);



