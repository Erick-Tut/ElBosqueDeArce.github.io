document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("myForm");

  // Maneja el evento de envío del formulario
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Evita el envío del formulario por defecto

    const formData = new FormData(form);

    const data = {};
    formData.forEach((value, key) => {
      data[key] = value; // Almacena los datos del formulario en un objeto
    });

    console.log("Form data submitted:", data);

    // Muestra un mensaje de éxito
    alert("Formulario enviado exitosamente!");

    // Resetea el formulario después de enviarlo
    form.reset();
  });
});
