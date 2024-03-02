
const KEY = "elements";
if (localStorage.getItem(KEY) == null) {
  localStorage.setItem(KEY, JSON.stringify([]));
}
/**
 * Get the data from the database
 */
function get() {
  return JSON.parse(localStorage.getItem(KEY));
}
/**
 *  Add an element to the data base 
 * @param {*} element to add to the data base 
 */
function add(element) {
  const currentElements = get(KEY);
  currentElements.push(element);
  localStorage.setItem(KEY, JSON.stringify(currentElements));
}
/**
 *  Deletes the element from the data base 
 * @param {*} element, element to remove
 */
function remove(index) {
  const ELEMENTS_TO_REMOVE = 1;
  const currentElements = get();
  if (-1 == index)
    return console.error("Element doesn't exist");
  currentElements.splice(index, ELEMENTS_TO_REMOVE);
  localStorage.setItem(KEY, JSON.stringify(currentElements));
}

export default {
  add, get, remove
}
