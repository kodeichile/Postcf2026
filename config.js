window.APP_CONFIG = {
  region: "Región del Biobío",
  communes: [
    "Los Ángeles",
    "Concepción",
    "Talcahuano",
    "San Pedro de la Paz",
    "Chiguayante",
    "Coronel",
    "Lota",
    "Hualpén",
    "Penco",
    "Tomé",
    "Cabrero",
    "Yumbel",
    "Mulchén",
    "Nacimiento",
    "Santa Bárbara"
  ],
  materialCategories: [
    { code: "PCB-MB", name: "Placa madre", family: "Valorización media", price: 3500, coefficient: 1.0, color: "#557A65" },
    { code: "RAM", name: "Memoria RAM", family: "Alta valorización", price: 12000, coefficient: 1.8, color: "#557A87" },
    { code: "CPU", name: "Procesador", family: "Alta valorización", price: 18000, coefficient: 2.4, color: "#385844" },
    { code: "PCB-CEL", name: "Placa de celular", family: "Alta valorización", price: 14500, coefficient: 2.0, color: "#43855B" },
    { code: "PCB-IMP", name: "Placa de impresora", family: "Baja valorización", price: 1300, coefficient: 0.55, color: "#9CBDA8" },
    { code: "CU-CAB", name: "Cable de cobre", family: "Metales y cables", price: 4200, coefficient: 1.15, color: "#C58A35" },
    { code: "ALU", name: "Aluminio", family: "Metales y cables", price: 900, coefficient: 0.35, color: "#9AA59E" }
  ],
  demoUser: {
    name: "Cristian Muñoz",
    code: "USR-9K4P2X7M",
    commune: "Los Ángeles",
    deliveredKg: 18.75,
    estimatedBalance: 42800,
    availableBalance: 12600,
    activeContributions: 4,
    impact: "42 kg CO₂e evitados"
  },
  marketplace: {
    categories: [
      "Computadores",
      "Celulares",
      "Tablets",
      "Impresión",
      "Electrohogar",
      "Audio y video",
      "Videojuegos",
      "Componentes",
      "Redes",
      "Herramientas"
    ],
    listings: [
      {
        id: "OFF-001",
        type: "official",
        title: "Notebook Lenovo ThinkPad T480",
        brand: "Lenovo",
        model: "T480",
        category: "Computadores",
        condition: "Reacondicionado",
        price: 249990,
        commune: "Los Ángeles",
        tags: ["Producto oficial", "Garantía 90 días", "Borrado de datos"],
        specs: "Intel Core i5 · 16 GB RAM · SSD 256 GB",
        delivery: "Retiro y despacho",
        image: "./assets/product-laptop.webp",
        imageTone: "#DCE9E1"
      },
      {
        id: "OFF-002",
        type: "official",
        title: "Monitor Dell 24 pulgadas",
        brand: "Dell",
        model: "P2419H",
        category: "Audio y video",
        condition: "Grado B",
        price: 89990,
        commune: "Concepción",
        tags: ["Producto oficial", "Revisado", "Informe técnico"],
        specs: "Full HD · Base regulable · HDMI",
        delivery: "Retiro disponible",
        image: "./assets/product-monitor.webp",
        imageTone: "#E4EEF1"
      },
      {
        id: "USR-001",
        type: "user",
        title: "Impresora Canon G3110 usada",
        brand: "Canon",
        model: "G3110",
        category: "Impresión",
        condition: "Funcional con detalles",
        price: 65000,
        commune: "Talcahuano",
        tags: ["Publicado por usuario", "Retiro disponible"],
        specs: "Imprime, requiere limpieza de cabezal",
        delivery: "Retiro presencial",
        image: "./assets/product-printer.webp",
        imageTone: "#F0E7DA"
      },
      {
        id: "USR-002",
        type: "user",
        title: "Tarjeta gráfica GTX 1660",
        brand: "NVIDIA",
        model: "GTX 1660",
        category: "Componentes",
        condition: "Usado",
        price: 132000,
        commune: "San Pedro de la Paz",
        tags: ["Publicado por usuario", "Envío disponible"],
        specs: "6 GB · Probada en juegos",
        delivery: "Despacho disponible",
        image: "./assets/product-graphics-card.webp",
        imageTone: "#E8E3EE"
      },
      {
        id: "USR-003",
        type: "user",
        title: "Celular Samsung para repuestos",
        brand: "Samsung",
        model: "A52",
        category: "Celulares",
        condition: "Para repuestos",
        price: 28000,
        commune: "Coronel",
        tags: ["Publicado por usuario", "Para repuestos"],
        specs: "Pantalla rota · Placa sin probar",
        delivery: "Retiro presencial",
        image: "./assets/product-phone-parts.webp",
        imageTone: "#E9ECE6"
      }
    ],
    auctions: [
      {
        id: "AUC-001",
        title: "MacBook Pro 2017 para reparar",
        category: "Computadores",
        condition: "Reparable",
        currentPrice: 68000,
        startPrice: 45000,
        bidCount: 12,
        endsIn: "04 h 32 min",
        commune: "Concepción",
        tags: ["Subasta", "Últimas horas"],
        image: "./assets/auction-laptop-repair.webp",
        imageTone: "#E7ECE9"
      },
      {
        id: "AUC-002",
        title: "Lote de memorias RAM DDR4",
        category: "Componentes",
        condition: "Sin probar",
        currentPrice: 34000,
        startPrice: 20000,
        bidCount: 5,
        endsIn: "22 h 10 min",
        commune: "Los Ángeles",
        tags: ["Subasta", "Retiro disponible"],
        image: "./assets/auction-ram-lot.webp",
        imageTone: "#E1EBDD"
      },
      {
        id: "AUC-003",
        title: "Consola PS4 no enciende",
        category: "Videojuegos",
        condition: "No enciende",
        currentPrice: 52000,
        startPrice: 30000,
        bidCount: 8,
        endsIn: "02 h 14 min",
        commune: "Hualpén",
        tags: ["Subasta", "Para reparar"],
        image: "./assets/auction-console-repair.webp",
        imageTone: "#EFE7DE"
      }
    ],
    technicians: [
      {
        name: "Servicio Técnico Cristian",
        specialty: "Computadores · Notebooks · Impresoras",
        commune: "Los Ángeles",
        coverage: "Los Ángeles y alrededores",
        rating: "4,8",
        jobs: 126,
        response: "45 min",
        image: "./assets/technician-certified.webp",
        tags: ["Técnico certificado", "Retiro disponible"]
      },
      {
        name: "Repara BioBio",
        specialty: "Celulares · Tablets · Micro soldadura",
        commune: "Concepción",
        coverage: "Gran Concepción",
        rating: "4,7",
        jobs: 98,
        response: "1 h",
        image: "./assets/technician-certified.webp",
        tags: ["Técnico certificado", "Atención a domicilio"]
      },
      {
        name: "TecnoRed Sur",
        specialty: "Routers · Redes · Cámaras IP",
        commune: "Talcahuano",
        coverage: "Talcahuano y Hualpén",
        rating: "4,9",
        jobs: 74,
        response: "35 min",
        image: "./assets/technician-certified.webp",
        tags: ["Técnico certificado", "Diagnóstico remoto"]
      }
    ],
    impact: [
      { label: "Equipos recuperados", value: "Demo" },
      { label: "Kilos desviados", value: "Demo" },
      { label: "Productos reacondicionados", value: "Demo" },
      { label: "Técnicos certificados", value: "Demo" },
      { label: "Comunas cubiertas", value: "Demo" },
      { label: "Personas recompensadas", value: "Demo" }
    ]
  }
};

