
// Project Modal Data
const projectData = {
  'rtu-dms': {
    title: 'RTU Document Management System',
    category: 'Web App',
    description: 'The Web-based Document Management System at Rizal Technological University is a secure, user-friendly application that streamlines document organization and tracking. By solving issues like slow signing, misplaced files, and manual counting with features such as automated tracking, easy sharing, and activity logging, it saves time and enhances efficiency across the university.',
    tags: ['Project Leader', 'Lead Programmer', 'Laravel', 'HTML5', 'CSS3', 'JavaScript', 'PHP', 'JQuery', 'AJAX', 'XAMMP', 'MySQL', 'PHPMyAdmin', 'Bootstrap', 'Hosting'],
    video: 'src/images/rtudms.webp',
    videoUrl: 'src/videos/rtudms.mp4',
    url: 'https://github.com/carl2525/RTU-DOCUMENT-MANAGEMENT-SYSTEM'
  },
  'vcdc-portal': {
    title: 'VCDC - Gio Portal',
    category: 'Enterprise',
    description: 'A web-based application built with WordPress to market and promote Victor Consunji Development Corporation. It highlights the company’s products and services and serves as a marketing tool for Gio, one of VCD’s sales consultants.',
    tags: ['Web Developer', 'WordPress', 'HTML5', 'CSS3', 'JavaScript'],
    video: 'src/videos/vcd.webp',
    videoUrl: 'src/videos/vcd.mp4',
    url: 'https://giovdcsales.wordpress.com/'
  },
  'coffee-pos': {
    title: 'Brewed Specialty Coffee POS',
    category: 'POS System',
    description: 'The Web-based Ordering System for Brewed Specialty Coffee is a secure and user-friendly application designed to streamline customer orders. It resolves challenges such as ordering delays, customer queuing, product archiving and restoration, audit trail reporting, and user management. With features like two-level security, password reset, and a modern visual interface, the system improves efficiency, saves time, and enhances the overall customer–employee experience at Brewed Specialty Coffee.',
    tags: ['Web Developer', 'HTML5', 'CSS3', 'JavaScript', 'PHP', 'JQuery', 'AJAX', 'XAMMP', 'MySQL', 'PHPMyAdmin', 'Bootstrap'],
    video: 'src/videos/brewed.webp',
    videoUrl: 'src/videos/brewed.mp4',
    url: 'https://github.com/carl2525/brewed-specialty-coffe'
  },
  'maldicion-notebook': {
    title: 'Maldicion Notebook',
    category: 'Creative Video',
    description: 'A creative project video made as a college prerequisite, showcasing visual storytelling, editing techniques, and a horror narrative.',
    tags: ['Premiere Pro', 'Sounds', 'Creative Direction'],
    video: 'src/images/Maldicion Notebook.webp',
    videoUrl: 'src/videos/Group 2 - Maldicion Notebook Final.mp4',
    url: 'https://drive.google.com/file/d/16YZUUQWd3IAMgX_CeaRgOQRLdRZhN8ZJ/view?usp=sharing'
  },
  'rtu-vlog': {
    title: 'RTU Vlog Finale',
    category: 'Vlog / Lifestyle',
    description: 'A prerequisite in college which tells the RTU vlog series, meticulously edited to capture the emotional and vibrant highlights of university life.',
    tags: ['Premiere Pro', 'Video Editing', 'Color Grading', 'Storytelling', 'Creative Direction'],
    video: 'src/images/Rtu Vlog Finale.webp',
    videoUrl: 'src/videos/RTU Vlog Finale.mp4',
    url: 'https://drive.google.com/file/d/1L4bb6cKVMgEDapIsRxqHzftLn8jwYq2_/view?usp=drive_link'
  },
  'wordcrash': {
    title: 'WordCrash Infomercial',
    category: 'Infomercial',
    description: 'A high-energy infomercial created to promote WordCrash Game, featuring dynamic transitions, clear messaging, and engaging visual elements.',
    tags: ['Premiere Pro', 'Marketing', 'Video Production', 'Creative Direction'],
    video: 'src/images/WordCrash Infomercial.webp',
    videoUrl: 'src/videos/Infomercial Final WordCrash.mp4',
    url: 'https://drive.google.com/file/d/1qZOl_1fT53UlzVYqnCqNCIwM9LqPj24F/view?usp=sharing'
  }
};

