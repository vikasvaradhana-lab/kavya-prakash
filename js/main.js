/* ================================================================
   KAVYA PRAKASH — PORTFOLIO JAVASCRIPT
   Version: 3.3 — Mobile Nav
   ================================================================ */

const prefersReducedMotion =
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const finePointer =
  window.matchMedia('(hover: hover) and (pointer: fine)').matches;

/* ================================================================
   THEME TOGGLE
   ================================================================ */
(function initTheme() {
  const themeBtn = document.getElementById('themeBtn');
  const html = document.documentElement;
  if (!themeBtn) return;

  themeBtn.addEventListener('click', () => {
    const cur = html.getAttribute('data-theme') || 'dark';
    const next = cur === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  });
})();

/* ================================================================
   MOBILE NAVIGATION
   ================================================================ */
(function initMobileNav() {
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  if (!hamburger || !mobileMenu) return;

  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
  });

  window.closeMobile = function () {
    mobileMenu.classList.remove('open');
  };
})();

/* ================================================================
   SCROLL ANIMATIONS
   ================================================================ */
(function initScrollReveal() {
  const revealEls = document.querySelectorAll('.reveal');

  if (prefersReducedMotion) {
    revealEls.forEach(el => el.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), i * 70);
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

  revealEls.forEach(el => observer.observe(el));
})();

/* ================================================================
   SKILL BARS
   ================================================================ */
(function initSkillBars() {
  const cats = document.querySelectorAll('.skill-cat');

  if (prefersReducedMotion) {
    cats.forEach(cat => {
      cat.querySelectorAll('.skill-fill').forEach(bar => {
        bar.style.width = bar.dataset.width + '%';
      });
    });
    return;
  }

  const skillObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.skill-fill').forEach((bar, i) => {
          setTimeout(() => { bar.style.width = bar.dataset.width + '%'; }, i * 100);
        });
        skillObs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.25 });

  cats.forEach(el => skillObs.observe(el));
})();

/* ================================================================
   SCROLL STATE — progress bar, nav elevation, section rail
   ================================================================ */
(function initScrollState() {
  const progress = document.getElementById('scrollProgress');
  const nav = document.querySelector('nav');
  const ticks = Array.from(document.querySelectorAll('.section-rail .rail-tick'));
  const railIds = ['about', 'education', 'experience', 'skills', 'vision'];
  const railSections = railIds.map(id => document.getElementById(id)).filter(Boolean);
  let ticking = false;

  function update() {
    const doc = document.documentElement;
    const max = doc.scrollHeight - doc.clientHeight;
    const y = window.scrollY || doc.scrollTop;

    if (progress) {
      progress.style.width = (max > 0 ? (y / max) * 100 : 0) + '%';
    }
    if (nav) {
      nav.classList.toggle('scrolled', y > 12);
    }

    if (ticks.length && railSections.length) {
      let active = 0;
      railSections.forEach((s, i) => {
        if (y >= s.offsetTop - window.innerHeight * 0.4) active = i;
      });
      ticks.forEach((t, i) => t.classList.toggle('active', i === active));
    }
    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) { window.requestAnimationFrame(update); ticking = true; }
  }, { passive: true });

  update();
})();

/* ================================================================
   NAVIGATION ACTIVE STATE
   ================================================================ */
(function initNavActiveState() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');
  if (!navLinks.length) return;

  window.addEventListener('scroll', () => {
    let cur = '';
    sections.forEach(s => {
      if (window.scrollY >= s.offsetTop - 140) cur = s.id;
    });
    navLinks.forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === '#' + cur);
    });
  }, { passive: true });

  window.dispatchEvent(new Event('scroll'));
})();

/* ================================================================
   PARALLAX
   ================================================================ */
