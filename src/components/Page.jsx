import React, { useState, useEffect } from 'react';
import { Menu, X, Coffee, Heart, Users, Phone, MapPin, Instagram, ShoppingBag } from 'lucide-react';

import logo from "../assets/Logo.jpg";
import MerengosImg from "../assets/Merengos.jpg"
import HeladosCremaImg from "../assets/HeladosCrema.jpg"
import GalletasImg from "../assets/Galletas.jpg"
import BebidasImg from "../assets/Bebidas.jpg"
import HeladosImg from "../assets/Helados.jpg"
import PostresImg from "../assets/Postres.jpg"
import FiltradoImg from "../assets/Filtrados.avif"

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
    <nav className={`fixed w-full top-0 z-50 transition-all duration-500 ${scrolled ? "bg-white/90 backdrop-blur-md shadow-md" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <div className="flex items-center space-x-2 cursor-pointer select-none" onClick={() => setActiveSection("inicio")}>
            <img src={logo} alt="Logo Set Coffee" className="w-10 h-10 rounded-full object-cover shadow-md" />
            <span className="text-2xl font-bold text-amber-900 tracking-wide" style={{ fontFamily: "serif" }}>Set Coffee</span>
          </div>
          <div className="hidden md:flex items-center space-x-6 lg:space-x-10">
            {menuItems.map((item) => (
              <button key={item.id} onClick={() => setActiveSection(item.id)} className={`relative text-base lg:text-lg font-medium transition-all duration-300 ${activeSection === item.id ? "text-pink-300" : "text-amber-900 hover:text-pink-300"}`}>
                {item.label}
                {activeSection === item.id && <span className="absolute bottom-[-6px] left-0 w-full h-[2px] bg-pink-300 rounded-full animate-fadeIn"></span>}
              </button>
            ))}
          </div>
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-amber-900 transition-transform hover:scale-110">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
        <div className={`md:hidden overflow-hidden transition-all duration-500 ${isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}`}>
          <div className="flex flex-col py-3 space-y-2">
            {menuItems.map((item) => (
              <button key={item.id} onClick={() => { setActiveSection(item.id); setIsOpen(false); }} className={`w-full text-left px-4 py-3 rounded-md text-lg transition-colors duration-300 ${activeSection === item.id ? "text-pink-300 bg-amber-50" : "text-amber-900 hover:bg-pink-50"}`}>
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

const Hero = ({ setActiveSection }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 pt-20 sm:pt-24 pb-10 overflow-hidden" style={{ backgroundColor: "#DDC7AB" }}>
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-white rounded-full blur-3xl absolute -top-40 -left-40" />
        <div className="w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-pink-200 rounded-full blur-3xl absolute bottom-0 right-0" />
      </div>
      <div className="relative z-10 max-w-5xl mx-auto text-center animate-fadeIn">
        <div className="flex justify-center mb-6 sm:mb-10">
          <div className="p-2 sm:p-3 bg-white/90 rounded-full shadow-2xl animate-bounce-slow">
            <div className="p-3 bg-white/90 rounded-full shadow-2xl">
              <img src={logo} alt="Logo Set Coffee" className="w-40 h-40 object-cover rounded-full border-4 border-pink-200 shadow-md transition-transform duration-500 hover:scale-110" />
            </div>
          </div>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 tracking-tight leading-tight px-4" style={{ color: "#4D2417", fontFamily: "serif" }}>Set Coffee</h1>
        <p className="text-2xl sm:text-2xl md:text-3xl italic mb-6 sm:mb-8 px-4" style={{ color: "#4D2417" }}>El arte de cultivar🌱, el placer de degustar✨</p>
        <p className="text-lg sm:text-lg md:text-xl mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-4" style={{ color: "#4D2417" }}>Descubre nuestros productos artesanales elaborados con pasión, donde cada creación celebra la riqueza y versatilidad del café colombiano.</p>
        <button onClick={() => setActiveSection("productos")} className="relative px-8 sm:px-10 py-4 text-lg font-semibold text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 mb-8 sm:mb-16" style={{ backgroundColor: "#FBC3CC" }}>
          Ver Productos
          <span className="absolute inset-0 rounded-full bg-white opacity-0 hover:opacity-10 transition-opacity" />
        </button>
      </div>
    </section>
  );
};

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    { id: 1, nombre: "Postres de Café", descripcion: "Postres artesanales con el toque distintivo del café colombiano.", descripcionCompleta: "Variedad de postres elaborados con ingredientes frescos y café de alta calidad. Perfectos para disfrutar después de una buena comida o en cualquier momento del día.", precio: "$4.000", imagen: PostresImg },
    { id: 2, nombre: "Merengos de Café", descripcion: "Merengos suaves con notas de café espresso.", descripcionCompleta: "Delicados merengos con una ligera textura crujiente por fuera y suaves por dentro, infusionados con el sabor intenso del café colombiano.", precio: "$400", imagen: MerengosImg },
    { id: 3, nombre: "Helados de Café en Crema", descripcion: "Helados artesanales con café cremoso y textura suave.", descripcionCompleta: "Helado de crema preparado con café recién filtrado, ofreciendo una mezcla perfecta entre dulzura y amargor que refresca y estimula los sentidos.", precio: "$2.500", imagen: HeladosCremaImg },
    { id: 4, nombre: "Helados con paleta de Café", descripcion: "Helados artesanales con café cremoso y textura suave.", descripcionCompleta: "Helado de crema preparado con café recién filtrado, ofreciendo una mezcla perfecta entre dulzura y amargor, esta vez con paleta.", precio: "$2.000", imagen: HeladosImg },
    { id: 5, nombre: "Filtrados de Café", descripcion: "Café filtrado con métodos artesanales.", descripcionCompleta: "Preparaciones filtradas con distintos métodos como Chemex, V60 o prensa francesa. Cada filtrado resalta perfiles únicos del café colombiano.", precio: "Varía según el filtrado", imagen: FiltradoImg },
    { id: 6, nombre: "Galletas de Café", descripcion: "Galletas crocantes con esencia de café.", descripcionCompleta: "Galletas caseras con notas de café tostado y trozos de chocolate, ideales para acompañar una taza de espresso o un filtrado.", precio: "$1.500", imagen: GalletasImg },
    { id: 7, nombre: "Bebidas a base de Café", descripcion: "Bebidas innovadoras frías y calientes con base de café.", descripcionCompleta: "Amplia gama de bebidas creadas a partir del café colombiano: desde frappés y cócteles hasta lattes especiados y bebidas sin alcohol.", precio: "$8.000", imagen: BebidasImg },
  ];

  return (
    <section className="relative min-h-screen py-16 sm:py-20 md:py-24 px-4 sm:px-6 overflow-hidden" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-[#DDC7AB] rounded-full blur-3xl absolute top-20 left-10" />
        <div className="w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] bg-[#FBC3CC] rounded-full blur-3xl absolute bottom-10 right-10" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 md:mb-20 animate-fadeIn px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 tracking-tight" style={{ color: "#4D2417", fontFamily: "serif" }}>Nuestros Productos</h2>
          <p className="text-xl sm:text-xl md:text-2xl font-light max-w-2xl mx-auto" style={{ color: "#4D2417" }}>Cada creación refleja la pasión y el arte detrás del sabor del café colombiano ☕</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {products.map((product) => (
            <div key={product.id} className="group relative bg-white rounded-2xl sm:rounded-3xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer animate-fadeIn" onClick={() => setSelectedProduct(product)}>
              <div className="h-48 w-full bg-[#DDC7AB] flex items-center justify-center overflow-hidden">
                <img src={product.imagen} alt={product.nombre} className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="p-5 sm:p-5 md:p-6">
                <h3 className="text-xl sm:text-2xl font-bold mb-3" style={{ color: "#4D2417", fontFamily: "serif" }}>{product.nombre}</h3>
                <p className="text-base sm:text-base mb-4 leading-relaxed" style={{ color: "#4D2417" }}>{product.descripcion}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl sm:text-2xl font-bold" style={{ color: "#FBC3CC" }}>{product.precio}</span>
                  <ShoppingBag className="text-pink-300 group-hover:scale-110 transition-transform duration-300" size={26} />
                </div>
              </div>
              <div className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-[#FBC3CC]/60 to-[#DDC7AB]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
        {selectedProduct && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 sm:p-6 z-50 animate-fadeIn" onClick={() => setSelectedProduct(null)}>
            <div className="relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 max-w-md w-full shadow-2xl animate-scaleIn" onClick={(e) => e.stopPropagation()}>
              <button onClick={() => setSelectedProduct(null)} className="absolute top-3 right-3 sm:top-4 sm:right-4 text-gray-500 hover:text-[#4D2417] transition-colors">
                <X size={28} className="sm:w-8 sm:h-8" />
              </button>
              <div className="text-center">
                <div className="mb-6 overflow-hidden rounded-xl">
                  <img src={selectedProduct.imagen} alt={selectedProduct.nombre} className="w-full h-56 object-cover" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: "#4D2417", fontFamily: "serif" }}>{selectedProduct.nombre}</h3>
                <p className="mb-6 leading-relaxed text-base sm:text-lg" style={{ color: "#4D2417" }}>{selectedProduct.descripcionCompleta}</p>
                <p className="text-3xl sm:text-3xl font-bold mb-6 sm:mb-8" style={{ color: "#FBC3CC" }}>{selectedProduct.precio}</p>
                <button onClick={() => setSelectedProduct(null)} className="w-full py-3 rounded-full font-semibold text-white hover:opacity-90 transition-opacity text-lg" style={{ backgroundColor: "#FBC3CC" }}>Cerrar</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section className="relative min-h-screen py-16 sm:py-20 md:py-24 px-4 sm:px-6 overflow-hidden" style={{ backgroundColor: "#DDC7AB" }}>
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-[#FBC3CC] rounded-full blur-3xl absolute top-20 left-10" />
        <div className="w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] bg-white rounded-full blur-3xl absolute bottom-10 right-10" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 md:mb-20 animate-fadeIn px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 tracking-tight" style={{ color: "#4D2417", fontFamily: "serif" }}>Sobre Nosotros</h2>
          <p className="text-lg sm:text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed" style={{ color: "#4D2417" }}>Tradición, pasión y arte en cada producto. Inspirados en la riqueza del café colombiano.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 mb-12 sm:mb-16">
          <div className="group bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl animate-fadeIn">
            <div className="flex items-center mb-4 sm:mb-6">
              <Heart className="text-pink-300 mr-3 group-hover:scale-110 transition-transform" size={32} />
              <h3 className="text-2xl sm:text-3xl font-bold" style={{ color: "#4D2417", fontFamily: "serif" }}>Misión</h3>
            </div>
            <p className="text-base sm:text-lg leading-relaxed" style={{ color: "#4D2417" }}>Nuestra misión es desarrollar productos innovadores a base de café que inspiren nuevas experiencias sensoriales en nuestros clientes. Buscamos transformar este ingrediente tradicional en propuestas únicas que destaquen por su sabor, calidad y autenticidad. Nos comprometemos a crear productos que conquisten el paladar del consumidor y generen una conexión genuina con el arte del café artesanal.</p>
          </div>
          <div className="group bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl animate-fadeIn">
            <div className="flex items-center mb-4 sm:mb-6">
              <Users className="text-pink-300 mr-3 group-hover:scale-110 transition-transform" size={32} />
              <h3 className="text-2xl sm:text-3xl font-bold" style={{ color: "#4D2417", fontFamily: "serif" }}>Visión</h3>
            </div>
            <p className="text-base sm:text-lg leading-relaxed" style={{ color: "#4D2417" }}>Nuestra visión es consolidarnos como una marca reconocida y cercana, integrando nuestros productos a la vida cotidiana de las personas. En el corto plazo, aspiramos a expandir nuestra presencia con la apertura de múltiples puntos de venta propios, ofreciendo experiencias únicas alrededor del café. A largo plazo, buscamos mantenernos a la vanguardia mediante la innovación constante, garantizando que cada lanzamiento refleje calidad, autenticidad y evolución continua.</p>
          </div>
        </div>
        <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-xl mb-12 sm:mb-16 md:mb-20 animate-fadeIn">
          <div className="flex items-center mb-4 sm:mb-6">
            <Coffee className="text-pink-300 mr-3" size={32} />
            <h3 className="text-2xl sm:text-3xl font-bold" style={{ color: "#4D2417", fontFamily: "serif" }}>Nuestros Productos y Servicios</h3>
          </div>
          <p className="text-base sm:text-lg leading-relaxed mb-4" style={{ color: "#4D2417" }}>SET Coffee ofrecerá una propuesta innovadora basada en el café como ingrediente principal, combinando creatividad, calidad y sabor. Nuestra oferta incluirá una variedad de bebidas exclusivas —tanto con alcohol como sin alcohol—, acompañadas de postres artesanales y snacks distintivos.</p>
          <p className="text-base sm:text-lg leading-relaxed" style={{ color: "#4D2417" }}>Cada creación está cuidadosamente desarrollada para sorprender y deleitar a nuestros clientes, transformando el disfrute del café en una experiencia sensorial única y memorable.</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 animate-fadeIn">
          {[
            { title: "Calidad", desc: "Ingredientes premium y procesos artesanales.", icon: "⭐" },
            { title: "Sostenibilidad", desc: "Comprometidos con el medio ambiente y las comunidades cafeteras.", icon: "🌱" },
            { title: "Innovación", desc: "Fusionamos tradición con nuevas experiencias de sabor.", icon: "💡" },
          ].map((value, idx) => (
            <div key={idx} className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg text-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="text-5xl sm:text-6xl mb-4">{value.icon}</div>
              <h4 className="text-xl sm:text-2xl font-bold mb-3" style={{ color: "#4D2417", fontFamily: "serif" }}>{value.title}</h4>
              <p className="text-base sm:text-lg font-light leading-relaxed" style={{ color: "#4D2417" }}>{value.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section className="min-h-screen py-16 sm:py-20 px-4 sm:px-6 flex items-center justify-center" style={{ backgroundColor: "#DDC7AB" }}>
      <div className="max-w-4xl w-full bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2">
        <div className="p-6 sm:p-8 md:p-10 flex flex-col justify-center bg-gradient-to-b from-[#FBC3CC] to-[#EAA6B2] text-white">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6" style={{ fontFamily: "serif" }}>Contáctanos</h2>
          <p className="text-lg sm:text-xl mb-6 sm:mb-10 opacity-90 leading-relaxed">Si deseas conocer más sobre nuestros productos o tienes alguna inquietud, no dudes en comunicarte con nosotros.</p>
          <div className="space-y-4 sm:space-y-6">
            <div className="flex items-center">
              <div className="p-2 sm:p-3 bg-white/20 rounded-full mr-3 sm:mr-4">
                <Phone size={24} className="sm:w-7 sm:h-7" />
              </div>
              <span className="text-lg sm:text-xl font-medium">+57 320 381 6450</span>
            </div>
            <div className="flex items-center">
              <div className="p-2 sm:p-3 bg-white/20 rounded-full mr-3 sm:mr-4">
                <MapPin size={24} className="sm:w-7 sm:h-7" />
              </div>
              <span className="text-lg sm:text-xl font-medium">El Pital - Huila, Colombia</span>
            </div>
          </div>
        </div>
        <div className="p-6 sm:p-8 md:p-10 flex flex-col items-center justify-center text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6" style={{ color: "#4D2417", fontFamily: "serif" }}>Síguenos</h3>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 max-w-md leading-relaxed" style={{ color: "#4D2417" }}>Únete a nuestra comunidad y descubre las últimas novedades, productos y lanzamientos de <span className="font-semibold">Set Coffee</span>.</p>
          <div className="flex space-x-4 sm:space-x-6">
            <a href="https://www.instagram.com/set_coffee_?igsh=MTVzbHFrdXNnajh4Yg%3D%3D" className="p-4 sm:p-5 bg-[#FBC3CC] rounded-full hover:bg-[#EAA6B2] hover:scale-110 transition-all shadow-md">
              <Instagram size={32} className="text-white sm:w-9 sm:h-9" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-10 sm:py-12 md:py-14 px-4 sm:px-6 relative overflow-hidden" style={{ backgroundColor: "#4D2417" }}>
      <div className="absolute inset-0 opacity-10 bg-repeat"></div>
      <div className="relative max-w-6xl mx-auto text-center z-10">
        <div className="flex justify-center items-center mb-3 sm:mb-4">
          <div className="p-2 sm:p-3 bg-[#FBC3CC] rounded-full shadow-md mr-2 sm:mr-3 animate-pulse-slow">
            <Coffee size={28} className="text-[#4D2417] sm:w-8 sm:h-8" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-wide" style={{ fontFamily: "serif" }}>Set Coffee</h2>
        </div>
        <p className="text-[#DDC7AB] mb-6 sm:mb-8 text-base sm:text-lg italic max-w-xl mx-auto leading-relaxed px-4">El arte de cultivar, el placer de disfrutar.</p>
        <div className="flex justify-center space-x-4 sm:space-x-6 mb-6 sm:mb-10">
          <a href="https://www.instagram.com/set_coffee_?igsh=MTVzbHFrdXNnajh4Yg%3D%3D" className="p-3 sm:p-4 bg-[#FBC3CC] rounded-full hover:bg-[#EAA6B2] hover:scale-110 transition-all duration-300 shadow-lg">
            <Instagram className="text-white" size={24} />
          </a>
        </div>
        <div className="h-px w-2/3 mx-auto bg-[#DDC7AB] opacity-30 mb-4 sm:mb-6"></div>
        <p className="text-sm sm:text-base text-[#DDC7AB] px-4">© {new Date().getFullYear()} <span className="font-semibold">Set Coffee</span>. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default function App() {
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const sections = ['inicio', 'productos', 'nosotros', 'contacto'];
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { threshold: 0.3 });

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
        .animate-fadeIn { animation: fadeIn 0.6s ease-out; }
        .animate-bounce-slow { animation: bounce 3s infinite; }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-scaleIn { animation: scaleIn 0.3s ease-out; }
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
        .animate-pulse-slow { animation: pulse-slow 3s ease-in-out infinite; }
      `}</style>
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <div id="inicio"><Hero setActiveSection={setActiveSection} /></div>
      <div id="productos"><Products /></div>
      <div id="nosotros"><About /></div>
      <div id="contacto"><Contact /></div>
      <Footer />
    </div>
  );
}