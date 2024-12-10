  // Mostrar el nombre del usuario
function RegistroUsuario(){
    const user = {
        Nombre:document.getElementById("fullName").value, 
        Email:document.getElementById("email").value, 
        Password:document.getElementById("password").value,
        ConfirPassword:document.getElementById("confirmPassword").value,
    } 

    localStorage.setItem('user', JSON.stringify(user))
    console.log(user)
    alert("BIENVENIDO")
    window.location.href = 'iniciosesion.html'
}