const age = 17;

if (age >= 18) {
    console.log("Você é maior de idade!");
} else {
    console.log("Você é menor de idade!");
}

const hour = 14;

if (hour < 12) {
    console.log("Bom dia!");
} else if (hour < 18) {
    console.log("Boa tarde!");
} else {
    console.log("Boa noite!");
}

const isWeekend = false;
const isHoliday = true;

if (isWeekend || isHoliday) {
    console.log("Não precisa trabalhar hoje!");
} else {
    console.log("Dia de trabalho!");
}

const statusAge = age >= 18 ? "Adulto" : "Menor";
console.log("Status:", statusAge);



const nota = 60;

if (nota < 60){
    console.log("F");
} else if (nota < 70) {
    console.log("D");
} else if (nota < 80) {
    console.log("C");
} else if (nota < 90) {
    console.log("B");
} else {
    console.log("A");
}

const num = 2;

console.log("O número é", num % 2 === 0 ? "par" : "ímpar");

const pessoa = {
    "habilitação": false,
    "idade": 20,
}

if (pessoa.habilitação && pessoa.idade >= 18) {
    console.log("Pode dirigir!");
} else {
    console.log("Não pode dirigir!");
}