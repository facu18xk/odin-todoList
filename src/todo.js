import Task from './Task.js';
import storage from './storage.js';
/**
 *  Look for the task by the id 
 * @param {*} id unique task's identifier
 * @returns the matched task 
 */
function getTaskById(id) {
  const actualTasks = storage.get();
  return actualTasks.findIndex((task) => task.id === id);
}
/**
 *  Adding back the tasks's methods 
 * @param {*} task tasks to add the methods
 */
function addMethods(task) {
  Object.assign(task, Task.prototype);
}
/**
 * Add a task to the database 
 * @param {*} task 
 */
function add(task) {
  storage.add(task);
}
/**
 *  Remove a task from the database 
 * @param {*} id 
 */
function remove(id) {
  storage.remove(getTaskById(id));
}
/**
 * Check a task as done 
 * @param {*} id 
 */
function done(id) {
  const doneTask = getTaskById(id);
  addMethods(doneTask);
  doneTask.done();
}
/**
 *  Change the task status to undone  
 * @param {*} id 
 */
function undone(id) {
  const undoneTask = getTaskById(id);
  addMethods(undoneTask);
  undoneTask.undone();
}
/**
 * Returns only an array of the changed keys 
 * @param {*} originalTask 
 * @param {*} task 
 * @returns 
 */
function getChangedProperty(originalTask, task) {
  const thingsToUpdate = [];
  for (const key in originalTask)
    if (originalTask[key] === task[key])
      thingsToUpdate.push(key);
  if (0 == thingsToUpdate.length) return null;
  return thingsToUpdate;
}
/**
 * Edit a task with new values
 * @param {*} taskId 
 * @param {*} updatedTask 
 * @returns 
 */
function edit(taskId, updatedTask) {
  const originalTask = getTaskById(taskId);
  remove(taskId);
  const thingsToUpdate = getChangedProperty(originalTask, updatedTask);
  if (thingsToUpdate == null) return;
  thingsToUpdate.forEach(thingToUpdate => {
    originalTask[thingToUpdate] = updatedTask[thingToUpdate];
  });
  add(originalTask);
}