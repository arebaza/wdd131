"use strict";

/* ==========================================================
   W06 Peru Travel Guide - Dynamic Features
   Requirements: multiple functions, DOM events, conditionals,
   arrays/objects/methods, template literals only, localStorage.
   ========================================================== */

// ---------- Data (arrays of objects) ----------
const lugares = [
  {
    id: "lima",
    titulo: "Lima (Costa)",
    region: "costa",
    dias: 2,
    descripcion: "Capital city with amazing food, museums, and ocean views in Miraflores and Barranco.",
    imagen: "images/lima.webp",
    alt: "Oceanfront view in Lima with coastal cliffs."
  },
  {
    id: "cusco",
    titulo: "Cusco & Sacred Valley (Sierra)",
    region: "sierra",
    dias: 3,
    descripcion: "Gateway to Inca history, mountain views, and traditional markets. Plan time to acclimate.",
    imagen: "images/cusco.webp",
    alt: "Historic streets and stone walls in Cusco."
  },
  {
    id: "machu",
    titulo: "Machu Picchu (Sierra)",
    region: "sierra",
    dias: 1,
    descripcion: "World-famous Inca citadel. Book tickets early and check entry time slots.",
    imagen: "images/machu-picchu.webp",
    alt: "Machu Picchu ruins with mountains in the background."
  },
  {
    id: "arequipa",
    titulo: "Arequipa (Sierra)",
    region: "sierra",
    dias: 2,
    descripcion: "The “white city” with colonial architecture and access to Colca Canyon.",
    imagen: "images/arequipa.webp",
    alt: "A plaza in Arequipa with mountains nearby."
  }
];

const comidas = [
  {
    id: "ceviche",
    titulo: "Ceviche",
    tipo: "main",
    descripcion: "Fresh fish cured in citrus with onions and chili. A classic coastal dish.",
    imagen: "images/ceviche.webp",
    alt: "Plate of ceviche with onions and citrus."
  },
  {
    id: "lomo",
    titulo: "Lomo Saltado",
    tipo: "main",
    descripcion: "Stir-fried beef with onions and tomatoes, often served with fries and rice.",
    imagen: "images/lomo-saltado.webp",
    alt: "Lomo saltado served with fries."
  },
  {
    id: "aji",
    titulo: "Ají de Gallina",
    tipo: "main",
    descripcion: "Creamy chicken dish with ají pepper sauce served over potatoes or rice.",
    imagen: "images/aji-gallina.webp",
    alt: "Ají de gallina plated with rice."
  },
  {
    id: "chicha",
    titulo: "Chicha Morada",
    tipo: "drink",
    descripcion: "A sweet purple corn drink flavored with fruits and spices. Very popular.",
    imagen: "images/chicha-morada.webp",
    alt: "Glass of a purple drink representing chicha morada."
  }
];

// History ranges stored in an object keyed by range
const historiaPorRango = {
  "1200-1532": [
    { titulo: "Inca expansion", texto: "The Inca state grew in the Andes, connecting regions with roads and administrative centers." },
    { titulo: "Cusco as a capital", texto: "Cusco became a political and spiritual center with impressive stone architecture." }
  ],
  "1532-1821": [
    { titulo: "Spanish conquest begins", texto: "Spanish forces arrived and the political structure changed dramatically." },
    { titulo: "Colonial society", texto: "New institutions, languages, and religious practices shaped daily life for centuries." }
  ],
  "1821-1900": [
    { titulo: "Independence", texto: "Peru declared independence in 1821 and formed a new republican identity." },
    { titulo: "Nation building", texto: "Economic development and internal challenges shaped the 19th century." }
  ],
  "1900-2000": [
    { titulo: "Modernization", texto: "Urban growth, education changes, and infrastructure expanded across the country." },
    { titulo: "Cultural influence", texto: "Music, cuisine, and literature gained broader recognition." }
  ],
  "2000-present": [
    { titulo: "Tourism & global connection", texto: "Peru became a major travel destination with global attention to food and heritage." },
    { titulo: "Contemporary culture", texto: "Modern Peru blends tradition with innovation in arts, business, and travel experiences." }
  ]
};

