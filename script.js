  // 'Add' button - adds a new item to list
var addButton = document.getElementById("add-button");
addButton.addEventListener("click", addToDoItem);
  // 'Clear' button - clears all completed items from list
var clearButton = document.getElementById("clear-completed-button");
clearButton.addEventListener("click", clearCompleted);
  // 'Delete' button - delete all items in list
var deleteButton = document.getElementById("delete-button");
deleteButton.addEventListener("click", deleteList);
  // 'Save' button - save current items in list
var saveButton = document.getElementById("save-button");
saveButton.addEventListener("click", saveList);
  // Text box
var textBox = document.getElementById("todo-entry-box");
  // Todo list
var toDoList = document.getElementById("todo-list");

// 'Add'
function addToDoItem() {
  var itemDesc = textBox.value; //store the text box value into itemDesc
  newToDoItem(itemDesc, false); //call our function & add to list
}

// 'Clear'
function clearCompleted() {
  alert("Cleared all completed items from list!");
}

// 'Delete'
function deleteList() {
  alert("All items in list have been deleted.");
}

// 'Save'
function saveList() {
  alert("List saved!");
}

// Adds a new to-do item to list
function newToDoItem(itemDesc, completed) {
  var toDoItem = document.createElement("li"); //create a new "li" element to use in place of <li>
  var toDoText = document.createTextNode(itemDesc); //create a new TextNode container & store the contents of itemDesc in it
  toDoItem.appendChild(toDoText); //add the toDoText Text Node as a list item <li>

  if (completed) { // if completed is TRUE, adds a class called "completed" to this list item which changes its appearance
    toDoItem.classList.add("completed");
  }

  toDoList.appendChild(toDoItem); //add the toDoItem list to the ordered list <ol>
  toDoItem.addEventListener("dblclick", toggleItemState); //upon double-click, the <li> calls the function
}

// Toggles current item between 'completed' and 'not completed'
function toggleItemState() {
  if (this.classList.contains("completed")) { //if current item is 'completed', toggle to other state
    this.classList.remove("completed");
  } else { //current item is not completed, toggle to 'completed'
    this.classList.add("completed");
  }
}
