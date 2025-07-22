// // Desafio final - integrando todos os conceitos

// Dados de alunos

// const students = [
//    {nome:"João", age: 20, grade: [85,90,78]},
//    {nome:"Maria", age: 19, grade: [92, 95, 89]},
//    {nome:"Pedro", age: 21, grade: [70, 65, 80]},
//    {nome:"Ana", age: 18, grade:[90, 88, 92]},
// ];

// console.log("Relatório de Desempenho dos Alunos\\n");

// let aprrovedCount = 0;
// let failedCount = 0;
// let totalClassAverage = 0;
// let bestStudent = null;
// let highestAverage = 0;
// for (let i = 0; i < students.length; i++){
//    const student = students [i];
// }

// //Calculando a média do Aluno
// let sum = 0;
// for (let j= 0;j < student.grades.lenght;j++){
//    sum += student.grades [j];
// }
// const average=sum / student.grades.lenght;

//     // Determinando status de aprovação
//     const resultado=average >= 70 ? "APROVADO" : "REPROVADO";

//    // Contando aprovados e reprovados
//    if (resultado === "APROVADO"){
//    approvedCount ++;
//    }
//    else{
//    failedCount ++;
//    }

//    // Verificando se é o melhor aluno
//    if (average > highestAverage){
//    highestAverage = average;
//    bestStudent = student.name;
//    }
//    // Adicionando à média da turma
//    totalClassAverage +=average;

//    // Imprimindo relatório individual
//    console.log(`Aluno: ${student.name} (${student.age}anos)`);
//    console.log(`Notas: ${student.grades.join(",")}`);
//    console.log(`Média: ${average.toFixed(2)}`);
//    console.log(`Resultado: ${resultado}\\n`);

//    // Calculando a média geral da turma

// totalClassAverage /= students.length;

// // Imprimindo estatísticas gerais

// console.log("ESTATÍSTICAS DA TURMA");
// console.log(`Total de Alunos: ${students.lenght}`);
// console.log(`Alunos aprovados:${approvedCount}`);
// console.log(`Alunos reprovados: ${failedCount}`);
// console.log(`Média geral da turma: ${totalClassAverage.toFixed(2)}`);
// console.log(`Melhor aluno:${bestStudent}com média ${highestAverage.toFixed(2)}`);
// Solução do desafio final


// Dados de alunos
const students = [
    { name: "João", age: 20, grades: [85, 90, 78] },
    { name: "Maria", age: 19, grades: [92, 95, 89] },
    { name: "Pedro", age: 21, grades: [70, 65, 80] },
    { name: "Ana", age: 18, grades: [60, 75, 68] },
    { name: "Carlos", age: 22, grades: [90, 88, 92] }
];

let totalMediaTurma = 0;
let aprovados = 0;
let reprovados = 0;
let melhorAluno = null;
let maiorMedia = 0;

for (const student of students) {
    const notas = student.grades;
    const soma = notas.reduce((acc, nota) => acc + nota, 0);
    const media = soma / notas.length;
    totalMediaTurma += media;

    console.log(`${student.name} - Média: ${media.toFixed(2)}`);

    if (media >= 70) {
        console.log("Status: Aprovado");
        aprovados++;
    } else {
        console.log("Status: Reprovado");
        reprovados++;
    }

    if (media > maiorMedia) {
        maiorMedia = media;
        melhorAluno = student.name;
    }
}

const mediaGeral = totalMediaTurma / students.length;

console.log("\nResumo:");
console.log("Aprovados:", aprovados);
console.log("Reprovados:", reprovados);
console.log("Melhor aluno:", melhorAluno, "- Média:", maiorMedia.toFixed(2));
console.log("Média geral da turma:", mediaGeral.toFixed(2));