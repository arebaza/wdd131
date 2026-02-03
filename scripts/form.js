"use strict";

/* ==========================================================
   PROYECTO W05 - FORMULARIO DE RESEÑA (Creativo)
   1) Evitar fechas futuras (max dinámico)
   2) Guardar y restaurar borrador con localStorage
   ========================================================== */

/* Product array (required: use objects with id + name) */
const productos = [
  { id: "fc-1888", name: "flux capacitor" },
  { id: "fc-2050", name: "power laces" },
  { id: "fs-1987", name: "time circuits" },
  { id: "ac-2000", name: "low voltage reactor" },
  { id: "jj-1969", name: "warp equalizer" }
];

/* DOM references */
const formulario = document.querySelector("#reviewForm");
const selectProducto = document.querySelector("#productName");
const fechaInstalacion = document.querySelector("#installDate");

/* ---------- 1) Prevent future dates ---------- */
function ponerMaxFechaHoy() {
  if (!fechaInstalacion) return;
  const hoy = new Date().toISOString().split("T")[0];
  fechaInstalacion.max = hoy; // prevents future dates
}

/* ---------- Populate select from product array ---------- */
function cargarProductos() {
  if (!selectProducto) return;

  productos.forEach((producto) => {
    const option = document.createElement("option");
    option.value = producto.id;       // value = id
    option.textContent = producto.name; // display = name
    selectProducto.append(option);
  });
}

/* ---------- 2) Draft save/restore with localStorage ---------- */
const claveBorrador = "borradorResenaW05"; // Spanish variable name (safe key)

/* Save current form state */
function guardarBorrador() {
  if (!formulario) return;

  const ratingSeleccionado = document.querySelector('input[name="rating"]:checked')?.value || "";
  const featuresSeleccionadas = Array.from(
    document.querySelectorAll('input[name="features"]:checked')
  ).map(cb => cb.value);

  const datos = {
    productName: selectProducto?.value || "",
    rating: ratingSeleccionado,
    installDate: fechaInstalacion?.value || "",
    userName: document.querySelector("#userName")?.value || "",
    writtenReview: document.querySelector("#writtenReview")?.value || "",
    features: featuresSeleccionadas
  };

  localStorage.setItem(claveBorrador, JSON.stringify(datos));
}

/* Restore saved draft */
function cargarBorrador() {
  const raw = localStorage.getItem(claveBorrador);
  if (!raw) return;

  let datos;
  try {
    datos = JSON.parse(raw);
  } catch {
    // If draft is corrupted, remove it safely
    localStorage.removeItem(claveBorrador);
    return;
  }

  if (selectProducto && datos.productName) selectProducto.value = datos.productName;
  if (fechaInstalacion && datos.installDate) fechaInstalacion.value = datos.installDate;

  const userName = document.querySelector("#userName");
  const writtenReview = document.querySelector("#writtenReview");

  if (userName && datos.userName) userName.value = datos.userName;
  if (writtenReview && datos.writtenReview) writtenReview.value = datos.writtenReview;

  if (datos.rating) {
    const radio = document.querySelector(`input[name="rating"][value="${datos.rating}"]`);
    if (radio) radio.checked = true;
  }

  if (Array.isArray(datos.features)) {
    datos.features.forEach((val) => {
      const cb = document.querySelector(`input[name="features"][value="${val}"]`);
      if (cb) cb.checked = true;
    });
  }
}

/* Clear draft on successful submit (optional, but clean) */
function limpiarBorradorAlEnviar(e) {
  // only clear if form is valid and will submit
  if (formulario && formulario.checkValidity()) {
    localStorage.removeItem(claveBorrador);
  } else {
    // prevent submit only if you want custom behavior (we don't block native validation here)
    // leave native validation to browser
  }
}

/* ---------- Run setup (order matters) ---------- */
ponerMaxFechaHoy();
cargarProductos();
cargarBorrador();

/* Auto-save draft while user types/selects */
if (formulario) {
  formulario.addEventListener("input", guardarBorrador);
  formulario.addEventListener("change", guardarBorrador);
  formulario.addEventListener("submit", limpiarBorradorAlEnviar);
}
