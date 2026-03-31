// Mobile navigation toggle
(function () {
  var toggle = document.querySelector('.nav-toggle');
  var menu = document.getElementById('nav-menu');

  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      var expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      menu.classList.toggle('is-open');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function (e) {
      if (!e.target.closest('.navigation-wrapper') && menu.classList.contains('is-open')) {
        toggle.setAttribute('aria-expanded', 'false');
        menu.classList.remove('is-open');
      }
    });
  }
})();

// Scroll-reveal for home sections
(function () {
  var sections = document.querySelectorAll('.home-section');
  if (!sections.length || !('IntersectionObserver' in window)) {
    sections.forEach(function (s) { s.classList.add('is-visible'); });
    return;
  }
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  sections.forEach(function (s) { observer.observe(s); });
})();
