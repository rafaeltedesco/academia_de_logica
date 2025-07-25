const tasks = [
  { id: 1, title: "Concluir projeto", completed: false, priority: "alta" },
  { id: 2, title: "Ler emails", completed: true, priority: "média" },
  { id: 3, title: "Participar da reunião", completed: false, priority: "alta" },
  { id: 4, title: "Comprar mantimentos", completed: true, priority: "baixa" },
  { id: 5, title: "Estudar JavaScript", completed: false, priority: "média" },
];

// 1. Use findIndex para encontrar a posição da primeira tarefa incompleta
const meetingIndex = tasks.findIndex((task) => !task.completed);
console.log("Índice da tarefa incompleta:", meetingIndex);
console.log("Posição da tarefa incompleta:", meetingIndex + 1);

// 2. Use some para verificar se existe alguma tarefa de baixa prioridade completa
const hasLowPriorityCompletedTask = tasks.some(
  (task) => task.priority === "baixa" && task.completed === true
);
console.log(
  "\nExiste pelo menos uma tarefa de baixa prioridade completa:",
  hasLowPriorityCompletedTask
);

// 3. Use every para verificar se todas as tarefas de alta prioridade estão incompletas
const allTasksHighPriorityIncomplete = tasks
  .filter((task) => task.priority === "alta")
  .every((task) => !task.completed);

console.log(
  "\nTodas as tarefas de alta prioridade estão incompletas:",
  allTasksHighPriorityIncomplete
);

/* 4. Use findIndex para encontrar a posição de uma tarefa com id = 10.
Lide com o caso em que a tarefa não existe (dica: findIndex retorna -1 quando não encontra) */

const taskIndex = tasks.findIndex((task) => task.id === 10);

if (taskIndex === -1) {
  console.log("\nTarefa com id 10 não foi encontrada.");
} else {
  console.log("\nA posição da tarefa com id 10 é:", taskIndex);
}
