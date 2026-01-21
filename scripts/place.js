// place.js
// Sets footer dates and calculates wind chill.
// Comments are in English. Secondary variables/functions are in Spanish.

const yearSpan = document.querySelector("#currentyear");
yearSpan.textContent = new Date().getFullYear();

const modifiedSpan = document.querySelector("#lastmodified");
modifiedSpan.textContent = document.lastModified;

// Read sample weather values from the page
const tempSpan = document.querySelector("#temp");
const windSpan = document.querySelector("#wind");
const chillSpan = document.querySelector("#chill");

// Secondary Spanish variables
const temperatura = Number(tempSpan.textContent);
const velocidadViento = Number(windSpan.textContent);

// Wind chill formula (Fahrenheit + mph)
// Only valid when temp <= 50°F and wind > 3 mph.
function calcularSensacionTermica(t, v) {
  const valido = (t <= 50) && (v > 3);
  if (!valido) return "N/A";

  const chill =
    35.74 +
    (0.6215 * t) -
    (35.75 * Math.pow(v, 0.16)) +
    (0.4275 * t * Math.pow(v, 0.16));

  return `${Math.round(chill)}°F`;
}

chillSpan.textContent = calcularSensacionTermica(temperatura, velocidadViento);
