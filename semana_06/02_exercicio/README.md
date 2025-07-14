# Exercício 02 - Manipulação de Strings

Crie um arquivo strings.js:
```
// Exercícios de manipulação de strings

// 1. Declaração e concatenação
const firstName = "Maria";
const lastName = "Silva";
const fullName = firstName + " " + lastName;
console.log("Nome completo:", fullName);

// 2. Template strings (ES6)
const greeting = `Olá, meu nome é ${firstName} ${lastName}!`;
console.log(greeting);

// 3. Propriedades e métodos de strings
console.log("Comprimento do nome:", fullName.length);
console.log("Nome em maiúsculas:", fullName.toUpperCase());
console.log("Nome em minúsculas:", fullName.toLowerCase());
```
Executar o arquivo no terminal:
```
node strings.js
```

---

#### DESAFIO

---

**Faça estas operações:**

1. Extraia o primeiro nome usando o método slice ou substring
2. Verifique se o nome completo contém a letra 'a'
3. Substitua "Silva" por outro sobrenome usando replace
