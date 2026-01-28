"use strict";

/*
  Creative touch:
  The “status badge” on each card helps the user instantly see whether a temple is Operating,
  Under Construction, or Announced—while still meeting the required filters for the assignment.
*/

const temples = [
  // PERU
 {
    templeName: "Lima Perú Temple",
    location: "Av. Javier Prado Este 6420 Urb. Santa Patricia, La Molina, Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    status: "Operating",
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/lima-peru-temple/lima-peru-temple-42066.jpg"
  },
  {
    templeName: "Lima Perú Los Olivos Temple",
    location: "Av. Eloy Espinoza 680 Urb. Palao - San Martín de Porres, Lima, Perú",
    dedicated: "2024, January, 14",
    area: 27500,
    status: "Operating",
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/lima-peru-los-olivos-temple/lima-peru-los-olivos-temple-42524.jpg"
  },

  {
    templeName: "Arequipa Perú Temple",
    location: "Calle Cusco 380, Carmen Alto, Distrito de Cayma, Arequipa, Perú",
    dedicated: "2019, December, 15",
    area: 26969,
    status: "Operating",
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/arequipa-peru-temple/arequipa-peru-temple-7276.jpg"
  },
  {
    templeName: "Trujillo Perú Temple",
    location: "Av. Mansiche Km 3.5 Carretera hacia Huanchaco, Trujillo, La Libertad, Perú",
    dedicated: "2015, June, 21",
    area: 28200,
    status: "Operating",
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/trujillo-peru-temple/trujillo-peru-temple-3717.jpg"
      },
  {
    templeName: "Huancayo Perú Temple",
    location: "Huancayo, Perú (site details TBD)",
    dedicated: "TBD (Announced 2023, October, 1)",
    area: 10000,
    status: "Announced",
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/huancayo-peru-temple/huancayo-peru-temple-41349.jpg"
  },
  {
    templeName: "Chorrillos Perú Temple",
    location: "Lima South, Perú (site details TBD)",
    dedicated: "TBD (Announced 2025, April, 6)",
    area: 10000,
    status: "Announced",
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/huancayo-peru-temple/huancayo-peru-temple-41349.jpg"
  },
    {
    templeName: "Iquitos Perú Temple",
    location: "Calle San Marcos 117–137 San Juan Bautista Iquitos, Maynas, Loreto Peru",
    dedicated: "TBD (Announced 2023, April, 2)",
    area: 20000,
    status: "Site location Announced",
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/huancayo-peru-temple/huancayo-peru-temple-41349.jpg"
  },
  {
    templeName: "Piura Perú Temple",
    location: "Piura, Perú (site details TBD)",
    dedicated: "TBD (Announced 2023, October, 1)",
    area: 10000,
    status: "Announced",
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/piura-peru-temple/piura-peru-temple-65581.jpg"
  },

  // BOLIVIA
  {
    templeName: "Cochabamba Bolivia Temple",
    location: "Avenida Melchor Urquidi 1500, Alto Queru Queru, Cochabamba, Bolivia",
    dedicated: "2000, April, 30",
    area: 35500,
    status: "Operating",
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/cochabamba-bolivia-temple/cochabamba-bolivia-temple-13705.jpg"
  },
  {
    templeName: "La Paz Bolivia Temple",
    location: "La Paz, Bolivia (site released; address not shown on the details page)",
    dedicated: "TBD (Announced 2021, October, 3)",
    area: 10000,
    status: "Announced",
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/la-paz-bolivia-temple/la-paz-bolivia-temple-44435.jpg"
  },
  {
    templeName: "Santa Cruz Bolivia Temple",
    location: "Santa Cruz de la Sierra, Bolivia (address TBD)",
    dedicated: "TBD (Announced 2020, October, 4)",
    area: 10000,
    status: "Under Construction",
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/santa-cruz-bolivia-temple/santa-cruz-bolivia-temple-67813.jpg"
  },

  // ECUADOR
  {
    templeName: "Quito Ecuador Temple",
    location: "Ruta Viva y Escalón Lumbisí, Esq. 170157 — Cumbayá, Quito, Ecuador",
    dedicated: "2022, November, 20",
    area: 36780,
    status: "Operating",
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/quito-ecuador-temple/quito-ecuador-temple-31201.jpg"
  },
  {
    templeName: "Guayaquil Ecuador Temple",
    location: "Calle Rosendo Maridueña 8845, Urdesa Norte 090510 — Guayaquil, Ecuador",
    dedicated: "1999, August, 1",
    area: 11800,
    status: "Operating",
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/_temp/058-Guayaquil-Ecuador-Temple.jpg"
  },

  // COLOMBIA
  {
    templeName: "Bogotá Colombia Temple",
    location: "Carrera 46 N°127-45, Bogotá, Distrito Capital, Colombia",
    dedicated: "1999, April, 24",
    area: 53500,
    status: "Operating",
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/bogota-colombia-temple/bogota-colombia-temple-61370.jpg"
  },
  {
    templeName: "Barranquilla Colombia Temple",
    location: "Carrera 46 vía al Mar PR 107 Sentido Barranquilla–Cartagena, Atlántico, Colombia",
    dedicated: "2018, December, 9",
    area: 25300,
    status: "Operating",
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/barranquilla-colombia-temple/barranquilla-colombia-temple-1843.jpg"
  },
  {
    templeName: "Cali Colombia Temple",
    location: "Cali, Colombia (address TBD)",
    dedicated: "TBD (Announced 2021, April, 4)",
    area: 10000,
    status: "Under Construction",
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/cali-colombia-temple/cali-colombia-temple-22101.jpg"
  },
  {
    templeName: "Medellín Colombia Temple",
    location: "Medellín, Colombia (address TBD)",
    dedicated: "TBD (Announced 2024, October, 6)",
    area: 10000,
    status: "Announced",
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/medellin-colombia-temple/medellin-colombia-temple-53829.jpg"
  },

  // UTah Operating Temples
  {
  templeName: "St. George Utah Temple",
  location: "250 E 400 S, St. George, Utah, United States",
  dedicated: "1877, April, 6",
  area: 110000,
  status: "Operating",
  imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/st.-george-utah-temple/st.-george-utah-temple-371.jpg"
},
{
  templeName: "Logan Utah Temple",
  location: "175 N 300 E, Logan, Utah, United States",
  dedicated: "1884, May, 17",
  area: 119619,
  status: "Operating",
  imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/logan-utah-temple/logan-utah-temple-371.jpg"
},
{
  templeName: "Manti Utah Temple",
  location: "500 E 100 N, Manti, Utah, United States",
  dedicated: "1888, May, 21",
  area: 74792,
  status: "Operating",
  imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/manti-utah-temple/manti-utah-temple-371.jpg"
},
{
  templeName: "Salt Lake Temple",
  location: "50 N West Temple, Salt Lake City, Utah, United States",
  dedicated: "1893, April, 6",
  area: 382207,
  status: "Operating",
  imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-371.jpg"
},
{
  templeName: "Ogden Utah Temple",
  location: "2250 Jefferson Ave, Ogden, Utah, United States",
  dedicated: "1972, January, 18",
  area: 115000,
  status: "Operating",
  imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/ogden-utah-temple/ogden-utah-temple-371.jpg"
},
{
  templeName: "Provo Utah Rock Canyon Temple",
  location: "2200 Temple Hill Dr, Provo, Utah, United States",
  dedicated: "1972, February, 9",
  area: 128000,
  status: "Operating",
  imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/provo-utah-temple/provo-utah-temple-371.jpg"
},
{
  templeName: "Jordan River Utah Temple",
  location: "10200 S Temple Dr, South Jordan, Utah, United States",
  dedicated: "1981, November, 16",
  area: 148236,
  status: "Operating",
  imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/jordan-river-utah-temple/jordan-river-utah-temple-371.jpg"
},
{
  templeName: "Bountiful Utah Temple",
  location: "640 S Bountiful Blvd, Bountiful, Utah, United States",
  dedicated: "1995, January, 8",
  area: 104000,
  status: "Operating",
  imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/bountiful-utah-temple/bountiful-utah-temple-371.jpg"
},
{
  templeName: "Mount Timpanogos Utah Temple",
  location: "742 N 900 E, American Fork, Utah, United States",
  dedicated: "1996, October, 13",
  area: 107240,
  status: "Operating",
  imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/mount-timpanogos-utah-temple/mount-timpanogos-utah-temple-371.jpg"
},
{
  templeName: "Draper Utah Temple",
  location: "14065 Canyon Vista Ln, Draper, Utah, United States",
  dedicated: "2009, March, 20",
  area: 58300,
  status: "Operating",
  imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/draper-utah-temple/draper-utah-temple-371.jpg"
},
{
  templeName: "Oquirrh Mountain Utah Temple",
  location: "11022 S 4000 W, South Jordan, Utah, United States",
  dedicated: "2009, August, 21",
  area: 190000,
  status: "Operating",
  imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/oquirrh-mountain-utah-temple/oquirrh-mountain-utah-temple-371.jpg"
},
{
  templeName: "Brigham City Utah Temple",
  location: "251 W 1100 S, Brigham City, Utah, United States",
  dedicated: "2012, September, 23",
  area: 36000,
  status: "Operating",
  imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/brigham-city-utah-temple/brigham-city-utah-temple-371.jpg"
},
{
  templeName: "Payson Utah Temple",
  location: "1494 S 930 W, Payson, Utah, United States",
  dedicated: "2015, June, 7",
  area: 96630,
  status: "Operating",
  imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/payson-utah-temple/payson-utah-temple-371.jpg"
},
{
  templeName: "Provo City Center Temple",
  location: "50 S University Ave, Provo, Utah, United States",
  dedicated: "2016, March, 20",
  area: 85084,
  status: "Operating",
  imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/provo-city-center-temple/provo-city-center-temple-371.jpg"
},
{
  templeName: "Cedar City Utah Temple",
  location: "1460 S Cove Dr, Cedar City, Utah, United States",
  dedicated: "2017, December, 10",
  area: 42657,
  status: "Operating",
  imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/cedar-city-utah-temple/cedar-city-utah-temple-371.jpg"
},
{
  templeName: "Orem Utah Temple",
  location: "1400 S Geneva Rd, Orem, Utah, United States",
  dedicated: "2024, January, 21",
  area: 71998,
  status: "Operating",
  imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/orem-utah-temple/orem-utah-temple-39549-main.jpg"
},
{
  templeName: "Taylorsville Utah Temple",
  location: "2600 W 4700 S, Taylorsville, Utah, United States",
  dedicated: "2024, June, 2",
  area: 70000,
  status: "Operating",
  imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/taylorsville-utah-temple/taylorsville-utah-temple-main.jpg"
},
{
  templeName: "Layton Utah Temple",
  location: "1400 E Oak Hills Dr, Layton, Utah, United States",
  dedicated: "2024, June, 16",
  area: 87400,
  status: "Operating",
  imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/layton-utah-temple/layton-utah-temple-main.jpg"
},
];

