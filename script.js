const loginForm = document.getElementById('loginForm');
const errorMessage = document.getElementById('error-message');

loginForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple validation (example credentials)
    if(username === "admin" && password === "1234") {
        alert("Login successful!");
        errorMessage.textContent = "";
        window.location.href = "index.html";
    } else {
        errorMessage.textContent = "Invalid username or password";
    }
});
