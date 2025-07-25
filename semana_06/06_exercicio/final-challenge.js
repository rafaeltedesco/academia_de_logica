const students = [
  { name: "João", age: 20, grades: [85, 90, 78] },
  { name: "Maria", age: 19, grades: [92, 95, 89] },
  { name: "Pedro", age: 21, grades: [70, 65, 80] },
  { name: "Ana", age: 18, grades: [60, 75, 68] },
  { name: "Carlos", age: 22, grades: [90, 88, 92] },
];

let approved = 0;
let failed = 0;
let highestAverage = 0;
let topStudent = "";
let totalAverages = 0;

students.forEach((student) => {
  const average = student.grades.reduce((sum, grade) => sum + grade, 0) / student.grades.length;
  const status = average >= 70 ? "Aprovado" : "Reprovado";
  console.log(`O aluno ${student.name} tem média ${average.toFixed(2)} e foi ${status}`);

  if (status === "Aprovado") {
    approved++;
  } else {
    failed++;
  }

  if (average > highestAverage) {
    highestAverage = average;
    topStudent = student.name;
  }

  totalAverages += average;
});

console.log(`Aprovados: ${approved}, Reprovados: ${failed}`);
console.log(`O aluno com maior média foi ${topStudent} ${highestAverage.toFixed(2)}`);
console.log(`Média geral da turma: ${(totalAverages / students.length).toFixed(2)}`);