// ---------- helpers ----------
function getYearFromDedicated(dedicatedText) {
  // expected formats:
  // "1986, January, 10"
  // "TBD (Announced 2023, October, 1)"
  const match = dedicatedText.match(/(\d{4})/);
  return match ? Number(match[1]) : NaN;
}

function clearCards() {
  document.querySelector("#templeCards").innerHTML = "";
}

function createTempleCard(temple) {
  const card = document.createElement("article");
  card.className = "card";

  const img = document.createElement("img");
  img.className = "card__img";
  img.src = temple.imageUrl;
  img.alt = `${temple.templeName}`;
  img.loading = "lazy";

  const body = document.createElement("div");
  body.className = "card__body";

  const title = document.createElement("h2");
  title.className = "card__title";
  title.textContent = temple.templeName;

  const meta = document.createElement("p");
  meta.className = "card__meta";
  meta.innerHTML = `
    <strong>Location:</strong> ${temple.location}<br>
    <strong>Dedicated:</strong> ${temple.dedicated}<br>
    <strong>Area:</strong> ${temple.area.toLocaleString()} sq ft
  `;

  const badge = document.createElement("span");
  badge.className = "badge";
  badge.textContent = temple.status;

  body.appendChild(title);
  body.appendChild(meta);
  body.appendChild(badge);

  card.appendChild(img);
  card.appendChild(body);

  return card;
}

