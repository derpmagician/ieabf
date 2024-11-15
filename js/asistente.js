function toggleRecuadro() {
  var recuadro = document.getElementById("recuadro");
  if (recuadro.style.display === "none" || recuadro.style.display === "") {
    recuadro.style.display = "flex";
  } else {
    recuadro.style.display = "none";
  }
}

function mostrarPreguntasFrecuentes() {
  var mensaje = document.getElementById("mensaje");
  var botones = document.getElementById("botones");
  var opciones = document.getElementById("opciones");

  // Ocultar el mensaje inicial y los botones originales
  mensaje.style.display = "none";
  botones.style.display = "none";

  // Mostrar las opciones de consultas frecuentes
  opciones.style.display = "block";
}

function contactar() {
  window.location.href = "contactenos.html";
}

function mostrarTalleres() {
  var mensaje2 = document.getElementById("mensaje2");
  var opciones = document.getElementById("opciones");
  var talleres = document.getElementById("talleres");

  // Ocultar el mensaje y las opciones de consultas frecuentes
  mensaje2.style.display = "none";
  opciones.style.display = "none";

  // Mostrar los talleres
  talleres.style.display = "block";
}

function reiniciar() {
  var mensaje = document.getElementById("mensaje");
  var botones = document.getElementById("botones");
  var opciones = document.getElementById("opciones");
  var talleres = document.getElementById("talleres");

  // Mostrar el mensaje inicial y los botones originales
  mensaje.style.display = "block";
  botones.style.display = "block";

  // Ocultar las opciones de preguntas frecuentes y los talleres
  opciones.style.display = "none";
  talleres.style.display = "none";
}

function reiniciarTalleres() {
  var mensaje2 = document.getElementById("mensaje2");
  var opciones = document.getElementById("opciones");
  var talleres = document.getElementById("talleres");

  // Mostrar el mensaje y las opciones de consultas frecuentes
  mensaje2.style.display = "block";
  opciones.style.display = "block";

  // Ocultar los talleres
  talleres.style.display = "none";
}
