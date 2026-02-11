"use strict";

/* ==========================================================
   W06 Peru Travel Guide - Dynamic Features + i18n
   Requirements: multiple functions, DOM events, conditionals,
   arrays/objects/methods, template literals only, localStorage.
   + Language switcher: English / Spanish / French
   ========================================================== */

// ---------- i18n ----------
const claveIdioma = "idiomaPeruW06";
const idiomasSoportados = ["en", "es", "fr"];

const i18n = {
  en: {
    // Site
    siteTitle: "Peru Travel Guide",
    badgePeru: "Peru",
    badgeTime: "Time",
    badgeSources: "Sources",
    langLabel: "Lang",

    // Nav
    navHome: "Home",
    navPlaces: "Places",
    navFood: "Food",
    navHistory: "History",
    navContact: "Contact",
    navReferences: "References",

    // Footer
    lastMod: "Last Modification:",

    // Generic UI
    favoritesSaved: "Favorites saved: {n}",
    noDataTitle: "No data",
    noDataText: "No entries were found for that selection.",
    jsNeededGeneric: "This page needs JavaScript enabled to show the dynamic content.",
    jsNeededPlaces: "This page needs JavaScript enabled to show the places list.",
    jsNeededFood: "This page needs JavaScript enabled to show the food list.",
    jsNeededHistory: "This page needs JavaScript enabled to show the history timeline.",

    // Buttons
    favOn: "★ Favorited",
    favOff: "☆ Add Favorite",

    // Home
    homeTagline: "Discover places, food, and history in Peru.",
    exploreTitle: "Explore Peru",
    exploreDesc: "Discover places, food, and history. Save your favorites and plan your trip.",
    quickPicksTitle: "Quick Picks",
    quickPicksDesc: "Use filters to preview places and foods.",
    filterAll: "All",
    filterPlaces: "Places",
    filterFoods: "Foods",

    // Places
    placesTitle: "Places to Visit",
    placesTagline: "Filter by region and save favorites.",
    placesTop: "Top Places",
    placesIntro: "Use filters to explore Peru’s three natural regions: Coast (Costa), Highlands (Sierra), and Rainforest (Selva).",
    allRegions: "All Regions",
    costa: "Costa",
    sierra: "Sierra",
    selva: "Selva",
    placesEmpty: "No places found for that region.",

    planningNotes: "Travel Planning Notes",
    noteLimaKey: "Lima:",
    noteLimaText: "Great food, museums, and ocean views.",
    noteCuscoKey: "Cusco + Sacred Valley:",
    noteCuscoText: "High altitude—hydrate and plan acclimation.",
    noteArequipaKey: "Arequipa:",
    noteArequipaText: "A beautiful “white city” with access to Colca Canyon.",
    noteMachuKey: "Machu Picchu:",
    noteMachuText: "Book early and pack light.",

    // Food
    foodsTitle: "Peruvian Food",
    foodsTagline: "Explore dishes and drinks.",
    foodsSectionTitle: "Top Food & Drinks",
    foodsSectionDesc: "Filter by type and save favorites.",
    foodsEmpty: "No food found for that filter.",
    foodFilterAll: "All",
    foodFilterMain: "Main",
    foodFilterDrink: "Drink",

    foodTipsTitle: "Tips",
    tipCevicheKey: "Ceviche:",
    tipCevicheText: "Best fresh—try it near the coast.",
    tipSpiceKey: "Spice level:",
    tipSpiceText: "Ask “¿Picante?” if you want less chili.",
    tipDrinksKey: "Drinks:",
    tipDrinksText: "Try chicha morada (non-alcoholic) and pisco sour (alcoholic).",

    // History
    historyTitle: "History by Year Range",
    historyTagline: "Select a time period to explore.",
    chooseRange: "Choose a range",
    yearRangeLabel: "Year Range",
    selectRange: "Select a range...",
    historyHint: "Select a range to display the timeline.",
    showingTimeline: "Showing timeline for {range}.",
    historyRanges: {
      "1200-1532": "1200–1532 (Inca Expansion)",
      "1532-1821": "1532–1821 (Colonial Period)",
      "1821-1900": "1821–1900 (Early Republic)",
      "1900-2000": "1900–2000 (Modernization)",
      "2000-present": "2000–Present (Contemporary Peru)"
    },

    // Contact
    contactTitle: "Contact",
    contactTagline: "Send me your questions or travel ideas.",
    contactFormTitle: "Contact Form",
    contactFormDesc: "Your draft saves automatically while you type.",
    nameLabel: "Name",
    emailLabel: "Email",
    tripTypeLegend: "Trip Type",
    tripFamily: "Family",
    tripSolo: "Solo",
    tripCouple: "Couple",
    interestsLegend: "Interests",
    interestFood: "Food",
    interestHistory: "History",
    interestNature: "Nature",
    messageLabel: "Message",
    sendBtn: "Send",
    clearDraftBtn: "Clear Draft",

    // References
    refsTitle: "References",
    refsTagline: "Sources for images and information used on this site.",
    refsImages: "Images",
    refsInfo: "Information",
    refsBack: "Back to Home",
    refsInfo1: "General travel regions (Costa/Sierra/Selva): Student summary.",
    refsInfo2: "History timeline summaries: Written by Armando (student summary).",
    refsInfo3: "Food/places descriptions: Written by Armando (student summary).",
    refsTip: "Tip: If you used facts from specific websites, add them here as links (stronger references)."
  },

  es: {
    siteTitle: "Guía de Viaje del Perú",
    badgePeru: "Perú",
    badgeTime: "Tiempo",
    badgeSources: "Fuentes",
    langLabel: "Idioma",

    navHome: "Inicio",
    navPlaces: "Lugares",
    navFood: "Comida",
    navHistory: "Historia",
    navContact: "Contacto",
    navReferences: "Referencias",

    lastMod: "Última modificación:",

    favoritesSaved: "Favoritos guardados: {n}",
    noDataTitle: "Sin datos",
    noDataText: "No se encontraron entradas para esa selección.",
    jsNeededGeneric: "Esta página necesita JavaScript para mostrar el contenido dinámico.",
    jsNeededPlaces: "Esta página necesita JavaScript para mostrar la lista de lugares.",
    jsNeededFood: "Esta página necesita JavaScript para mostrar la lista de comida.",
    jsNeededHistory: "Esta página necesita JavaScript para mostrar la línea de tiempo.",

    favOn: "★ Favorito",
    favOff: "☆ Agregar favorito",

    homeTagline: "Descubre lugares, comida e historia en el Perú.",
    exploreTitle: "Explora el Perú",
    exploreDesc: "Descubre lugares, comida e historia. Guarda tus favoritos y planifica tu viaje.",
    quickPicksTitle: "Selección Rápida",
    quickPicksDesc: "Usa filtros para ver lugares y comida.",
    filterAll: "Todo",
    filterPlaces: "Lugares",
    filterFoods: "Comida",

    placesTitle: "Lugares para Visitar",
    placesTagline: "Filtra por región y guarda favoritos.",
    placesTop: "Mejores Lugares",
    placesIntro: "Usa filtros para explorar las tres regiones naturales del Perú: Costa, Sierra y Selva.",
    allRegions: "Todas las regiones",
    costa: "Costa",
    sierra: "Sierra",
    selva: "Selva",
    placesEmpty: "No se encontraron lugares para esa región.",

    planningNotes: "Notas para planificar tu viaje",
    noteLimaKey: "Lima:",
    noteLimaText: "Excelente comida, museos y vistas al mar.",
    noteCuscoKey: "Cusco y Valle Sagrado:",
    noteCuscoText: "Altura—hidrátate y planifica aclimatación.",
    noteArequipaKey: "Arequipa:",
    noteArequipaText: "Hermosa “ciudad blanca” con acceso al Cañón del Colca.",
    noteMachuKey: "Machu Picchu:",
    noteMachuText: "Reserva temprano y lleva poco peso.",

    foodsTitle: "Comida Peruana",
    foodsTagline: "Explora platos y bebidas.",
    foodsSectionTitle: "Platos y Bebidas",
    foodsSectionDesc: "Filtra por tipo y guarda favoritos.",
    foodsEmpty: "No se encontró comida para ese filtro.",
    foodFilterAll: "Todo",
    foodFilterMain: "Plato",
    foodFilterDrink: "Bebida",

    foodTipsTitle: "Consejos",
    tipCevicheKey: "Ceviche:",
    tipCevicheText: "Mejor fresco—pruébalo cerca de la costa.",
    tipSpiceKey: "Nivel de picante:",
    tipSpiceText: "Pregunta “¿Picante?” si quieres menos ají.",
    tipDrinksKey: "Bebidas:",
    tipDrinksText: "Prueba chicha morada (sin alcohol) y pisco sour (con alcohol).",

    historyTitle: "Historia por Rango de Años",
    historyTagline: "Selecciona un periodo para explorar.",
    chooseRange: "Elige un rango",
    yearRangeLabel: "Rango de años",
    selectRange: "Selecciona un rango...",
    historyHint: "Selecciona un rango para mostrar la línea de tiempo.",
    showingTimeline: "Mostrando línea de tiempo para {range}.",
    historyRanges: {
      "1200-1532": "1200–1532 (Expansión Inca)",
      "1532-1821": "1532–1821 (Periodo Colonial)",
      "1821-1900": "1821–1900 (República Temprana)",
      "1900-2000": "1900–2000 (Modernización)",
      "2000-present": "2000–Presente (Perú Contemporáneo)"
    },

    contactTitle: "Contacto",
    contactTagline: "Envíame tus preguntas o ideas de viaje.",
    contactFormTitle: "Formulario de Contacto",
    contactFormDesc: "Tu borrador se guarda automáticamente mientras escribes.",
    nameLabel: "Nombre",
    emailLabel: "Correo",
    tripTypeLegend: "Tipo de viaje",
    tripFamily: "Familia",
    tripSolo: "Solo",
    tripCouple: "Pareja",
    interestsLegend: "Intereses",
    interestFood: "Comida",
    interestHistory: "Historia",
    interestNature: "Naturaleza",
    messageLabel: "Mensaje",
    sendBtn: "Enviar",
    clearDraftBtn: "Borrar borrador",

    refsTitle: "Referencias",
    refsTagline: "Fuentes de imágenes e información usadas en este sitio.",
    refsImages: "Imágenes",
    refsInfo: "Información",
    refsBack: "Volver al inicio",
    refsInfo1: "Regiones de viaje (Costa/Sierra/Selva): Resumen del estudiante.",
    refsInfo2: "Resumen de historia: Escrito por Armando (resumen del estudiante).",
    refsInfo3: "Descripciones de comida y lugares: Escrito por Armando (resumen del estudiante).",
    refsTip: "Consejo: Si usaste datos de sitios web, agrega aquí los enlaces (referencias más fuertes)."
  },

  fr: {
    siteTitle: "Guide de Voyage du Pérou",
    badgePeru: "Pérou",
    badgeTime: "Temps",
    badgeSources: "Sources",
    langLabel: "Langue",

    navHome: "Accueil",
    navPlaces: "Lieux",
    navFood: "Cuisine",
    navHistory: "Histoire",
    navContact: "Contact",
    navReferences: "Références",

    lastMod: "Dernière modification :",

    favoritesSaved: "Favoris enregistrés : {n}",
    noDataTitle: "Aucune donnée",
    noDataText: "Aucune entrée trouvée pour cette sélection.",
    jsNeededGeneric: "Cette page nécessite JavaScript pour afficher le contenu dynamique.",
    jsNeededPlaces: "Cette page nécessite JavaScript pour afficher la liste des lieux.",
    jsNeededFood: "Cette page nécessite JavaScript pour afficher la liste de la cuisine.",
    jsNeededHistory: "Cette page nécessite JavaScript pour afficher la chronologie.",

    favOn: "★ Favori",
    favOff: "☆ Ajouter aux favoris",

    homeTagline: "Découvrez des lieux, la cuisine et l’histoire du Pérou.",
    exploreTitle: "Explorez le Pérou",
    exploreDesc: "Découvrez des lieux, la cuisine et l’histoire. Enregistrez vos favoris et planifiez votre voyage.",
    quickPicksTitle: "Sélection Rapide",
    quickPicksDesc: "Utilisez les filtres pour prévisualiser les lieux et la cuisine.",
    filterAll: "Tout",
    filterPlaces: "Lieux",
    filterFoods: "Cuisine",

    placesTitle: "Lieux à Visiter",
    placesTagline: "Filtrez par région et enregistrez vos favoris.",
    placesTop: "Meilleurs Lieux",
    placesIntro: "Utilisez les filtres pour explorer les trois régions naturelles du Pérou : Costa, Sierra et Selva.",
    allRegions: "Toutes les régions",
    costa: "Costa",
    sierra: "Sierra",
    selva: "Selva",
    placesEmpty: "Aucun lieu trouvé pour cette région.",

    planningNotes: "Notes de planification",
    noteLimaKey: "Lima :",
    noteLimaText: "Excellente cuisine, musées et vues sur l’océan.",
    noteCuscoKey: "Cusco & Vallée Sacrée :",
    noteCuscoText: "Altitude—hydratez-vous et prévoyez l’acclimatation.",
    noteArequipaKey: "Arequipa :",
    noteArequipaText: "Belle “ville blanche” avec accès au canyon de Colca.",
    noteMachuKey: "Machu Picchu :",
    noteMachuText: "Réservez tôt et voyagez léger.",

    foodsTitle: "Cuisine Péruvienne",
    foodsTagline: "Découvrez plats et boissons.",
    foodsSectionTitle: "Plats et Boissons",
    foodsSectionDesc: "Filtrez par type et enregistrez vos favoris.",
    foodsEmpty: "Aucun élément trouvé pour ce filtre.",
    foodFilterAll: "Tout",
    foodFilterMain: "Plat",
    foodFilterDrink: "Boisson",

    foodTipsTitle: "Conseils",
    tipCevicheKey: "Ceviche :",
    tipCevicheText: "Meilleur frais—essayez-le près de la côte.",
    tipSpiceKey: "Niveau d’épices :",
    tipSpiceText: "Demandez “¿Picante?” si vous voulez moins de piment.",
    tipDrinksKey: "Boissons :",
    tipDrinksText: "Essayez la chicha morada (sans alcool) et le pisco sour (alcoolisé).",

    historyTitle: "Histoire par Période",
    historyTagline: "Sélectionnez une période à explorer.",
    chooseRange: "Choisir une période",
    yearRangeLabel: "Période",
    selectRange: "Choisissez une période...",
    historyHint: "Choisissez une période pour afficher la chronologie.",
    showingTimeline: "Chronologie affichée pour {range}.",
    historyRanges: {
      "1200-1532": "1200–1532 (Expansion inca)",
      "1532-1821": "1532–1821 (Période coloniale)",
      "1821-1900": "1821–1900 (Début de la république)",
      "1900-2000": "1900–2000 (Modernisation)",
      "2000-present": "2000–Aujourd’hui (Pérou contemporain)"
    },

    contactTitle: "Contact",
    contactTagline: "Envoyez-moi vos questions ou idées de voyage.",
    contactFormTitle: "Formulaire de Contact",
    contactFormDesc: "Votre brouillon s’enregistre automatiquement pendant que vous écrivez.",
    nameLabel: "Nom",
    emailLabel: "Email",
    tripTypeLegend: "Type de voyage",
    tripFamily: "Famille",
    tripSolo: "Solo",
    tripCouple: "Couple",
    interestsLegend: "Centres d’intérêt",
    interestFood: "Cuisine",
    interestHistory: "Histoire",
    interestNature: "Nature",
    messageLabel: "Message",
    sendBtn: "Envoyer",
    clearDraftBtn: "Effacer le brouillon",

    refsTitle: "Références",
    refsTagline: "Sources des images et informations utilisées sur ce site.",
    refsImages: "Images",
    refsInfo: "Informations",
    refsBack: "Retour à l’accueil",
    refsInfo1: "Régions de voyage (Costa/Sierra/Selva) : résumé de l’étudiant.",
    refsInfo2: "Chronologie d’histoire : rédigée par Armando (résumé de l’étudiant).",
    refsInfo3: "Descriptions cuisine/lieux : rédigées par Armando (résumé de l’étudiant).",
    refsTip: "Conseil : si vous avez utilisé des faits de sites web, ajoutez ici les liens (références plus solides)."
  }
};

