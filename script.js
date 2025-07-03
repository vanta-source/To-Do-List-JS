let hasShownError = false;

function addTodo() {
  let todoGroup = document.getElementById("input-group");
  let taskName = document.getElementById("todoInput").value;
  let taskInput = document.getElementById("todoInput");
  let container = document.getElementById("todoList");
  container.classList.add("container");
  console.log(taskName);

  let existingError = document.querySelector(".error");

  if (taskName != "") {
    let taskLabel = document.createElement("label"); //Creates a label 
    container.prepend(taskLabel); //Put task label inside container
    let taskList = document.createElement("input");
    
    taskList.type = "checkbox"
    taskList.classList.add("checkbox")

    taskLabel.innerText = taskName; // Input insert in task label
    taskLabel.prepend(taskList) //Puts input inside label in html
    taskInput.value="" //Remove Previous Input value
    //handel Error
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

function cleerInout() {}
