document.getElementById("formulario").addEventListener("submit", function (event) {
  event.preventDefault();

  const usuario = document.getElementById("usuario").value;
  const contrasena = document.getElementById("contrasena").value;
  
  if (usuario === "Majo123" && contrasena === "mao08") {
    alert('Inicio de sesión exitoso, ¡Bienvenido!');
    window.location.href = "index1.html";
  } else {
    alert('Usuario o contraseña incorrecta. Inserta nuevamente los datos');
  }
});