function getIdioma() {
  const raw = localStorage.getItem(claveIdioma);
  if (raw && idiomasSoportados.includes(raw)) return raw;
  const nav = (navigator.language || "en").slice(0, 2).toLowerCase();
  return idiomasSoportados.includes(nav) ? nav : "en";
}

function setIdioma(lang) {
  const safe = idiomasSoportados.includes(lang) ? lang : "en";
  localStorage.setItem(claveIdioma, safe);
  aplicarIdioma(safe);
  renderizarTodo();
}

function t(key, vars = {}) {
  const lang = getIdioma();
  const dict = i18n[lang] || i18n.en;

  const parts = key.split(".");
  let val = dict;
  for (const p of parts) val = val?.[p];
  if (typeof val !== "string") return key;

  return val.replace(/\{(\w+)\}/g, (_, k) => (vars[k] ?? `{${k}}`));
}

function aplicarIdioma(lang) {
  document.documentElement.lang = lang;

  // data-i18n text nodes
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const k = el.getAttribute("data-i18n") || "";
    el.textContent = t(k);
  });

  // data-i18n-placeholder inputs/textareas
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const k = el.getAttribute("data-i18n-placeholder") || "";
    if (el instanceof HTMLInputElement || el instanceof HTMLTextAreaElement) {
      el.placeholder = t(k);
    }
  });

  // History select option labels
  const select = document.querySelector("#rangoHistoria");
  if (select) {
    const opt0 = select.querySelector('option[value=""]');
    if (opt0) opt0.textContent = t("selectRange");

    select.querySelectorAll("option[value]").forEach((opt) => {
      const v = opt.getAttribute("value");
      if (!v || v === "") return;
      const label = (i18n[lang]?.historyRanges?.[v]) || (i18n.en.historyRanges[v]) || opt.textContent;
      opt.textContent = label;
    });
  }

  // Sync language dropdown
  const langSelect = document.querySelector("#langSelect");
  if (langSelect) langSelect.value = lang;

  // Also translate the page <title> if you want (optional):
  // document.title = `${t("siteTitle")} | ...`;
}

