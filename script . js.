let currentUser = "";

// Login
function login() {
    let user = document.getElementById("username").value;
    if(user !== "") {
        currentUser = user;
        localStorage.setItem("currentUser", user);
        document.getElementById("welcome").innerText = "Welcome " + user;
        showSection("dashboardPage");
        loadAll();
    }
}

// Logout
function logout() {
    currentUser = "";
    showSection("loginPage");
}

// Sections
function showSection(id) {
    document.querySelectorAll(".section").forEach(s => s.style.display = "none");
    document.getElementById(id).style.display = "block";
}

// Load all
function loadAll() {
    loadTasks();
    loadHomework();
    loadNotes();
}

// ===== TASKS =====
function addTask() {
    let val = document.getElementById("taskInput").value;
    let key = currentUser + "_tasks";
    let data = JSON.parse(localStorage.getItem(key)) || [];
    data.push(val);
    localStorage.setItem(key, JSON.stringify(data));
    loadTasks();
}

function loadTasks() {
    let key = currentUser + "_tasks";
    let data = JSON.parse(localStorage.getItem(key)) || [];
    let list = document.getElementById("tasksList");
    list.innerHTML = "";
    data.forEach(d => {
        let li = document.createElement("li");
        li.innerText = d;
        list.appendChild(li);
    });
}

// ===== HOMEWORK =====
function addHomework() {
    let val = document.getElementById("homeworkInput").value;
    let key = currentUser + "_homework";
    let data = JSON.parse(localStorage.getItem(key)) || [];
    data.push(val);
    localStorage.setItem(key, JSON.stringify(data));
    loadHomework();
}

function loadHomework() {
    let key = currentUser + "_homework";
    let data = JSON.parse(localStorage.getItem(key)) || [];
    let list = document.getElementById("homeworkList");
    list.innerHTML = "";
    data.forEach(d => {
        let li = document.createElement("li");
        li.innerText = d;
        list.appendChild(li);
    });
}

// ===== NOTES =====
function saveNotes() {
    let key = currentUser + "_notes";
    let val = document.getElementById("notesArea").value;
    localStorage.setItem(key, val);
}

function loadNotes() {
    let key = currentUser + "_notes";
    let val = localStorage.getItem(key);
    document.getElementById("notesArea").value = val || "";
}