// ---------- localStorage helpers ----------
const claveFavoritos = "favoritosPeruW06";

function cargarFavoritos() {
  // Load favorites as an array of ids
  const raw = localStorage.getItem(claveFavoritos);
  if (!raw) return [];
  try {
    const data = JSON.parse(raw);
    return Array.isArray(data) ? data : [];
  } catch {
    localStorage.removeItem(claveFavoritos);
    return [];
  }
}

function guardarFavoritos(favoritos) {
  localStorage.setItem(claveFavoritos, JSON.stringify(favoritos));
}

function alternarFavorito(id) {
  // Toggle favorites and persist
  const favoritos = cargarFavoritos();
  const existe = favoritos.includes(id);

  const nuevos = existe
    ? favoritos.filter((x) => x !== id)
    : [...favoritos, id];

  guardarFavoritos(nuevos);
  return nuevos;
}

// ---------- Rendering helpers (template literals only for output) ----------
function crearTarjeta(item, categoria, favoritos) {
  const esFavorito = favoritos.includes(item.id);
  const textoBoton = esFavorito ? "★ Favorited" : "☆ Add Favorite";

  return `
    <article class="tarjeta" data-categoria="${categoria}">
      <h3>${item.titulo}</h3>
      <p>${item.descripcion}</p>
      <img src="${item.imagen}" loading="lazy" alt="${item.alt}">
      <div class="actions">
        <button class="btn ghost" type="button" data-fav-id="${item.id}">
          ${textoBoton}
        </button>
      </div>
    </article>
  `;
}

function renderizarTarjetasInicio(filtro) {
  const contenedor = document.querySelector("#contenedorTarjetas");
  const mensajeVacio = document.querySelector("#mensajeVacio");
  const estado = document.querySelector("#estadoFavoritos");

  if (!contenedor) return;

  const favoritos = cargarFavoritos();

  // Build a combined list for the home page
  const listaMixta = [
    ...lugares.slice(0, 2).map((x) => ({ ...x, categoria: "places" })),
    ...comidas.slice(0, 2).map((x) => ({ ...x, categoria: "foods" }))
  ];

  const listaFiltrada = filtro === "all"
    ? listaMixta
    : listaMixta.filter((x) => x.categoria === filtro);

  const html = listaFiltrada
    .map((item) => crearTarjeta(item, item.categoria, favoritos))
    .join("");

  contenedor.innerHTML = `${html}`;

  const hayResultados = listaFiltrada.length > 0;
  if (mensajeVacio) mensajeVacio.classList.toggle("hidden", hayResultados);

  if (estado) estado.textContent = `Favorites saved: ${favoritos.length}`;
}

function renderizarLugares(region) {
  const contenedor = document.querySelector("#contenedorLugares");
  const mensajeVacio = document.querySelector("#mensajeVacioLugares");
  const estado = document.querySelector("#estadoFavoritosPlaces");

  if (!contenedor) return;

  const favoritos = cargarFavoritos();

  const listaFiltrada = region === "all"
    ? lugares
    : lugares.filter((l) => l.region === region);

  const html = listaFiltrada
    .map((l) => crearTarjeta(l, "places", favoritos))
    .join("");

  contenedor.innerHTML = `${html}`;

  const hayResultados = listaFiltrada.length > 0;
  if (mensajeVacio) mensajeVacio.classList.toggle("hidden", hayResultados);

  if (estado) estado.textContent = `Favorites saved: ${favoritos.length}`;
}