function initSelectorIdioma() {
  const langSelect = document.querySelector("#langSelect");
  if (!langSelect) return;
  langSelect.addEventListener("change", () => setIdioma(langSelect.value));
}

// ---------- Data (arrays of objects with translations) ----------
const lugares = [
  {
    id: "lima",
    region: "costa",
    dias: 2,
    imagen: "images/lima.webp",
    alt: {
      en: "Oceanfront view in Lima with coastal cliffs.",
      es: "Vista del océano en Lima con acantilados costeros.",
      fr: "Vue sur l’océan à Lima avec falaises côtières."
    },
    titulo: { en: "Lima (Coast)", es: "Lima (Costa)", fr: "Lima (Côte)" },
    descripcion: {
      en: "Capital city with amazing food, museums, and ocean views in Miraflores and Barranco.",
      es: "Capital con comida increíble, museos y vistas al mar en Miraflores y Barranco.",
      fr: "Capitale avec une cuisine incroyable, des musées et des vues sur l’océan à Miraflores et Barranco."
    }
  },
  {
    id: "cusco",
    region: "sierra",
    dias: 3,
    imagen: "images/cusco.webp",
    alt: {
      en: "Historic streets and stone walls in Cusco.",
      es: "Calles históricas y muros de piedra en Cusco.",
      fr: "Rues historiques et murs de pierre à Cusco."
    },
    titulo: {
      en: "Cusco & Sacred Valley (Highlands)",
      es: "Cusco y Valle Sagrado (Sierra)",
      fr: "Cusco et Vallée Sacrée (Hauts plateaux)"
    },
    descripcion: {
      en: "Gateway to Inca history, mountain views, and traditional markets. Plan time to acclimate.",
      es: "Puerta a la historia inca, vistas de montañas y mercados tradicionales. Planifica tiempo para aclimatarte.",
      fr: "Accès à l’histoire inca, vues de montagnes et marchés traditionnels. Prévoyez du temps pour l’acclimatation."
    }
  },
  {
    id: "machu",
    region: "sierra",
    dias: 1,
    imagen: "images/machu-picchu.webp",
    alt: {
      en: "Machu Picchu ruins with mountains in the background.",
      es: "Ruinas de Machu Picchu con montañas al fondo.",
      fr: "Ruines du Machu Picchu avec montagnes en arrière-plan."
    },
    titulo: { en: "Machu Picchu (Highlands)", es: "Machu Picchu (Sierra)", fr: "Machu Picchu (Hauts plateaux)" },
    descripcion: {
      en: "World-famous Inca citadel. Book tickets early and check entry time slots.",
      es: "Ciudadela inca famosa en el mundo. Reserva temprano y revisa los horarios de ingreso.",
      fr: "Citadelle inca mondialement connue. Réservez tôt et vérifiez les créneaux d’entrée."
    }
  },
  {
    id: "arequipa",
    region: "sierra",
    dias: 2,
    imagen: "images/arequipa.webp",
    alt: {
      en: "A plaza in Arequipa with mountains nearby.",
      es: "Una plaza en Arequipa con montañas cerca.",
      fr: "Une place à Arequipa avec montagnes à proximité."
    },
    titulo: { en: "Arequipa (Highlands)", es: "Arequipa (Sierra)", fr: "Arequipa (Hauts plateaux)" },
    descripcion: {
      en: "The “white city” with colonial architecture and access to Colca Canyon.",
      es: "La “ciudad blanca” con arquitectura colonial y acceso al Cañón del Colca.",
      fr: "La “ville blanche” avec architecture coloniale et accès au canyon de Colca."
    }
  }
];

