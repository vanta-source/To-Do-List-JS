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


function createNewTask(taskName){
    let taskLabel = document.createElement("label"); //Creates a label
    taskLabel.classList.add("labeling") 
    container.prepend(taskLabel); //Put task label inside container
    let taskList = document.createElement("input");
    
    taskList.type = "checkbox"
    taskList.classList.add("checkbox")

    taskLabel.innerText = taskName; // Input insert in task label
    tasks.push(taskName)

    taskLabel.prepend(taskList) //Puts input inside label in html
    taskInput.value="" //Remove Previous Input value
    //handel Error
    saveTasks();

}



function saveTasks() {
  localStorage.setItem("todoList", JSON.stringify(tasks));
}



function loadTasks() {
  let stored = JSON.parse(localStorage.getItem("todoList")) || [];
  tasks = stored;
  tasks.forEach(t => createNewTask(t));
}



window.addEventListener("DOMContentLoaded", loadTasks);