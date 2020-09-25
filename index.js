const addButton = document.getElementById("add-button");
const taskClick = document.getElementsByTagName("ul");

addButton.addEventListener("click", addTask);
addButton.addEventListener("click", clearField);
taskClick.addEventListener("click", removeTask);

function clearField() {
  document.getElementById("text-box").value = "";
}

function addTask() {
  let newItem = document.createElement("li");
  let userInput = document.getElementById("text-box").value;
  let newAddedTask = document.createTextNode(userInput);
  newItem.appendChild(newAddedTask);
  let taskList = document.getElementById("task-list");
  taskList.appendChild(newItem);
}

function removeTask() {
  let removedTask = document.getElementsByTagName("ul");
  removedTask.remove();
}
