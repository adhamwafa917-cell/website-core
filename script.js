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

let tasks = JSON.parse(localStorage.getItem("myTasks")) || [];
function saveTasks() {
    localStorage.setItem("myTasks", JSON.stringify(tasks));
}

function addTask() {
    let input = document.getElementById("taskInput");
    if (input && input.value.trim() !== "") {
        tasks.push(input.value);
        input.value = ""; 
        renderTasks();
        saveTasks();
    }
    function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
    saveTasks();  
}
}

function renderTasks() {
    let list = document.getElementById("taskList");  
    if (!list) return;
    list.innerHTML = "";
    tasks.forEach((task, index) => {
        list.innerHTML += `<li>${task} <button onclick="deleteTask(${index})">Delete</button></li>`;
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
        loadNotes();{
    }
renderTasks();