// Global State
const html = document.documentElement;
const yearSpan = document.getElementById('year');
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
const hero = document.getElementById('home');
const heroContent = document.getElementById('hero-content');
const blob1 = document.getElementById('hero-blob-1');
const blob2 = document.getElementById('hero-blob-2');
const spotlight = document.getElementById('hero-spotlight');
const typewriter = document.getElementById('typewriter');
const canvas = document.getElementById('hero-particles');

// Mobile Menu Toggle
function updateMenuIcon(isOpen) {
  if (!menuToggle) return;
  menuToggle.innerHTML = `<i data-lucide="${isOpen ? 'x' : 'menu'}" id="menu-icon"></i>`;
  lucide.createIcons();
}

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    const isOpen = !mobileMenu.classList.contains('hidden');
    updateMenuIcon(isOpen);
    menuToggle.setAttribute('aria-expanded', isOpen);
  });
}

// Close mobile menu on link click
document.querySelectorAll('.mobile-nav-link').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
    updateMenuIcon(false);
  });
});

// Scroll Spy
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('text-orange-500', 'dark:text-orange-400');
    link.classList.add('text-zinc-500', 'dark:text-zinc-400');
    if (link.getAttribute('data-section') === current) {
      link.classList.remove('text-zinc-500', 'dark:text-zinc-400');
      link.classList.add('text-orange-500', 'dark:text-orange-400');
    }
  });
});

// Project Modal Functions
function openProjectModal(projectId) {
  const data = projectData[projectId];
  if (!data) return;

  const modal = document.getElementById('project-modal');
  const overlay = document.getElementById('modal-overlay');
  const content = document.getElementById('modal-content');
  const title = document.getElementById('modal-title');
  const badge = document.getElementById('modal-badge').querySelector('span');
  const description = document.getElementById('modal-description');
  const tagsContainer = document.getElementById('modal-tags');
  const videoContainer = document.getElementById('modal-video-container');
  const modalLink = document.getElementById('modal-link');
  const modalLinkText = document.getElementById('modal-link-text');

  title.textContent = data.title;
  badge.textContent = data.category;
  description.textContent = data.description;
  modalLink.href = data.url;

  if (data.category.toLowerCase().includes('video') || data.category.toLowerCase().includes('vlog') || data.category.toLowerCase().includes('infomercial')) {
    modalLinkText.textContent = 'Go To Video Portfolio';
  } else {
    modalLinkText.textContent = 'Go to Application';
  }
  
  tagsContainer.innerHTML = '';
  data.tags.forEach(tag => {
    const span = document.createElement('span');
    span.className = 'px-3 py-1 rounded-lg bg-zinc-200/50 dark:bg-zinc-800/50 text-zinc-700 dark:text-zinc-300 text-xs border border-zinc-300/50 dark:border-zinc-700/50';
    span.textContent = tag;
    tagsContainer.appendChild(span);
  });

  if (data.videoUrl && (data.videoUrl.includes('youtube.com') || data.videoUrl.includes('youtu.be'))) {
    let embedUrl = data.videoUrl.replace('watch?v=', 'embed/').replace('youtu.be/', 'youtube.com/embed/');
    if (embedUrl.includes('youtube.com/embed/')) {
      const videoId = embedUrl.split('embed/')[1].split('&')[0].split('?')[0];
      embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`;
    }
    videoContainer.innerHTML = `<iframe src="${embedUrl}" class="w-full h-full border-0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  } else if (data.videoUrl) {
    videoContainer.innerHTML = `
      <video controls autoplay class="w-full h-full object-contain bg-black">
        <source src="${data.videoUrl}" type="video/mp4">
        Your browser does not support the video tag.
      </video>
    `;
  } else {
    videoContainer.innerHTML = `
      <div class="relative w-full h-full group">
        <img src="${data.video}" class="w-full h-full object-cover opacity-50" referrerPolicy="no-referrer">
        <div class="absolute inset-0 flex flex-col items-center justify-center">
          <i data-lucide="play-circle" class="w-20 h-20 text-orange-500 mb-4 animate-pulse"></i>
          <p class="text-white font-bold text-lg tracking-wider uppercase">No Video Available</p>
        </div>
      </div>
    `;
  }

  modal.classList.remove('hidden');
  overlay.classList.add('overlay-animate-in');
  content.classList.add('modal-animate-in');
  document.body.style.overflow = 'hidden';
  lucide.createIcons();
}

function closeProjectModal() {
  const modal = document.getElementById('project-modal');
  const overlay = document.getElementById('modal-overlay');
  const content = document.getElementById('modal-content');
  const videoContainer = document.getElementById('modal-video-container');

  overlay.classList.remove('overlay-animate-in');
  content.classList.remove('modal-animate-in');
  overlay.classList.add('overlay-animate-out');
  content.classList.add('modal-animate-out');

  setTimeout(() => {
    videoContainer.innerHTML = '';
    modal.classList.add('hidden');
    overlay.classList.remove('overlay-animate-out');
    content.classList.remove('modal-animate-out');
    document.body.style.overflow = '';
  }, 300);
}

// Particle System
let particles = [];
function resize() {
  if (!canvas) return;
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
  particles = [];
  const particleCount = window.innerWidth < 768 ? 20 : 50;
  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }
}