const comidas = [
  {
    id: "ceviche",
    tipo: "main",
    imagen: "images/ceviche.webp",
    alt: {
      en: "Plate of ceviche with onions and citrus.",
      es: "Plato de ceviche con cebolla y cítricos.",
      fr: "Assiette de ceviche avec oignons et agrumes."
    },
    titulo: { en: "Ceviche", es: "Ceviche", fr: "Ceviche" },
    descripcion: {
      en: "Fresh fish cured in citrus with onions and chili. A classic coastal dish.",
      es: "Pescado fresco curado en cítricos con cebolla y ají. Clásico de la costa.",
      fr: "Poisson frais mariné aux agrumes avec oignons et piment. Un classique de la côte."
    }
  },
  {
    id: "lomo",
    tipo: "main",
    imagen: "images/lomo-saltado.webp",
    alt: {
      en: "Lomo saltado served with fries.",
      es: "Lomo saltado servido con papas fritas.",
      fr: "Lomo saltado servi avec frites."
    },
    titulo: { en: "Lomo Saltado", es: "Lomo Saltado", fr: "Lomo Saltado" },
    descripcion: {
      en: "Stir-fried beef with onions and tomatoes, often served with fries and rice.",
      es: "Carne salteada con cebolla y tomate, normalmente con papas fritas y arroz.",
      fr: "Bœuf sauté avec oignons et tomates, souvent servi avec frites et riz."
    }
  },
  {
    id: "aji",
    tipo: "main",
    imagen: "images/aji-gallina.webp",
    alt: {
      en: "Ají de gallina plated with rice.",
      es: "Ají de gallina servido con arroz.",
      fr: "Ají de gallina servi avec riz."
    },
    titulo: { en: "Ají de Gallina", es: "Ají de Gallina", fr: "Ají de Gallina" },
    descripcion: {
      en: "Creamy chicken dish with ají pepper sauce served over potatoes or rice.",
      es: "Plato cremoso de pollo con salsa de ají, servido con papa o arroz.",
      fr: "Plat crémeux de poulet avec sauce au piment ají, servi avec pommes de terre ou riz."
    }
  },
  {
    id: "chicha",
    tipo: "drink",
    imagen: "images/chicha-morada.webp",
    alt: {
      en: "Glass of a purple drink representing chicha morada.",
      es: "Vaso de bebida morada representando chicha morada.",
      fr: "Verre de boisson violette représentant la chicha morada."
    },
    titulo: { en: "Chicha Morada", es: "Chicha Morada", fr: "Chicha Morada" },
    descripcion: {
      en: "A sweet purple corn drink flavored with fruits and spices. Very popular.",
      es: "Bebida dulce de maíz morado con frutas y especias. Muy popular.",
      fr: "Boisson sucrée au maïs violet avec fruits et épices. Très populaire."
    }
  }
];

