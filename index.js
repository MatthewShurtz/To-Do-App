const addButton = document.getElementById("add-button");

addButton.addEventListener("click", addTask);
addButton.addEventListener("click", clearField);

function clearField() {
  document.getElementById("text-box").value = "";
}

function makeId(content) {
  // This will produce a random number between 1 and 100 (Issue #2)
  let rand = Math.floor((Math.random() * 100) + 1);
  
  // Now, the id is a safe name of the task, plus some random number so multiple tasks with the same name are still unique.
  return content.toLowerCase().replace(" ", "-").concat(rand);
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
