const students = [
    { name: "João", age: 20, grades: [85, 90, 78] },
    { name: "Maria", age: 19, grades: [92, 95, 89] },
    { name: "Pedro", age: 21, grades: [70, 65, 80] },
    { name: "Ana", age: 18, grades: [60, 75, 68] },
    { name: "Carlos", age: 22, grades: [90, 88, 92] }
];

let aprovStudents = {
    "aprovados": 0,
    "reprovados": 0
};

let maiorMedia = {
    "name": "",
    "media": -1
};

let mediaGeral = 0;
for (let aluno of students) {
    let sum = 0;

    aluno.grades.forEach(grade => {
        sum += grade;
    });

    let media = sum / aluno.grades.length;
    mediaGeral += media;
    console.log(`O aluno ${aluno.name} tem a média de ${media.toFixed(2)}`);

    if (media >= 70) {
        aprovStudents.aprovados++;
        console.log("Aprovado!");
    } else {
        aprovStudents.reprovados++;
        console.log("Reprovado!");
    }

    if (media > maiorMedia.media) {
        maiorMedia.name = aluno.name;
        maiorMedia.media = media;
    }

    console.log("-------------------------");
}

console.log("Total de alunos aprovados:", aprovStudents.aprovados);
console.log("Total de alunos reprovados:", aprovStudents.reprovados);
console.log("Aluno com a maior média:", maiorMedia.name, "; com média de", maiorMedia.media.toFixed(2));
console.log("Média geral da turma:", (mediaGeral / students.length).toFixed(2));
console.log("Fim do desafio!");