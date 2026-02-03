"use strict";

/* PROYECTO W05: contador de reseñas con localStorage */

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
  countSpan.textContent = nuevo;
}

function renderSummary() {
  const params = new URLSearchParams(window.location.search);

  [
    `Product: ${params.get("productName")}`,
    `Rating: ${params.get("rating")}`,
    `Install Date: ${params.get("installDate")}`,
    `Features: ${params.getAll("features").join(", ") || "None"}`,
    `Name: ${params.get("userName") || "Anonymous"}`
  ].forEach(text => {
    const li = document.createElement("li");
    li.textContent = text;
    summaryList.append(li);
  });
}

incrementarContador();
renderSummary();
