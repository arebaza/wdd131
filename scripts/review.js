"use strict";

/* ==========================================================
   W05 - Página de Confirmación
   Objetivo: usar localStorage para contar reseñas completadas
   ========================================================== */

const claveContador = "contadorResenas";
const countSpan = document.querySelector("#reviewCount");
const summaryList = document.querySelector("#reviewSummary");

function obtenerContador() {
  const raw = localStorage.getItem(claveContador);
  const num = Number(raw);
  return Number.isFinite(num) ? num : 0;
}

function guardarContador(valor) {
  localStorage.setItem(claveContador, String(valor));
}

function incrementarContador() {
  const nuevo = obtenerContador() + 1;
  guardarContador(nuevo);
  if (countSpan) countSpan.textContent = String(nuevo);
}

function renderSummary() {
  if (!summaryList) return;

  const params = new URLSearchParams(window.location.search);

  const product = params.get("productName") || "—";
  const rating = params.get("rating") || "—";
  const installDate = params.get("installDate") || "—";
  const name = params.get("userName") || "Anonymous";
  const review = params.get("writtenReview") || "No written review provided.";
  const features = params.getAll("features");
  const featuresText = features.length ? features.join(", ") : "None selected";

  const items = [
    `Product (submitted value): ${product}`,
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

incrementarContador();
renderSummary();
