const tasks = [
	{ id: 1, title: "Concluir projeto", completed: false, priority: "alta" },

	{ id: 2, title: "Ler emails", completed: true, priority: "média" },

	{ id: 3, title: "Participar da reunião", completed: false, priority: "alta" },

	{ id: 4, title: "Comprar mantimentos", completed: true, priority: "baixa" },

	{ id: 10, title: "Estudar JavaScript", completed: false, priority: "média" },
]

const incompleteTaskIndex = tasks.findIndex(
	(task) => !task.completed
)

console.log("Índice da primeira tarefa incompleta:", incompleteTaskIndex)

const hasCompleteTask = tasks.some((task) => task.completed && task.priority === "baixa")
console.log("Existe pelo menos uma tarefa completa de baixa prioridade:", hasCompleteTask);

const hasHighPriorityTaskIncomplete = tasks.filter((task) => task.priority == "alta").every((task) => !task.completed);

console.log("Todas as tarefas de alta prioridade estão incompletas:", hasHighPriorityTaskIncomplete)


const indexTaskId10 = tasks.findIndex((task) => task.id === 10);

if (indexTaskId10 === -1) {
    console.log("Nenhuma tarefa com ID 10 encontrada.");
} else {
    console.log("Tarefa com ID 10 encontrada no índice:", indexTaskId10);
}
