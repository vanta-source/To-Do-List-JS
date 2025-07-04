let hasShownError = false;
let tasks = [];
let container = document.getElementById("todoList");
let todoGroup = document.getElementById("input-group");
let taskInput = document.getElementById("todoInput");




function addTodo() {

let taskName = document.getElementById("todoInput").value;
let existingError = document.querySelector(".error");

  if (taskName != "") {
    createNewTask(taskName);
    error = true;


  } else if (taskName == "") {
    if (!hasShownError) {
      let emptyError = document.createElement("div");
      emptyError.classList.add("error");
      emptyError.innerText = "Please Write a Task";
      taskInput.classList.add("inputError");
      todoGroup.after(emptyError);
      hasShownError = true;
    }
  }

  if (taskName != "" && hasShownError && existingError) {
    existingError.remove();
    hasShownError = false;
    error = false;
    taskInput.classList.remove("inputError");
  }
  


}


function renderTask(taskName) {
  let taskLabel = document.createElement("label");
  taskLabel.classList.add("labeling");

  let taskList = document.createElement("input");
  taskList.type = "checkbox";
  taskList.classList.add("checkbox");

  taskLabel.innerText = taskName;
  taskLabel.prepend(taskList);

  container.prepend(taskLabel);
  taskInput.value=""
}


function createNewTask(taskName) {
  renderTask(taskName);
  tasks.push(taskName);        
  saveTasks();                 
}



function saveTasks() {
  console.log("Tasks to save:", tasks);
  localStorage.setItem("todoList", JSON.stringify(tasks));
}



function loadTasks() {
  const stored = JSON.parse(localStorage.getItem("todoList")) || [];
  tasks = stored; 
  stored.forEach(taskName => renderTask(taskName)); 
}
console.log("localStorage:", localStorage.getItem("todoList"));


window.addEventListener("DOMContentLoaded", loadTasks);