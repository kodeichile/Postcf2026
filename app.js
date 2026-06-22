const currency = new Intl.NumberFormat("es-CL", {
  style: "currency",
  currency: "CLP",
  maximumFractionDigits: 0
});

const decimal = new Intl.NumberFormat("es-CL", {
  maximumFractionDigits: 2
});

const config = window.APP_CONFIG;

const state = {
  role: "contributor",
  view: "summary",
  marketplaceQuery: "",
  marketplaceCategory: "Todos",
  marketplaceType: "Todos",
  marketplaceCondition: "Todos",
  marketplaceCommune: "Toda la región",
  marketplacePrice: "Todos",
  marketplaceSort: "Más relevantes",
  publishStep: 1,
  actionType: "",
  actionLabel: "",
  publishDraft: {
    intent: "fixed",
    category: "Computadores",
    brand: "",
    model: "",
    condition: "Operativo",
    faults: "",
    missingParts: "",
    commune: "Los Ángeles",
    price: "",
    auctionEnd: "",
    description: "",
    photoData: ""
  },
  deliveryRows: [
    { material: "Placa madre", weight: 2.5, quality: "Buena" }
  ]
};

const navByRole = {
  contributor: [
    ["summary", "Resumen", "R"],
    ["qr", "Mi QR", "Q"],
    ["deliveries", "Mis entregas", "E"],
    ["points", "Puntos de acopio", "P"],
    ["lots", "Mis lotes", "L"],
    ["traceability", "Trazabilidad", "T"]
  ],
  technician: [
    ["technician-summary", "Resumen", "R"],
    ["technician-profile", "Mi perfil", "P"],
    ["technician-requests", "Solicitudes", "S"],
    ["technician-metrics", "Métricas", "M"],
    ["technician-listings", "Equipos guardados", "E"],
    ["traceability", "Trazabilidad", "T"]
  ],
  operator: [
    ["operator-summary", "Resumen", "R"],
    ["delivery-form", "Registrar entrega", "E"],
    ["inventory", "Inventario", "I"],
    ["containers", "Contenedores", "C"],
    ["traceability", "Trazabilidad", "T"]
  ],
  buyer: [
    ["buyer-summary", "Resumen", "R"],
    ["available-lots", "Lotes disponibles", "L"],
    ["offers", "Mis ofertas", "O"],
    ["buyer-docs", "Documentos", "D"],
    ["traceability", "Trazabilidad", "T"]
  ],
  admin: [
    ["admin-summary", "Panel general", "P"],
    ["users", "Usuarios", "U"],
    ["moderation", "Publicaciones", "M"],
    ["admin-technicians", "Técnicos", "T"],
    ["promotions", "Destacados", "D"],
    ["disputes", "Reclamos", "R"],
    ["materials", "Materiales", "M"],
    ["admin-lots", "Lotes", "L"],
    ["payments", "Pagos", "$"],
    ["reports", "Reportes", "R"],
    ["audit", "Auditoría", "A"]
  ]
};

const titles = {
  summary: ["Panel del usuario", `Hola, ${config.demoUser.name.split(" ")[0]}`],
  qr: ["Identificación personal", "Mi código QR"],
  deliveries: ["Historial del usuario", "Mis entregas"],
  points: ["Red regional", "Puntos de acopio"],
  lots: ["Valor recuperado", "Mis lotes"],
  traceability: ["Seguimiento", "Trazabilidad"],
  "technician-summary": ["Técnico certificado", "Panel profesional"],
  "technician-profile": ["Directorio técnico", "Mi perfil profesional"],
  "technician-requests": ["Trabajo técnico", "Solicitudes recibidas"],
  "technician-metrics": ["Rendimiento", "Métricas del perfil"],
  "technician-listings": ["Oportunidades", "Equipos guardados"],
  "operator-summary": ["Punto de acopio", "Turno de hoy"],
  "delivery-form": ["Recepción", "Registrar entrega"],
  inventory: ["Punto de acopio", "Inventario"],
  containers: ["Control físico", "Contenedores"],
  "buyer-summary": ["Comprador verificado", "Panel de comprador"],
  "available-lots": ["Mercado de materiales", "Lotes disponibles"],
  offers: ["Operaciones", "Mis ofertas"],
  "buyer-docs": ["Verificación", "Documentos"],
  "admin-summary": ["Administración", "Panel general"],
  moderation: ["Confianza y seguridad", "Moderación de publicaciones"],
  "admin-technicians": ["Verificación", "Técnicos y reparadores"],
  promotions: ["Monetización", "Publicaciones destacadas"],
  disputes: ["Confianza y seguridad", "Reclamos y devoluciones"],
  users: ["Administración", "Usuarios"],
  materials: ["Configuración", "Materiales"],
  "admin-lots": ["Administración", "Lotes"],
  payments: ["Administración", "Pagos"],
  reports: ["Administración", "Reportes"],
  audit: ["Control interno", "Auditoría"]
};

const collectionPoints = [
  {
    name: "Punto Los Ángeles Centro",
    commune: "Los Ángeles",
    address: "Colón 421",
    status: "Activo",
    distance: "1,2 km",
    hours: "09:00 a 17:30",
    materials: "Placas, RAM, cables"
  },
  {
    name: "Punto Concepción",
    commune: "Concepción",
    address: "Barros Arana 855",
    status: "Saturado",
    distance: "128 km",
    hours: "10:00 a 18:00",
    materials: "Computadores, placas"
  },
  {
    name: "Punto Talcahuano",
    commune: "Talcahuano",
    address: "Av. Colón 3000",
    status: "Activo",
    distance: "135 km",
    hours: "08:30 a 16:30",
    materials: "Cables, aluminio"
  },
  {
    name: "Punto móvil Biobío",
    commune: "Coronel",
    address: "Ruta programada",
    status: "Próxima apertura",
    distance: "142 km",
    hours: "Sábado 10:00",
    materials: "Equipos pequeños"
  }
];

const lots = [
  {
    code: "Lote Biobío PCB-001",
    status: "Publicado",
    weight: 228.4,
    value: 1850000,
    material: "Placas mixtas",
    offer: 1750000
  },
  {
    code: "RAM-BIO-002",
    status: "En acumulación",
    weight: 18.2,
    value: 420000,
    material: "Memorias RAM",
    offer: 0
  },
  {
    code: "CU-BIO-003",
    status: "Adjudicado",
    weight: 96.5,
    value: 510000,
    material: "Cable de cobre",
    offer: 498000
  }
];

const traceEvents = [
  ["15 de junio de 2026", "Entrega recibida", "Punto Los Ángeles Centro registró 3,25 kg de placas y cables."],
  ["15 de junio de 2026", "Clasificación pendiente", "El material quedó asignado al contenedor CTR-LA-014."],
  ["13 de junio de 2026", "Lote publicado", "Tu aporte de RAM forma parte del lote RAM-BIO-002."],
  ["10 de junio de 2026", "Saldo disponible", "Pago confirmado para distribución del lote CU-BIO-003."]
];

