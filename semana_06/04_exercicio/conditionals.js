// Exercícios com estruturas condicionais

// Verificação de idade
const age = 17;

if (age >= 18) {
  console.log("Você é maior de idade!");
} else {
  console.log("Você é menor de idade!");
}

// Verificação com múltiplas condições
const hour = 14;

if (hour < 12) {
  console.log("Bom dia!");
} else if (hour < 18) {
  console.log("Boa tarde!");
} else {
  console.log("Boa noite!");
}

// Operadores lógicos
const isWeekend = false;
const isHoliday = true;

if (isWeekend || isHoliday) {
  console.log("Não precisa trabalhar hoje!");
} else {
  console.log("Dia de trabalho!");
}

// Operador ternário
const status = age >= 18 ? "Adulto" : "Menor";
console.log("Status:", status);

// DESAFIO

// 1) Crie um sistema de classificação de notas: 0-59: F 60-69: D 70-79: C 80-89: B 90-100: A

note = 70;

if (note <= 59) {
  console.log("Sua nota é F");
} else if (note <= 69) {
  console.log("Sua nota é D");
} else if (note <= 79) {
  console.log("Sua nota é C");
} else if (note <= 89) {
  console.log("Sua nota é B");
} else {
  console.log("Sua nota é A");
}

// 2) Verifique se um número é par ou ímpar

valor = 1;
if (valor % 2 === 0) {
  console.log("Esse número é par");
} else {
  console.log("Esse número é ímpar");
}

// 3)Crie uma verificação que diga se uma pessoa pode dirigir (precisa ser maior de idade E ter habilitação)

const isLegalAge = age >= 18;
const hasCNH = false;
const resultCanDrive =
  isLegalAge && hasCNH
    ? "Sim, pode dirigir."
    : "Não possui idade suficiente ou não tem habilitação.";
console.log(resultCanDrive);
