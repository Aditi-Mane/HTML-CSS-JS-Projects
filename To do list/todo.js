// Grab DOM elements
let btn = document.querySelector("button");             // Add Task button
let curTasks = document.querySelector(".currentTasks"); // Container for all tasks
let input = document.querySelector("input");            // Input box for new tasks

// Task counters
let totalTaskCount = 0;
let incompleteTaskCount = 0;
let completeTaskCount = 0;

// Counter display spans
let totalTaskText = document.querySelectorAll(".counter span")[0];
let incompleteTaskText = document.querySelectorAll(".counter span")[1];
let completeTaskText = document.querySelectorAll(".counter span")[2];

// Function to update counter texts in the DOM
function updateCount() {
  totalTaskText.innerText = `Total tasks: ${totalTaskCount}`;
  completeTaskText.innerText = `Completed tasks: ${completeTaskCount}`;
  incompleteTaskText.innerText = `Incomplete tasks: ${incompleteTaskCount}`;
}

// Function to create and add a new task
function addTaskCurrent() {
  let input = document.querySelector("input");

  // Create task container
  let textBox = document.createElement("div");
  textBox.classList.add("task");
  curTasks.appendChild(textBox);

  // Create checkbox
  let check = document.createElement("input");
  check.setAttribute("type", "checkbox");
  textBox.appendChild(check);

  // Create task text
  let spanText = document.createElement("span");
  spanText.innerHTML = input.value;
  textBox.appendChild(spanText);

  // Create delete button
  let deleteTask = document.createElement("button");
  deleteTask.classList.add("delete");
  textBox.appendChild(deleteTask);
  deleteTask.innerText = "Delete";

  // Delete button logic
  deleteTask.addEventListener("click", () => {
    textBox.remove(); // Remove task from DOM
    totalTaskCount--; // Decrement total tasks

    // Adjust completed/incomplete counters based on checkbox state
    if (check.checked) {
      completeTaskCount--;
    } else {
      incompleteTaskCount--;
    }

    updateCount(); // Refresh counters
  });

  // Reset input box
  input.value = "";

  // Update counters for new task
  totalTaskCount++;
  incompleteTaskCount++;
  updateCount();

  // Checkbox logic for marking task complete/incomplete
  check.addEventListener("change", () => {
    if (check.checked) {
      completeTaskCount++;
      incompleteTaskCount--;
      updateCount();
      spanText.style.textDecoration = "line-through"; // Strike through text
    } else {
      completeTaskCount--;
      incompleteTaskCount++;
      updateCount();
      spanText.style.textDecoration = "none"; // Remove strike through
    }
  });
}

// Add button logic
btn.addEventListener("click", () => {
  if (input.value.trim() === "") {
    alert("Please enter a task"); // Prevent empty input
  } else {
    addTaskCurrent();
  }
});

// Enter key logic (adds task on pressing Enter)
input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    if (input.value.trim() === "") {
      alert("Please enter a task");
    } else {
      addTaskCurrent();
    }
  }
});
