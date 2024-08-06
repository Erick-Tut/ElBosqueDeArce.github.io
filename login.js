document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("loginForm");

  // Escucha el evento de envío del formulario
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Previene el comportamiento predeterminado del formulario

    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;

    // Obtiene los usuarios almacenados en localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      // Si las credenciales son correctas, guarda el usuario actual y redirige
      localStorage.setItem("currentUser", JSON.stringify(user));
      window.location.href = "main.html";
    } else {
      // Muestra un mensaje de error si las credenciales son incorrectas
      alert("Nombre de usuario o contraseña incorrectos");
    }
  });
});