// History ranges stored in an object keyed by range
const historiaPorRango = {
  "1200-1532": [
    {
      titulo: { en: "Inca expansion", es: "Expansión inca", fr: "Expansion inca" },
      texto: {
        en: "The Inca state grew in the Andes, connecting regions with roads and administrative centers.",
        es: "El Estado inca creció en los Andes, conectando regiones con caminos y centros administrativos.",
        fr: "L’État inca s’est développé dans les Andes, reliant les régions par des routes et centres administratifs."
      }
    },
    {
      titulo: { en: "Cusco as a capital", es: "Cusco como capital", fr: "Cusco comme capitale" },
      texto: {
        en: "Cusco became a political and spiritual center with impressive stone architecture.",
        es: "Cusco se convirtió en un centro político y espiritual con impresionante arquitectura de piedra.",
        fr: "Cusco est devenu un centre politique et spirituel avec une architecture de pierre impressionnante."
      }
    }
  ],
  "1532-1821": [
    {
      titulo: { en: "Spanish conquest begins", es: "Inicio de la conquista española", fr: "Début de la conquête espagnole" },
      texto: {
        en: "Spanish forces arrived and the political structure changed dramatically.",
        es: "Llegaron fuerzas españolas y la estructura política cambió drásticamente.",
        fr: "Les forces espagnoles sont arrivées et la structure politique a changé radicalement."
      }
    },
    {
      titulo: { en: "Colonial society", es: "Sociedad colonial", fr: "Société coloniale" },
      texto: {
        en: "New institutions, languages, and religious practices shaped daily life for centuries.",
        es: "Nuevas instituciones, lenguas y prácticas religiosas moldearon la vida diaria por siglos.",
        fr: "De nouvelles institutions, langues et pratiques religieuses ont façonné la vie quotidienne pendant des siècles."
      }
    }
  ],
  "1821-1900": [
    {
      titulo: { en: "Independence", es: "Independencia", fr: "Indépendance" },
      texto: {
        en: "Peru declared independence in 1821 and formed a new republican identity.",
        es: "El Perú declaró su independencia en 1821 y formó una nueva identidad republicana.",
        fr: "Le Pérou a déclaré son indépendance en 1821 et a formé une nouvelle identité républicaine."
      }
    },
    {
      titulo: { en: "Nation building", es: "Construcción de nación", fr: "Construction nationale" },
      texto: {
        en: "Economic development and internal challenges shaped the 19th century.",
        es: "El desarrollo económico y retos internos marcaron el siglo XIX.",
        fr: "Le développement économique et les défis internes ont marqué le XIXe siècle."
      }
    }
  ],
  "1900-2000": [
    {
      titulo: { en: "Modernization", es: "Modernización", fr: "Modernisation" },
      texto: {
        en: "Urban growth, education changes, and infrastructure expanded across the country.",
        es: "Crecimiento urbano, cambios en educación e infraestructura se expandieron en el país.",
        fr: "Croissance urbaine, changements éducatifs et infrastructures se sont développés dans tout le pays."
      }
    },
    {
      titulo: { en: "Cultural influence", es: "Influencia cultural", fr: "Influence culturelle" },
      texto: {
        en: "Music, cuisine, and literature gained broader recognition.",
        es: "La música, la cocina y la literatura ganaron mayor reconocimiento.",
        fr: "La musique, la cuisine et la littérature ont gagné en reconnaissance."
      }
    }
  ],
  "2000-present": [
    {
      titulo: { en: "Tourism & global connection", es: "Turismo y conexión global", fr: "Tourisme et connexion mondiale" },
      texto: {
        en: "Peru became a major travel destination with global attention to food and heritage.",
        es: "El Perú se volvió un gran destino turístico con atención global a su comida y patrimonio.",
        fr: "Le Pérou est devenu une destination majeure avec une attention mondiale sur sa cuisine et son patrimoine."
      }
    },
    {
      titulo: { en: "Contemporary culture", es: "Cultura contemporánea", fr: "Culture contemporaine" },
      texto: {
        en: "Modern Peru blends tradition with innovation in arts, business, and travel experiences.",
        es: "El Perú moderno mezcla tradición e innovación en artes, negocios y experiencias de viaje.",
        fr: "Le Pérou moderne mélange tradition et innovation dans les arts, les affaires et les voyages."
      }
    }
  ]
};

