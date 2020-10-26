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

// 'Clear'
function clearCompleted() {
  var completedItems = toDoList.getElementsByClassName("completed"); //set 'completedItem' to all IDs labeled with class name "completed"

  while (completedItems.length > 0) { //while there are still items in the completed list
    completedItems.item(0).remove(); //remove from the 1st position of list
  }
}

// 'Delete'
function deleteList() {
  var itemList = toDoList.children; //set 'itemList' to the items in the <ol>

  while (itemList.length > 0) { //while there are still items in the <ol>
    itemList.item(0).remove(); //remove from the 1st position of list
  }
}

// 'Save'
function saveList() {
  var array = [];

  for (var i = 0; i < toDoList.children.length; ++i) {
    var itemList = toDoList.children.item(i);

    // Javascript object
    var tasks = {
      "task": itemList.innerText,
      "completed": itemList.classList.contains("completed")
    };

    array.push(tasks);
  }

  localStorage.setItem("todos", JSON.stringify(tasks)); //saves list to local storage via JSON stringify
}

// 'Load'
function loadList() {
  if (localStorage.getItem("todos") != null) { //"todos" key does indeed exist
    var todos = JSON.parse(localStorage.getItem("todos"));

    for (var i = 0; i < todos.length; ++i) { //loop through and load each saved item
      var tasks = todos[i];
      newToDoItem(tasks.task, tasks.completed);
    }
  }
}

loadList();
