// Slides content (actualized from referencia)
const slides = [
  {
    number: '01',
    title: 'Prestacion Final Gestion de Proyectos',
    summary: 'Presentación final del proyecto — gestión y resultados.',
    points: [],
    focus: 'Portada',
    topic: 'Presentación',
    level: 'Portada',
    accent: '#06b6d4',
    accentSoft: '#ecfeff',
    icon: `
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M8 8H16" />
        <path d="M8 12H16" />
      </svg>`
  },
  {
    number: '02',
    title: 'Nuestro grupo',
    summary: '',
    points: [],
    focus: 'Equipo',
    topic: 'Presentación',
    level: 'Inicio',
    accent: '#f97316',
    accentSoft: '#fff7ed',
    images: [
      { src: 'img/gestion_laser_1.png', name: 'Gustavo Guaimas' },
      { src: 'img/gestion_laser_2.png', name: 'Cristian Purpura' },
      { src: 'img/gestion_laser_3.png', name: 'Andres Antivero' }
    ],
    icon: `
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="8" cy="8" r="3.2" />
        <circle cx="16" cy="8" r="3.2" />
        <path d="M3.8 20c.8-3.2 3.2-5.1 5.8-5.1s5 1.9 5.8 5.1" />
        <path d="M12.4 20c.6-2.6 2.7-4.3 5.1-4.3 2.4 0 4.5 1.7 5.1 4.3" />
      </svg>`
  },
  {
    number: '03',
    title: 'Qué resuelve',
    summary:
      'Control de cuentas, transacciones y conversión de moneda desde un único punto, con flujos claros y seguridad.',
    points: [
      'Control de cuentas y transacciones',
      'Conversión entre ARS y USD con actualización visual',
      'Operaciones seguras: JWT, refresh token y protección de rutas'
    ],
    focus: 'Problema',
    topic: 'Valor',
    level: 'General',
    accent: '#7c3aed',
    accentSoft: '#f3e8ff',
    icon: `
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="1" y="6" width="18" height="12" rx="2" />
        <circle cx="17" cy="12" r="1.5" fill-role />
      </svg>`
  },
  {
    number: '04',
    title: 'Metodología Scrum',
    summary: 'Scrum como marco de trabajo para organizar tareas, priorizar entregas y revisar avances de forma continua.',
    points: [
      'Sprints cortos con objetivos claros',
      'Backlog priorizado según valor y urgencia',
      'Reuniones de planificación, seguimiento y retrospectiva'
    ],
    focus: 'Scrum',
    topic: 'Proceso',
    level: 'Organización',
    accent: '#8b5cf6',
    accentSoft: '#f5f3ff',
    icon: `
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 9H21" />
        <path d="M8 4V20" />
        <path d="M16 4V20" />
        <path d="M8 13H16" />
      </svg>`
  },
  {
    number: '05',
    title: 'Requerimientos funcionales',
    summary:
      'Módulos principales y cobertura funcional priorizados para la entrega inicial.',
    points: [
      'Autenticación y usuarios',
      'Billetera y balances',
      'Transacciones, cambio y soporte (6 módulos principales)'
    ],
    focus: 'Módulos',
    topic: 'Alcance',
    level: 'MVP',
    accent: '#16a34a',
    accentSoft: '#ecfdf5',
    icon: `
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="3" y="4" width="6" height="6" rx="1" />
        <rect x="11" y="4" width="10" height="6" rx="1" />
        <rect x="3" y="12" width="18" height="8" rx="1" />
      </svg>`
  },
  {
    number: '06',
    title: 'Mejoras en curso',
    summary: 'Funciones que se están incorporando para ampliar la experiencia y capacidades del producto.',
    points: [
      'Pagos en la billetera',
      'Bot con árbol de decisión para guía al usuario',
      'Mejoras de UX, validaciones y flujos'
    ],
    focus: 'Evolución',
    topic: 'Roadmap',
    level: 'En progreso',
    accent: '#ef4444',
    accentSoft: '#fee2e2',
    icon: `
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M12 2 L15 8 L21 9 L16 13 L17 20 L12 16 L7 20 L8 13 L3 9 L9 8 Z" />
      </svg>`
  },
  {
    number: '07',
    title: 'Acta de cierre',
    summary: 'Registro formal de entrega, aceptación y cierre administrativo del proyecto.',
    points: [
      'Listado de entregables entregados y versión final',
      'Confirmación de aceptación por los stakeholders',
      'Firma del responsable y cierre administrativo'
    ],
    focus: 'Cierre',
    topic: 'Acta',
    level: 'Final',
    accent: '#0ea5e9',
    accentSoft: '#e0f7ff',
    icon: `
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M3 12h18v8a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-8z" />
        <path d="M12 2v10" />
        <circle cx="12" cy="16" r="1" />
      </svg>`
  },
  {
    number: '08',
    title: 'Cronología',
    summary: 'Evolución rápida: lo implementado y lo que se está agregando actualmente.',
    points: [
      '1. Base funcional realizada: autenticación, usuarios, transacciones, billetera ARS/USD',
      '2. Cambios realizados: frontend moderno, navegación por rutas, componentes y bot guía',
      '3. Cambios en curso: pagos en la billetera, mejoras de UX y validaciones'
    ],
    focus: 'Cronología',
    topic: 'Cronología',
    level: 'Resumen',
    accent: '#06b6d4',
    accentSoft: '#ecfeff',
    icon: `
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="3" y="4" width="18" height="16" rx="1" />
        <rect x="7" y="8" width="3" height="3" fill-role />
        <rect x="12" y="8" width="3" height="3" fill-role />
        <rect x="7" y="13" width="3" height="3" fill-role />
        <rect x="12" y="13" width="3" height="3" fill-role />
      </svg>`
  }
    ,
    {
      number: '09',
      title: 'Lecciones aprendidas',
      summary: 'Puntos clave que recogimos durante el desarrollo del proyecto.',
      points: [
        'Importancia de la comunicación continua',
        'Priorizar funcionalidades según valor al usuario',
        'Pruebas tempranas y feedback frecuente'
      ],
      focus: 'Aprendizaje',
      topic: 'Lecciones',
      level: 'Resumen',
      accent: '#10b981',
      accentSoft: '#ecfdf3',
      icon: `
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M12 2 L20 8 L12 22 L4 8 Z" />
        </svg>`
    }
  ]