// ---------- localStorage helpers ----------
const claveFavoritos = "favoritosPeruW06";

function cargarFavoritos() {
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
  const favoritos = cargarFavoritos();
  const existe = favoritos.includes(id);
  const nuevos = existe ? favoritos.filter((x) => x !== id) : [...favoritos, id];
  guardarFavoritos(nuevos);
  return nuevos;
}

// ---------- Rendering helpers ----------
function pickLangValue(obj) {
  const lang = getIdioma();
  if (obj && typeof obj === "object" && obj[lang]) return obj[lang];
  if (obj && typeof obj === "object" && obj.en) return obj.en;
  return `${obj ?? ""}`;
}

function crearTarjeta(item, categoria, favoritos) {
  const esFavorito = favoritos.includes(item.id);
  const textoBoton = esFavorito ? t("favOn") : t("favOff");

  const titulo = pickLangValue(item.titulo);
  const descripcion = pickLangValue(item.descripcion);
  const alt = pickLangValue(item.alt);

  return `
    <article class="tarjeta" data-categoria="${categoria}">
      <h3>${titulo}</h3>
      <p>${descripcion}</p>
      <img src="${item.imagen}" loading="lazy" alt="${alt}">
      <div class="actions">
        <button class="btn ghost" type="button" data-fav-id="${item.id}">
          ${textoBoton}
        </button>
      </div>
    </article>
  `;
}

