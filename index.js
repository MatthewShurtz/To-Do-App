const addButton = document.getElementById("add-button");

addButton.addEventListener("click", addTask);
addButton.addEventListener("click", clearField);

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
