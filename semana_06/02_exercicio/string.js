
const firstName = "Maria";
const lastName = "Silva";
const fullName = firstName + " " + lastName;
console.log("Nome completo:", fullName);

const greeting = `Olá, meu nome é ${firstName} ${lastName}!`;
console.log(greeting);

console.log("Comprimento do nome:", fullName.length);
console.log("Nome em maiúsculas:", fullName.toUpperCase());
console.log("Nome em minúsculas:", fullName.toLowerCase());

const firstNameExtracted = fullName.split(" ")[0];

console.log("Extraindo o primeiro nome:", firstNameExtracted);

const numLetters = fullName.includes("a");

if (numLetters) {
  console.log("O nome completo contém a letra 'a'.");
} else {
    console.log("O nome completo não contém a letra 'a'.");
}



console.log("Nome completo atualizado:", fullName.replace("Silva", "Clara"));