"use client"

import { useState } from 'react'
import Image from 'next/image'
import { Menu, X, Diamond, Star, Clock, Shield, Sparkles, ChevronLeft, ChevronRight, Phone, Mail, MapPin, Instagram, Facebook, MessageCircle, Calendar, ArrowRight, Play } from 'lucide-react'

export default function HomePage() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null)

  const testimonials = [
    {
      text: "Una experiencia verdaderamente excepcional. El equipo de Maison Aurum entendió perfectamente mi visión y creó una pieza que superó todas mis expectativas. La atención al detalle es incomparable.",
      role: "Coleccionista Privada",
      location: "Madrid"
    },
    {
      text: "Después de visitar las mejores joyerías del mundo, encontré en Maison Aurum algo único: artesanía impecable combinada con un servicio verdaderamente personalizado.",
      role: "Empresario",
      location: "Barcelona"
    },
    {
      text: "Mi anillo de compromiso de la colección Eternal es simplemente perfecto. Cada vez que lo miro, recuerdo la magia del momento en que lo descubrí en su atelier.",
      role: "Cliente VIP",
      location: "Marbella"
    }
  ]

  const collections = [
    {
      name: "Eternal",
      description: "Piezas atemporales que trascienden generaciones",
      pieces: "12 piezas exclusivas"
    },
    {
      name: "Heritage",
      description: "Inspiradas en la tradición de la alta joyería",
      pieces: "8 creaciones únicas"
    },
    {
      name: "Lumière",
      description: "Diamantes que capturan la luz infinita",
      pieces: "15 obras maestras"
    }
  ]

  const featuredProducts = [
    {
      name: "Collar Serpentine",
      collection: "Eternal",
      material: "Oro 18k con diamantes",
      price: "Consultar precio"
    },
    {
      name: "Anillo Aurora",
      collection: "Lumière",
      material: "Oro blanco y diamante central",
      price: "Consultar precio"
    },
    {
      name: "Brazalete Majestic",
      collection: "Heritage",
      material: "Oro rosa 18k",
      price: "Consultar precio"
    },
    {
      name: "Pendientes Cascade",
      collection: "Lumière",
      material: "Diamantes en cascada",
      price: "Consultar precio"
    }
  ]

  const services = [
    {
      icon: Diamond,
      title: "Diseño Personalizado",
      description: "Colaboramos contigo para crear piezas únicas que reflejen tu visión y estilo personal"
    },
    {
      icon: Shield,
      title: "Certificación GIA",
      description: "Todos nuestros diamantes cuentan con certificación del Instituto Gemológico de América"
    },
    {
      icon: Clock,
      title: "Restauración Experta",
      description: "Devolvemos el esplendor original a joyas heredadas con técnicas tradicionales"
    },
    {
      icon: Sparkles,
      title: "Mantenimiento Exclusivo",
      description: "Programa de cuidado vitalicio para mantener tus piezas en perfectas condiciones"
    }
  ]

  const processSteps = [
    {
      number: "01",
      title: "Consulta Privada",
      description: "Una conversación íntima para entender tus deseos y explorar posibilidades"
    },
    {
      number: "02",
      title: "Diseño y Selección",
      description: "Presentamos bocetos y seleccionamos las gemas perfectas para tu pieza"
    },
    {
      number: "03",
      title: "Artesanía",
      description: "Nuestros maestros orfebres dan vida a tu visión con técnicas centenarias"
    },
    {
      number: "04",
      title: "Revelación",
      description: "El momento ceremonial de descubrir tu pieza terminada en nuestro atelier"
    }
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <main className="min-h-screen" style={{ backgroundColor: '#0A0A0A', color: '#F5F3EF' }}>
      {/* Sticky Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-500" style={{ backgroundColor: 'rgba(10, 10, 10, 0.95)', backdropFilter: 'blur(20px)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* Logo */}
            <a href="#hero" className="relative z-50">
              <h1 className="text-2xl lg:text-3xl tracking-widest" style={{ fontFamily: 'Cormorant Garamond, serif', color: '#C9A962' }}>
                MAISON AURUM
              </h1>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-12">
              <a href="#about" className="text-sm tracking-widest uppercase transition-colors duration-300 hover:text-amber-400" style={{ fontFamily: 'Montserrat, sans-serif', color: '#8A8578' }}>
                Historia
              </a>
              <a href="#collections" className="text-sm tracking-widest uppercase transition-colors duration-300 hover:text-amber-400" style={{ fontFamily: 'Montserrat, sans-serif', color: '#8A8578' }}>
                Colecciones
              </a>
              <a href="#services" className="text-sm tracking-widest uppercase transition-colors duration-300 hover:text-amber-400" style={{ fontFamily: 'Montserrat, sans-serif', color: '#8A8578' }}>
                Servicios
              </a>
              <a href="#process" className="text-sm tracking-widest uppercase transition-colors duration-300 hover:text-amber-400" style={{ fontFamily: 'Montserrat, sans-serif', color: '#8A8578' }}>
                Proceso
              </a>
              <a href="#booking" className="px-8 py-3 text-sm tracking-widest uppercase transition-all duration-500 border hover:bg-amber-400 hover:border-amber-400 hover:text-black" style={{ fontFamily: 'Montserrat, sans-serif', borderColor: '#C9A962', color: '#C9A962' }}>
                Reservar Cita
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
              className="lg:hidden relative z-50 p-2"
              aria-label="Toggle menu"
            >
              {mobileNavOpen ? (
                <X size={28} style={{ color: '#C9A962' }} />
              ) : (
                <Menu size={28} style={{ color: '#C9A962' }} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden fixed inset-0 transition-all duration-500 ${
            mobileNavOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
          style={{ backgroundColor: '#0A0A0A' }}
        >
          <div className="flex flex-col items-center justify-center h-full gap-8">
            <a
              href="#about"
              onClick={() => setMobileNavOpen(false)}
              className="text-2xl tracking-widest uppercase"
              style={{ fontFamily: 'Cormorant Garamond, serif', color: '#F5F3EF' }}
            >
              Historia
            </a>
            <a
              href="#collections"
              onClick={() => setMobileNavOpen(false)}
              className="text-2xl tracking-widest uppercase"
              style={{ fontFamily: 'Cormorant Garamond, serif', color: '#F5F3EF' }}
            >
              Colecciones
            </a>
            <a
              href="#services"
              onClick={() => setMobileNavOpen(false)}
              className="text-2xl tracking-widest uppercase"
              style={{ fontFamily: 'Cormorant Garamond, serif', color: '#F5F3EF' }}
            >
              Servicios
            </a>
            <a
              href="#process"
              onClick={() => setMobileNavOpen(false)}
              className="text-2xl tracking-widest uppercase"
              style={{ fontFamily: 'Cormorant Garamond, serif', color: '#F5F3EF' }}
            >
              Proceso
            </a>
            <a
              href="#booking"
              onClick={() => setMobileNavOpen(false)}
              className="mt-4 px-12 py-4 text-lg tracking-widest uppercase border"
              style={{ fontFamily: 'Montserrat, sans-serif', borderColor: '#C9A962', color: '#C9A962' }}
            >
              Reservar Cita
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero.png"
            alt="Joyería de lujo Maison Aurum"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(10, 10, 10, 0.4), rgba(10, 10, 10, 0.8))' }} />
          <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }} />
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <div className="mb-8 flex items-center justify-center gap-4">
            <div className="w-16 h-px" style={{ backgroundColor: '#C9A962' }} />
            <Diamond size={20} style={{ color: '#C9A962' }} />
            <div className="w-16 h-px" style={{ backgroundColor: '#C9A962' }} />
          </div>
          
          <h2 className="text-5xl md:text-7xl lg:text-8xl tracking-wider mb-6" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            El Arte de la
            <span className="block mt-2" style={{ color: '#C9A962' }}>Eternidad</span>
          </h2>
          
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif', color: '#8A8578' }}>
            Piezas únicas forjadas a mano con oro de 18 quilates y diamantes certificados. 
            Cada creación es un legado que trasciende el tiempo.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="#collections"
              className="group px-12 py-4 text-sm tracking-widest uppercase transition-all duration-500 border hover:bg-amber-400 hover:border-amber-400 hover:text-black flex items-center gap-3"
              style={{ fontFamily: 'Montserrat, sans-serif', borderColor: '#C9A962', color: '#C9A962' }}
            >
              Explorar Colecciones
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#booking"
              className="px-12 py-4 text-sm tracking-widest uppercase transition-all duration-500"
              style={{ fontFamily: 'Montserrat, sans-serif', color: '#F5F3EF', backgroundColor: '#1A1814' }}
            >
              Agendar Consulta
            </a>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-px h-16" style={{ backgroundColor: '#C9A962' }} />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 lg:py-48 px-6 lg:px-12" style={{ backgroundColor: '#1A1814' }}>
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-12 flex items-center justify-center gap-4">
            <div className="w-24 h-px" style={{ backgroundColor: '#C9A962', opacity: 0.5 }} />
            <span className="text-xs tracking-widest uppercase" style={{ fontFamily: 'Montserrat, sans-serif', color: '#C9A962' }}>
              Nuestra Historia
            </span>
            <div className="w-24 h-px" style={{ backgroundColor: '#C9A962', opacity: 0.5 }} />
          </div>

          <h3 className="text-4xl md:text-5xl lg:text-6xl tracking-wide mb-12" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            Donde la Tradición se Encuentra con la <span style={{ color: '#C9A962' }}>Excelencia</span>
          </h3>

          <div className="max-w-4xl mx-auto space-y-8">
            <p className="text-lg leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif', color: '#8A8578' }}>
              Maison Aurum nació de la pasión por preservar el arte ancestral de la orfebrería 
              mientras abrazamos la innovación contemporánea. Cada pieza que creamos es el resultado 
              de cientos de horas de trabajo meticuloso, donde nuestros maestros artesanos transforman 
              los materiales más preciados en obras de arte portables.
            </p>
            <p className="text-lg leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif', color: '#8A8578' }}>
              Trabajamos exclusivamente con oro de 18 quilates de origen ético y diamantes 
              certificados por el Instituto Gemológico de América, garantizando que cada gema 
              cumple con los más altos estándares de pureza, corte y brillantez.
            </p>
          </div>

          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl mb-2" style={{ fontFamily: 'Cormorant Garamond, serif', color: '#C9A962' }}>18k</div>
              <div className="text-xs tracking-widest uppercase" style={{ fontFamily: 'Montserrat, sans-serif', color: '#8A8578' }}>Oro Puro</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl mb-2" style={{ fontFamily: 'Cormorant Garamond, serif', color: '#C9A962' }}>GIA</div>
              <div className="text-xs tracking-widest uppercase" style={{ fontFamily: 'Montserrat, sans-serif', color: '#8A8578' }}>Certificados</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl mb-2" style={{ fontFamily: 'Cormorant Garamond, serif', color: '#C9A962' }}>100%</div>
              <div className="text-xs tracking-widest uppercase" style={{ fontFamily: 'Montserrat, sans-serif', color: '#8A8578' }}>Artesanal</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl mb-2" style={{ fontFamily: 'Cormorant Garamond, serif', color: '#C9A962' }}>∞</div>
              <div className="text-xs tracking-widest uppercase" style={{ fontFamily: 'Montserrat, sans-serif', color: '#8A8578' }}>Garantía</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products / Collections */}
      <section id="collections" className="py-32 lg:py-48 px-6 lg:px-12" style={{ backgroundColor: '#0A0A0A' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="mb-8 flex items-center justify-center gap-4">
              <div className="w-24 h-px" style={{ backgroundColor: '#C9A962', opacity: 0.5 }} />
              <span className="text-xs tracking-widest uppercase" style={{ fontFamily: 'Montserrat, sans-serif', color: '#C9A962' }}>
                Colecciones
              </span>
              <div className="w-24 h-px" style={{ backgroundColor: '#C9A962', opacity: 0.5 }} />
            </div>
            <h3 className="text-4xl md:text-5xl lg:text-6xl tracking-wide" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              Obras Maestras <span style={{ color: '#C9A962' }}>Exclusivas</span>
            </h3>
          </div>

          {/* Collections Navigation */}
          <div className="flex flex-wrap justify-center gap-4 lg:gap-8 mb-16">
            {collections.map((collection, index) => (
              <a
                key={index}
                href="#collections"
                className="group px-8 py-4 border transition-all duration-500 hover:bg-amber-400 hover:border-amber-400"
                style={{ borderColor: '#C9A962', backgroundColor: 'transparent' }}
              >
                <span className="text-lg tracking-widest uppercase transition-colors duration-500 group-hover:text-black" style={{ fontFamily: 'Cormorant Garamond, serif', color: '#C9A962' }}>
                  {collection.name}
                </span>
              </a>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-1">
            {featuredProducts.map((product, index) => (
              <div
                key={index}
                className="group relative aspect-square overflow-hidden cursor-pointer"
                onMouseEnter={() => setHoveredProduct(index)}
                onMouseLeave={() => setHoveredProduct(null)}
                style={{ backgroundColor: '#1A1814' }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <Diamond 
                    size={80} 
                    className="transition-all duration-700"
                    style={{ 
                      color: hoveredProduct === index ? '#C9A962' : '#8A8578',
                      opacity: hoveredProduct === index ? 1 : 0.3,
                      transform: hoveredProduct === index ? 'scale(1.2) rotate(45deg)' : 'scale(1) rotate(0deg)'
                    }} 
                  />
                </div>
                
                <div 
                  className="absolute inset-0 flex flex-col justify-end p-6 transition-all duration-500"
                  style={{ 
                    background: hoveredProduct === index 
                      ? 'linear-gradient(to top, rgba(10, 10, 10, 0.95), transparent)' 
                      : 'linear-gradient(to top, rgba(10, 10, 10, 0.7), transparent)'
                  }}
                >
                  <span className="text-xs tracking-widest uppercase mb-2" style={{ fontFamily: 'Montserrat, sans-serif', color: '#C9A962' }}>
                    {product.collection}
                  </span>
                  <h4 className="text-xl mb-1" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                    {product.name}
                  </h4>
                  <p className="text-sm mb-3" style={{ fontFamily: 'Montserrat, sans-serif', color: '#8A8578' }}>
                    {product.material}
                  </p>
                  <div 
                    className="transition-all duration-500 overflow-hidden"
                    style={{ 
                      maxHeight: hoveredProduct === index ? '100px' : '0',
                      opacity: hoveredProduct === index ? 1 : 0
                    }}
                  >
                    <a
                      href="#booking"
                      className="inline-flex items-center gap-2 text-xs tracking-widest uppercase"
                      style={{ fontFamily: 'Montserrat, sans-serif', color: '#C9A962' }}
                    >
                      {product.price}
                      <ArrowRight size={14} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <a
              href="#booking"
              className="inline-flex items-center gap-3 text-sm tracking-widest uppercase transition-colors duration-300 hover:text-amber-400"
              style={{ fontFamily: 'Montserrat, sans-serif', color: '#C9A962' }}
            >
              Solicitar Catálogo Completo
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* Gallery Masonry */}
      <section id="gallery" className="py-32 lg:py-48 px-6 lg:px-12" style={{ backgroundColor: '#1A1814' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="mb-8 flex items-center justify-center gap-4">
              <div className="w-24 h-px" style={{ backgroundColor: '#C9A962', opacity: 0.5 }} />
              <span className="text-xs tracking-widest uppercase" style={{ fontFamily: 'Montserrat, sans-serif', color: '#C9A962' }}>
                Galería
              </span>
              <div className="w-24 h-px" style={{ backgroundColor: '#C9A962', opacity: 0.5 }} />
            </div>
            <h3 className="text-4xl md:text-5xl lg:text-6xl tracking-wide" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              Momentos de <span style={{ color: '#C9A962' }}>Belleza</span>
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            {/* Large Feature Image */}
            <div className="col-span-2 row-span-2 relative aspect-square overflow-hidden group">
              <Image
                src="/images/feature.png"
                alt="Pieza destacada de Maison Aurum"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <Play size={60} style={{ color: '#C9A962' }} />
              </div>
            </div>

            {/* Placeholder Gallery Items */}
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className="relative aspect-square overflow-hidden group"
                style={{ backgroundColor: '#0A0A0A' }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <Sparkles 
                    size={40} 
                    className="transition-all duration-500 group-hover:scale-125"
                    style={{ color: '#8A8578', opacity: 0.4 }} 
                  />
                </div>
                <div className="absolute inset-0 border opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ borderColor: '#C9A962' }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 lg:py-48 px-6 lg:px-12" style={{ backgroundColor: '#0A0A0A' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="mb-8 flex items-center justify-center gap-4">
              <div className="w-24 h-px" style={{ backgroundColor: '#C9A962', opacity: 0.5 }} />
              <span className="text-xs tracking-widest uppercase" style={{ fontFamily: 'Montserrat, sans-serif', color: '#C9A962' }}>
                Servicios
              </span>
              <div className="w-24 h-px" style={{ backgroundColor: '#C9A962', opacity: 0.5 }} />
            </div>
            <h3 className="text-4xl md:text-5xl lg:text-6xl tracking-wide" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              Experiencia <span style={{ color: '#C9A962' }}>Incomparable</span>
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-px" style={{ backgroundColor: '#C9A962' }}>
            {services.map((service, index) => (
              <div
                key={index}
                className="group p-12 lg:p-16 transition-colors duration-500 hover:bg-neutral-900"
                style={{ backgroundColor: '#0A0A0A' }}
              >
                <service.icon 
                  size={48} 
                  className="mb-8 transition-colors duration-500"
                  style={{ color: '#C9A962' }}
                />
                <h4 className="text-2xl lg:text-3xl mb-4" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  {service.title}
                </h4>
                <p className="leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif', color: '#8A8578' }}>
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section id="process" className="py-32 lg:py-48 px-6 lg:px-12" style={{ backgroundColor: '#1A1814' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="mb-8 flex items-center justify-center gap-4">
              <div className="w-24 h-px" style={{ backgroundColor: '#C9A962', opacity: 0.5 }} />
              <span className="text-xs tracking-widest uppercase" style={{ fontFamily: 'Montserrat, sans-serif', color: '#C9A962' }}>
                El Proceso
              </span>
              <div className="w-24 h-px" style={{ backgroundColor: '#C9A962', opacity: 0.5 }} />
            </div>
            <h3 className="text-4xl md:text-5xl lg:text-6xl tracking-wide" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              Del Sueño a la <span style={{ color: '#C9A962' }}>Realidad</span>
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative group">
                <div 
                  className="text-7xl lg:text-8xl mb-6 transition-colors duration-500 group-hover:text-amber-400"
                  style={{ fontFamily: 'Cormorant Garamond, serif', color: '#1A1814', WebkitTextStroke: '1px #C9A962' }}
                >
                  {step.number}
                </div>
                <h4 className="text-xl mb-3" style={{ fontFamily: 'Cormorant Garamond, serif', color: '#F5F3EF' }}>
                  {step.title}
                </h4>
                <p className="text-sm leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif', color: '#8A8578' }}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section - To be implemented */}
    </main>
  );
}