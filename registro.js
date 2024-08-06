document.addEventListener("DOMContentLoaded", function () {
  // Obtén el formulario de registro
  const form = document.getElementById("registerForm");

  // Añade un evento al formulario para manejar el envío
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Previene el comportamiento predeterminado del formulario

    // Obtén los valores ingresados en el formulario
    const username = document.getElementById("registerUsername").value;
    const password = document.getElementById("registerPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    // Verifica si las contraseñas coinciden
    if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden"); // Muestra un mensaje de error
      return; // Detiene el procesamiento si las contraseñas no coinciden
    }

    // Obtén la lista de usuarios del localStorage, o una lista vacía si no existe
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Verifica si el nombre de usuario ya está en uso
    const existingUser = users.find((u) => u.username === username);

    if (existingUser) {
      alert("El nombre de usuario ya está en uso"); // Muestra un mensaje de error
      return; // Detiene el procesamiento si el usuario ya existe
    }

    // Añade el nuevo usuario a la lista de usuarios
    users.push({ username, password });

    // Guarda la lista actualizada en el localStorage
    localStorage.setItem("users", JSON.stringify(users));

    // Muestra un mensaje de éxito y redirige al inicio de sesión
    alert("Registro exitoso");
    window.location.href = "login.html"; // Redirige a la página de inicio de sesión
  });
});
