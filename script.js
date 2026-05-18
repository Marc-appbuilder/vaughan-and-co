(function () {
  'use strict';

  /* ---- Mobile navigation ---- */
  var burger  = document.getElementById('burger');
  var navMenu = document.getElementById('navMenu');

  if (burger && navMenu) {
    burger.addEventListener('click', function () {
      var open = navMenu.classList.toggle('is-open');
      burger.classList.toggle('is-active', open);
      burger.setAttribute('aria-expanded', String(open));
    });

    navMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navMenu.classList.remove('is-open');
        burger.classList.remove('is-active');
        burger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---- Smooth scroll with sticky-nav offset ---- */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var id = this.getAttribute('href');
      if (id === '#') return;
      var target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      var navH = document.getElementById('navbar')
        ? document.getElementById('navbar').offsetHeight
        : 72;
      var top = target.getBoundingClientRect().top + window.pageYOffset - navH - 8;
      window.scrollTo({ top: top, behavior: 'smooth' });
    });
  });

  /* ---- Contact form fake submission ---- */
  var form    = document.getElementById('contactForm');
  var success = document.getElementById('formSuccess');

  if (form && success) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var btn = form.querySelector('button[type="submit"]');
      var originalText = btn.textContent;
      btn.textContent = 'Sending…';
      btn.disabled = true;

      setTimeout(function () {
        form.style.display = 'none';
        success.classList.add('is-visible');
      }, 900);
    });
  }

  /* ---- Sticky nav shadow on scroll ---- */
  var navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', function () {
      navbar.style.boxShadow = window.scrollY > 4
        ? '0 2px 14px rgba(0,0,0,0.35)'
        : '0 2px 10px rgba(0,0,0,0.3)';
    }, { passive: true });
  }
}());
