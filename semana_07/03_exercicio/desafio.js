const estudantes = [
    {
        id: 1,
        nome: 'João',
        isActive: true,
        notas: [7, 8, 9]
    },
    {
        id: 2,
        nome: 'Maria',
        isActive: false,
        notas: [6, 7, 8]
    },
    {
        id: 3,
        nome: 'Pedro',
        isActive: true,
        notas: [9, 10, 9]
    }
]


const estudantesAtivos = estudantes.filter(estudante => estudante.isActive);
console.log("Estudantes ativos:", estudantesAtivos);

const estudanteId = estudantes.find(estudante => estudante.id === 3);
console.log("Estudante com ID 3:", estudanteId);

const estudantesAbaixo70 = estudantes.filter(estudante => {
    return estudante.notas.some(nota => nota < 7);
});

console.log("Estudantes com notas abaixo de 7:", estudantesAbaixo70);

const estudantesMaior85 = estudantes.filter(estudante => {
    const media = estudante.notas.reduce((acc, nota) => acc + nota, 0) / estudante.notas.length;
    return media > 8.5;
});

console.log("Estudantes com média maior que 8.5:", estudantesMaior85);