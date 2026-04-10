let currentUser = "";

function login() {
    let userElement = document.getElementById("username");
    if (userElement && userElement.value.trim() !== "") {
        currentUser = userElement.value;
        localStorage.setItem("currentUser", currentUser);
        document.getElementById("welcome").innerText = "Welcome " + currentUser;
        showSection("dashboardPage");
    } else {
        alert("Please enter your name");
    }
}

function showSection(id) {
    document.querySelectorAll(".section").forEach(s => s.style.display = "none");
    document.getElementById(id).style.display = "block";
}

function logout() {
    currentUser = "";
    showSection("loginPage");
}

let tasks = [];

function addTask() {
    let taskInput = document.getElementById("taskInput");
    if (taskInput.value.trim() !== "") {
        tasks.push(taskInput.value);
        taskInput.value = "";
        renderTasks();
    }
}

function renderTasks() {
    let taskList = document.getElementById("taskList");
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
        taskList.innerHTML += `<li>${task} <button onclick="deleteTask(${index})">Delete</button></li>`;
    });
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}


function saveNotes() {
    let notes = document.getElementById("notesArea").value;
    localStorage.setItem(currentUser + "_notes", notes);
    alert("Notes saved!");
}

function loadNotes() {
    let savedNotes = localStorage.getItem(currentUser + "_notes");
    if (savedNotes) {
        document.getElementById("notesArea").value = savedNotes;
    } else {
        document.getElementById("notesArea").value = "";
    }
}

 
function showSection(id) {
    document.querySelectorAll(".section").forEach(s => s.style.display = "none");
    document.getElementById(id).style.display = "block";
    if (id === 'notesPage') {
        loadNotes();
    }
}
