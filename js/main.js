/* ================================================================
   KAVYA PRAKASH — PORTFOLIO JAVASCRIPT
   Version: 1.0 — Refactor Baseline
   ================================================================ */

/* ================================================================
   THEME TOGGLE
   Handles dark/light mode switching and persistence.
   ================================================================ */
(function initTheme() {
  const themeBtn = document.getElementById('themeBtn');
  const html = document.documentElement;

  // Toggle theme on button click
  themeBtn.addEventListener('click', () => {
    const cur = html.getAttribute('data-theme') || 'dark';
    const next = cur === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  });
})();

/* ================================================================
   MOBILE NAVIGATION
   Hamburger menu toggle for mobile viewports.
   ================================================================ */
(function initMobileNav() {
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');

  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
  });

  // Close mobile menu — attached to each link via onclick in HTML
  window.closeMobile = function () {
    mobileMenu.classList.remove('open');
  };
})();

/* ================================================================
   SCROLL ANIMATIONS
   IntersectionObserver-based reveal animations on scroll.
   ================================================================ */
(function initScrollReveal() {
  const revealEls = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), i * 60);
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });

  revealEls.forEach(el => observer.observe(el));
})();

/* ================================================================
   INTERACTIONS
   Skill bars animation and counter animations.
   ================================================================ */

/* ── Skill Bars ── */
(function initSkillBars() {
  const skillObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.skill-fill').forEach(bar => {
          bar.style.width = bar.dataset.width + '%';
        });
        skillObs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  document.querySelectorAll('.skill-cat').forEach(el => skillObs.observe(el));
})();

/* ── Counter Animation ── */
(function initCounters() {
  function animateCount(el, target) {
    let cur = 0;
    const step = Math.ceil(target / 40);
    const timer = setInterval(() => {
      cur = Math.min(cur + step, target);
      el.textContent = cur;
      if (cur >= target) clearInterval(timer);
    }, 40);
  }

  const countEls = document.querySelectorAll('.stat-num[data-count]');
  const countObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        animateCount(e.target, +e.target.dataset.count);
        countObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.5 });

  countEls.forEach(el => countObs.observe(el));
})();

/* ================================================================
   UTILITIES
   Form handling and navigation active state.
   ================================================================ */

/* ── Contact Form Handler ── */
window.handleForm = function (e) {
  e.preventDefault();
  document.getElementById('form-msg').style.display = 'block';
};

/* ── Navigation Active State ── */
(function initNavActiveState() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  window.addEventListener('scroll', () => {
    let cur = '';
    sections.forEach(s => {
      if (window.scrollY >= s.offsetTop - 100) cur = s.id;
    });
    navLinks.forEach(a => {
      if (a.getAttribute('href') === '#' + cur) {
        a.classList.add('active');
      } else {
        a.classList.remove('active');
      }
    });
  }, { passive: true });
  
  // Trigger once on load to set initial active state
  window.dispatchEvent(new Event('scroll'));
})();
