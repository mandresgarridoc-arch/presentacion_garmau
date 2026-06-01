import { useState, useEffect } from 'react';
import './App.css'; 

// ==========================================
// ÍCONOS SVG INCORPORADOS (Cero dependencias)
// ==========================================
const SvgSun = ({ size }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
);
const SvgMoon = ({ size }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
);
const SvgShield = ({ size, color }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /></svg>
);
const SvgMonitor = ({ size, color }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="3" rx="2" /><line x1="8" x2="16" y1="21" y2="21" /><line x1="12" x2="12" y1="17" y2="21" /></svg>
);
const SvgScale = ({ size, color }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" /><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" /><path d="M7 21h10" /><path d="M12 3v18" /><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" /></svg>
);
const SvgAlert = ({ size, color }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2" /><line x1="12" x2="12" y1="8" y2="12" /><line x1="12" x2="12.01" y1="16" y2="16" /></svg>
);
const SvgDatabase = ({ size, color }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M3 5V19A9 3 0 0 0 21 19V5" /><path d="M3 12A9 3 0 0 0 21 12" /></svg>
);
const SvgUsers = ({ size, color }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
);
const SvgLightbulb = ({ size, color }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1.3.5 2.6 1.5 3.5.8.8 1.3 1.5 1.5 2.5" /><path d="M9 18h6" /><path d="M10 22h4" /></svg>
);
const SvgGithub = ({ size, color }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color || "currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
);
const SvgLink = ({ size, color }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color || "currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
);
const SvgChevronLeft = ({ size }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
);
const SvgChevronRight = ({ size }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
);
// ==========================================

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  const slides = [
    {
      id: 'portada',
      type: 'cover',
      title: 'Análisis Legal de Ciberseguridad',
      subtitle: 'CASO DROPBOX 2012 | LEGISLACIÓN CHILENA',
      author: 'Mauricio Andrés Garrido Contreras',
      institution: 'INACAP Valparaíso | Seguridad de la Información'
    },
    {
      id: 'resumen',
      icon: SvgMonitor,
      themeColor: 'var(--cyan)',
      title: '1. El Incidente (Dropbox 2012)',
      content: [
        'Filtración masiva de más de 68 millones de credenciales de usuarios.',
        'Origen: Reutilización de contraseñas corporativas por parte de un empleado.',
        'Vectores: Contraseña robada en brecha de LinkedIn, usada para acceder a la red interna (VPN) de Dropbox.',
        'Impacto: Silencio parcial de la empresa hasta 2016, exponiendo a usuarios a ataques de phishing.'
      ]
    },
    {
      id: 'marco',
      icon: SvgScale,
      themeColor: 'var(--blue)',
      title: '2. Marco Normativo Aplicable',
      content: [
        'Ley N° 21.459 (Delitos Informáticos): Tipifica conductas maliciosas en el ciberespacio chileno.',
        'Ley N° 19.628 (Protección a la Vida Privada): Regula el tratamiento y custodia de los datos.',
        'GDPR (Unión Europea): Estándar internacional comparativo que exigiría reporte en 72 horas.'
      ]
    },
    {
      id: 'delitos',
      icon: SvgAlert,
      themeColor: 'var(--rose)',
      title: '3. Tipificación Penal (Ley N° 21.459)',
      content: [
        'Artículo 2° (Acceso Ilícito): Sanciona el ingreso a sistemas vulnerando medidas de seguridad (vulneración de la VPN).',
        'Artículo 4° (Receptación de Datos): Penaliza la comercialización o transferencia de los datos (venta en la Dark Web en 2016).'
      ]
    },
    {
      id: 'datos',
      icon: SvgDatabase,
      themeColor: 'var(--emerald)',
      title: '4. Tratamiento de Datos (Ley N° 19.628)',
      content: [
        'Clasificación: Se expusieron "Datos Personales" (correos y contraseñas). No califican como Datos Sensibles (Art. 2°).',
        'Derecho de Información Afectado (Art. 12): Se vulneró al ocultar la brecha original de 2012.',
        'Derecho de Cancelación/Oposición (Art. 13): El usuario pierde control, ya que la base de datos salió de la esfera de Dropbox.'
      ]
    },
    {
      id: 'responsabilidades',
      icon: SvgUsers,
      themeColor: 'var(--purple)',
      title: '5. Responsabilidades de los Actores',
      content: [
        'El Atacante: Responsabilidad Penal (presidio) y Civil (indemnización por daños dolosos).',
        'Dropbox: Responsabilidad Civil y Administrativa (frente al SERNAC) por negligencia y falta de debida diligencia.',
        'El Empleado: Responsabilidad Laboral (causal de despido por negligencia grave según el Código del Trabajo).'
      ]
    },
    {
      id: 'conclusiones',
      icon: SvgLightbulb,
      themeColor: 'var(--amber)',
      title: '6. Conclusiones y Controles Técnicos',
      content: [
        'Implementar Autenticación Multifactor (MFA) obligatoria en accesos corporativos.',
        'Establecer políticas Zero Trust (prohibición técnica y contractual de reutilizar contraseñas).',
        'El factor humano sigue siendo el eslabón más débil; una arquitectura robusta puede colapsar por un solo error de higiene digital.'
      ]
    },
    {
      id: 'contacto',
      type: 'contact',
      title: '¿Preguntas o Comentarios?',
      subtitle: 'FIN DE LA PRESENTACIÓN',
      githubUrl: 'https://github.com/mandresgarridoc-arch',
      githubUser: 'Mauricio Andrés Garrido Contreras',
      webUrl: 'https://informe-garmau.vercel.app',
      webText: 'Ver Informe Web Completo'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? prev : prev + 1));
  };
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? 0 : prev - 1));
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const slide = slides[currentSlide];

  return (
    <div className="app-container">
      
      {/* Botón para cambiar Tema */}
      <button className="theme-toggle" onClick={toggleTheme} title="Cambiar Tema">
        {theme === 'dark' ? <SvgSun size={24} /> : <SvgMoon size={24} />}
      </button>

      <div className="slide-box">
        
        {/* Barra de Progreso */}
        <div className="progress-bg">
          <div 
            className="progress-fill"
            style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
          ></div>
        </div>

        {/* Contenido Dinámico */}
        <div className="slide-content fade-in" key={currentSlide}>
          
          {slide.type === 'cover' ? (
            <div className="cover-layout">
              <div className="cover-icon-box">
                <SvgShield size={90} color="var(--cyan)" />
              </div>
              <h1 className="title-gradient">{slide.title}</h1>
              <p className="subtitle">{slide.subtitle}</p>
              <div className="author-section">
                <h3 style={{ color: 'var(--text-main)', fontSize: '1.4rem', marginBottom: '8px' }}>{slide.author}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '1rem', letterSpacing: '2px' }}>{slide.institution}</p>
              </div>
            </div>
          ) : slide.type === 'contact' ? (
            <div className="cover-layout">
              <h1 className="title-gradient" style={{ fontSize: '3rem' }}>{slide.title}</h1>
              <p className="subtitle">{slide.subtitle}</p>
              
              {/* Estructura dividida para Botones y QR */}
              <div className="contact-layout">
                
                {/* Columna Izquierda: Botones de Enlace */}
                <div className="links-column">
                  <a href={slide.githubUrl} target="_blank" rel="noopener noreferrer" className="contact-btn github">
                    <SvgGithub size={24} />
                    <span>{slide.githubUser}</span>
                  </a>
                  
                  <a href={slide.webUrl} target="_blank" rel="noopener noreferrer" className="contact-btn web">
                    <SvgLink size={24} />
                    <span>{slide.webText}</span>
                  </a>
                </div>

                {/* Columna Derecha: Código QR apuntando a la Web */}
                <div className="qr-container">
                  <div style={{ backgroundColor: 'white', padding: '5px', borderRadius: '8px' }}>
                    <img 
                      src={`https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=${encodeURIComponent(slide.webUrl)}`}
                      alt="Código QR del Informe Web" 
                      style={{ width: '120px', height: '120px', display: 'block' }}
                    />
                  </div>
                  <div className="qr-text">ESCANEA PARA VER</div>
                </div>

              </div>
            </div>
          ) : (
            <div>
              <div className="content-header">
                <div className="icon-box">
                  {slide.icon && <slide.icon size={45} color={slide.themeColor} />}
                </div>
                <h2 className="content-title" style={{ color: slide.themeColor }}>
                  {slide.title}
                </h2>
              </div>
              
              <ul className="bullets-list">
                {slide.content?.map((item, index) => (
                  <li 
                    key={index} 
                    className="bullet-item"
                    style={{ borderLeftColor: slide.themeColor }}
                  >
                    <div 
                      className="bullet-dot" 
                      style={{ 
                        backgroundColor: slide.themeColor,
                        boxShadow: `0 0 12px ${slide.themeColor}`
                      }}
                    ></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Botones de Navegación */}
        <div className="controls">
          <button className="btn-nav" onClick={prevSlide} disabled={currentSlide === 0}>
            <SvgChevronLeft size={32} />
          </button>
          <button className="btn-nav" onClick={nextSlide} disabled={currentSlide === slides.length - 1}>
            <SvgChevronRight size={32} />
          </button>
        </div>

        {/* Contador */}
        <div className="slide-counter">
          {String(currentSlide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
        </div>
      </div>

      <p className="keyboard-hint">USA LAS FLECHAS DEL TECLADO PARA NAVEGAR</p>
    </div>
  );
}

export default App;