function actualizarEstadoFavoritos(n) {
  const estado =
    document.querySelector("#estadoFavoritos") ??
    document.querySelector("#estadoFavoritosPlaces") ??
    document.querySelector("#estadoFavoritosFood");
  if (estado) estado.textContent = t("favoritesSaved", { n });
}

function renderizarTarjetasInicio(filtro) {
  const contenedor = document.querySelector("#contenedorTarjetas");
  const mensajeVacio = document.querySelector("#mensajeVacio");
  if (!contenedor) return;

  const favoritos = cargarFavoritos();

  const listaMixta = [
    ...lugares.slice(0, 2).map((x) => ({ ...x, categoria: "places" })),
    ...comidas.slice(0, 2).map((x) => ({ ...x, categoria: "foods" }))
  ];

  const listaFiltrada = filtro === "all"
    ? listaMixta
    : listaMixta.filter((x) => x.categoria === filtro);

  const html = listaFiltrada.map((item) => crearTarjeta(item, item.categoria, favoritos)).join("");
  contenedor.innerHTML = `${html}`;

  if (mensajeVacio) mensajeVacio.textContent = listaFiltrada.length ? "" : t("noDataText");
  actualizarEstadoFavoritos(favoritos.length);
}

function renderizarLugares(region) {
  const contenedor = document.querySelector("#contenedorLugares");
  const mensajeVacio = document.querySelector("#mensajeVacioLugares");
  if (!contenedor) return;

  const favoritos = cargarFavoritos();
  const listaFiltrada = region === "all" ? lugares : lugares.filter((l) => l.region === region);

  const html = listaFiltrada.map((l) => crearTarjeta(l, "places", favoritos)).join("");
  contenedor.innerHTML = `${html}`;

  const hayResultados = listaFiltrada.length > 0;
  if (mensajeVacio) {
    mensajeVacio.textContent = t("placesEmpty");
    mensajeVacio.classList.toggle("hidden", hayResultados);
  }

  actualizarEstadoFavoritos(favoritos.length);
}

