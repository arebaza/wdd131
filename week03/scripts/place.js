// place.js
// Sets footer dates and calculates wind chill.
// Comments are in English; secondary helper variables/functions are in Spanish.

const yearSpan = document.querySelector("#currentyear");
yearSpan.textContent = new Date().getFullYear();

const modifiedSpan = document.querySelector("#lastmodified");
modifiedSpan.textContent = document.lastModified();

// Weather sample data (in English display)
const tempSpan = document.querySelector("#temp");
const windSpan = document.querySelector("#wind");
const chillSpan = document.querySelector("#chill");
const summarySpan = document.querySelector("#weather-summary");
const iconImg = document.querySelector("#weather-icon");

// Secondary variables in Spanish (not visible)
const temperatura = Number(tempSpan.textContent);
const velocidadViento = Number(windSpan.textContent);

// Wind chill formula (US units: Fahrenheit + mph)
// Only valid when temp <= 50°F and wind > 3 mph.
function calcularSensacionTermica(t, v) {
  // This function returns a string suitable for page output.
  const cumpleCondiciones = (t <= 50) && (v > 3);
  if (!cumpleCondiciones) return "N/A";

  const chill =
    35.74 +
    (0.6215 * t) -
    (35.75 * Math.pow(v, 0.16)) +
    (0.4275 * t * Math.pow(v, 0.16));

  return `${Math.round(chill)}°F`;
}

// Update the wind chill on the page
chillSpan.textContent = calcularSensacionTermica(temperatura, velocidadViento);

// Optional: set weather summary/icon (kept simple for this assignment)
summarySpan.textContent = "Clear";
iconImg.alt = "Clear weather icon";
