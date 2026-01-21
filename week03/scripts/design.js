// design.js
// Adds dynamic footer dates using the required IDs.
// Uses Spanish helper variable/function names (secondary) as requested.

const spanAnioActual = document.querySelector("#currentyear");
spanAnioActual.textContent = new Date().getFullYear();

const spanUltimaModificacion = document.querySelector("#lastmodified");
spanUltimaModificacion.textContent = document.lastModified;

// Optional: small helper to confirm the main element exists (no console output).
function verificarEstructura() {
  // This function intentionally does not output anything.
  const contenedorPrincipal = document.querySelector("#main");
  return Boolean(contenedorPrincipal);
}

verificarEstructura();