function renderizarComidas(tipo) {
  const contenedor = document.querySelector("#contenedorComidas");
  const mensajeVacio = document.querySelector("#mensajeVacioComidas");
  if (!contenedor) return;

  const favoritos = cargarFavoritos();
  const listaFiltrada = tipo === "all" ? comidas : comidas.filter((c) => c.tipo === tipo);

  const html = listaFiltrada.map((c) => crearTarjeta(c, "foods", favoritos)).join("");
  contenedor.innerHTML = `${html}`;

  const hayResultados = listaFiltrada.length > 0;
  if (mensajeVacio) {
    mensajeVacio.textContent = t("foodsEmpty");
    mensajeVacio.classList.toggle("hidden", hayResultados);
  }

  actualizarEstadoFavoritos(favoritos.length);
}

function renderizarHistoria(rango) {
  const contenedor = document.querySelector("#contenedorHistoria");
  const mensaje = document.querySelector("#mensajeHistoria");
  if (!contenedor || !mensaje) return;

  if (!rango) {
    mensaje.textContent = t("historyHint");
    contenedor.innerHTML = ``;
    return;
  }

  const eventos = historiaPorRango[rango] ?? [];

  const html = eventos.length
    ? eventos.map((e) => `
        <article class="tarjeta">
          <h3>${pickLangValue(e.titulo)}</h3>
          <p>${pickLangValue(e.texto)}</p>
        </article>
      `).join("")
    : `
        <article class="tarjeta">
          <h3>${t("noDataTitle")}</h3>
          <p>${t("noDataText")}</p>
        </article>
      `;

  mensaje.textContent = t("showingTimeline", { range: rango });
  contenedor.innerHTML = `${html}`;
}

// ---------- Event wiring ----------
function configurarInicio() {
  const chips = document.querySelectorAll("[data-filter]");
  const contenedor = document.querySelector("#contenedorTarjetas");
  if (chips.length === 0 || !contenedor) return;

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
  document.addEventListener("click", (e) => {
    const target = e.target;
    if (!(target instanceof HTMLElement)) return;

    const btn = target.closest("[data-fav-id]");
    if (!btn) return;

    const id = btn.getAttribute("data-fav-id") ?? "";
    const favoritos = alternarFavorito(id);

    const esFavorito = favoritos.includes(id);
    btn.textContent = `${esFavorito ? t("favOn") : t("favOff")}`;

    actualizarEstadoFavoritos(favoritos.length);
  });
}

function configurarHistoria() {
  const select = document.querySelector("#rangoHistoria");
  if (!select) return;

  renderizarHistoria("");

  select.addEventListener("change", () => {
    renderizarHistoria(select.value);
  });
}

function renderizarTodo() {
  aplicarIdioma(getIdioma());

  // re-render pages if containers exist
  renderizarTarjetasInicio("all");
  renderizarLugares("all");
  renderizarComidas("all");

  const select = document.querySelector("#rangoHistoria");
  if (select) renderizarHistoria(select.value);

  // Translate the “empty” messages on load
  const msgPlaces = document.querySelector("#mensajeVacioLugares");
  if (msgPlaces) msgPlaces.textContent = t("placesEmpty");

  const msgFood = document.querySelector("#mensajeVacioComidas");
  if (msgFood) msgFood.textContent = t("foodsEmpty");

  const msgHistory = document.querySelector("#mensajeHistoria");
  if (msgHistory) msgHistory.textContent = t("historyHint");
}

// ---------- Initialize ----------
(function init() {
  const lang = getIdioma();
  aplicarIdioma(lang);
  initSelectorIdioma();

  configurarInicio();
  configurarLugares();
  configurarComidas();
  configurarFavoritosDelegado();
  configurarHistoria();

  renderizarTodo();
})();
