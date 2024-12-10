document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const tablebody = document.querySelector("tbody");
    const saveButton = document.getElementById("saveButton");
    let editIndex = null;

    // Cargar los datos desde Local Storage
    const loadTable = () => {
        const users = JSON.parse(localStorage.getItem("users")) || [];
        renderTable(users);
    };

    // Guardar los datos en Local Storage
    const saveUser = (user) => {
        const users = JSON.parse(localStorage.getItem("users")) || [];
        if (editIndex === null) {
            users.push(user); // Nuevo usuario
        } else {
            users[editIndex] = user; // Editar usuario existente
            editIndex = null; // Resetear el índice de edición
        }
        localStorage.setItem("users", JSON.stringify(users));//Me permite almacenar datos en el localStorage
        renderTable(users);
    };

    // Renderizar la tabla
    const renderTable = (users) => {
        tablebody.innerHTML = ""; // Limpiar la tabla antes de renderizar
        users.forEach((user, index) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${index + 1}</td>
                <td>${user.Email}</td>
                <td>${user.Nombre}</td>
                <td>${user.Apellido}</td>
                <td>${user.Edad}</td>
                <td>${user.Direccion}</td>
                <td>
                    <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#newUserModal" onclick="viewUser(${index})">Consultar</button>
                    <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#newUserModal" onclick="editUser(${index})">Editar</button>
                    <button class="btn btn-danger" onclick="deleteUser(${index})">Eliminar</button>
                </td>
            `;
            tablebody.appendChild(row);
        });
    };

    // Manejo del envío del formulario
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const user = {
            Email: document.getElementById("Email").value,
            Nombre: document.getElementById("Nombre").value,
            Apellido: document.getElementById("Apellido").value,
            Edad: document.getElementById("Edad").value,
            Direccion: document.getElementById("Direccion").value,
        };
        saveUser(user);
    });

    // Eliminar un usuario de la tabla
    window.deleteUser = (index) => {
        const users = JSON.parse(localStorage.getItem("users")) || [];
        users.splice(index, 1);//sirve para eliminar los elementos deseados
        localStorage.setItem("users", JSON.stringify(users));
        renderTable(users);
    };

    // Editar un usuario
    window.editUser = (index) => {
        const users = JSON.parse(localStorage.getItem("users")) || [];
        const user = users[index];

        // Cargar datos en el formulario
        document.getElementById("Email").value = user.Email;
        document.getElementById("Nombre").value = user.Nombre;
        document.getElementById("Apellido").value = user.Apellido;
        document.getElementById("Edad").value = user.Edad;
        document.getElementById("Direccion").value = user.Direccion;

        // Establecer el índice de edición
        editIndex = index;

        // Habilitar el botón de guardar
        saveButton.disabled = false;
    };

    // Función para consultar un usuario (ver solo)
    window.viewUser = (index) => {
        const users = JSON.parse(localStorage.getItem("users")) || [];
        const user = users[index];

        // Cargar datos en el formulario sin permitir edición
        document.getElementById("Email").value = user.Email;
        document.getElementById("Nombre").value = user.Nombre;
        document.getElementById("Apellido").value = user.Apellido;
        document.getElementById("Edad").value = user.Edad;
        document.getElementById("Direccion").value = user.Direccion;

        // Deshabilitar el botón de guardar para evitar cambios
        saveButton.disabled = true;
    };

    loadTable();
});