class Particle {
  constructor() {
    this.init();
  }
  init() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 2 + 1;
    this.speedX = Math.random() * 1 - 0.5;
    this.speedY = Math.random() * 1 - 0.5;
    this.color = html.classList.contains('dark') ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)';
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.x > canvas.width) this.x = 0;
    if (this.x < 0) this.x = canvas.width;
    if (this.y > canvas.height) this.y = 0;
    if (this.y < 0) this.y = canvas.height;
  }
  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

function animate() {
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => {
    p.update();
    p.draw(ctx);
  });
  requestAnimationFrame(animate);
}

// Typewriter
const words_type = ["Digital Experiences", "Modern Solutions", "Creative Designs", "Seamless Interfaces"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeSpeed = 100;

function type() {
  if (!typewriter) return;
  const currentWord = words_type[wordIndex];
  if (isDeleting) {
    typewriter.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;
    typeSpeed = 50;
  } else {
    typewriter.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;
    typeSpeed = 100;
  }
  if (!isDeleting && charIndex === currentWord.length) {
    isDeleting = true;
    typeSpeed = 2000;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words_type.length;
    typeSpeed = 500;
  }
  setTimeout(type, typeSpeed);
}

// Theme
function toggleTheme() {
  if (html.classList.contains('dark')) {
    html.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  } else {
    html.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }
  lucide.createIcons();
}

// Global Exports
window.openProjectModal = openProjectModal;
window.closeProjectModal = closeProjectModal;

// Initializations
document.addEventListener('DOMContentLoaded', () => {
  lucide.createIcons();
  
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();
  if (typewriter) type();

  // Saved Theme
  if (localStorage.getItem('theme') === 'light') html.classList.remove('dark');
  else html.classList.add('dark');
  lucide.createIcons();

  // Event Listeners
  const themeToggle = document.getElementById('theme-toggle');
  const themeToggleMobile = document.getElementById('theme-toggle-mobile');
  if (themeToggle) themeToggle.addEventListener('click', toggleTheme);
  if (themeToggleMobile) themeToggleMobile.addEventListener('click', toggleTheme);
  
  window.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeProjectModal(); });

  // Hero Parallax
  if (hero) {
    hero.addEventListener('mousemove', (e) => {
      const { clientX, clientY } = e;
      const rect = hero.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;
      if (spotlight) {
        spotlight.style.opacity = '1';
        spotlight.style.setProperty('--x', `${x}px`);
        spotlight.style.setProperty('--y', `${y}px`);
      }
      if (blob1 && blob2) {
        const xPos = (clientX / window.innerWidth - 0.5) * 60;
        const yPos = (clientY / window.innerHeight - 0.5) * 60;
        blob1.style.transform = `translate(${xPos}px, ${yPos}px)`;
        blob2.style.transform = `translate(${-xPos}px, ${-yPos}px)`;
      }
      if (heroContent) {
        const xRotation = (clientY / window.innerHeight - 0.5) * 10;
        const yRotation = (clientX / window.innerWidth - 0.5) * -10;
        heroContent.style.transform = `perspective(1000px) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
      }
    });
    hero.addEventListener('mouseleave', () => {
      if (spotlight) spotlight.style.opacity = '0';
      if (heroContent) heroContent.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    });
  }

  // Particles
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches && canvas) {
    resize();
    animate();
    window.addEventListener('resize', resize);
  }

  // Experience Cards
  const experienceCards = document.querySelectorAll('.experience-card');
  const expObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.remove('opacity-0', 'translate-y-10');
        entry.target.classList.add('opacity-100', 'translate-y-0');
      }
    });
  }, { threshold: 0.1 });

  experienceCards.forEach(card => {
    expObserver.observe(card);
    const innerCard = card.querySelector('.glass');
    const glow = card.querySelector('.absolute.rounded-full.blur-\\[80px\\]');
    if (innerCard) {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        innerCard.style.transform = `perspective(1000px) rotateX(${(y/rect.height - 0.5) * -10}deg) rotateY(${(x/rect.width - 0.5) * 10}deg) translateY(-4px)`;
        if (glow) {
          glow.style.left = `${x - 128}px`;
          glow.style.top = `${y - 128}px`;
          glow.style.opacity = '0.4';
        }
      });
      card.addEventListener('mouseleave', () => {
        innerCard.style.transform = '';
        if (glow) glow.style.opacity = '';
      });
    }
  });

  // Scroll to Top
  const scrollTopBtn = document.getElementById('scroll-top');
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 500) scrollTopBtn.classList.remove('opacity-0', 'invisible', 'translate-y-10'), scrollTopBtn.classList.add('opacity-100', 'visible', 'translate-y-0');
    else scrollTopBtn.classList.add('opacity-0', 'invisible', 'translate-y-10'), scrollTopBtn.classList.remove('opacity-100', 'visible', 'translate-y-0');
  });
  scrollTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  // Contact Form
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const body = `Name: ${document.getElementById('contact-name').value}\nEmail: ${document.getElementById('contact-email').value}\n\nMessage:\n${document.getElementById('contact-message').value}`;
      window.location.href = `mailto:carl.gorobao2525@gmail.com?subject=${encodeURIComponent(document.getElementById('contact-subject').value)}&body=${encodeURIComponent(body)}`;
    });
  }

  // About Image
  const aboutGroup = document.getElementById('about-img-group');
  const aboutContainer = document.getElementById('about-img-container');
  const aboutGlow = document.getElementById('about-img-glow');
  if (aboutGroup && aboutContainer) {
    aboutGroup.addEventListener('mousemove', (e) => {
      const rect = aboutGroup.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      aboutContainer.style.transform = `perspective(1000px) rotateX(${y * -20}deg) rotateY(${x * 20}deg) scale3d(1.02, 1.02, 1.02)`;
      if (aboutGlow) { aboutGlow.style.left = `${(e.clientX - rect.left) - rect.width/2}px`, aboutGlow.style.top = `${(e.clientY - rect.top) - rect.height/2}px`; }
    });
    aboutGroup.addEventListener('mouseleave', () => aboutContainer.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
  }
});
