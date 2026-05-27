
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
  'financeflow': {
    title: 'FinanceFlow Management App',
    category: 'Web App',
    description: 'FinanceFlow is an elegant, highly intuitive financial tracking dashboard that simplifies personal or business budgeting model tracking. It lets users log transactions, check visual analytical metrics of expenditures, set categorical budgets, and secure statements in real-time.',
    tags: ['Lead Developer', 'Next.js', 'React', 'Chart.js', 'Tailwind CSS', 'Vercel'],
    video: 'src/images/financeflow.png',
    videoUrl: '',
    url: 'https://financeflow-carl-management.vercel.app/'
  },
  'ce-apartment': {
    title: 'C.E. Apartment System',
    category: 'Management System',
    description: 'C.E. Apartment System is a modern, responsive rental property administration platform. Built for ease and efficiency, it enables smooth tenant tracking, maintenance request lists, secure contract uploads, visual analytics on revenue streams, and automated scheduling controls.',
    tags: ['Full Stack', 'React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
    video: 'src/images/ce_apartment.png',
    videoUrl: '',
    url: 'https://ce-apartment.vercel.app/'
  },
  'pnp-retirement': {
    title: 'PNP Retirement Calculator',
    category: 'Web Tool',
    description: 'The Philippine National Police (PNP) Retirement Benefits & Pension Calculator. This web-based mathematical emulator allows service staff to easily predict, aggregate, and calculate their potential pension packages, saving schedules, and lump-sum payouts based on service years and ranks.',
    tags: ['Lead Programmer', 'HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS', 'Alpine.js'],
    video: 'src/images/pnp_retirement.png',
    videoUrl: '',
    url: 'https://pnp-retirement-calculator.vercel.app/'
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

// --- Modal Helper Functions ---
function openProjectModal(projectId) {
  // Check if we are clicking on an inactive project slide in our center-active sliding track
  const sliderTrack = document.getElementById('projects-slider-track');
  if (sliderTrack) {
    const articles = Array.from(sliderTrack.querySelectorAll('article'));
    const isSliderProject = articles.some(art => art.getAttribute('data-project-id') === projectId);

    if (isSliderProject) {
      const activeArticle = articles[window.currentProjectIndex];
      if (activeArticle && activeArticle.getAttribute('data-project-id') !== projectId) {
        // Find the card instance closest to window.currentProjectIndex
        let bestIdx = -1;
        let minDiff = Infinity;
        articles.forEach((art, sIdx) => {
          if (art.getAttribute('data-project-id') === projectId) {
            const diff = Math.abs(sIdx - window.currentProjectIndex);
            if (diff < minDiff) {
              minDiff = diff;
              bestIdx = sIdx;
            }
          }
        });
        if (bestIdx !== -1) {
          window.currentProjectIndex = bestIdx;
          if (typeof window.updateSlider === 'function') {
            window.updateSlider();
          }
        }
        return;
      }
    }
  }

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

  if (!modal || !title) return;

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
      <div class="relative w-full h-full min-h-[260px] sm:min-h-[320px] md:min-h-[380px] lg:min-h-[480px] lg:h-full group overflow-hidden bg-zinc-950 flex items-center justify-center">
        <!-- Immersive glass-like blurred backdrop of the custom image -->
        <img src="${data.video}" class="absolute inset-0 w-full h-full object-cover opacity-30 blur-2xl scale-110 pointer-events-none select-none" referrerPolicy="no-referrer">
        <!-- Sharp foreground contained original image -->
        <img src="${data.video}" class="relative z-10 max-w-[90%] max-h-[85%] lg:max-h-[90%] object-contain opacity-95 group-hover:scale-[1.02] transition-transform duration-700 rounded-lg shadow-2xl" referrerPolicy="no-referrer">
        
        <div class="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent z-15"></div>
        <div class="absolute bottom-6 left-6 flex items-center gap-3 z-25">
          <div class="p-2.5 rounded-xl bg-primary-500/15 border border-primary-500/30 text-primary-500 shadow-lg backdrop-blur-md">
            <i data-lucide="globe" class="w-5 h-5"></i>
          </div>
          <div class="text-left">
            <p class="text-white font-bold text-sm tracking-wide drop-shadow-md">Live Website Instance</p>
            <p class="text-zinc-300 text-xs drop-shadow-sm">Click 'Go to Application' to explore</p>
          </div>
        </div>
      </div>
    `;
  }

  modal.classList.remove('hidden');
  overlay.classList.add('overlay-animate-in');
  content.classList.add('modal-animate-in');
  document.body.style.overflow = 'hidden';
  if (typeof lucide !== 'undefined') lucide.createIcons();
}

function closeProjectModal() {
  const modal = document.getElementById('project-modal');
  const overlay = document.getElementById('modal-overlay');
  const content = document.getElementById('modal-content');
  const videoContainer = document.getElementById('modal-video-container');

  if (!modal || !overlay) return;

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

// Global Exports
window.openProjectModal = openProjectModal;
window.closeProjectModal = closeProjectModal;

// --- Main Application Lifecycle ---
document.addEventListener('DOMContentLoaded', () => {
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

  // 1. Initial Icon Render
  if (typeof lucide !== 'undefined') lucide.createIcons();
  
  // 2. Year Update
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();

  // 4. Mobile Menu Logic
  if (menuToggle && mobileMenu) {
    const updateMenuIcon = (isOpen) => {
      menuToggle.innerHTML = `<i data-lucide="${isOpen ? 'x' : 'menu'}" id="menu-icon"></i>`;
      if (typeof lucide !== 'undefined') lucide.createIcons();
    };

    menuToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
      const isOpen = !mobileMenu.classList.contains('hidden');
      updateMenuIcon(isOpen);
      menuToggle.setAttribute('aria-expanded', isOpen);
    });

    document.querySelectorAll('.mobile-nav-link').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        updateMenuIcon(false);
      });
    });
  }

  // 5. Scroll Spy
  const handleScrollSpy = () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      if (window.pageYOffset >= sectionTop - 200) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      // Clear all potential active/inactive classes
      link.classList.remove('text-primary-500', 'dark:text-primary-400', 'bg-primary-500/10', 'text-zinc-500', 'text-zinc-600', 'dark:text-zinc-400');
      
      const isMobile = link.classList.contains('mobile-nav-link');
      
      if (link.getAttribute('data-section') === current) {
        link.classList.add('text-primary-500', 'dark:text-primary-400');
        if (isMobile) link.classList.add('bg-primary-500/10');
      } else {
        link.classList.add(isMobile ? 'text-zinc-600' : 'text-zinc-500', 'dark:text-zinc-400');
      }
    });
  };

  window.addEventListener('scroll', handleScrollSpy);
  handleScrollSpy(); // Initial call to set active section on load

  // 6. Theme Toggle Listeners
  const themeToggle = document.getElementById('theme-toggle');
  const themeToggleMobile = document.getElementById('theme-toggle-mobile');

  const toggleTheme = () => {
    const root = document.documentElement;
    const isDark = root.classList.contains('dark');
    
    if (isDark) {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }

    // Refresh Lucide icons
    if (typeof lucide !== 'undefined') {
      lucide.createIcons();
    }
    
    // Animate the toggle buttons
    [themeToggle, themeToggleMobile].forEach(btn => {
      if (btn) {
        btn.classList.add('scale-110', 'rotate-12');
        setTimeout(() => btn.classList.remove('scale-110', 'rotate-12'), 200);
      }
    });
  };

  if (themeToggle) themeToggle.addEventListener('click', toggleTheme);
  if (themeToggleMobile) themeToggleMobile.addEventListener('click', toggleTheme);
  
  window.addEventListener('keydown', (e) => { 
    if (e.key === 'Escape') closeProjectModal(); 
  });

  // 7. Hero Visual Effects
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

  // 8. Particles Engine
  let particles = [];
  let animationFrameId = null;
  class Particle {
    constructor() {
      this.init();
    }
    init() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 2 + 1;
      this.speedX = Math.random() * 0.8 - 0.4;
      this.speedY = Math.random() * 0.8 - 0.4;
      this.color = html.classList.contains('dark') ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.03)';
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

  function resizeParticles() {
    if (!canvas) return;
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    particles = [];
    const particleCount = window.innerWidth < 768 ? 15 : 40;
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }
  }

  function animateParticles() {
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.update();
      p.draw(ctx);
    });
    animationFrameId = requestAnimationFrame(animateParticles);
  }

  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches && canvas) {
    resizeParticles();
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (!animationFrameId) animateParticles();
        } else {
          cancelAnimationFrame(animationFrameId);
          animationFrameId = null;
        }
      });
    }, { threshold: 0.1 });
    
    observer.observe(canvas);
    window.addEventListener('resize', () => {
      resizeParticles();
    }, { passive: true });
  }

  // 9. Typewriter Effect
  const words_type = ["Digital Experiences", "Modern Solutions", "Creative Designs", "Smooth Interfaces"];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typeSpeed = 100;

  function runTypewriter() {
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
    setTimeout(runTypewriter, typeSpeed);
  }
  if (typewriter) runTypewriter();

  // 10. Reveal Animations
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

  // 11. Scroll to Top
  const scrollTopBtn = document.getElementById('scroll-top');
  if (scrollTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 500) {
        scrollTopBtn.classList.remove('opacity-0', 'invisible', 'translate-y-10');
        scrollTopBtn.classList.add('opacity-100', 'visible', 'translate-y-0');
      } else {
        scrollTopBtn.classList.add('opacity-0', 'invisible', 'translate-y-10');
        scrollTopBtn.classList.remove('opacity-100', 'visible', 'translate-y-0');
      }
    });
    scrollTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  // 11.5 Projects Slider (Carousel - Theater Centering Slideshow)
  const sliderTrack = document.getElementById('projects-slider-track');
  const prevBtn = document.getElementById('prev-project');
  const nextBtn = document.getElementById('next-project');
  
  // Set global variables for modal interception and sliding behavior
  window.currentProjectIndex = 0;

  if (sliderTrack && prevBtn && nextBtn) {
    const originalArticles = Array.from(sliderTrack.querySelectorAll('article'));
    const originalCount = originalArticles.length;

    if (originalCount > 0) {
      // Style all articles optimally for mobile viewports, typography, and premium layout
      originalArticles.forEach(article => {
        article.classList.add('rounded-2xl', 'sm:rounded-3xl');
        article.classList.remove('rounded-3xl');
        
        const bodyDiv = article.querySelector('.p-4, .p-5, .p-6, .p-8');
        if (bodyDiv) {
          bodyDiv.className = 'p-5 sm:p-6 md:p-8 w-full flex flex-col justify-center';
        }

        const heading = article.querySelector('h3');
        if (heading) {
          heading.className = 'text-[17px] sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 text-zinc-900 dark:text-white group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors duration-300';
        }

        const para = article.querySelector('p');
        if (para) {
          para.className = 'text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mb-3 sm:mb-5 line-clamp-2 leading-relaxed';
        }

        const flexWrapper = article.querySelector('.flex.flex-wrap');
        if (flexWrapper) {
          flexWrapper.className = 'flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6';
          flexWrapper.querySelectorAll('span').forEach(tag => {
            tag.className = 'text-[10.5px] sm:text-xs font-medium text-zinc-500 dark:text-zinc-400';
          });
        }

        const btn = article.querySelector('button');
        if (btn) {
          btn.className = 'flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-bold text-zinc-900 dark:text-white hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-300 cursor-pointer';
          const icon = btn.querySelector('i');
          if (icon) {
            icon.setAttribute('class', 'w-4 h-4');
          }
        }
      });

      // Clear layout and append Pre-clones, Originals, and Post-clones dynamically
      sliderTrack.innerHTML = '';

      const preClones = originalArticles.map(art => art.cloneNode(true));
      const postClones = originalArticles.map(art => art.cloneNode(true));

      preClones.forEach(clone => sliderTrack.appendChild(clone));
      originalArticles.forEach(art => sliderTrack.appendChild(art));
      postClones.forEach(clone => sliderTrack.appendChild(clone));

      // Centered on the first element of our mid/original set
      window.currentProjectIndex = originalCount;
    }

    let isTransitioning = false;

    const updateSlider = (options = {}) => {
      const articles = sliderTrack.querySelectorAll('article');
      const totalItems = articles.length;
      if (totalItems === 0) return;

      const viewport = sliderTrack.parentElement;
      if (!viewport) return;

      const containerWidth = viewport.offsetWidth;
      const activeArticle = articles[window.currentProjectIndex];
      if (!activeArticle) return;
      const cardWidth = activeArticle.offsetWidth;

      // Compute standard translateX to physically align the center of the active card with the center of the viewport
      const articleOffsetLeft = activeArticle.offsetLeft;
      const activeCardCenter = articleOffsetLeft + (cardWidth / 2);
      const translateX = (containerWidth / 2) - activeCardCenter;

      if (options.instant) {
        sliderTrack.style.transition = 'none';
      } else {
        sliderTrack.style.transition = 'transform 550ms cubic-bezier(0.16, 1, 0.3, 1)';
      }

      // Apply seamless positioning translate
      sliderTrack.style.transform = `translateX(${translateX}px)`;

      // Apply immersive active scaling vs minimized auxiliary ones
      articles.forEach((article, idx) => {
        if (idx === window.currentProjectIndex) {
          article.classList.add('scale-105', 'opacity-100', 'z-10', 'shadow-2xl', 'ring-1', 'ring-primary-500/20', 'dark:ring-primary-500/30');
          article.classList.remove('scale-95', 'opacity-35', 'blur-[0.5px]', 'shadow-none', 'hover:opacity-75');
        } else {
          article.classList.add('scale-95', 'opacity-35', 'blur-[0.5px]', 'shadow-none', 'hover:opacity-75');
          article.classList.remove('scale-105', 'opacity-100', 'z-10', 'shadow-2xl', 'ring-1', 'ring-primary-500/20', 'dark:ring-primary-500/30');
        }
      });

      // Keep navigation controls fully enabled for infinite fluidity
      prevBtn.classList.remove('opacity-40', 'pointer-events-none');
      nextBtn.classList.remove('opacity-40', 'pointer-events-none');
    };

    // Expose updateSlider to local window context for external triggers
    window.updateSlider = updateSlider;

    // Prev Button Event Listener (Infinite repeatable wrap around)
    prevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (isTransitioning) return;
      isTransitioning = true;
      sliderTrack.style.transition = 'transform 550ms cubic-bezier(0.16, 1, 0.3, 1)';
      window.currentProjectIndex--;
      updateSlider();
    });

    // Next Button Event Listener (Infinite repeatable wrap around)
    nextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (isTransitioning) return;
      isTransitioning = true;
      sliderTrack.style.transition = 'transform 550ms cubic-bezier(0.16, 1, 0.3, 1)';
      window.currentProjectIndex++;
      updateSlider();
    });

    // Handle seamless snap after transition fires
    sliderTrack.addEventListener('transitionend', (e) => {
      if (e.propertyName !== 'transform') return;
      isTransitioning = false;

      // Swap instantly once you cross the original boundary edges
      if (window.currentProjectIndex >= originalCount * 2) {
        window.currentProjectIndex -= originalCount;
        updateSlider({ instant: true });
      } else if (window.currentProjectIndex < originalCount) {
        window.currentProjectIndex += originalCount;
        updateSlider({ instant: true });
      }
    });

    // Touch support (swipe gestures on mobile screens)
    let startX = 0;
    let currentX = null;
    let isSwiping = false;

    sliderTrack.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
      currentX = null;
      isSwiping = true;
    }, { passive: true });

    sliderTrack.addEventListener('touchmove', (e) => {
      if (!isSwiping) return;
      currentX = e.touches[0].clientX;
    }, { passive: true });

    sliderTrack.addEventListener('touchend', () => {
      if (!isSwiping) return;
      isSwiping = false;
      if (currentX === null) return; // Clean tap - ignore swipe computation!

      const diffX = startX - currentX;
      if (Math.abs(diffX) > 40) {
        if (diffX > 0) {
          nextBtn.click();
        } else {
          prevBtn.click();
        }
      }
    });

    // Recalculate on viewport size adaptation (resize) with instant positioning snap to avoid overlaps
    window.addEventListener('resize', () => {
      // Normalize index if somehow outside safe center range during sudden viewport resize
      if (window.currentProjectIndex >= originalCount * 2) {
        window.currentProjectIndex -= originalCount;
      } else if (window.currentProjectIndex < originalCount) {
        window.currentProjectIndex += originalCount;
      }
      // Snap instantly to prevent visual tracking lag or sliding overlaps during active layout adjustments
      updateSlider({ instant: true });
      // Minor safeguard delay to settle complex responsive styles
      setTimeout(() => updateSlider({ instant: true }), 50);
      setTimeout(() => updateSlider({ instant: true }), 150);
    }, { passive: true });

    // Also update on window fully loaded to settle layout shifts perfectly
    window.addEventListener('load', () => {
      updateSlider({ instant: true });
      setTimeout(() => updateSlider({ instant: true }), 200);
    });

    // Initial load slide centering calculation
    updateSlider({ instant: true });
    setTimeout(() => updateSlider({ instant: true }), 100);
    setTimeout(() => updateSlider({ instant: true }), 250);
  }

  // 12. About Image Tilt
  const aboutGroup = document.getElementById('about-img-group');
  const aboutContainer = document.getElementById('about-img-container');
  const aboutGlow = document.getElementById('about-img-glow');
  if (aboutGroup && aboutContainer) {
    aboutGroup.addEventListener('mousemove', (e) => {
      const rect = aboutGroup.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      aboutContainer.style.transform = `perspective(1000px) rotateX(${y * -20}deg) rotateY(${x * 20}deg) scale3d(1.02, 1.02, 1.02)`;
      if (aboutGlow) { 
        aboutGlow.style.left = `${(e.clientX - rect.left) - rect.width/2}px`;
        aboutGlow.style.top = `${(e.clientY - rect.top) - rect.height/2}px`; 
      }
    });
    aboutGroup.addEventListener('mouseleave', () => aboutContainer.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
  }

  // 13. Contact Form Submission (Mailto)
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('contact-name').value;
      const email = document.getElementById('contact-email').value;
      const subject = document.getElementById('contact-subject').value;
      const message = document.getElementById('contact-message').value;
      
      const recipient = 'carl.gorobao2525@gmail.com';
      const body = `Hello Carl,\n\nYou have a new message from your portfolio contact form:\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
      
      const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      window.location.href = mailtoLink;
      
      // Optional: Feedback could be added here
      alert('Opening your email client to send the message...');
      contactForm.reset();
    });
  }
});
