function acceso() {
    const emaili = document.getElementById("email").value;
    const passwordi = document.getElementById("password").value;

    const user = JSON.parse(localStorage.getItem("user"));

    if (user && emaili === user.correo && passwordi === user.password) {
        alert("¡Bienvenido!");
        window.location.replace("index.html");
    } else {
        alert("Tu usuario o tu contraseña no es válida");
    }
}
