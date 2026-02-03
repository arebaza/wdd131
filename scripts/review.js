"use strict";

/* ==========================================================
   W05 - Página de Confirmación (review.html)
   Objetivo: usar localStorage para contar reseñas completadas.
   Cada vez que esta página carga después del submit, incrementa
   el contador. :contentReference[oaicite:12]{index=12}
   ========================================================== */

const claveContador = "contadorResenas"; // Spanish variable name
const countSpan = document.querySelector("#reviewCount");
const summaryList = document.querySelector("#reviewSummary");

/**
 * Lee el contador desde localStorage y lo convierte a número.
 * @returns {number}
 */
function obtenerContador() {
  const raw = localStorage.getItem(claveContador);
  const num = Number(raw);
  return Number.isFinite(num) ? num : 0;
}

/**
 * Guarda el contador en localStorage como string (localStorage stores strings).
 */
function guardarContador(nuevoValor) {
  localStorage.setItem(claveContador, String(nuevoValor));
}

/**
 * Incrementa el contador cuando la página carga.
 */
function incrementarContador() {
  const actual = obtenerContador();
  const nuevo = actual + 1;
  guardarContador(nuevo);

  if (countSpan) countSpan.textContent = String(nuevo);
}

/**
 * Build a friendly summary from the submitted GET parameters.
 * Uses template literals (good habit for W06 too).
 */
function renderSummary() {
  if (!summaryList) return;

  const params = new URLSearchParams(window.location.search);

  const product = params.get("productName") || "—";
  const rating = params.get("rating") || "—";
  const installDate = params.get("installDate") || "—";
  const name = params.get("userName") || "Anonymous";
  const review = params.get("writtenReview") || "No written review provided.";

  // features might have multiple values
  const features = params.getAll("features");
  const featuresText = features.length ? features.join(", ") : "None selected";

  const items = [
    `Product (value submitted): ${product}`,
    `Rating: ${rating}`,
    `Installation Date: ${installDate}`,
    `Useful Features: ${featuresText}`,
    `Name: ${name}`,
    `Review: ${review}`
  ];

  items.forEach((text) => {
    const li = document.createElement("li");
    li.textContent = text;
    summaryList.append(li);
  });
}

// Page load actions
incrementarContador();
renderSummary();
