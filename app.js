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
    //Load all tasks from local storage
    loadTasks();
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
 taskInput.addEventListener("keydown", addTask);

//Callback clearTasks function if clear all button pressed
clearAllTaskBtn.addEventListener("click", clearTasks);

//callback checkTaskAction function when UL clicked - will then send control to either the editTask or deleteTask Function
taskList.addEventListener("click", checkTaskAction);

}

function loadTasks(){
  const tasks = JSON.parse(window.localStorage.getItem("tasks"));
  taskList.innerHTML = tasks;

  //get all the task container divs
  taskDivs = taskList.childNodes;
  //console.log(taskDivs);
  taskDivs.forEach((taskDiv) => {
    taskDiv.firstChild.setAttribute("value",taskDiv.firstChild.getAttribute("data"));
    
  });
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
  
  //clear task input value
  
  
  let taskValue = taskInput.value;
  
  
  //create the task container
  const newTaskContainer = document.createElement("div");
  newTaskContainer.classList.add("new-task-container");
  taskList.appendChild(newTaskContainer);
  //create the input 
  const newTask = document.createElement("input");
  newTask.value = taskValue;
  newTaskContainer.appendChild(newTask);
  newTask.setAttribute("readonly", "readonly");
  newTask.setAttribute("data", taskValue);
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
  taskInput.value = "";
}


function saveTasks(){
  const tasks = taskList.innerHTML;
  window.localStorage.clear();
  window.localStorage.setItem('tasks', JSON.stringify(tasks));


}


function clearTasks(e){
 // taskList.innerHTML="";
  
  while(taskList.firstChild){
    taskList.firstChild.remove();
  }
  
  saveTasks();
};

function checkTaskAction(e){


  if(e.target.classList.contains("edit-task")){
    editTask(e.target);
  } else if(e.target.classList.contains("delete-task")){
    deleteTask(e.target);
  }
};

function editTask(editBtn){
  const editedTask = editBtn.previousSibling;
    console.log(editedTask);
    editedTask.readOnly = false;
    editedTask.classList.toggle("edit-mode");
    editedTask.setAttribute("data", editedTask.value);
    saveTasks();
  
  // if(document.activeElement !== editedTask){
  //   editedTask.readOnly = true;
  //   editedTask.classList.toggle("edit-mode");
  //   editedTask.setAttribute("data", editedTask.value);
  //   saveTasks();
  // }

};

  
//   //editedTask.addEventListener("keydown", editHandler);
//  // editedTask.removeEventListener("keydown", editHandler);
// };

// function editHandler(e){
//   if (e.key === "Enter"){
//     const editedTask = e.target.previousSibling;

//   }
// };

function deleteTask(deleteBtn){
  deleteBtn.parentElement.remove();
  saveTasks();

};
