"use strict";

/* ==========================================================
   Contact Form - Draft Save/Restore
   ========================================================== */

const formContacto = document.querySelector("#formContacto");
const btnBorrar = document.querySelector("#btnBorrar");
const estadoForm = document.querySelector("#estadoForm");

const claveBorrador = "borradorContactoPeruW06";

// Load draft data from localStorage
function cargarBorrador() {
  const raw = localStorage.getItem(claveBorrador);
  if (!raw) return;

  let datos;
  try {
    datos = JSON.parse(raw);
  } catch {
    localStorage.removeItem(claveBorrador);
    return;
  }

  const nombre = document.querySelector("#nombre");
  const correo = document.querySelector("#correo");
  const comentarios = document.querySelector("#comentarios");

  if (nombre && datos.nombre) nombre.value = datos.nombre;
  if (correo && datos.correo) correo.value = datos.correo;
  if (comentarios && datos.comentarios) comentarios.value = datos.comentarios;

  if (datos.tipoViaje) {
    const radio = document.querySelector(`input[name="tipoViaje"][value="${datos.tipoViaje}"]`);
    if (radio) radio.checked = true;
  }

  if (Array.isArray(datos.intereses)) {
    datos.intereses.forEach((val) => {
      const cb = document.querySelector(`input[name="intereses"][value="${val}"]`);
      if (cb) cb.checked = true;
    });
  }

  if (estadoForm) estadoForm.textContent = "Draft restored from localStorage.";
}

// Save draft data to localStorage
function guardarBorrador() {
  if (!formContacto) return;

  const tipoViaje = document.querySelector('input[name="tipoViaje"]:checked')?.value ?? "";
  const intereses = Array.from(document.querySelectorAll('input[name="intereses"]:checked'))
    .map((cb) => cb.value);

  const datos = {
    nombre: document.querySelector("#nombre")?.value ?? "",
    correo: document.querySelector("#correo")?.value ?? "",
    tipoViaje,
    intereses,
    comentarios: document.querySelector("#comentarios")?.value ?? ""
  };

  localStorage.setItem(claveBorrador, JSON.stringify(datos));
  if (estadoForm) estadoForm.textContent = "Draft saved.";
}

// Clear draft data
function borrarBorrador() {
  localStorage.removeItem(claveBorrador);

  if (formContacto) formContacto.reset();
  if (estadoForm) estadoForm.textContent = "Draft cleared.";
}

// Show a friendly message on submit (still uses GET, but gives UX feedback)
function manejarEnvio(e) {
  // Let the browser validate required fields first
  if (!formContacto) return;

  if (!formContacto.checkValidity()) {
    if (estadoForm) estadoForm.textContent = "Please complete required fields before sending.";
    return;
  }

  localStorage.removeItem(claveBorrador);
  if (estadoForm) estadoForm.textContent = "Message sent. Thank you!";
}

// Wire events
if (formContacto) {
  cargarBorrador();
  formContacto.addEventListener("input", guardarBorrador);
  formContacto.addEventListener("change", guardarBorrador);
  formContacto.addEventListener("submit", manejarEnvio);
}

if (btnBorrar) {
  btnBorrar.addEventListener("click", borrarBorrador);
}
