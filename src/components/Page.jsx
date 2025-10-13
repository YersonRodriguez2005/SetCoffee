import React, { useState, useEffect } from 'react';
import { Menu, X, Coffee, Heart, Users, Phone, MapPin, Instagram, ShoppingBag } from 'lucide-react';

import logo from "../assets/logo.jpg";

// Componente de Navegación
const Navbar = ({ activeSection, setActiveSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { id: "inicio", label: "Inicio" },
    { id: "productos", label: "Productos" },
    { id: "nosotros", label: "Nosotros" },
    { id: "contacto", label: "Contacto" },
  ];

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${scrolled
        ? "bg-white/90 backdrop-blur-md shadow-md"
        : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div
            className="flex items-center space-x-2 cursor-pointer select-none"
            onClick={() => setActiveSection("inicio")}
          >
            <img
              src={logo}
              alt="Logo Set Coffee"
              className="w-10 h-10 rounded-full object-cover shadow-md"
            />
            <span
              className="text-2xl font-bold text-amber-900 tracking-wide"
              style={{ fontFamily: "serif" }}
            >
              Set Coffee
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`relative text-lg font-medium transition-all duration-300 ${activeSection === item.id
                  ? "text-pink-300"
                  : "text-amber-900 hover:text-pink-300"
                  }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute bottom-[-6px] left-0 w-full h-[2px] bg-pink-300 rounded-full animate-fadeIn"></span>
                )}
              </button>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-amber-900 transition-transform hover:scale-110"
          >
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ${isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
            }`}
        >
          <div className="flex flex-col py-3 space-y-2">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveSection(item.id);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-4 py-3 rounded-md text-lg transition-colors duration-300 ${activeSection === item.id
                  ? "text-pink-300 bg-amber-50"
                  : "text-amber-900 hover:bg-pink-50"
                  }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Animaciones personalizadas */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(5px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </nav>
  );
};

// Componente Hero/Inicio
const Hero = ({ setActiveSection }) => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center px-6 pt-24 overflow-hidden"
      style={{ backgroundColor: "#DDC7AB" }}
    >
      {/* Fondo decorativo sutil */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="w-[500px] h-[500px] bg-white rounded-full blur-3xl absolute -top-40 -left-40" />
        <div className="w-[400px] h-[400px] bg-pink-200 rounded-full blur-3xl absolute bottom-0 right-0" />
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 max-w-5xl mx-auto text-center animate-fadeIn">
        {/* Ícono central animado */}
        <div className="flex justify-center mb-10">
          <div className="p-3 bg-white/90 rounded-full shadow-2xl animate-bounce-slow">
            <img
              src={logo}
              alt="Logo Set Coffee"
              className="w-40 h-40 object-cover rounded-full border-4 border-pink-200 shadow-md transition-transform duration-500 hover:scale-110"
            />
          </div>
        </div>

        {/* Título */}
        <h1
          className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight"
          style={{ color: "#4D2417", fontFamily: "serif" }}
        >
          Set Coffee
        </h1>

        {/* Subtítulo */}
        <p
          className="text-2xl md:text-3xl italic mb-8"
          style={{ color: "#4D2417" }}
        >
          El arte de cultivar, el placer de disfrutar
        </p>

        {/* Descripción */}
        <p
          className="text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed"
          style={{ color: "#4D2417" }}
        >
          Descubre nuestros productos artesanales elaborados con pasión, donde
          cada creación celebra la riqueza y versatilidad del café colombiano.
        </p>

        {/* Botón principal */}
        <button
          onClick={() => setActiveSection("productos")}
          className="relative px-10 py-4 text-lg font-semibold text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 mb-16"
          style={{ backgroundColor: "#FBC3CC" }}
        >
          Ver Productos
          <span className="absolute inset-0 rounded-full bg-white opacity-0 hover:opacity-10 transition-opacity" />
        </button>
      </div>
    </section>
  );
};

