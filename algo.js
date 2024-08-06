function showTab(tabId) {
  const sections = document.querySelectorAll(".tab-section");
  const buttons = document.querySelectorAll(".tab-button");

  // Remueve la clase 'active' de todas las secciones y botones
  sections.forEach((section) => {
    section.classList.remove("active");
  });

  buttons.forEach((button) => {
    button.classList.remove("active");
  });

  // Agrega la clase 'active' a la sección y botón seleccionados
  document.getElementById(tabId).classList.add("active");
  document
    .querySelector(`.tab-button[onclick="showTab('${tabId}')"]`)
    .classList.add("active");
}

function deleteAccount() {
  // Solicita confirmación antes de eliminar la cuenta
  if (confirm("¿Estás seguro de que deseas eliminar tu cuenta?")) {
    alert("Cuenta eliminada. Serás redirigido a la página principal.");
    window.location.href = "main.html";
  }
}
