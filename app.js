//Input container
const inputContainer = document.querySelector(".input-container");

const taskList = document.querySelector(".task-list");

// Look for event on Task list input field
const taskInput = document.querySelector(".task-input");
//Look for event on Add Task button
const addTaskBtn = document.querySelector(".add-tasks");
//Look for event on Clear All button
const clearAllTaskBtn = document.querySelector(".clear-tasks");


//Initialise function
initialise();

function initialise(){
  //Load all event handlers
  LoadEventHandlers();

}

function LoadEventHandlers(){  
  // Look for event on Task list input field
  const taskInput = document.querySelector(".task-input");
  //Look for event on Add Task button
  const addTaskBtn = document.querySelector(".add-tasks");
  //Look for event on Clear All button
  const clearAllTaskBtn = document.querySelector(".clear-tasks");

  /*Look for event on Task List UL - use for event delegation for
  edit task and Delete Butttons*/
  const taskList = document.querySelector(".task-list");

 //Callback addTask function if add task button OR Enter key pressed
 addTaskBtn.addEventListener("click", addTask);
 document.addEventListener("keypress", addTask);

//Callback clearTasks function if clear all button pressed
clearAllTaskBtn.addEventListener("click", clearTasks);

//callback checkTaskAction function when UL clicked - will then send control to either the editTask or deleteTask Function
taskList.addEventListener("click", checkTaskAction);

}



//All Main Functions

//Add Task Function
function addTask(e){

  
  if((e.target === addTaskBtn) || (e.key === "Enter")){
    //check task input if empty, send message to user
    //else call the create task function
    if(taskInput.value === ""){
      pleaseEnterTask()
    }else{
      createTask();
    }
     
  }

};

function pleaseEnterTask(){
  taskInput.setAttribute("placeholder","Ahem, please enter a task here!");
}

function createTask(){
  const taskValue = taskInput.value;
  
  //create the task container
  const newTaskContainer = document.createElement("div");
  newTaskContainer.classList.add("new-task-container");
  taskList.appendChild(newTaskContainer);
  //create the li 
  const newTask = document.createElement("li");
  newTask.innerText = taskValue;
  newTaskContainer.appendChild(newTask);
  //create the edit button
  const newEditBtn = document.createElement("button");
  newEditBtn.classList.add("edit-task");
  newEditBtn.textContent="*";
  newTaskContainer.appendChild(newEditBtn);
  //create the delete button
  const newDeleteBtn = document.createElement("button");
  newDeleteBtn.classList.add("delete-task");
  newDeleteBtn.textContent="Delete";
  newTaskContainer.appendChild(newDeleteBtn);

  //Save tasks to Local Storage
  saveTasks();
}

A
function saveTasks(){

}


function clearTasks(e){
  console.log(ClearTasks)
};

function checkTaskAction(e){
  console.log(checkTaskAction)
};






 