"use strict";

/* ==========================================================
   W05 - Formulario de Reseña de Producto
   Nota: Comentarios principales en español.
   Objetivo: Llenar el <select> dinámicamente con un arreglo
   de productos (id + name) como exige la tarea. :contentReference[oaicite:9]{index=9}
   ========================================================== */

// Arreglo de productos (objetos). (Usa tu array EXACTO si tu instructor lo dio.)
const productos = [
  { id: "fc-1888", name: "flux capacitor" },
  { id: "fc-2050", name: "power laces" },
  { id: "fs-1987", name: "time circuits" },
  { id: "ac-2000", name: "low voltage reactor" },
  { id: "jj-1969", name: "warp equalizer" }
];

// Referencias al DOM
const selectProducto = document.querySelector("#productName");

/**
 * Agrega una opción al select.
 * @param {string} value - value del option (según la tarea puede ser name o id)
 * @param {string} text  - texto visible
 */
function agregarOpcion(value, text) {
  const option = document.createElement("option");
  option.value = value;
  option.textContent = text;
  selectProducto.append(option);
}

/**
 * Carga los productos en el select.
 * Usamos un callback dentro de forEach (aplica a W05 callbacks).
 */
function cargarProductos() {
  if (!selectProducto) return;

  // IMPORTANTE:
  // Según el PDF: "name field display and id used for the value field" :contentReference[oaicite:10]{index=10}
  productos.forEach((producto) => {
    agregarOpcion(producto.id, producto.name);
  });
}

// Run on load
cargarProductos();
