import Task from './Task.js';
import storage from './storage.js';
/**
 *  Look for the task by the id 
 * @param {*} id unique task's identifier
 * @returns the matched task index
 */
function getIndexTaskById(id) {
  const actualTasks = storage.get();
  if (actualTasks.length == 0) return null;
  return actualTasks.findIndex((task) => task.id == id);
}

function getTaskById() {
  const actualTasks = storage.get();
  if (actualTasks.length == 0) return null;
  return actualTasks.find((task) => task.id == id);
}
/**
 *  Adding back the tasks's methods 
 * @param {*} task tasks to add the methods
 */
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
  storage.remove(getIndexTaskById(id));
}
/**
 * Check a task as done 
 * @param {*} id 
 */
function done(id) {
  let doneTask = getTaskById(id);
  remove(doneTask.id);
  doneTask.done = true;
  add(doneTask);
}
/**
 *  Change the task status to undone  
 * @param {*} id 
 */
function undone(id) {
  const undoneTask = getTaskById(id);
  remove(undoneTask.id);
  undoneTask.done = false;
  add(undoneTask);
}
/**
 * Returns only an array of the changed keys 
 * @param {*} originalTask 
 * @param {*} task 
 * @returns 
 */
function getChangedProperty(originalTask, task) {
  const thingsToUpdate = [];
  for (const key in originalTask) {
    if (originalTask[key] != task[key])
      thingsToUpdate.push(key);
  }
  if (0 == thingsToUpdate.length) return null;
  return thingsToUpdate;
}
const updateValues = (thingsToUpdate, originalTask, updatedTask) => thingsToUpdate.forEach(key => originalTask[key] = updatedTask[key]);
/**
 * Edit a task with new values
 * @param {*} taskId 
 * @param {*} updatedTask 
 * @returns 
 */
function edit(taskId, updatedTask) {
  const originalTask = getTaskById(taskId);
  const thingsToUpdate = getChangedProperty(originalTask, updatedTask);
  if (thingsToUpdate == null) return;
  updateValues(thingsToUpdate, originalTask, updatedTask);
  remove(taskId);
  add(originalTask);
}
export default {
  add,
  remove,
  edit,
  done,
  undone,
  getIndexTaskById
}