(function initParallax() {
  const els = document.querySelectorAll('[data-parallax]');
  if (!els.length || prefersReducedMotion) return;

  let ticking = false;
  function update() {
    const vh = window.innerHeight;
    const tiltX = window.__tiltX || 0;
    const tiltY = window.__tiltY || 0;
    els.forEach(el => {
      const speed = parseFloat(el.dataset.parallax) || 0.05;
      const rect = el.getBoundingClientRect();
      const center = rect.top + rect.height / 2;
      const delta = (center - vh / 2) * -speed;
      el.style.transform = 'translate3d(' + tiltX.toFixed(2) + 'px,' + (delta + tiltY).toFixed(2) + 'px,0)';
    });
    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) { window.requestAnimationFrame(update); ticking = true; }
  }, { passive: true });

  window.addEventListener('resize', update, { passive: true });
  window.__parallaxUpdate = update;
  update();
})();

/* ================================================================
   MAGNETIC BUTTONS
   ================================================================ */
(function initMagnetic() {
  if (!finePointer || prefersReducedMotion) return;
  const btns = document.querySelectorAll('.btn');

  btns.forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const r = btn.getBoundingClientRect();
      const x = (e.clientX - r.left - r.width / 2) * 0.22;
      const y = (e.clientY - r.top - r.height / 2) * 0.35;
      btn.style.transform = 'translate(' + x.toFixed(2) + 'px,' + y.toFixed(2) + 'px)';
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = '';
    });
  });
})();

/* ================================================================
   CURSOR SPOTLIGHT
   ================================================================ */
(function initCursorSpot() {
  const spot = document.getElementById('cursorSpot');
  if (!spot || !finePointer || prefersReducedMotion) return;

  let x = window.innerWidth / 2, y = window.innerHeight / 2;
  let cx = x, cy = y, raf = null;

  function loop() {
    cx += (x - cx) * 0.12;
    cy += (y - cy) * 0.12;
    spot.style.transform = 'translate3d(' + cx.toFixed(1) + 'px,' + cy.toFixed(1) + 'px,0)';
    raf = requestAnimationFrame(loop);
  }

  window.addEventListener('mousemove', (e) => {
    x = e.clientX; y = e.clientY;
    spot.classList.add('on');
    if (!raf) loop();
  }, { passive: true });

  document.addEventListener('mouseleave', () => spot.classList.remove('on'));
  window.addEventListener('blur', () => spot.classList.remove('on'));
})();

/* ================================================================
   TOUCH & MOTION (mobile-only branch)
   Ambient drifting glow + touch-following glow + device-tilt parallax.
   Runs only on coarse pointers; desktop behaviour is untouched.
   ================================================================ */
(function initTouchMotion() {
  const touchMode =
    window.matchMedia('(hover: none) and (pointer: coarse)').matches ||
    (('ontouchstart' in window) && !finePointer);

  if (!touchMode || prefersReducedMotion) return;

  const spot = document.getElementById('cursorSpot');
  let W = window.innerWidth, H = window.innerHeight;
  let tx = W / 2, ty = H / 2;   // target
  let cx = W / 2, cy = H / 2;   // eased current
  let lastTouch = 0;
  let raf = null;

  function frame(now) {
    if (now - lastTouch > 1600) {
      const t = now / 1000;
      tx = W / 2 + Math.sin(t * 0.23) * W * 0.3;
      ty = H / 2 + Math.cos(t * 0.17) * H * 0.3;
    }
    cx += (tx - cx) * 0.06;
    cy += (ty - cy) * 0.06;
    if (spot) {
      const gx = window.__tiltX || 0;
      const gy = window.__tiltY || 0;
      spot.style.transform =
        'translate3d(' + (cx + gx).toFixed(1) + 'px,' + (cy + gy).toFixed(1) + 'px,0)';
    }
    raf = requestAnimationFrame(frame);
  }

  function start() {
    if (raf) return;
    if (spot) spot.classList.add('on');
    raf = requestAnimationFrame(frame);
  }
  function stop() {
    if (raf) { cancelAnimationFrame(raf); raf = null; }
    if (spot) spot.classList.remove('on');
  }

  window.addEventListener('touchstart', (e) => {
    const t = e.touches[0];
    tx = t.clientX; ty = t.clientY;
    lastTouch = performance.now();
    start();
  }, { passive: true });

  window.addEventListener('touchmove', (e) => {
    const t = e.touches[0];
    tx = t.clientX; ty = t.clientY;
    lastTouch = performance.now();
  }, { passive: true });

  window.addEventListener('touchend', () => { lastTouch = performance.now(); }, { passive: true });
  window.addEventListener('resize', () => { W = window.innerWidth; H = window.innerHeight; }, { passive: true });

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) stop(); else start();
  });

  start();

  /* ── Device-tilt parallax (progressive enhancement) ── */
  function onOrient(e) {
    if (e.gamma == null) return;
    const g = Math.max(-25, Math.min(25, e.gamma));
    const b = Math.max(-25, Math.min(25, (e.beta || 0) - 45));
    window.__tiltX = (g / 25) * 14;
    window.__tiltY = (b / 25) * 14;
    if (window.__parallaxUpdate) window.__parallaxUpdate();
  }

  function enableTilt() {
    if (!window.DeviceOrientationEvent) return;
    if (typeof window.DeviceOrientationEvent.requestPermission === 'function') {
      window.DeviceOrientationEvent.requestPermission()
        .then(r => { if (r === 'granted') window.addEventListener('deviceorientation', onOrient, { passive: true }); })
        .catch(() => {});
    } else {
      window.addEventListener('deviceorientation', onOrient, { passive: true });
    }
  }

  window.addEventListener('touchstart', enableTilt, { once: true, passive: true });
})();