function normalizeText(value) {
  return String(value || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function publicMatches(item) {
  const query = normalizeText(state.marketplaceQuery);
  const categoryOk = state.marketplaceCategory === "Todos" || item.category === state.marketplaceCategory;
  const typeOk = state.marketplaceType === "Todos"
    || (state.marketplaceType === "Subastas" && item.auction)
    || (state.marketplaceType === "Productos oficiales" && item.type === "official")
    || (state.marketplaceType === "Productos de usuarios" && item.type === "user")
    || (state.marketplaceType === "Venta directa" && item.type === "user");
  const conditionOk = state.marketplaceCondition === "Todos" || item.condition === state.marketplaceCondition;
  const communeOk = state.marketplaceCommune === "Toda la región" || item.commune === state.marketplaceCommune;
  const price = Number(item.price || item.currentPrice || 0);
  const priceOk = state.marketplacePrice === "Todos"
    || (state.marketplacePrice === "Hasta $20.000" && price <= 20000)
    || (state.marketplacePrice === "$20.000 a $50.000" && price >= 20000 && price <= 50000)
    || (state.marketplacePrice === "$50.000 a $100.000" && price >= 50000 && price <= 100000)
    || (state.marketplacePrice === "$100.000 a $300.000" && price >= 100000 && price <= 300000)
    || (state.marketplacePrice === "Más de $300.000" && price > 300000);
  const haystack = normalizeText([
    item.title,
    item.brand,
    item.model,
    item.category,
    item.condition,
    item.specs,
    item.commune
  ].join(" "));
  return categoryOk && typeOk && conditionOk && communeOk && priceOk && (!query || haystack.includes(query));
}

function slugify(value) {
  return normalizeText(value).replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function readMarketplaceUrl() {
  const params = new URLSearchParams(window.location.search);
  state.marketplaceQuery = params.get("q") || "";
  const categorySlug = params.get("categoria");
  const category = config.marketplace.categories.find(item => slugify(item) === categorySlug);
  state.marketplaceCategory = category || "Todos";
  state.marketplaceType = params.get("tipo") || "Todos";
  state.marketplaceCondition = params.get("estado") || "Todos";
  state.marketplaceCommune = params.get("comuna") || "Toda la región";
  state.marketplacePrice = params.get("precio") || "Todos";
  state.marketplaceSort = params.get("orden") || "Más relevantes";
}

function syncMarketplaceUrl() {
  const params = new URLSearchParams();
  if (state.marketplaceQuery) params.set("q", state.marketplaceQuery);
  if (state.marketplaceCategory !== "Todos") params.set("categoria", slugify(state.marketplaceCategory));
  if (state.marketplaceType !== "Todos") params.set("tipo", state.marketplaceType);
  if (state.marketplaceCondition !== "Todos") params.set("estado", state.marketplaceCondition);
  if (state.marketplaceCommune !== "Toda la región") params.set("comuna", state.marketplaceCommune);
  if (state.marketplacePrice !== "Todos") params.set("precio", state.marketplacePrice);
  if (state.marketplaceSort !== "Más relevantes") params.set("orden", state.marketplaceSort);
  const query = params.toString();
  const nextUrl = `${window.location.pathname}${query ? `?${query}` : ""}${window.location.hash}`;
  window.history.replaceState({}, "", nextUrl);
}

function sortMarketplaceItems(items) {
  const copy = [...items];
  if (state.marketplaceSort === "Menor precio") {
    copy.sort((a, b) => Number(a.price || a.currentPrice || 0) - Number(b.price || b.currentPrice || 0));
  }
  if (state.marketplaceSort === "Mayor precio") {
    copy.sort((a, b) => Number(b.price || b.currentPrice || 0) - Number(a.price || a.currentPrice || 0));
  }
  if (state.marketplaceSort === "Más ofertados") {
    copy.sort((a, b) => Number(b.bidCount || 0) - Number(a.bidCount || 0));
  }
  return copy;
}

function renderPublicHome() {
  const publicRoot = document.getElementById("publicRoot");
  if (!publicRoot) return;
  const officialProducts = sortMarketplaceItems(config.marketplace.listings.filter(item => item.type === "official" && publicMatches(item)));
  const recentProducts = sortMarketplaceItems(config.marketplace.listings.filter(item => item.type === "user" && publicMatches(item)));
  const auctions = sortMarketplaceItems(config.marketplace.auctions.map(item => ({ ...item, auction: true })).filter(publicMatches));
  const technicians = config.marketplace.technicians.filter(tech => {
    if (state.marketplaceType !== "Todos" && state.marketplaceType !== "Técnicos certificados") return false;
    if (state.marketplaceCommune !== "Toda la región" && tech.commune !== state.marketplaceCommune) return false;
    if (state.marketplaceCategory !== "Todos" && !normalizeText(tech.specialty).includes(normalizeText(state.marketplaceCategory))) return false;
    const query = normalizeText(state.marketplaceQuery);
    const haystack = normalizeText(`${tech.name} ${tech.specialty} ${tech.commune} ${tech.coverage}`);
    return !query || haystack.includes(query);
  });

  publicRoot.innerHTML = `
    <section class="market-hero">
      <div>
        <p class="eyebrow">Marketplace de recuperación electrónica</p>
        <h1>Tecnología que vuelve a tener valor</h1>
        <p>Compra, vende, subasta, repara o recupera equipos electrónicos de manera segura y trazable.</p>
        <form class="search-panel" id="marketSearch">
          <input id="marketQuery" type="search" value="${state.marketplaceQuery}" placeholder="¿Qué equipo o servicio estás buscando?" aria-label="Buscar productos, repuestos o técnicos" />
          <button class="button primary" type="submit">Buscar</button>
          <div class="suggestion-list">
            ${["Notebook Lenovo", "iPhone pantalla rota", "Técnico impresoras", "RAM DDR4", "Tarjeta gráfica"].map(term => `<button type="button" data-search-suggestion="${term}">${term}</button>`).join("")}
          </div>
        </form>
      </div>
      <article class="hero-market-card">
        <div class="hero-product-preview">
          <img src="./assets/product-laptop.png" alt="Notebook reacondicionado en mesa limpia" />
        </div>
        <div>
          <div class="tag-row">${["Producto oficial", "Revisado", "Garantía"].map(tag => statusPill(tag)).join("")}</div>
          <h2>Equipos recuperados y revisados</h2>
          <p class="muted">Productos provenientes de empresas e instituciones, inspeccionados antes de volver al mercado.</p>
        </div>
      </article>
    </section>

    <section class="market-section" id="categorias">
      <div class="section-heading">
        <div><h2>Categorías</h2><p>Filtra por tipo de equipo o componente.</p></div>
        <button class="button tertiary" data-category-filter="Todos">Ver todo</button>
      </div>
      <div class="category-strip">
        ${["Todos", ...config.marketplace.categories].map(category => `
          <button class="category-chip ${state.marketplaceCategory === category ? "active" : ""}" data-category-filter="${category}">
            <strong>${category}</strong>
            <span class="small muted">${category === "Todos" ? "Productos y técnicos" : "Explorar"}</span>
          </button>
        `).join("")}
      </div>
    </section>

    <section class="market-section">
      <div class="quick-market-actions">
        ${marketQuickAction("Vender un equipo", "Publica con precio fijo o negociable.", "fixed")}
        ${marketQuickAction("Subastar un producto", "Crea una subasta con precio inicial.", "auction")}
        <button class="quick-action" data-filter-technicians><strong>Encontrar un técnico</strong><span>Solicita diagnóstico o reparación.</span></button>
        ${marketQuickAction("Solicitar retiro", "Entrega equipos para reciclaje.", "recycle")}
      </div>
    </section>

    <section class="market-layout">
      <aside class="filter-sidebar card">
        <div class="filter-group">
          <h3>Tipo de publicación</h3>
          ${filterSelect("marketplaceType", ["Todos", "Venta directa", "Subastas", "Productos oficiales", "Productos de usuarios", "Técnicos certificados"], state.marketplaceType)}
        </div>
        <div class="filter-group">
          <h3>Estado</h3>
          ${filterSelect("marketplaceCondition", ["Todos", "Reacondicionado", "Funcional con detalles", "Reparable", "No enciende", "Para repuestos", "Sin probar", "Usado", "Grado B"], state.marketplaceCondition)}
        </div>
        <div class="filter-group">
          <h3>Ubicación</h3>
          ${filterSelect("marketplaceCommune", ["Toda la región", ...config.communes], state.marketplaceCommune)}
        </div>
        <div class="filter-group">
          <h3>Precio</h3>
          ${filterSelect("marketplacePrice", ["Todos", "Hasta $20.000", "$20.000 a $50.000", "$50.000 a $100.000", "$100.000 a $300.000", "Más de $300.000"], state.marketplacePrice)}
        </div>
        <div class="filter-group">
          <h3>Ordenar</h3>
          ${filterSelect("marketplaceSort", ["Más relevantes", "Menor precio", "Mayor precio", "Más ofertados"], state.marketplaceSort)}
        </div>
        <button class="button secondary" data-action="clear-market-filters">Limpiar filtros</button>
      </aside>

      <div class="view">
        ${marketSection("subastas", "Subastas activas", "Encuentra equipos funcionales, reparables y componentes con oportunidades de precio.", auctions.map(auctionCard), "No existen subastas activas con estos filtros.")}
        ${marketSection("oficiales", "Equipos recuperados y revisados", "Productos de empresas e instituciones, inspeccionados antes de volver al mercado.", officialProducts.map(productCard), "No encontramos productos oficiales con estos filtros.")}
        ${marketSection("recientes", "Publicados recientemente", "Productos de usuarios: equipos funcionales, dañados, componentes y repuestos.", recentProducts.map(productCard), "No encontramos productos publicados por usuarios.")}
        ${marketSection("tecnicos", "Técnicos certificados", "Profesionales verificados para diagnóstico, reparación y recuperación.", technicians.map(technicianCard), "No encontramos técnicos certificados para esta búsqueda.")}
      </div>
    </section>

    <section class="market-section">
      <div class="section-heading">
        <div><h2>Cómo funciona</h2><p>Un flujo simple para recuperar valor antes de reciclar.</p></div>
      </div>
      <div class="steps-grid">
        ${stepCard("1", "Publica o busca", "Encuentra productos, subastas, técnicos o puntos de entrega.")}
        ${stepCard("2", "Coordina con seguridad", "Las acciones sensibles requieren cuenta y quedan registradas.")}
        ${stepCard("3", "Recupera valor", "Repara, vende, compra o entrega para valorización trazable.")}
      </div>
    </section>

    <section class="market-section">
      <div class="section-heading">
        <div><h2>Indicadores de impacto</h2><p>En producción estos datos deben venir del backend.</p></div>
      </div>
      <div class="impact-grid">
        ${config.marketplace.impact.map(item => stat(item.label, item.value, "Dato demo pendiente de backend")).join("")}
      </div>
    </section>

    <section class="market-section" id="recuperacion">
      <div class="cta-band">
        <div>
          <h2>¿Tienes un equipo detenido?</h2>
          <p>Publícalo, busca reparación o entrégalo para recuperación electrónica trazable.</p>
        </div>
        <div class="hero-actions">
          <button class="button secondary" data-action="publish-choice" data-publish-intent="fixed">Publicar un equipo</button>
          <button class="button secondary" data-action="publish-choice" data-publish-intent="recycle">Derivar a recuperación</button>
        </div>
      </div>
    </section>

    <footer class="market-footer">
      <span>Able · Plataforma demo</span>
      <span>Confianza · Trazabilidad · Economía circular</span>
    </footer>
  `;
}

function checkboxLine(label) {
  return `<label class="checkbox-line"><input type="checkbox" /> <span>${label}</span></label>`;
}

function filterSelect(key, options, selected) {
  return `
    <select data-market-filter="${key}" aria-label="Filtro ${key}">
      ${options.map(option => `<option value="${option}" ${option === selected ? "selected" : ""}>${option}</option>`).join("")}
    </select>
  `;
}

function marketQuickAction(title, text, intent) {
  return `<button class="quick-action" data-action="publish-choice" data-publish-intent="${intent}"><strong>${title}</strong><span>${text}</span></button>`;
}

function marketSection(id, title, subtitle, cards, emptyText) {
  return `
    <section class="market-section" id="${id}">
      <div class="section-heading">
        <div><h2>${title}</h2><p>${subtitle}</p></div>
        <button class="button tertiary" data-action="show-toast">Ver todos</button>
      </div>
      ${cards.length ? `<div class="market-grid">${cards.join("")}</div>` : `<div class="empty-state card"><div><h3>${emptyText}</h3><p>Prueba limpiando filtros o ampliando la búsqueda.</p></div></div>`}
    </section>
  `;
}

function productCard(item) {
  return `
    <article class="card product-card">
      <div class="product-image" style="background:${item.imageTone}">
        <img src="${item.image}" alt="${item.title}" loading="lazy" />
      </div>
      <div class="product-body">
        <div class="tag-row">${item.tags.slice(0, 3).map(tag => statusPill(tag)).join("")}</div>
        <div>
          <h3>${item.title}</h3>
          <p class="muted small">${item.condition} · ${item.specs}</p>
        </div>
        <strong class="price">${currency.format(item.price)}</strong>
        <p class="muted small">${item.commune} · ${item.delivery}</p>
        <div class="trust-row"><span>Condición declarada</span><span>${item.type === "official" ? "Inspección registrada" : "Historial visible"}</span></div>
        <div class="hero-actions">
          <button class="button primary" data-action="open-product" data-action-label="${item.title}">Ver producto</button>
          <button class="button secondary" data-action="show-toast">Guardar</button>
          <button class="button tertiary" data-action="show-toast">Reportar</button>
        </div>
      </div>
    </article>
  `;
}

function auctionCard(item) {
  return `
    <article class="card product-card">
      <div class="product-image" style="background:${item.imageTone}">
        <img src="${item.image}" alt="${item.title}" loading="lazy" />
      </div>
      <div class="product-body">
        <div class="tag-row">${item.tags.slice(0, 3).map(tag => statusPill(tag)).join("")}</div>
        <div>
          <h3>${item.title}</h3>
          <p class="muted small">${item.condition} · ${item.commune}</p>
        </div>
        <span class="auction-countdown">Finaliza en ${item.endsIn}</span>
        <div class="metric-row"><span>Oferta actual</span><strong>${currency.format(item.currentPrice)}</strong></div>
        <div class="metric-row"><span>Ofertas</span><strong>${item.bidCount}</strong></div>
        <div class="trust-row"><span>Condición declarada</span><span>Ofertas registradas</span></div>
        <button class="button primary" data-action="open-bid" data-action-label="${item.title}">Ofertar</button>
      </div>
    </article>
  `;
}

function technicianCard(tech) {
  return `
    <article class="card technician-card">
      <div class="technician-photo">
        <img src="${tech.image}" alt="${tech.name}" loading="lazy" />
      </div>
      <div class="brand">
        <span class="avatar-mark">${tech.name.split(" ").map(part => part[0]).slice(0, 2).join("")}</span>
        <div>
          <h3>${tech.name}</h3>
          <p class="muted small">${tech.specialty}</p>
        </div>
      </div>
      <div class="tag-row">${tech.tags.map(tag => statusPill(tag)).join("")}</div>
      <p class="muted small">${tech.coverage}</p>
      <div class="metric-row"><span>Calificación</span><strong>${tech.rating} de 5</strong></div>
      <div class="metric-row"><span>Trabajos</span><strong>${tech.jobs}</strong></div>
      <div class="metric-row"><span>Respuesta</span><strong>${tech.response}</strong></div>
      <button class="button primary" data-action="open-diagnosis" data-action-label="${tech.name}">Solicitar diagnóstico</button>
    </article>
  `;
}

function stepCard(number, title, text) {
  return `
    <article class="card">
      <span class="status-pill positive"><span class="dot"></span>Paso ${number}</span>
      <h3>${title}</h3>
      <p class="muted">${text}</p>
    </article>
  `;
}

function openPublish() {
  state.publishStep = 1;
  document.getElementById("publishModal").classList.remove("hidden");
  renderPublishStep();
}

function closePublish() {
  document.getElementById("publishModal").classList.add("hidden");
}

function openActionModal(type, label) {
  state.actionType = type;
  state.actionLabel = label;
  const modal = document.getElementById("actionModal");
  const title = document.getElementById("actionTitle");
  const content = document.getElementById("actionContent");
  const submit = document.getElementById("actionSubmit");

  if (type === "product") {
    title.textContent = "Coordinar compra o consulta";
    submit.textContent = "Enviar solicitud";
    content.innerHTML = `
      <p class="muted">${label}</p>
      <div class="form-grid">
        <label class="form-field"><span>Nombre</span><input required placeholder="Tu nombre" /></label>
        <label class="form-field"><span>Teléfono o correo</span><input required placeholder="Dato de contacto" /></label>
        <label class="form-field full"><span>Modalidad preferida</span><select><option>Retiro presencial</option><option>Despacho</option><option>Coordinar después</option></select></label>
        <label class="form-field full"><span>Mensaje</span><textarea rows="3" placeholder="Pregunta por estado, accesorios o entrega"></textarea></label>
      </div>`;
  }

  if (type === "bid") {
    title.textContent = "Realizar oferta";
    submit.textContent = "Registrar oferta demo";
    content.innerHTML = `
      <p class="muted">${label}</p>
      <div class="form-grid">
        <label class="form-field"><span>Monto de la oferta</span><input type="number" min="1000" step="1000" required placeholder="$" /></label>
        <label class="form-field"><span>Nombre del postor</span><input required placeholder="Tu nombre" /></label>
        <label class="checkbox-line full"><input type="checkbox" required /><span>Acepto las condiciones demo de la subasta.</span></label>
      </div>`;
  }

  if (type === "diagnosis") {
    title.textContent = "Solicitar diagnóstico";
    submit.textContent = "Enviar solicitud técnica";
    content.innerHTML = `
      <p class="muted">Técnico seleccionado: ${label}</p>
      <div class="form-grid">
        <label class="form-field"><span>Tipo de equipo</span><input required placeholder="Notebook, celular, impresora..." /></label>
        <label class="form-field"><span>Marca y modelo</span><input placeholder="Si lo conoces" /></label>
        <label class="form-field full"><span>Falla</span><textarea rows="3" required placeholder="Describe qué ocurre y si el equipo enciende"></textarea></label>
        <label class="form-field"><span>Comuna</span><select>${config.communes.map(item => `<option>${item}</option>`).join("")}</select></label>
        <label class="form-field"><span>Modalidad</span><select><option>Llevar al taller</option><option>Solicitar retiro</option><option>Atención a domicilio</option><option>Diagnóstico remoto</option></select></label>
      </div>`;
  }

  modal.classList.remove("hidden");
}

function closeActionModal() {
  document.getElementById("actionModal").classList.add("hidden");
}

function publishIntentLabel(intent) {
  return {
    fixed: "Vender a precio fijo",
    auction: "Crear una subasta",
    donate: "Donar",
    technician: "Derivar a revisión técnica",
    recycle: "Entregar para recuperación"
  }[intent] || intent;
}

function renderPublishStep() {
  const draft = state.publishDraft;
  const root = document.getElementById("publishStep");
  document.querySelectorAll("[data-publish-progress]").forEach(item => {
    item.classList.toggle("active", Number(item.dataset.publishProgress) <= state.publishStep);
  });
  document.getElementById("publishBack").classList.toggle("hidden", state.publishStep === 1);
  document.getElementById("publishNext").classList.toggle("hidden", state.publishStep === 4);
  document.getElementById("publishSubmit").classList.toggle("hidden", state.publishStep !== 4);

  if (state.publishStep === 1) {
    root.innerHTML = `
      <div><h3>¿Qué quieres hacer con tu equipo?</h3><p class="muted">Elige el destino inicial. Podrás revisarlo antes de publicar.</p></div>
      <div class="choice-grid">
        ${[
          ["fixed", "Vender", "Define un precio fijo y modalidad de entrega."],
          ["auction", "Subastar", "Recibe ofertas hasta una fecha de cierre."],
          ["donate", "Donar", "Entrégalo a una persona u organización."],
          ["technician", "Revisión técnica", "Solicita diagnóstico o reparación."],
          ["recycle", "Recuperación", "Derívalo a reciclaje o recuperación de piezas."]
        ].map(([value, title, text]) => `
          <label class="choice-option ${draft.intent === value ? "selected" : ""}">
            <input type="radio" name="publishIntent" value="${value}" ${draft.intent === value ? "checked" : ""} />
            <strong>${title}</strong><span class="muted small">${text}</span>
          </label>
        `).join("")}
      </div>`;
  }

  if (state.publishStep === 2) {
    root.innerHTML = `
      <div><h3>Describe el equipo</h3><p class="muted">La información clara mejora la confianza y reduce reclamos.</p></div>
      <div class="form-grid">
        <label class="form-field"><span>Categoría</span><select id="publishCategory">${config.marketplace.categories.map(item => `<option ${item === draft.category ? "selected" : ""}>${item}</option>`).join("")}</select></label>
        <label class="form-field"><span>Estado</span><select id="publishCondition">${["Operativo", "Con falla", "Para reparación", "Para repuesto", "Incompleto", "Sin recuperación"].map(item => `<option ${item === draft.condition ? "selected" : ""}>${item}</option>`).join("")}</select></label>
        <label class="form-field"><span>Marca</span><input id="publishBrand" required value="${draft.brand}" placeholder="Ej. Lenovo" /></label>
        <label class="form-field"><span>Modelo</span><input id="publishModel" required value="${draft.model}" placeholder="Ej. ThinkPad T480" /></label>
        <label class="form-field full"><span>Fallas conocidas</span><textarea id="publishFaults" rows="3" placeholder="Describe fallas, ruidos, daños o comportamientos observados">${draft.faults}</textarea></label>
        <label class="form-field"><span>Piezas faltantes</span><input id="publishMissingParts" value="${draft.missingParts}" placeholder="Ej. cargador, batería" /></label>
        <label class="form-field"><span>Comuna</span><select id="publishCommune">${config.communes.map(item => `<option ${item === draft.commune ? "selected" : ""}>${item}</option>`).join("")}</select></label>
      </div>`;
  }

  if (state.publishStep === 3) {
    const commercial = draft.intent === "fixed" || draft.intent === "auction";
    root.innerHTML = `
      <div><h3>Fotos y condiciones</h3><p class="muted">Usa una foto clara del equipo real. En subasta, la oferta base será visible.</p></div>
      <div class="form-grid">
        <label class="photo-dropzone full">
          <span><strong>Agregar fotografía principal</strong><br><span class="muted small">JPG, PNG o WebP desde el teléfono o computador</span></span>
          <input id="publishPhoto" type="file" accept="image/jpeg,image/png,image/webp" />
        </label>
        ${commercial ? `<label class="form-field"><span>${draft.intent === "auction" ? "Precio base" : "Precio"}</span><input id="publishPrice" type="number" min="0" step="1000" value="${draft.price}" required /></label>` : ""}
        ${draft.intent === "auction" ? `<label class="form-field"><span>Fecha de cierre</span><input id="publishAuctionEnd" type="datetime-local" value="${draft.auctionEnd}" required /></label>` : ""}
        <label class="form-field full"><span>Descripción</span><textarea id="publishDescription" rows="4" placeholder="Incluye accesorios, pruebas realizadas y modalidad de entrega">${draft.description}</textarea></label>
      </div>`;
  }

  if (state.publishStep === 4) {
    const image = draft.photoData || "./assets/product-laptop.webp";
    root.innerHTML = `
      <div><h3>Revisa antes de publicar</h3><p class="muted">La publicación quedará como pendiente de revisión básica.</p></div>
      <div class="publish-summary">
        <div class="publish-preview"><img src="${image}" alt="Vista previa del equipo" /></div>
        <div>
          <div class="tag-row">${statusPill(publishIntentLabel(draft.intent))}${statusPill(draft.condition)}</div>
          <h3>${draft.brand || "Equipo"} ${draft.model || "sin modelo"}</h3>
          <p class="muted">${draft.category} · ${draft.commune}</p>
          <div class="metric-row"><span>Fallas</span><strong>${draft.faults || "No informadas"}</strong></div>
          <div class="metric-row"><span>Piezas faltantes</span><strong>${draft.missingParts || "Ninguna informada"}</strong></div>
          ${draft.price ? `<div class="metric-row"><span>${draft.intent === "auction" ? "Precio base" : "Precio"}</span><strong>${currency.format(Number(draft.price))}</strong></div>` : ""}
          <div class="trust-row"><span>Información declarada</span><span>Registro trazable</span><span>Reporte disponible</span></div>
        </div>
      </div>`;
  }
}

function capturePublishStep() {
  const draft = state.publishDraft;
  if (state.publishStep === 1) {
    const selected = document.querySelector('input[name="publishIntent"]:checked');
    if (selected) draft.intent = selected.value;
  }
  if (state.publishStep === 2) {
    draft.category = document.getElementById("publishCategory").value;
    draft.condition = document.getElementById("publishCondition").value;
    draft.brand = document.getElementById("publishBrand").value.trim();
    draft.model = document.getElementById("publishModel").value.trim();
    draft.faults = document.getElementById("publishFaults").value.trim();
    draft.missingParts = document.getElementById("publishMissingParts").value.trim();
    draft.commune = document.getElementById("publishCommune").value;
    if (!draft.brand || !draft.model) {
      showToast("Completa marca y modelo para continuar.");
      return false;
    }
  }
  if (state.publishStep === 3) {
    const price = document.getElementById("publishPrice");
    const end = document.getElementById("publishAuctionEnd");
    draft.price = price ? price.value : "";
    draft.auctionEnd = end ? end.value : "";
    draft.description = document.getElementById("publishDescription").value.trim();
    if ((draft.intent === "fixed" || draft.intent === "auction") && !draft.price) {
      showToast("Indica un precio para continuar.");
      return false;
    }
    if (draft.intent === "auction" && !draft.auctionEnd) {
      showToast("Indica la fecha de cierre de la subasta.");
      return false;
    }
  }
  return true;
}

function createPublishedListing() {
  const draft = state.publishDraft;
  const isAuction = draft.intent === "auction";
  const listing = {
    id: `USR-${Date.now()}`,
    type: "user",
    title: `${draft.brand} ${draft.model}`,
    brand: draft.brand,
    model: draft.model,
    category: draft.category,
    condition: draft.condition,
    price: Number(draft.price || 0),
    commune: draft.commune,
    tags: [isAuction ? "Subasta" : "Publicación abierta", "Información declarada"],
    specs: draft.faults || draft.description || "Información declarada por el usuario",
    delivery: "A coordinar",
    image: draft.photoData || "./assets/product-laptop.webp",
    imageTone: "#DFECE3"
  };
  if (isAuction) {
    config.marketplace.auctions.unshift({
      ...listing,
      auction: true,
      currentPrice: Number(draft.price),
      startPrice: Number(draft.price),
      bidCount: 0,
      endsIn: "Fecha programada"
    });
  } else {
    config.marketplace.listings.unshift(listing);
  }
  closePublish();
  showToast("Publicación enviada a revisión y añadida al marketplace demo.");
}

function iconLabel(text) {
  return `<span class="nav-icon" aria-hidden="true">${text}</span>`;
}

function statusPill(status) {
  const kind = status.includes("Saturado") || status.includes("Pendiente") ? "warning"
    : status.includes("Rechazado") || status.includes("Vencido") ? "error"
    : status.includes("Publicado") || status.includes("Programado") ? "info"
    : "positive";
  return `<span class="status-pill ${kind}"><span class="dot"></span>${status}</span>`;
}

function renderNav() {
  const nav = document.getElementById("navList");
  nav.innerHTML = navByRole[state.role].map(([id, label, icon]) => `
    <button class="nav-item ${state.view === id ? "active" : ""}" data-view="${id}">
      ${iconLabel(icon)}
      <span>${label}</span>
    </button>
  `).join("");
}

function setTitle() {
  const [eyebrow, title] = titles[state.view] || titles.summary;
  document.getElementById("pageEyebrow").textContent = eyebrow;
  document.getElementById("pageTitle").textContent = title;
  document.getElementById("primaryAction").textContent = state.role === "operator" ? "Escanear QR" : state.role === "admin" ? "Nuevo reporte" : state.role === "technician" ? "Editar disponibilidad" : "Mostrar mi QR";
}

function stat(label, value, detail) {
  return `
    <article class="stat-card">
      <span>${label}</span>
      <strong>${value}</strong>
      <small>${detail}</small>
    </article>
  `;
}

function userSummary() {
  return `
    <section class="view">
      <div class="hero-panel">
        <div>
          <h2>Revisa tus aportes y el valor que estás ayudando a recuperar.</h2>
          <p>Esta vista reúne kilos entregados, saldos, actividad reciente y accesos rápidos para reciclar, vender o reparar componentes electrónicos.</p>
          <div class="hero-actions">
            <button class="button primary" data-go="qr">Mostrar mi QR</button>
            <button class="button secondary" data-go="points">Buscar punto</button>
          </div>
        </div>
        <div class="progress-list">
          <div class="progress-item">
            <div class="progress-meta"><span>Meta mensual</span><strong>72%</strong></div>
            <div class="bar"><span style="width:72%"></span></div>
          </div>
          <div class="progress-item">
            <div class="progress-meta"><span>Material aceptado</span><strong>94%</strong></div>
            <div class="bar"><span style="width:94%"></span></div>
          </div>
        </div>
      </div>

      <section class="stats-grid">
        ${stat("Kilos entregados", `${decimal.format(config.demoUser.deliveredKg)} kg`, "Histórico acumulado")}
        ${stat("Aportes activos", config.demoUser.activeContributions, "En lotes abiertos")}
        ${stat("Saldo estimado", currency.format(config.demoUser.estimatedBalance), "Puede cambiar")}
        ${stat("Saldo disponible", currency.format(config.demoUser.availableBalance), "Listo para solicitar")}
        ${stat("Impacto generado", config.demoUser.impact, "Estimación ambiental")}
      </section>

      <section class="quick-actions">
        ${quickAction("Mostrar mi QR", "Identificación para entregar", "qr")}
        ${quickAction("Solicitar retiro", "Evaluar retiro domiciliario", "points")}
        ${quickAction("Buscar punto", "Ver horarios y comunas", "points")}
        <button class="quick-action" data-action="publish-choice"><strong>Publicar equipo</strong><span>Vender, subastar, donar o reparar</span></button>
        ${quickAction("Ver historial", "Comprobantes y estados", "deliveries")}
      </section>

      <section class="section-grid">
        ${timelineCard()}
        ${balancesCard()}
      </section>
    </section>
  `;
}

function quickAction(title, text, view) {
  return `<button class="quick-action" data-go="${view}"><strong>${title}</strong><span>${text}</span></button>`;
}

function timelineCard() {
  return `
    <article class="card">
      <div class="card-header">
        <h2>Actividad reciente</h2>
        ${statusPill("Actualizado")}
      </div>
      <div class="timeline">
        ${traceEvents.slice(0, 3).map(([date, title, text]) => `
          <div class="timeline-item">
            <span class="timeline-marker"></span>
            <div><strong>${title}</strong><p>${text}</p></div>
            <span class="small muted">${date}</span>
          </div>
        `).join("")}
      </div>
    </article>
  `;
}

function balancesCard() {
  return `
    <article class="card">
      <div class="card-header">
        <h2>Saldos</h2>
        <button class="button tertiary" data-action="show-toast">Solicitar pago</button>
      </div>
      <div class="progress-list">
        <div class="metric-row"><span>Estimado</span><strong>${currency.format(42800)}</strong></div>
        <div class="metric-row"><span>Pendiente</span><strong>${currency.format(19400)}</strong></div>
        <div class="metric-row"><span>Disponible</span><strong>${currency.format(12600)}</strong></div>
        <div class="metric-row"><span>Pagado</span><strong>${currency.format(56000)}</strong></div>
      </div>
      <p class="small muted">El saldo estimado no se convierte en disponible hasta que el comprador pague el lote.</p>
    </article>
  `;
}

function qrView() {
  return `
    <section class="view qr-layout">
      <article class="card qr-card">
        <h2>${config.demoUser.name}</h2>
        <p class="muted">${config.demoUser.code}</p>
        <div class="qr-code" id="qrCode" aria-label="Código QR demo"></div>
        <p>Presenta este código cuando entregues tus componentes.</p>
        <div class="hero-actions">
          <button class="button primary" data-action="show-toast">Descargar QR</button>
          <button class="button secondary" data-action="show-toast">Imprimir</button>
          <button class="button tertiary" data-action="show-toast">Compartir</button>
        </div>
      </article>
      <article class="card">
        <div class="card-header">
          <h2>Seguridad del identificador</h2>
          ${statusPill("Activo")}
        </div>
        <p class="muted">El QR no contiene datos personales sensibles. Apunta a un identificador interno que permite registrar una entrega desde el punto de acopio.</p>
        <div class="timeline">
          <div class="timeline-item"><span class="timeline-marker"></span><div><strong>Último escaneo</strong><p>15 de junio de 2026, 09:30, Punto Los Ángeles Centro.</p></div></div>
          <div class="timeline-item"><span class="timeline-marker"></span><div><strong>QR regenerable</strong><p>Si sospechas mal uso, se invalida el anterior y se emite uno nuevo.</p></div></div>
        </div>
      </article>
    </section>
  `;
}

function pointsView() {
  return `
    <section class="view">
      <div class="table-toolbar card">
        <h2>Puntos disponibles</h2>
        <select aria-label="Filtrar por comuna">
          <option>Todas las comunas</option>
          ${config.communes.map(commune => `<option>${commune}</option>`).join("")}
        </select>
      </div>
      <section class="section-grid">
        <div class="public-map">
          <span class="map-pin" style="left:18%;top:58%"></span>
          <span class="map-pin" style="left:55%;top:38%"></span>
          <span class="map-pin" style="left:68%;top:50%"></span>
          <span class="map-pin" style="left:42%;top:68%"></span>
        </div>
        <div class="progress-list">
          ${collectionPoints.map(point => `
            <article class="card">
              <div class="card-header">
                <div>
                  <h3>${point.name}</h3>
                  <p class="muted small">${point.address}, ${point.commune}</p>
                </div>
                ${statusPill(point.status)}
              </div>
              <p class="small muted">${point.distance} · ${point.hours} · ${point.materials}</p>
              <div class="hero-actions">
                <button class="button secondary" data-action="show-toast">Ver detalles</button>
                <button class="button tertiary" data-action="show-toast">Cómo llegar</button>
              </div>
            </article>
          `).join("")}
        </div>
      </section>
    </section>
  `;
}

function deliveriesView() {
  return tableView("Mis entregas", ["Código", "Punto", "Peso aceptado", "Estado", "Fecha"], [
    ["ENT-2026-0142", "Los Ángeles Centro", "3,25 kg", statusPill("Pendiente de clasificación"), "15-06-2026"],
    ["ENT-2026-0119", "Talcahuano", "5,40 kg", statusPill("Asignada a lote"), "10-06-2026"],
    ["ENT-2026-0098", "Concepción", "2,10 kg", statusPill("Cerrada"), "02-06-2026"]
  ]);
}

function lotsView() {
  return `
    <section class="view">
      <section class="lot-grid">
        ${lots.map(lot => lotCard(lot)).join("")}
      </section>
      ${tableView("Detalle de distribución", ["Lote", "Aporte ponderado", "Participación", "Monto"], [
        ["CU-BIO-003", "14,2", "2,53%", currency.format(12600)],
        ["RAM-BIO-002", "7,9", "1,84%", currency.format(0)],
        ["PCB-001", "4,1", "0,96%", currency.format(0)]
      ], true)}
    </section>
  `;
}

function lotCard(lot) {
  return `
    <article class="card lot-card">
      <div>
        <h3>${lot.code}</h3>
        <p class="muted small">${lot.material}</p>
      </div>
      ${statusPill(lot.status)}
      <div class="metric-row"><span>Peso total</span><strong>${decimal.format(lot.weight)} kg</strong></div>
      <div class="metric-row"><span>Valor referencial</span><strong>${currency.format(lot.value)}</strong></div>
      <div class="metric-row"><span>Mejor oferta</span><strong>${lot.offer ? currency.format(lot.offer) : "Sin ofertas"}</strong></div>
      <button class="button secondary" data-action="show-toast">Ver ficha técnica</button>
    </article>
  `;
}

function deliveryFormView() {
  const total = state.deliveryRows.reduce((sum, row) => sum + Number(row.weight || 0), 0);
  return `
    <section class="view">
      <article class="hero-panel">
        <div>
          <h2>Recepción guiada para punto de acopio</h2>
          <p>Escanea o busca al usuario, registra materiales, peso y condición. La entrega queda pendiente de clasificación final y con evento de trazabilidad.</p>
        </div>
        <button class="button primary" data-action="scan">Escanear QR</button>
      </article>

      <form class="card" id="deliveryForm">
        <div class="card-header">
          <h2>Nueva entrega</h2>
          ${statusPill("Borrador")}
        </div>
        <div class="form-grid">
          ${field("Código de usuario", "text", config.demoUser.code, "El QR se puede reemplazar por búsqueda manual.")}
          ${field("Punto de acopio", "text", "Punto Los Ángeles Centro", "")}
          <label class="form-field">
            <span>Comuna</span>
            <select>${config.communes.map(c => `<option ${c === "Los Ángeles" ? "selected" : ""}>${c}</option>`).join("")}</select>
          </label>
          <label class="form-field">
            <span>Condición general</span>
            <select><option>Buena</option><option>Regular</option><option>Baja</option><option>Requiere revisión</option></select>
          </label>
        </div>

        <h3>Materiales</h3>
        <div class="material-list" id="materialRows">
          ${state.deliveryRows.map((row, index) => materialRow(row, index)).join("")}
        </div>
        <div class="form-actions">
          <button type="button" class="button secondary" data-action="add-material">Agregar material</button>
          <button type="submit" class="button primary">Registrar entrega</button>
        </div>
        <p class="muted small">Peso aceptado preliminar: <strong>${decimal.format(total)} kg</strong>. La clasificación puede ajustar categoría y peso final.</p>
      </form>
    </section>
  `;
}

function field(label, type, value, help) {
  return `
    <label class="form-field">
      <span>${label}</span>
      <input type="${type}" value="${value}" />
      ${help ? `<small class="help-text">${help}</small>` : ""}
    </label>
  `;
}

function materialRow(row, index) {
  return `
    <div class="material-row">
      <label class="form-field">
        <span>Categoría</span>
        <select data-material-index="${index}" data-key="material">
          ${config.materialCategories.map(cat => `<option ${cat.name === row.material ? "selected" : ""}>${cat.name}</option>`).join("")}
        </select>
      </label>
      <label class="form-field">
        <span>Peso kg</span>
        <input type="number" min="0" step="0.01" value="${row.weight}" data-material-index="${index}" data-key="weight" />
      </label>
      <label class="form-field">
        <span>Calidad</span>
        <select data-material-index="${index}" data-key="quality">
          ${["Excelente", "Buena", "Regular", "Baja"].map(q => `<option ${q === row.quality ? "selected" : ""}>${q}</option>`).join("")}
        </select>
      </label>
      <button type="button" class="button secondary" data-remove-material="${index}">Quitar</button>
    </div>
  `;
}

function inventoryView() {
  return `
    <section class="view">
      <section class="stats-grid">
        ${stat("Peso actual", "486 kg", "En punto")}
        ${stat("Capacidad usada", "68%", "Contenedores activos")}
        ${stat("Por clasificar", "31 kg", "8 entregas")}
        ${stat("Próximo retiro", "18-06", "Ruta Biobío norte")}
        ${stat("Incidencias", "1", "Material no corresponde")}
      </section>
      ${tableView("Inventario por categoría", ["Categoría", "Peso actual", "Capacidad", "Contenedor", "Estado"], [
        ["Placa madre", "128 kg", "200 kg", "CTR-LA-014", statusPill("En uso")],
        ["Memoria RAM", "18 kg", "40 kg", "CTR-LA-006", statusPill("Activo")],
        ["Cable de cobre", "210 kg", "250 kg", "CTR-LA-011", statusPill("Próximo a capacidad")],
        ["Aluminio", "130 kg", "300 kg", "CTR-LA-020", statusPill("En uso")]
      ], true)}
    </section>
  `;
}

function adminSummaryView() {
  return `
    <section class="view">
      <section class="stats-grid">
        ${stat("Usuarios activos", "1.248", "Biobío")}
        ${stat("Entregas del mes", "382", "Junio 2026")}
        ${stat("Kilos recibidos", "4.826 kg", "Mes actual")}
        ${stat("Lotes abiertos", "9", "3 publicados")}
        ${stat("Ventas del mes", currency.format(8730000), "Confirmadas")}
      </section>
      <section class="section-grid">
        <article class="card">
          <div class="card-header"><h2>Alertas</h2>${statusPill("6 abiertas")}</div>
          <div class="timeline">
            <div class="timeline-item"><span class="timeline-marker"></span><div><strong>Punto saturado</strong><p>Punto Concepción alcanzó 92% de capacidad.</p></div>${statusPill("Urgente")}</div>
            <div class="timeline-item"><span class="timeline-marker"></span><div><strong>Pago vencido</strong><p>Oferta adjudicada PCB-001 supera plazo de 5 días.</p></div>${statusPill("Pendiente")}</div>
            <div class="timeline-item"><span class="timeline-marker"></span><div><strong>Clasificación pendiente</strong><p>18 entregas esperan revisión final.</p></div>${statusPill("En revisión")}</div>
          </div>
        </article>
        ${timelineCard()}
      </section>
    </section>
  `;
}

function technicianSummaryView() {
  return `
    <section class="view">
      <section class="stats-grid">
        ${stat("Visitas al perfil", "286", "+18% este mes")}
        ${stat("Contactos recibidos", "34", "12 pendientes")}
        ${stat("Publicaciones guardadas", "21", "Equipos reparables")}
        ${stat("Trabajos cerrados", "16", "4,8 de 5")}
        ${stat("Tiempo de respuesta", "45 min", "Promedio demo")}
      </section>
      <section class="section-grid">
        <article class="card">
          <div class="card-header"><h2>Demanda por categoría</h2>${statusPill("Datos demo")}</div>
          <div class="progress-list">
            ${[["Notebooks", 82], ["Impresoras", 64], ["Celulares", 51], ["Componentes", 37]].map(([label, value]) => `<div class="progress-item"><div class="progress-meta"><span>${label}</span><strong>${value}%</strong></div><div class="bar"><span style="width:${value}%"></span></div></div>`).join("")}
          </div>
        </article>
        <article class="card">
          <div class="card-header"><h2>Zonas con mayor actividad</h2>${statusPill("Últimos 30 días")}</div>
          <div class="progress-list">
            <div class="metric-row"><span>Los Ángeles</span><strong>48 solicitudes</strong></div>
            <div class="metric-row"><span>Concepción</span><strong>31 solicitudes</strong></div>
            <div class="metric-row"><span>Talcahuano</span><strong>19 solicitudes</strong></div>
            <div class="metric-row"><span>San Pedro de la Paz</span><strong>14 solicitudes</strong></div>
          </div>
        </article>
      </section>
      ${technicianRequestsView(true)}
    </section>`;
}

function technicianProfileView() {
  const tech = config.marketplace.technicians[0];
  return `
    <section class="view">
      <article class="card">
        <div class="publish-summary">
          <div class="technician-photo"><img src="${tech.image}" alt="${tech.name}" /></div>
          <div>
            <div class="tag-row">${tech.tags.map(statusPill).join("")}</div>
            <h2>${tech.name}</h2>
            <p class="muted">${tech.specialty}</p>
            <div class="metric-row"><span>Cobertura</span><strong>${tech.coverage}</strong></div>
            <div class="metric-row"><span>Experiencia</span><strong>8 años</strong></div>
            <div class="metric-row"><span>Disponibilidad</span><strong>Disponible hoy</strong></div>
            <div class="trust-row"><span>Identidad validada</span><span>Cuenta bancaria verificada</span><span>Sin reclamos graves</span></div>
          </div>
        </div>
      </article>
      <article class="card"><div class="card-header"><h2>Servicios ofrecidos</h2><button class="button secondary" data-action="show-toast">Editar perfil</button></div><div class="tag-row">${["Diagnóstico", "Reparación", "Mantenimiento", "Retiro de equipos", "Compra de equipos dañados", "Recuperación de información"].map(statusPill).join("")}</div></article>
    </section>`;
}

function technicianRequestsView(embedded = false) {
  const view = tableView("Solicitudes técnicas", ["Equipo", "Comuna", "Falla informada", "Modalidad", "Estado"], [
    ["Notebook Acer Aspire", "Los Ángeles", "No enciende", "Retiro", statusPill("Nueva")],
    ["Impresora Canon G3110", "Cabrero", "No imprime negro", "Taller", statusPill("En revisión")],
    ["PC escritorio", "Mulchén", "Reinicio aleatorio", "Domicilio", statusPill("Cotización enviada")],
    ["Notebook Lenovo", "Los Ángeles", "Pantalla sin imagen", "Taller", statusPill("Aceptada")]
  ], embedded);
  return view;
}

function technicianMetricsView() {
  return `
    <section class="view">
      <article class="hero-panel"><div><h2>Métricas para hacer crecer tu servicio</h2><p>Indicadores demo para validar un futuro plan profesional mensual con posicionamiento, demanda por zona y conversión.</p></div>${statusPill("Plan profesional demo")}</article>
      ${technicianSummaryView()}
    </section>`;
}

function buyerSummaryView() {
  return `
    <section class="view">
      <section class="stats-grid">
        ${stat("Lotes disponibles", "7", "Con ficha técnica")}
        ${stat("Ofertas activas", "3", "En evaluación")}
        ${stat("Adjudicados", "2", "Retiro pendiente")}
        ${stat("Reputación", "4,8", "Pago oportuno")}
        ${stat("Documentos", "Vigentes", "Hasta 2027")}
      </section>
      <section class="lot-grid">${lots.map(lot => lotCard(lot)).join("")}</section>
    </section>
  `;
}

function materialsView() {
  return tableView("Categorías de materiales", ["Código", "Nombre", "Familia", "Coeficiente", "Precio ref."], config.materialCategories.map(cat => [
    cat.code,
    cat.name,
    cat.family,
    decimal.format(cat.coefficient),
    currency.format(cat.price)
  ]));
}

function reportsView() {
  return `
    <section class="view">
      <article class="card">
        <div class="card-header">
          <h2>Reportes básicos</h2>
          <button class="button primary" data-action="show-toast">Exportar CSV</button>
        </div>
        <div class="form-grid">
          <label class="form-field"><span>Desde</span><input type="date" value="2026-06-01"></label>
          <label class="form-field"><span>Hasta</span><input type="date" value="2026-06-15"></label>
          <label class="form-field"><span>Comuna</span><select><option>Todas</option>${config.communes.map(c => `<option>${c}</option>`).join("")}</select></label>
          <label class="form-field"><span>Tipo</span><select><option>Entregas por comuna</option><option>Materiales por categoría</option><option>Lotes vendidos</option><option>Pagos</option></select></label>
        </div>
      </article>
      ${tableView("Vista previa", ["Métrica", "Valor", "Variación"], [
        ["Entregas registradas", "382", "+18%"],
        ["Peso aceptado", "4.826 kg", "+12%"],
        ["Material rechazado", "214 kg", "-4%"],
        ["Fondo distribuible", currency.format(6130000), "+21%"]
      ], true)}
    </section>
  `;
}

function traceabilityView() {
  return `
    <section class="view">
      <article class="card">
        <div class="card-header">
          <h2>Línea de tiempo del material</h2>
          ${statusPill("Trazable")}
        </div>
        <div class="timeline">
          ${traceEvents.map(([date, title, text]) => `
            <div class="timeline-item">
              <span class="timeline-marker"></span>
              <div><strong>${title}</strong><p>${text}</p></div>
              <span class="small muted">${date}</span>
            </div>
          `).join("")}
        </div>
      </article>
    </section>
  `;
}

function tableView(title, headers, rows, embedded = false) {
  const content = `
    <section class="table-card">
      <div class="table-toolbar">
        <h2>${title}</h2>
        <input type="search" placeholder="Buscar" aria-label="Buscar en ${title}" />
      </div>
      <table>
        <thead><tr>${headers.map(header => `<th>${header}</th>`).join("")}</tr></thead>
        <tbody>
          ${rows.map(row => `<tr>${row.map((cell, index) => `<td data-label="${headers[index]}">${cell}</td>`).join("")}</tr>`).join("")}
        </tbody>
      </table>
    </section>
  `;
  return embedded ? content : `<section class="view">${content}</section>`;
}

function genericRoleView(view) {
  const maps = {
    "technician-summary": technicianSummaryView,
    "technician-profile": technicianProfileView,
    "technician-requests": technicianRequestsView,
    "technician-metrics": technicianMetricsView,
    "technician-listings": () => tableView("Equipos guardados", ["Equipo", "Estado", "Comuna", "Precio", "Oportunidad"], [
      ["MacBook Pro 2017", "Para reparación", "Concepción", currency.format(68000), statusPill("Alta demanda")],
      ["Samsung A52", "Para repuesto", "Coronel", currency.format(28000), statusPill("Componentes")],
      ["Impresora Canon G3110", "Con falla", "Talcahuano", currency.format(65000), statusPill("Cercana")]
    ]),
    "operator-summary": inventoryView,
    containers: () => tableView("Contenedores", ["Código", "Categoría", "Peso actual", "Estado", "Responsable"], [
      ["CTR-LA-014", "Placa madre", "128 kg", statusPill("En uso"), "Marcela R."],
      ["CTR-LA-006", "RAM", "18 kg", statusPill("Activo"), "Marcela R."],
      ["CTR-LA-011", "Cable de cobre", "210 kg", statusPill("Próximo a capacidad"), "Luis P."]
    ]),
    "available-lots": () => `<section class="view"><section class="lot-grid">${lots.map(lot => lotCard(lot)).join("")}</section></section>`,
    offers: () => tableView("Mis ofertas", ["Lote", "Monto", "Retiro", "Estado", "Vence"], [
      ["PCB-001", currency.format(1750000), "Comprador retira", statusPill("En evaluación"), "18-06-2026"],
      ["CU-BIO-003", currency.format(498000), "Centro entrega", statusPill("Adjudicado"), "Pagada"],
      ["RAM-BIO-002", currency.format(390000), "Comprador retira", statusPill("Pendiente"), "21-06-2026"]
    ]),
    "buyer-docs": () => tableView("Documentos de comprador", ["Documento", "Estado", "Vencimiento"], [
      ["RUT empresa", statusPill("Aprobado"), "2027"],
      ["Resolución sanitaria", statusPill("Aprobado"), "31-12-2026"],
      ["Certificado de valorización", statusPill("Pendiente"), "Requerido al cierre"]
    ]),
    users: () => tableView("Usuarios", ["Nombre", "Rol", "Comuna", "Estado"], [
      ["Cristian Muñoz", "Usuario aportante", "Los Ángeles", statusPill("Activo")],
      ["Marcela Rivas", "Encargada de punto", "Los Ángeles", statusPill("Activo")],
      ["Demo Metales SpA", "Comprador", "Concepción", statusPill("Aprobado")]
    ]),
    moderation: () => tableView("Publicaciones pendientes", ["Publicación", "Usuario", "Estado declarado", "Riesgo", "Acción"], [
      ["Notebook HP 14", "Camila P.", "Con falla", statusPill("Bajo"), "Revisar"],
      ["Lote celulares", "Comercial Demo", "Sin probar", statusPill("Medio"), "Solicitar fotos"],
      ["Baterías notebook", "Usuario 284", "Para repuesto", statusPill("Alto"), "Bloquear"]
    ]),
    "admin-technicians": () => tableView("Verificación de técnicos", ["Técnico", "Comuna", "Especialidad", "Documentación", "Estado"], [
      ["Servicio Técnico Cristian", "Los Ángeles", "Computadores", "Completa", statusPill("Certificado")],
      ["Electro Sur", "Concepción", "Electrohogar", "Pendiente", statusPill("En revisión")],
      ["Móvil Express", "Talcahuano", "Celulares", "Incompleta", statusPill("Pendiente")]
    ]),
    promotions: () => tableView("Promociones activas", ["Publicación", "Tipo", "Inicio", "Fin", "Rendimiento"], [
      ["ThinkPad T480", "Producto destacado", "15-06-2026", "22-06-2026", "184 visitas"],
      ["Repara BioBio", "Técnico destacado", "10-06-2026", "10-07-2026", "32 contactos"],
      ["Repuestos del Sur", "Anuncio empresa", "01-06-2026", "30-06-2026", "2,8% interacción"]
    ]),
    disputes: () => tableView("Reclamos y devoluciones", ["Caso", "Operación", "Motivo", "Estado", "Plazo"], [
      ["REC-018", "VEN-142", "Producto no coincide", statusPill("En revisión"), "2 días"],
      ["REC-017", "SUB-088", "Entrega incompleta", statusPill("Esperando respuesta"), "1 día"],
      ["REC-016", "TEC-204", "Diagnóstico disputado", statusPill("Resuelto"), "Cerrado"]
    ]),
    "admin-lots": () => `<section class="view"><section class="lot-grid">${lots.map(lot => lotCard(lot)).join("")}</section></section>`,
    payments: () => tableView("Pagos", ["Solicitud", "Usuario", "Monto", "Estado", "Fecha"], [
      ["PAG-021", "Cristian Muñoz", currency.format(12600), statusPill("Aprobado"), "15-06-2026"],
      ["PAG-020", "Ana Vera", currency.format(18400), statusPill("Procesando"), "14-06-2026"],
      ["PAG-019", "Luis Soto", currency.format(9200), statusPill("Pagado"), "13-06-2026"]
    ]),
    audit: () => tableView("Auditoría", ["Fecha", "Usuario", "Acción", "Objeto"], [
      ["15-06-2026 09:30", "Marcela Rivas", "Creó entrega", "ENT-2026-0142"],
      ["15-06-2026 09:45", "Sistema", "Actualizó inventario", "CTR-LA-014"],
      ["14-06-2026 16:20", "Administrador", "Aprobó comprador", "Demo Metales SpA"]
    ])
  };
  return (maps[view] || userSummary)();
}

function render() {
  renderNav();
  setTitle();
  const root = document.getElementById("viewRoot");
  const views = {
    summary: userSummary,
    qr: qrView,
    points: pointsView,
    deliveries: deliveriesView,
    lots: lotsView,
    traceability: traceabilityView,
    "delivery-form": deliveryFormView,
    inventory: inventoryView,
    "admin-summary": adminSummaryView,
    "buyer-summary": buyerSummaryView,
    materials: materialsView,
    reports: reportsView
  };
  root.innerHTML = (views[state.view] || (() => genericRoleView(state.view)))();
  root.focus({ preventScroll: true });
  if (state.view === "qr") drawQr();
}

function drawQr() {
  const qr = document.getElementById("qrCode");
  if (!qr) return;
  const seed = config.demoUser.code.split("").reduce((sum, char) => sum + char.charCodeAt(0), 0);
  qr.innerHTML = Array.from({ length: 225 }, (_, index) => {
    const x = index % 15;
    const y = Math.floor(index / 15);
    const finder = (x < 5 && y < 5) || (x > 9 && y < 5) || (x < 5 && y > 9);
    const on = finder ? (x === 0 || y === 0 || x === 4 || y === 4 || (x === 2 && y === 2) || x > 9 && (y === 0 || y === 4 || x === 10 || x === 14) || y > 9 && (x === 0 || x === 4 || y === 10 || y === 14)) : ((index * 17 + seed + y * 7) % 5 < 2);
    return `<span class="qr-cell ${on ? "on" : ""}"></span>`;
  }).join("");
}

function goTo(view) {
  state.view = view;
  render();
  document.getElementById("sidebar").classList.remove("open");
}

function showToast(message = "Acción registrada en esta demostración.") {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("visible");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("visible"), 2600);
}

document.addEventListener("click", (event) => {
  const closePublishButton = event.target.closest("[data-close-publish]");
  const closeActionButton = event.target.closest("[data-close-action]");
  const categoryFilter = event.target.closest("[data-category-filter]");
  const searchSuggestion = event.target.closest("[data-search-suggestion]");
  const technicianFilter = event.target.closest("[data-filter-technicians]");
  const navButton = event.target.closest("[data-view]");
  const goButton = event.target.closest("[data-go]");
  const action = event.target.closest("[data-action]");
  const remove = event.target.closest("[data-remove-material]");

  if (closePublishButton) closePublish();
  if (closeActionButton) closeActionModal();
  if (categoryFilter) {
    state.marketplaceCategory = categoryFilter.dataset.categoryFilter;
    syncMarketplaceUrl();
    renderPublicHome();
  }
  if (searchSuggestion) {
    state.marketplaceQuery = searchSuggestion.dataset.searchSuggestion;
    syncMarketplaceUrl();
    renderPublicHome();
  }
  if (technicianFilter) {
    state.marketplaceType = "Técnicos certificados";
    syncMarketplaceUrl();
    renderPublicHome();
    window.location.hash = "tecnicos";
  }
  if (navButton) goTo(navButton.dataset.view);
  if (goButton) goTo(goButton.dataset.go);
  if (action) {
    if (action.dataset.action === "add-material") {
      state.deliveryRows.push({ material: "Cable de cobre", weight: 1, quality: "Buena" });
      render();
      showToast("Material agregado al borrador.");
    } else if (action.dataset.action === "scan") {
      showToast(`QR leído: ${config.demoUser.code}`);
    } else if (action.dataset.action === "open-product") {
      openActionModal("product", action.dataset.actionLabel);
    } else if (action.dataset.action === "open-bid") {
      openActionModal("bid", action.dataset.actionLabel);
    } else if (action.dataset.action === "open-diagnosis") {
      openActionModal("diagnosis", action.dataset.actionLabel);
    } else if (action.dataset.action === "publish-choice") {
      if (action.dataset.publishIntent) state.publishDraft.intent = action.dataset.publishIntent;
      openPublish();
    } else if (action.dataset.action === "clear-market-filters") {
      state.marketplaceQuery = "";
      state.marketplaceCategory = "Todos";
      state.marketplaceType = "Todos";
      state.marketplaceCondition = "Todos";
      state.marketplaceCommune = "Toda la región";
      state.marketplacePrice = "Todos";
      state.marketplaceSort = "Más relevantes";
      syncMarketplaceUrl();
      renderPublicHome();
      showToast("Filtros limpiados.");
    } else {
      showToast();
    }
  }
  if (remove) {
    const index = Number(remove.dataset.removeMaterial);
    state.deliveryRows.splice(index, 1);
    if (!state.deliveryRows.length) state.deliveryRows.push({ material: "Placa madre", weight: 0, quality: "Buena" });
    render();
  }
});

document.addEventListener("input", (event) => {
  const target = event.target;
  if (!target.matches("[data-material-index]")) return;
  state.deliveryRows[Number(target.dataset.materialIndex)][target.dataset.key] = target.value;
});

document.addEventListener("change", (event) => {
  const target = event.target;
  if (target.matches('input[name="publishIntent"]')) {
    state.publishDraft.intent = target.value;
    renderPublishStep();
    return;
  }
  if (target.id === "publishPhoto" && target.files && target.files[0]) {
    const reader = new FileReader();
    reader.onload = () => {
      state.publishDraft.photoData = reader.result;
      showToast("Fotografía agregada al borrador.");
    };
    reader.readAsDataURL(target.files[0]);
    return;
  }
  if (!target.matches("[data-market-filter]")) return;
  state[target.dataset.marketFilter] = target.value;
  syncMarketplaceUrl();
  renderPublicHome();
});

document.addEventListener("submit", (event) => {
  if (event.target.id === "marketSearch") {
    event.preventDefault();
    state.marketplaceQuery = document.getElementById("marketQuery").value.trim();
    syncMarketplaceUrl();
    renderPublicHome();
    return;
  }

  if (event.target.id === "publishForm") {
    event.preventDefault();
    createPublishedListing();
    return;
  }

  if (event.target.id === "actionForm") {
    event.preventDefault();
    const message = state.actionType === "bid" ? "Oferta demo registrada correctamente." : state.actionType === "diagnosis" ? "Solicitud técnica demo enviada." : "Solicitud demo enviada al publicador.";
    closeActionModal();
    showToast(message);
    return;
  }

  if (event.target.id !== "deliveryForm") return;
  event.preventDefault();
  const submit = event.target.querySelector('button[type="submit"]');
  submit.disabled = true;
  submit.textContent = "Registrando...";
  window.setTimeout(() => {
    submit.disabled = false;
    submit.textContent = "Registrar entrega";
    showToast("Entrega ENT-2026-0143 registrada y enviada a clasificación.");
    goTo("operator-summary");
  }, 700);
});

document.getElementById("publishNext").addEventListener("click", () => {
  if (!capturePublishStep()) return;
  state.publishStep = Math.min(4, state.publishStep + 1);
  renderPublishStep();
});

document.getElementById("publishBack").addEventListener("click", () => {
  capturePublishStep();
  state.publishStep = Math.max(1, state.publishStep - 1);
  renderPublishStep();
});

readMarketplaceUrl();
renderPublicHome();
