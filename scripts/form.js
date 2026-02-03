"use strict";

/* PROYECTO W05: cargar productos dinámicamente */

const productos = [
  { id: "fc-1888", name: "flux capacitor" },
  { id: "fc-2050", name: "power laces" },
  { id: "fs-1987", name: "time circuits" },
  { id: "ac-2000", name: "low voltage reactor" },
  { id: "jj-1969", name: "warp equalizer" }
];

const selectProducto = document.querySelector("#productName");

function cargarProductos() {
  productos.forEach((producto) => {
    const option = document.createElement("option");
    option.value = producto.id;
    option.textContent = producto.name;
    selectProducto.append(option);
  });
}

cargarProductos();
