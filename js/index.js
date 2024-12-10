function RegistroUsuario(){
    const user = {
        Nombre:document.getElementById("Nombre").value, 
        Email:document.getElementById("Email").value, 
        Apellido:document.getElementById("Apellido").value,
        Edad:document.getElementById("Edad").value,
        Dirección:document.getElementById("Direccion").value,
    } 

    localStorage.setItem('user', JSON.stringify(user))
    console.log(user)
    alert("Usuario Registrado..")
}