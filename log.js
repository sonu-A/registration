let loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", function () {

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let user = JSON.parse(localStorage.getItem("user"));

    if (user === null) {
        alert("No user found. Please register first.");
        return;
    }

    if (email === user.email && password === user.password) {
        alert("Login Successful");
    } else {
        alert("Invalid Credentials");
    }

});