/* ================================================================
   MOLECULAR NETWORK CANVAS (hero)
   ================================================================ */
(function initMolecularCanvas() {
  const canvas = document.getElementById('molCanvas');
  if (!canvas || prefersReducedMotion) return;

  const ctx = canvas.getContext('2d');
  let w = 0, h = 0, dpr = Math.min(window.devicePixelRatio || 1, 2);
  let nodes = [], raf = null, visible = true;

  function resize() {
    const rect = canvas.getBoundingClientRect();
    w = rect.width; h = rect.height;
    canvas.width = Math.floor(w * dpr);
    canvas.height = Math.floor(h * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const count = Math.max(18, Math.min(46, Math.round((w * h) / 26000)));
    nodes = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.22,
      vy: (Math.random() - 0.5) * 0.22,
      r: Math.random() * 1.4 + 0.6
    }));
  }

  function accent() {
    const isDark = document.documentElement.getAttribute('data-theme') !== 'light';
    return isDark ? [201, 168, 106] : [138, 106, 44];
  }

  function draw() {
    const [r, g, b] = accent();
    ctx.clearRect(0, 0, w, h);

    for (let i = 0; i < nodes.length; i++) {
      const n = nodes[i];
      n.x += n.vx; n.y += n.vy;
      if (n.x < 0 || n.x > w) n.vx *= -1;
      if (n.y < 0 || n.y > h) n.vy *= -1;

      for (let j = i + 1; j < nodes.length; j++) {
        const m = nodes[j];
        const dx = n.x - m.x, dy = n.y - m.y;
        const d2 = dx * dx + dy * dy;
        if (d2 < 15000) {
          const a = (1 - d2 / 15000) * 0.28;
          ctx.strokeStyle = 'rgba(' + r + ',' + g + ',' + b + ',' + a.toFixed(3) + ')';
          ctx.lineWidth = 0.7;
          ctx.beginPath();
          ctx.moveTo(n.x, n.y);
          ctx.lineTo(m.x, m.y);
          ctx.stroke();
        }
      }

      ctx.fillStyle = 'rgba(' + r + ',' + g + ',' + b + ',0.55)';
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
      ctx.fill();
    }
    raf = requestAnimationFrame(draw);
  }

  function start() { if (!raf) draw(); }
  function stop() { if (raf) { cancelAnimationFrame(raf); raf = null; } }

  const hero = document.getElementById('hero');
  if (hero) {
    const heroObs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        visible = e.isIntersecting;
        visible ? start() : stop();
      });
    }, { threshold: 0 });
    heroObs.observe(hero);
  }

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) stop(); else if (visible) start();
  });

  let rt = null;
  window.addEventListener('resize', () => {
    clearTimeout(rt);
    rt = setTimeout(resize, 180);
  }, { passive: true });

  resize();
  start();
})();

/* ================================================================
   UTILITIES
   ================================================================ */
window.handleForm = function (e) {
  e.preventDefault();
  document.getElementById('form-msg').style.display = 'block';
};
