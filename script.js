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
