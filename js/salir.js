const nameUser = document.getElementById("Bienvenidos");

const data = JSON.parse(localStorage.getItem('user'));  // Recuperar el objeto 'user' completo
let nombre = document.getElementById('fullName')
nameUser.innerHTML = "Bienvenid@ " + `${data.Nombre}`

function salir() {  
    const exit = confirm('¿Estás seguro de que deseas salir?');
  if (exit) {
    window.location.href = 'Registro.html'; // Redirige a la página de inicio de sesión
}}