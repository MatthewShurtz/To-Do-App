const addButton = document.getElementById("add-button");

addButton.addEventListener("click", addTask);
addButton.addEventListener("click", clearField);

function clearField() {
  document.getElementById("text-box").value = "";
}

function makeId(content) {
  return content.toLowerCase().replace(" ", "-");
}

function addTask() {
  let newItem = document.createElement("li");
  let userInput = document.getElementById("text-box").value;
  newItem.id = makeId(userInput);
  let newAddedTask = document.createTextNode(userInput);
  newItem.appendChild(newAddedTask);
  if (userInput === "") {
    alert("You can't add nothing, nice try.");
  }
  let taskList = document.getElementById("task-list");
  taskList.appendChild(newItem);
  document
    .getElementById(makeId(userInput))
    .addEventListener("click", function () {
      newItem.remove();
    });
}