// Componente de Productos
const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      id: 1,
      nombre: "Tiramisú de Café",
      descripcion: "Postre artesanal con sabor intenso a café espresso",
      descripcionCompleta:
        "Delicioso tiramisú elaborado con café colombiano premium, mascarpone cremoso y un toque de cacao. Cada capa cuenta una historia de sabor.",
      precio: "$12.000",
      imagen: "☕🍰",
    },
    {
      id: 2,
      nombre: "Brownies de Café",
      descripcion: "Brownie húmedo con esencia de café tostado",
      descripcionCompleta:
        "Brownies artesanales que combinan chocolate belga con café especial, creando una experiencia única para los amantes del chocolate y el café.",
      precio: "$8.000",
      imagen: "🍫☕",
    },
    {
      id: 3,
      nombre: "Galletas Café",
      descripcion: "Galletas crujientes con granos de café",
      descripcionCompleta:
        "Galletas horneadas al momento con granos de café molido, mantequilla artesanal y un toque de vainilla. Perfectas para acompañar tu bebida favorita.",
      precio: "$6.000",
      imagen: "🍪☕",
    },
    {
      id: 4,
      nombre: "Cheesecake Café",
      descripcion: "Cheesecake cremoso con cobertura de café",
      descripcionCompleta:
        "Suave cheesecake con base de galleta, cubierto con una deliciosa crema de café y decorado con granos tostados.",
      precio: "$15.000",
      imagen: "🍰☕",
    },
    {
      id: 5,
      nombre: "Muffins de Café",
      descripcion: "Muffins esponjosos con chips de chocolate",
      descripcionCompleta:
        "Muffins recién horneados con café aromático y chips de chocolate. El desayuno perfecto o merienda ideal.",
      precio: "$5.000",
      imagen: "🧁☕",
    },
    {
      id: 6,
      nombre: "Helado de Café",
      descripcion: "Helado artesanal con café colombiano",
      descripcionCompleta:
        "Helado cremoso elaborado con café colombiano de origen, leche fresca y un toque de caramelo. Refrescante y energizante.",
      precio: "$10.000",
      imagen: "🍨☕",
    },
  ];

  return (
    <section
      className="relative min-h-screen py-24 px-6 overflow-hidden"
      style={{ backgroundColor: "#FFFFFF" }}
    >
      {/* Fondo decorativo */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="w-[400px] h-[400px] bg-[#DDC7AB] rounded-full blur-3xl absolute top-20 left-10" />
        <div className="w-[300px] h-[300px] bg-[#FBC3CC] rounded-full blur-3xl absolute bottom-10 right-10" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Título */}
        <div className="text-center mb-20 animate-fadeIn">
          <h2
            className="text-5xl md:text-6xl font-bold mb-4 tracking-tight"
            style={{ color: "#4D2417", fontFamily: "serif" }}
          >
            Nuestros Productos
          </h2>
          <p
            className="text-xl md:text-2xl font-light max-w-2xl mx-auto"
            style={{ color: "#4D2417" }}
          >
            Cada creación refleja la pasión y el arte detrás del sabor del café
            colombiano ☕
          </p>
        </div>

        {/* Grid de productos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative bg-white rounded-3xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer animate-fadeIn"
              onClick={() => setSelectedProduct(product)}
            >
              {/* Imagen o ícono */}
              <div
                className="h-52 flex items-center justify-center text-8xl transition-all duration-300 group-hover:scale-110"
                style={{ backgroundColor: "#DDC7AB" }}
              >
                {product.imagen}
              </div>

              {/* Contenido */}
              <div className="p-6">
                <h3
                  className="text-2xl font-bold mb-2"
                  style={{ color: "#4D2417", fontFamily: "serif" }}
                >
                  {product.nombre}
                </h3>
                <p
                  className="text-base mb-4 leading-relaxed"
                  style={{ color: "#4D2417" }}
                >
                  {product.descripcion}
                </p>

                <div className="flex justify-between items-center">
                  <span
                    className="text-2xl font-bold"
                    style={{ color: "#FBC3CC" }}
                  >
                    {product.precio}
                  </span>
                  <ShoppingBag
                    className="text-pink-300 group-hover:scale-110 transition-transform duration-300"
                    size={26}
                  />
                </div>
              </div>

              {/* Sombra animada inferior */}
              <div className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-[#FBC3CC]/60 to-[#DDC7AB]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Modal de Detalle */}
        {selectedProduct && (
          <div
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-6 z-50 animate-fadeIn"
            onClick={() => setSelectedProduct(null)}
          >
            <div
              className="relative bg-white rounded-3xl p-10 max-w-md w-full shadow-2xl animate-scaleIn"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Botón cerrar */}
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-[#4D2417] transition-colors"
              >
                <X size={28} />
              </button>

              {/* Contenido del modal */}
              <div className="text-center">
                <div className="text-8xl mb-4">{selectedProduct.imagen}</div>
                <h3
                  className="text-3xl font-bold mb-4"
                  style={{ color: "#4D2417", fontFamily: "serif" }}
                >
                  {selectedProduct.nombre}
                </h3>
                <p
                  className="mb-6 leading-relaxed"
                  style={{ color: "#4D2417" }}
                >
                  {selectedProduct.descripcionCompleta}
                </p>
                <p
                  className="text-3xl font-bold mb-8"
                  style={{ color: "#FBC3CC" }}
                >
                  {selectedProduct.precio}
                </p>
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="w-full py-3 rounded-full font-semibold text-white hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: "#FBC3CC" }}
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

// Componente Nosotros
const About = () => {
  return (
    <section
      className="relative min-h-screen py-24 px-6 overflow-hidden"
      style={{ backgroundColor: "#DDC7AB" }}
    >
      {/* Fondo decorativo */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="w-[400px] h-[400px] bg-[#FBC3CC] rounded-full blur-3xl absolute top-20 left-10" />
        <div className="w-[300px] h-[300px] bg-white rounded-full blur-3xl absolute bottom-10 right-10" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Título principal */}
        <div className="text-center mb-20 animate-fadeIn">
          <h2
            className="text-5xl md:text-6xl font-bold mb-4 tracking-tight"
            style={{ color: "#4D2417", fontFamily: "serif" }}
          >
            Sobre Nosotros
          </h2>
          <p
            className="text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed"
            style={{ color: "#4D2417" }}
          >
            Tradición, pasión y arte en cada producto. Inspirados en la riqueza del café colombiano.
          </p>
        </div>

        {/* Misión y Visión */}
        <div className="grid md:grid-cols-2 gap-10 mb-16">
          <div className="group bg-white rounded-3xl p-10 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl animate-fadeIn">
            <div className="flex items-center mb-6">
              <Heart className="text-pink-300 mr-3 group-hover:scale-110 transition-transform" size={36} />
              <h3
                className="text-3xl font-bold"
                style={{ color: "#4D2417", fontFamily: "serif" }}
              >
                Misión
              </h3>
            </div>
            <p
              className="text-lg leading-relaxed"
              style={{ color: "#4D2417" }}
            >
              Nuestra misión es desarrollar productos innovadores a base de café que inspiren
              nuevas experiencias sensoriales en nuestros clientes. Buscamos transformar este
              ingrediente tradicional en propuestas únicas que destaquen por su sabor, calidad
              y autenticidad. Nos comprometemos a crear productos que conquisten el paladar del
              consumidor y generen una conexión genuina con el arte del café artesanal.
            </p>
          </div>

          <div className="group bg-white rounded-3xl p-10 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl animate-fadeIn">
            <div className="flex items-center mb-6">
              <Users className="text-pink-300 mr-3 group-hover:scale-110 transition-transform" size={36} />
              <h3
                className="text-3xl font-bold"
                style={{ color: "#4D2417", fontFamily: "serif" }}
              >
                Visión
              </h3>
            </div>
            <p
              className="text-lg leading-relaxed"
              style={{ color: "#4D2417" }}
            >
              Nuestra visión es consolidarnos como una marca reconocida y cercana, integrando
              nuestros productos a la vida cotidiana de las personas. En el corto plazo, aspiramos
              a expandir nuestra presencia con la apertura de múltiples puntos de venta propios,
              ofreciendo experiencias únicas alrededor del café. A largo plazo, buscamos mantenernos
              a la vanguardia mediante la innovación constante, garantizando que cada lanzamiento
              refleje calidad, autenticidad y evolución continua.
            </p>
          </div>
        </div>

        {/* Historia */}
        <div className="bg-white rounded-3xl p-12 shadow-xl mb-20 animate-fadeIn">
          <div className="flex items-center mb-6">
            <Coffee className="text-pink-300 mr-3" size={36} />
            <h3
              className="text-3xl font-bold"
              style={{ color: "#4D2417", fontFamily: "serif" }}
            >
              Nuestros Productos y Servicios
            </h3>
          </div>
          <p
            className="text-lg leading-relaxed mb-4"
            style={{ color: "#4D2417" }}
          >
            SET Coffee ofrecerá una propuesta innovadora basada en el café como ingrediente principal,
            combinando creatividad, calidad y sabor. Nuestra oferta incluirá una variedad de bebidas
            exclusivas —tanto con alcohol como sin alcohol—, acompañadas de postres artesanales y
            snacks distintivos.
          </p>
          <p
            className="text-lg leading-relaxed"
            style={{ color: "#4D2417" }}
          >
            Cada creación está cuidadosamente desarrollada para sorprender y
            deleitar a nuestros clientes, transformando el disfrute del café en una experiencia
            sensorial única y memorable.
          </p>
        </div>

        {/* Valores */}
        <div className="grid md:grid-cols-3 gap-10 animate-fadeIn">
          {[
            {
              title: "Calidad",
              desc: "Ingredientes premium y procesos artesanales.",
              icon: "⭐",
            },
            {
              title: "Sostenibilidad",
              desc: "Comprometidos con el medio ambiente y las comunidades cafeteras.",
              icon: "🌱",
            },
            {
              title: "Innovación",
              desc: "Fusionamos tradición con nuevas experiencias de sabor.",
              icon: "💡",
            },
          ].map((value, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-8 shadow-lg text-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="text-6xl mb-4">{value.icon}</div>
              <h4
                className="text-2xl font-bold mb-3"
                style={{ color: "#4D2417", fontFamily: "serif" }}
              >
                {value.title}
              </h4>
              <p
                className="text-lg font-light leading-relaxed"
                style={{ color: "#4D2417" }}
              >
                {value.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Componente Contacto
const Contact = () => {
  return (
    <section
      className="min-h-screen py-20 px-6 flex items-center justify-center"
      style={{ backgroundColor: "#DDC7AB" }}
    >
      <div className="max-w-4xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2">

        {/* Columna izquierda - Información de contacto */}
        <div className="p-10 flex flex-col justify-center bg-gradient-to-b from-[#FBC3CC] to-[#EAA6B2] text-white">
          <h2 className="text-4xl font-bold mb-6" style={{ fontFamily: "serif" }}>
            Contáctanos
          </h2>
          <p className="text-lg mb-10 opacity-90">
            Si deseas conocer más sobre nuestros productos o tienes alguna inquietud, no dudes en comunicarte con nosotros.
          </p>

          <div className="space-y-6">
            <div className="flex items-center">
              <div className="p-3 bg-white/20 rounded-full mr-4">
                <Phone size={24} />
              </div>
              <span className="text-lg font-medium">+57 300 123 4567</span>
            </div>

            <div className="flex items-center">
              <div className="p-3 bg-white/20 rounded-full mr-4">
                <MapPin size={24} />
              </div>
              <span className="text-lg font-medium">El Pital - Huila, Colombia</span>
            </div>
          </div>
        </div>

        {/* Columna derecha - Redes sociales */}
        <div className="p-10 flex flex-col items-center justify-center text-center">
          <h3
            className="text-3xl font-bold mb-6"
            style={{ color: "#4D2417", fontFamily: "serif" }}
          >
            Síguenos
          </h3>

          <p className="text-lg mb-8 max-w-md" style={{ color: "#4D2417" }}>
            Únete a nuestra comunidad y descubre las últimas novedades, productos y lanzamientos de <span className="font-semibold">Set Coffee</span>.
          </p>

          <div className="flex space-x-6">
            <a
              href="#"
              className="p-5 bg-[#FBC3CC] rounded-full hover:bg-[#EAA6B2] hover:scale-110 transition-all shadow-md"
            >
              <Instagram size={32} className="text-white" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

// Componente Footer
const Footer = () => {
  return (
    <footer
      className="py-14 px-6 relative overflow-hidden"
      style={{ backgroundColor: "#4D2417" }}
    >
      {/* Elemento decorativo de fondo */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/coffee-beans.png')] bg-repeat"></div>

      <div className="relative max-w-6xl mx-auto text-center z-10">
        {/* Logo y marca */}
        <div className="flex justify-center items-center mb-4">
          <div className="p-3 bg-[#FBC3CC] rounded-full shadow-md mr-3 animate-pulse-slow">
            <Coffee size={28} className="text-[#4D2417]" />
          </div>
          <h2
            className="text-3xl md:text-4xl font-bold text-white tracking-wide"
            style={{ fontFamily: "serif" }}
          >
            Set Coffee
          </h2>
        </div>

        {/* Lema */}
        <p
          className="text-[#DDC7AB] mb-8 text-lg italic max-w-xl mx-auto leading-relaxed"
        >
          El arte de cultivar, el placer de disfrutar.
        </p>

        {/* Íconos de redes sociales */}
        <div className="flex justify-center space-x-6 mb-10">
          <a
            href="#"
            className="p-4 bg-[#FBC3CC] rounded-full hover:bg-[#EAA6B2] hover:scale-110 transition-all duration-300 shadow-lg"
          >
            <Instagram className="text-white" size={26} />
          </a>
        </div>

        {/* Línea divisoria */}
        <div className="h-px w-2/3 mx-auto bg-[#DDC7AB] opacity-30 mb-6"></div>

        {/* Derechos reservados */}
        <p className="text-sm text-[#DDC7AB]">
          © {new Date().getFullYear()} <span className="font-semibold">Set Coffee</span>.
          Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

// Componente Principal
export default function App() {
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const sections = ['inicio', 'productos', 'nosotros', 'contacto'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach(id => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (activeSection) {
      document.getElementById(activeSection)?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [activeSection]);

  return (
    <div className="font-sans">
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }
        .animate-bounce-slow {
          animation: bounce 3s infinite;
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>

      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />

      <div id="inicio">
        <Hero setActiveSection={setActiveSection} />
      </div>

      <div id="productos">
        <Products />
      </div>

      <div id="nosotros">
        <About />
      </div>

      <div id="contacto">
        <Contact />
      </div>

      <Footer />
    </div>
  );
}