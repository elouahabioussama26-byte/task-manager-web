// Logique de Task Manager.
// Aucune ligne de ce fichier ne touche à la page web :
// ces fonctions sont utilisées par le navigateur ET testées par Node.js.
// Tâches affichées au démarrage de l'application
function defaultTasks() {
return [
{ title: "Préparer le cours DevOps", done: true },
{ title: "Corriger les TP", done: false },
{ title: "Préparer la séance 2", done: false },
{ title: "Apprendre Git et GitHub", done: false }
];
}
// Ajoute une tâche à la fin de la liste. Un titre vide est ignoré.
function addTask(tasks, title) {
const clean = title.trim();
if (clean === "") {
return tasks;
}
tasks.push({ title: clean, done: false });
return tasks;
}
// Inverse le statut (terminée / à faire) de la tâche numéro index.
function toggleTask(tasks, index) {
tasks[index].done = !tasks[index].done;
return tasks;
}
// Supprime la tâche numéro index.
function removeTask(tasks, index) {
tasks.splice(index, 1);
return tasks;
}
// Rend les fonctions disponibles pour les tests (Node.js)
if (typeof module !== "undefined") {
module.exports = { defaultTasks, addTask, toggleTask, removeTask };
}