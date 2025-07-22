// Exercícios com estruturas condicionais

// Verificação de idade

// const age = 17;
// if (age >= 18) {
//     console.log("Você é maior de idade!");
// } 
// else {
//     console.log("Você é menor de idade!");
// }

const age = 17;

if (age >=18) {
    console.log("Você é maior de idade!");
} else {
    console.log("Você é menor de idade!");
}

// Verificação com múltiplas condições

const hour = 14
if( hour < 12){
    console.log ("Bom Dia!");
}
else { console.log ("Boa Noite!");    
}

// Operadores lógicos

const isWeekend = false;
const isHoliday = true;

if (isWeekend || isHoliday){
    console.log ("Não precisa trabalhar hoje!");
}
else {
    console.log("Dia de trabalho!");
}

// Operador ternário
const condicao = age >= 18 ? "Adulto" : "Menor";
console.log ("Status:", condicao);

//Crie um sistema de classificação de notas:

const nota = 75;

if (nota >= 90 && nota <= 100){
    console.log ("Nota A");
}
else if (nota >=80 && nota <= 89){
      console.log("Nota B");
}
else if ( nota >=70 && nota <=79){
    console.log("Nota C");
}
else if ( nota >=60 && nota <=69){
    console.log("Nota D");
}
else {
    console.log("Nota F");
}

//Verifique se um número é par ou ímpar
const number = 5
if (number % 2 ===0){
    console.log("O número é par.")
}
else{
    console.log("O número é ímpar.")
}

//Crie uma verificação que diga se uma pessoa pode dirigir (precisa ser maior de idade E ter habilitação)

const idade = 17
const temHabilitacao = false
if(idade >=18 && temHabilitacao === true){
    console.log("Pode dirigir.")
}
else{
    console.log("Não pode dirigir.")
}