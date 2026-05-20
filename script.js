// Slides content (actualized from referencia)
const slides = [
  {
    number: '01',
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
    accentSoft: '#f3e8ff'
  },
  {
    number: '02',
    title: 'Qué hace el proyecto',
    summary:
      'Interfaz para autenticarse, consultar saldos, revisar movimientos, crear transacciones y administrar el perfil de usuario.',
    points: [
      'Login y refresh token',
      'Billetera ARS / USD',
      'Historial de transacciones y cambio de moneda'
    ],
    focus: 'Funcionalidad',
    topic: 'Producto',
    level: 'MVP',
    accent: '#0ea5e9',
    accentSoft: '#e0f2fe'
  },
  {
    number: '03',
    title: 'Alcance funcional',
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
    accentSoft: '#ecfdf5'
  },
  {
    number: '04',
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
    accentSoft: '#fee2e2'
  },
  {
    number: '05',
    title: 'Tecnologías',
    summary: 'Stack utilizado y consideraciones de despliegue y observabilidad.',
    points: [
      'Frontend: Vue 3, TypeScript, Vite, Pinia, Tailwind',
      'Backend: ASP.NET Core, Entity Framework, JWT',
      'Persistencia: SQL Server — Infra: AWS (docker/CI opcional)'
    ],
    focus: 'Stack',
    topic: 'Tech',
    level: 'Infra',
    accent: '#f59e0b',
    accentSoft: '#fffbeb'
  },
  {
    number: '06',
    title: 'Restricciones',
    summary: 'Condiciones y limitaciones a considerar durante el desarrollo y la entrega.',
    points: [
      'No introducir tecnologías fuera del stack definido',
      'Cumplir con normativas de seguridad y control de acceso',
      'Mantener dependencias mínimas para despliegue en AWS'
    ],
    focus: 'Riesgos',
    topic: 'Constraints',
    level: 'Risk',
    accent: '#64748b',
    accentSoft: '#f1f5f9'
  },
  {
    number: '07',
    title: 'Cronología',
    summary: 'Evolución rápida: lo implementado y lo que se está agregando actualmente.',
    points: [
      '1. Base funcional realizada: autenticación, usuarios, transacciones, billetera ARS/USD',
      '2. Cambios realizados: frontend moderno, navegación por rutas, componentes y bot guía',
      '3. Cambios en curso: pagos en la billetera, mejoras de UX y validaciones'
    ],
    focus: 'Evolución',
    topic: 'Cronología',
    level: 'Resumen',
    accent: '#06b6d4',
    accentSoft: '#ecfeff'
  }
]

// DOM elements
const slideBadge = document.getElementById('slideBadge')
const slideCard = document.getElementById('slideCard')
const slideTitle = document.getElementById('slideTitle')
const slideSummary = document.getElementById('slideSummary')
const slidePoints = document.getElementById('slidePoints')
const slideFocus = document.getElementById('slideFocus')
const slideTopic = document.getElementById('slideTopic')
const slideLevel = document.getElementById('slideLevel')
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
  slideTopic.textContent = slide.topic
  slideLevel.textContent = slide.level

  slidePoints.innerHTML = ''
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