// DOM elements
const slideBadge = document.getElementById('slideBadge')
const slideCard = document.getElementById('slideCard')
const slideTitle = document.getElementById('slideTitle')
const slideSummary = document.getElementById('slideSummary')
const slideGallery = document.getElementById('slideGallery')
const slidePoints = document.getElementById('slidePoints')
const slideFocus = document.getElementById('slideFocus')
const slideTopic = document.getElementById('slideTopic')
const slideLevel = document.getElementById('slideLevel')
const slideIcon = document.getElementById('slideIcon')
const prevBtn = document.getElementById('prevBtn')
const nextBtn = document.getElementById('nextBtn')
const dots = document.getElementById('dots')

let currentSlideIndex = 0

const renderDots = () => {
  dots.innerHTML = ''
  slides.forEach((slide, index) => {
    const button = document.createElement('button')
    button.type = 'button'
    button.className = 'dot-btn'
    button.setAttribute('aria-label', `Ir al apartado ${slide.number}`)
    button.setAttribute('aria-pressed', String(index === currentSlideIndex))
    if (index === currentSlideIndex) button.classList.add('active')
    button.addEventListener('click', () => goToSlide(index))
    dots.appendChild(button)
  })
}

const updateNavigation = () => {
  prevBtn.disabled = currentSlideIndex === 0
  nextBtn.disabled = currentSlideIndex === slides.length - 1

  const dotButtons = dots.querySelectorAll('.dot-btn')
  dotButtons.forEach((button, index) => {
    button.classList.toggle('active', index === currentSlideIndex)
    button.setAttribute('aria-pressed', String(index === currentSlideIndex))
  })
}

const renderSlide = () => {
  const slide = slides[currentSlideIndex]
  document.documentElement.style.setProperty('--accent', slide.accent)
  document.documentElement.style.setProperty('--accent-soft', slide.accentSoft)

  slideCard.classList.remove('pulse')
  void slideCard.offsetWidth
  slideCard.classList.add('pulse')

  slideBadge.innerHTML = `<span>${slide.number}</span><strong>${slide.title}</strong>`
  slideTitle.textContent = slide.title
  slideSummary.textContent = slide.summary
  slideFocus.textContent = slide.focus
  if (slideIcon) {
    slideIcon.innerHTML = slide.icon || ''
    slideIcon.style.color = slide.accent || getComputedStyle(document.documentElement).getPropertyValue('--accent')
  }
  slideTopic.textContent = slide.topic
  slideLevel.textContent = slide.level

  if (slideGallery) {
    slideGallery.innerHTML = ''
    const images = Array.isArray(slide.images) ? slide.images : []
    slideGallery.hidden = images.length === 0

    images.forEach((imageData, index) => {
      const src = typeof imageData === 'string' ? imageData : imageData.src
      const name = typeof imageData === 'string' ? '' : imageData.name
      const figure = document.createElement('figure')
      figure.className = 'gallery-item'

      const image = document.createElement('img')
      image.src = src
      image.alt = `${slide.title} - foto ${index + 1}`
      image.loading = 'lazy'

      figure.appendChild(image)
      if (name) {
        const caption = document.createElement('figcaption')
        caption.textContent = name
        figure.appendChild(caption)
      }
      slideGallery.appendChild(figure)
    })
  }

  slidePoints.innerHTML = ''
  slidePoints.hidden = slide.points.length === 0
  slide.points.forEach((point) => {
    const item = document.createElement('li')
    item.textContent = point
    slidePoints.appendChild(item)
  })

  updateNavigation()
}

const goToSlide = (index) => {
  currentSlideIndex = Math.max(0, Math.min(index, slides.length - 1))
  renderSlide()
}

const nextSlide = () => goToSlide(currentSlideIndex + 1)
const previousSlide = () => goToSlide(currentSlideIndex - 1)

prevBtn.addEventListener('click', previousSlide)
nextBtn.addEventListener('click', nextSlide)

window.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowRight' || event.key === 'PageDown') {
    event.preventDefault()
    nextSlide()
    return
  }

  if (event.key === 'ArrowLeft' || event.key === 'PageUp') {
    event.preventDefault()
    previousSlide()
    return
  }

  const number = Number.parseInt(event.key, 10)
  if (!Number.isNaN(number) && number >= 1 && number <= slides.length) {
    goToSlide(number - 1)
  }
})

renderDots()
renderSlide()
