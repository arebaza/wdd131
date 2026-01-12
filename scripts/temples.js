// temples.js
// Handles footer dates and hamburger menu toggle

// Footer dates
const yearSpan = document.querySelector("#currentyear");
yearSpan.textContent = new Date().getFullYear();

const modifiedSpan = document.querySelector("#lastmodified");
modifiedSpan.textContent = document.lastModified;

// Secondary variables/functions in Spanish
const botonMenu = document.querySelector("#menu");
const navegacion = document.querySelector("#primary-nav");

function alternarMenu() {
  // Toggle visibility classes
  navegacion.classList.toggle("open");
  botonMenu.classList.toggle("open");

  // Update aria attributes for accessibility
  const estaAbierto = navegacion.classList.contains("open");
  botonMenu.setAttribute("aria-expanded", String(estaAbierto));
  botonMenu.setAttribute("aria-label", estaAbierto ? "Close menu" : "Open menu");
}

botonMenu.addEventListener("click", alternarMenu);
