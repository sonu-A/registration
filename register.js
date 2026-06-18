let registerBtn = document.getElementById("registerBtn");

registerBtn.addEventListener("click", function () {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let repassword = document.getElementById("repassword").value;

    if (password !== repassword) {
        alert("Passwords do not match");
        return;
    }

    let user = {
        name: name,
        email: email,
        password: password
    };

    localStorage.setItem("user", JSON.stringify(user));

    alert("Registration Successful");
});