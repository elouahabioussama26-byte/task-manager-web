const test = require("node:test");
const assert = require("node:assert");
const { defaultTasks, addTask, toggleTask, removeTask } = require("../tasks.js");
test("addTask ajoute la tâche à la fin de la liste", function () {
// Étant donné une liste de départ
const tasks = defaultTasks();
// Quand j'ajoute une tâche
addTask(tasks, "Préparer le TP");
// Alors elle apparaît à la fin de la liste
assert.strictEqual(tasks.length, 5);
assert.strictEqual(tasks[4].title, "Préparer le TP");
});
test("la liste de départ contient quatre tâches", function () {
const tasks = defaultTasks();
assert.strictEqual(tasks.length, 4);
});
test("addTask crée une tâche non terminée", function () {
const tasks = defaultTasks();
addTask(tasks, "Préparer le TP");
assert.strictEqual(tasks[4].done, false);
});
test("addTask ignore un titre vide", function () {
const tasks = defaultTasks();
addTask(tasks, "");
assert.strictEqual(tasks.length, 4);
});
test("toggleTask change le statut d'une tâche", function () {
const tasks = defaultTasks();
toggleTask(tasks, 1);
assert.strictEqual(tasks[1].done, true);
});
test("removeTask supprime uniquement la tâche demandée", function () {
const tasks = defaultTasks();
removeTask(tasks, 0);
assert.strictEqual(tasks.length, 3);
assert.strictEqual(tasks[0].title, "Corriger les TP");
});