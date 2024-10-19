const planes = [
  {
    name: "Básico",
    description:
      "Ideal para quienes buscan establecer una presencia online de manera rápida y asequible, sin sacrificar calidad ni diseño.",
    price: "100.000",
    beforePrice: "150.000",
    best: true,
    wspLink:
      "https://api.whatsapp.com/send?phone=56965926195&text=Hola%2C%20me%20interesa%20el%20plan%20Econ%C3%B3mico.",
    features: [
      "Hosting y Dominio durante 1 año.",
      "Página web de una sola página (landing page).",
      "Diseño responsive adaptado para móviles y tablets.",
      "Información clave: descripción, servicios, contacto, ubicación, y botón de WhatsApp.",
      "Mapa de ubicación en Google Maps.",
      "Integración con redes sociales (Facebook, Instagram).",
      "Diseño simple, profesional y moderno.",
    ],
    mantenimiento: {
      title: "Mantenimiento básico (6 meses)",
      features: [
        "Actualización de contenido menor (1 vez al mes)",
        "Copias de seguridad automáticas (mensuales)",
        "Corrección de errores técnicos (bug fixing).",
      ],
    },
    color: "#7F8C8D",
  },
  {
    name: "Avanzado",
    description:
      "Perfecto para aquellos que desean un sitio web más completo y atractivo, optimizando su presencia online para captar la atención de más visitantes.",
    price: "200.000",
    beforePrice: "300.000",
    wspLink:
      "https://api.whatsapp.com/send?phone=56965926195&text=Hola%2C%20me%20interesa%20el%20plan%20Avanzado.",
    features: [
      "Hosting y Dominio durante 1 año.",
      "Sitio web de 3 a 5 páginas.",
      "Diseño responsive adaptado para móviles y tablets.",
      "Contenidos diversos: incluye catálogo de servicios, galería de fotos, testimonios, formulario de contacto y botón de WhatsApp.",
      "Diseño personalizado que refleja la identidad de la marca.",
      "Mapa de ubicación en Google Maps.",
      "Integración con redes sociales (Facebook, Instagram).",
      "Optimización SEO local para aumentar visibilidad en Google.",
    ],
    mantenimiento: {
      title: "Mantenimiento avanzado (6 meses)",
      features: [
        "Actualización de contenido menor (hasta 3 veces al mes).",
        "Copias de seguridad automáticas (semanales).",
        "Corrección de errores técnicos (bug fixing).",
      ],
    },
    color: "#8E44AD",
  },
  {
    name: "Full",
    description:
      "La opción más completa para quienes buscan una solución web altamente personalizada y funcional, con un enfoque en la experiencia del usuario.",
    price: "350.000",
    beforePrice: "400.000",
    wspLink:
      "https://api.whatsapp.com/send?phone=56965926195&text=Hola%2C%20me%20interesa%20el%20plan%20Full.",
    features: [
      "Hosting y Dominio durante 1 año.",
      "Sitio web de hasta 10 páginas.",
      "Diseño responsive adaptado para móviles y tablets.",
      "Diseño avanzado con transiciones y efectos.",
      "Hasta 5 cuentas de correo.",
      "Perfil de Negocio en Google.",
      "Mapa de ubicación en Google Maps.",
      "Campañas de Publicidad en Google Ads.",
      "Integración con Google Analytics: seguimiento de tráfico y rendimiento.",
      "Elementos avanzados: sistema de contacto, blog, y optimización SEO avanzada.",
      "Integración con redes sociales (Facebook, Instagram).",
      "🎁 Regalo: 10 Fotos de su negocio de calidad profesional.",
    ],
    mantenimiento: {
      title: "Mantenimiento Premium (6 meses)",
      features: [
        "Actualización de contenido (hasta 6 veces al mes)",
        "Copias de seguridad automáticas (diarias)",
        "Monitoreo de seguridad 24/7 y protección avanzada contra ciberataques",
        "Optimización SEO avanzada (trimestral)",
        "Optimización de velocidad de carga (trimestral)",
        "Corrección de errores técnicos y asistencia prioritaria en caso de problemas",
      ],
    },
    color: "#FFD700",
  },
  {
    name: "Tienda Online",
    description:
      "Ideal para pequeñas y medianas tiendas que necesitan vender productos en línea con un sistema completo de catálogo, pagos y gestión de inventario.",
    price: "200.000",
    beforePrice: "400.000",
    wspLink:
      "https://api.whatsapp.com/send?phone=56965926195&text=Hola%2C%20me%20interesa%20el%20plan%20Tienda%20Online",
    features: [
      "Hosting y Dominio durante 1 año.",
      "Sitio de hasta 3 a 5 páginas: Inicio, Tienda, Sobre nosotros y Contacto.",
      "Diseño responsive avanzado adaptado para móviles y tablets.",
      "Tienda online con carrito de compras y pagos integrados (WebPay, PayPal, transferencias).",
      "Catálogo de productos ilimitado (con opción de categorías).",
      "Gestión de inventario (con alertas de stock).",
      "Optimización SEO para productos y categorías.",
      "Integración con redes sociales (Facebook, Instagram).",
      "Sistema de notificaciones de ventas y actualizaciones de pedidos.",
      "Estadísticas de ventas con gráficos.",
      "🎁 Regalo: Capacitación presencial/online en gestión de inventario y tienda online.",
    ],
    mantenimiento: {
      title: "Mantenimiento E-commerce (1 año)",
      features: [
        "Actualización de contenido menor (1 vez al mes)",
        "Copias de seguridad automáticas (semanales).",
        "Monitoreo y optimización de la velocidad de carga (mensual).",
        "Monitoreo y protección contra ataques cibernéticos. (mensual)",
        "Corrección de errores técnicos. (hasta 1 vez al mes).",
      ],
    },
    color: "#1E88E5",
  },
  {
    name: "Restaurantes",
    description:
      "Ideal para restaurantes que desean mejorar su presencia en línea, mostrar su menú y recibir reservas o pedidos en línea.",
    price: "250.000",
    beforePrice: "400.000",
    wspLink:
      "https://api.whatsapp.com/send?phone=56965926195&text=Hola%2C%20me%20interesa%20el%20plan%20Restaurantes",
    features: [
      "Hosting y Dominio durante 1 año.",
      "Sitio web de 4 a 5 páginas: Inicio, sobre nosotros, menú digital, galería de fotos, sección de reseñas y contacto.",
      "Sistema de reservas online via WhatsApp o integración con plataformas como OpenTable o Resmio.",
      "Mapa de ubicación en Google Maps y detalles de contacto.",
      "Optimización SEO local para mejorar visibilidad en Google.",
      "Integración con redes sociales (Facebook, Instagram).",
      "Diseño responsive avanzado para ofrecer una experiencia perfecta en dispositivos móviles.",
      "🎁 Regalo: Carta digitalizada con Código QR y hasta 8 fotos de alta calidad.",
    ],
    mantenimiento: {
      title: "Mantenimiento gastronómico (1 año)",
      features: [
        "Actualización de menú y precios (hasta 1 vez al mes).",
        "Copias de seguridad automáticas (semanales).",
        "Actualización de promociones especiales y eventos (hasta 1 vez al mes).",
        "Monitoreo y protección contra ataques cibernéticos.",
        "Corrección de errores técnicos. (hasta 1 vez al mes).",
      ],
    },
    color: "#FF7043",
  },
  {
    name: "Cabañas",
    description:
      "Pensado para cabañas y alojamientos turísticos que buscan atraer más huéspedes con un sitio web visualmente atractivo, que muestre todos los servicios y opciones de reservas.",
    price: "200.000",
    beforePrice: "350.000",
    wspLink:
      "https://api.whatsapp.com/send?phone=56965926195&text=Hola%2C%20me%20interesa%20el%20plan%20Caba%C3%B1as",
    features: [
      "Hosting y Dominio durante 1 año.",
      "Sitio web de 3 a 6 páginas: inicio, sobre nosotros, galería de fotos, página de servicios (descripción de cabañas), precios y disponibilidad, y contacto.",
      "Diseño responsive adaptado para móviles y tablets.",
      "Mapa de ubicación en Google Maps.",
      "Sistema de reservas online o integración con Booking/Airbnb.",
      "Optimización SEO local para aumentar visibilidad en Google.",
      "Integración con redes sociales (Facebook, Instagram).",
      "🎁 Regalo: Hasta 8 fotos de alta calidad del alojamiento.",
    ],
    mantenimiento: {
      title: "Mantenimiento especializado en Turismo (1 año)",
      features: [
        "Actualización de precios y disponibilidad (hasta 2 veces al mes).",
        "Copias de seguridad automáticas (mensuales).",
        "Monitoreo de seguridad y protección contra ataques cibernéticos.",
        "Optimización SEO básica para eventos y temporada alta.",
        "Optimización de velocidad de carga (trimestral)",
        "Corrección de errores técnicos y mejoras visuales (hasta 2 veces al mes).",
      ],
    },
    color: "#4CAF50",
  },
];

export default planes;