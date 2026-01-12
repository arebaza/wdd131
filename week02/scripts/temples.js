// temples.js
// Requirements covered:
// - Footer year + last modified
// - Hamburger toggles nav open/close (mobile view)
// - Use a symbol like X to close (handled via CSS + button class)

const yearSpan = document.querySelector("#currentyear");
yearSpan.textContent = new Date().getFullYear();

const modifiedSpan = document.querySelector("#lastmodified");
modifiedSpan.textContent = document.lastModified;

// Secondary variables/functions in Spanish (UI still English)
const botonMenu = document.querySelector("#menu");
const navegacion = document.querySelector("#primary-nav");

function alternarMenu() {
  // Toggle open class for nav visibility
  navegacion.classList.toggle("open");
  botonMenu.classList.toggle("open");

  // Keep aria-expanded accurate for accessibility
  const estaAbierto = navegacion.classList.contains("open");
  botonMenu.setAttribute("aria-expanded", String(estaAbierto));

  // Update aria-label (still English, as requested)
  botonMenu.setAttribute("aria-label", estaAbierto ? "Close menu" : "Open menu");
}

botonMenu.addEventListener("click", alternarMenu);

// Optional: close menu when resizing to large view
function cerrarMenuSiPantallaGrande() {
  if (window.matchMedia("(min-width: 700px)").matches) {
    navegacion.classList.remove("open");
    botonMenu.classList.remove("open");
    botonMenu.setAttribute("aria-expanded", "false");
    botonMenu.setAttribute("aria-label", "Open menu");
  }
}

window.addEventListener("resize", cerrarMenuSiPantallaGrande);