function displayTemples(list) {
  clearCards();
  const container = document.querySelector("#templeCards");

  list.forEach((temple) => {
    container.appendChild(createTempleCard(temple));
  });
}

// ---------- filters ----------
function filterTemples(filterName) {
  if (filterName === "home") return temples;

  if (filterName === "old") {
    return temples.filter((t) => {
      const y = getYearFromDedicated(t.dedicated);
      return Number.isFinite(y) && y < 1900;
    });
  }

  if (filterName === "new") {
    return temples.filter((t) => {
      const y = getYearFromDedicated(t.dedicated);
      return Number.isFinite(y) && y > 2000;
    });
  }

  if (filterName === "large") {
    return temples.filter((t) => t.area > 90000);
  }

  if (filterName === "small") {
    return temples.filter((t) => t.area < 10000);
  }

  return temples;
}

// ---------- nav + events ----------
function setActiveLink(filterName) {
  document.querySelectorAll(".nav__link").forEach((a) => {
    a.setAttribute("aria-current", a.dataset.filter === filterName ? "page" : "false");
  });
}

function closeMobileMenu() {
  const nav = document.querySelector("#primaryNav");
  const btn = document.querySelector("#menuButton");
  nav.classList.remove("open");
  btn.setAttribute("aria-expanded", "false");
}

document.addEventListener("click", (e) => {
  const link = e.target.closest(".nav__link");
  if (!link) return;

  e.preventDefault();
  const filterName = link.dataset.filter;

  setActiveLink(filterName);
  displayTemples(filterTemples(filterName));
  closeMobileMenu();
});

document.querySelector("#menuButton").addEventListener("click", () => {
  const nav = document.querySelector("#primaryNav");
  const btn = document.querySelector("#menuButton");

  const isOpen = nav.classList.toggle("open");
  btn.setAttribute("aria-expanded", String(isOpen));
});

// ---------- footer ----------
document.querySelector("#currentYear").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;

// Initial render
setActiveLink("home");
displayTemples(temples);
