document.getElementById("boton-hamburguesa").addEventListener("click", function () {
    const menu = document.getElementById("menu-hamburguesa");
    menu.style.display = (menu.style.display === "block") ? "none" : "block";
  });
  // Obtenemos el botón y el body
const botonModoOscuro = document.getElementById('boton-modo-oscuro');
const body = document.body;

// Evento al hacer clic en el botón
botonModoOscuro.addEventListener('click', () => {
    // Alternamos la clase 'modo-oscuro' en el body
    body.classList.toggle('modo-oscuro');
});
