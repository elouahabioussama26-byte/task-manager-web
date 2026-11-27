// Affichage de Task Manager : ce fichier relie la page web
// aux fonctions définies dans tasks.js.
const tasks = defaultTasks();
const list = document.getElementById("task-list");
const form = document.getElementById("task-form");
const input = document.getElementById("task-input");
// Affiche toutes les tâches dans la page
function render() {
list.innerHTML = "";
tasks.forEach(function (task, index) {
const item = document.createElement("li");
const box = document.createElement("input");
box.type = "checkbox";
box.checked = task.done;
box.addEventListener("change", function () {
toggleTask(tasks, index);
render();
});
const label = document.createElement("span");
label.textContent = task.title;
if (task.done) {
label.className = "done";
}
const remove = document.createElement("button");
remove.type = "button";
remove.className = "remove";
remove.textContent = "Supprimer";
remove.addEventListener("click", function () {
removeTask(tasks, index);
render();
});
item.appendChild(box);
item.appendChild(label);
item.appendChild(remove);
list.appendChild(item);
});
}
// Ajoute une tâche lorsque le formulaire est envoyé
form.addEventListener("submit", function (event) {
event.preventDefault();
addTask(tasks, input.value);
input.value = "";
render();
});
render();