function renderizarComidas(tipo) {
  const contenedor = document.querySelector("#contenedorComidas");
  const mensajeVacio = document.querySelector("#mensajeVacioComidas");
  const estado = document.querySelector("#estadoFavoritosFood");

  if (!contenedor) return;

  const favoritos = cargarFavoritos();

  const listaFiltrada = tipo === "all"
    ? comidas
    : comidas.filter((c) => c.tipo === tipo);

  const html = listaFiltrada
    .map((c) => crearTarjeta(c, "foods", favoritos))
    .join("");

  contenedor.innerHTML = `${html}`;

  const hayResultados = listaFiltrada.length > 0;
  if (mensajeVacio) mensajeVacio.classList.toggle("hidden", hayResultados);

  if (estado) estado.textContent = `Favorites saved: ${favoritos.length}`;
}

function renderizarHistoria(rango) {
  const contenedor = document.querySelector("#contenedorHistoria");
  const mensaje = document.querySelector("#mensajeHistoria");

  if (!contenedor || !mensaje) return;

  // Conditional branching requirement: handle empty selection
  if (!rango) {
    mensaje.textContent = "Select a range to display the timeline.";
    contenedor.innerHTML = ``;
    return;
  }

  const eventos = historiaPorRango[rango] ?? [];

  const html = eventos.length
    ? eventos.map((e) => `
        <article class="tarjeta">
          <h3>${e.titulo}</h3>
          <p>${e.texto}</p>
        </article>
      `).join("")
    : `
        <article class="tarjeta">
          <h3>No data</h3>
          <p>No timeline entries were found for that range.</p>
        </article>
      `;

  mensaje.textContent = `Showing timeline for ${rango}.`;
  contenedor.innerHTML = `${html}`;
}

// ---------- Event wiring ----------
function configurarInicio() {
  const chips = document.querySelectorAll("[data-filter]");
  if (chips.length === 0) return;

  renderizarTarjetasInicio("all");

  chips.forEach((btn) => {
    btn.addEventListener("click", () => {
      const filtro = btn.getAttribute("data-filter") ?? "all";
      renderizarTarjetasInicio(filtro);
    });
  });
}

function configurarLugares() {
  const chips = document.querySelectorAll("[data-region]");
  const contenedor = document.querySelector("#contenedorLugares");
  if (chips.length === 0 || !contenedor) return;

  renderizarLugares("all");

  chips.forEach((btn) => {
    btn.addEventListener("click", () => {
      const region = btn.getAttribute("data-region") ?? "all";
      renderizarLugares(region);
    });
  });
}

function configurarComidas() {
  const chips = document.querySelectorAll("[data-tipo]");
  const contenedor = document.querySelector("#contenedorComidas");
  if (chips.length === 0 || !contenedor) return;

  renderizarComidas("all");

  chips.forEach((btn) => {
    btn.addEventListener("click", () => {
      const tipo = btn.getAttribute("data-tipo") ?? "all";
      renderizarComidas(tipo);
    });
  });
}

function configurarFavoritosDelegado() {
  // Event delegation for favorite buttons on any page
  document.addEventListener("click", (e) => {
    const target = e.target;
    if (!(target instanceof HTMLElement)) return;

    const btn = target.closest("[data-fav-id]");
    if (!btn) return;

    const id = btn.getAttribute("data-fav-id") ?? "";
    const favoritos = alternarFavorito(id);

    // Update button text using template literals
    const esFavorito = favoritos.includes(id);
    btn.textContent = `${esFavorito ? "★ Favorited" : "☆ Add Favorite"}`;

    // Update live status if present
    const estado = document.querySelector("#estadoFavoritos") ||
                   document.querySelector("#estadoFavoritosPlaces") ||
                   document.querySelector("#estadoFavoritosFood");

    if (estado) estado.textContent = `Favorites saved: ${favoritos.length}`;
  });
}

function configurarHistoria() {
  const select = document.querySelector("#rangoHistoria");
  if (!select) return;

  renderizarHistoria("");

  select.addEventListener("change", () => {
    const rango = select.value;
    renderizarHistoria(rango);
  });
}

// ---------- Initialize everything safely ----------
configurarInicio();
configurarLugares();
configurarComidas();
configurarFavoritosDelegado();
configurarHistoria();
