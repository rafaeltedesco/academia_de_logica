const firstName = "maria";
const lastName =  "silva";
const fullName = firstName + " " + lastName;

console.log("Nome Completo: ", fullName);

const greeting = `Olá , meu nome é ${firstName} ${lastName}!`;
console.log(greeting);

console.log("Comprimento do nome: ", fullName.length);
console.log("Nome em maiúsculas:", fullName.toUpperCase());
console.log("Nome em minúsculas:", fullName.toLowerCase());


// 1) Extraia o primeiro nome usando o método slice ou substring
const extrairNome = fullName.slice(0, fullName.indexOf(" "));
console.log("Primeiro nome:", extrairNome);

// 2) Verifique se o nome completo contém a letra 'a'
const temA = fullName.includes("a");
console.log("o nome completo possui 'a'?", temA)

//3) Substitua "Silva" por outro sobrenome usando replace
const newLastName = fullName.replace("silva","helena");
console.log(newLastName)


