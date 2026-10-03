/* =======================================================
   Pedro — Engineering Portfolio
   Shared behaviour across all pages:
   1. Twinkling stars + animated rocket in the header and footer
   2. Fade-in of content blocks as the visitor scrolls down
   ======================================================= */

(function(){
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ---------- 1. Header / footer rocket + stars ----------
  var ROCKET_SVG =
    '<svg class="strip-rocket" viewBox="0 0 44 78" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' +
      '<ellipse class="strip-flame" cx="22" cy="68" rx="6" ry="11" fill="var(--flame)" opacity="0.9"/>' +
      '<path d="M22,3 C31,15 34,32 34,50 L10,50 C10,32 13,15 22,3 Z" fill="var(--rocket-body)"/>' +
      '<path d="M10,50 L2,66 L12,60 Z" fill="var(--rocket-dark)"/>' +
      '<path d="M34,50 L42,66 L32,60 Z" fill="var(--rocket-dark)"/>' +
      '<rect x="10" y="50" width="24" height="8" fill="var(--rocket-dark)"/>' +
      '<circle cx="22" cy="26" r="6" fill="#0e2038"/>' +
    '</svg>';

  function decorateStrip(el, rocketClass){
    if (!el) return;
    var stars = document.createElement('div');
    stars.className = 'strip-stars';
    for (var i = 0; i < 18; i++){
      var s = document.createElement('div');
      s.className = 'strip-star';
      s.style.left = (Math.random()*100) + '%';
      s.style.top = (Math.random()*100) + '%';
      s.style.animationDelay = (Math.random()*3) + 's';
      stars.appendChild(s);
    }
    el.insertBefore(stars, el.firstChild);
    stars.insertAdjacentHTML('afterend', ROCKET_SVG);
    stars.nextElementSibling.classList.add(rocketClass);
  }

  decorateStrip(document.querySelector('.titleblock'), 'strip-rocket-header');
  decorateStrip(document.querySelector('footer'), 'strip-rocket-footer');

  // ---------- 2. Fade-in on scroll ----------
  if (reduceMotion || !('IntersectionObserver' in window)) return;

  var targets = document.querySelectorAll([
    'section.sheet .sheet-header',
    'section.sheet .sheet-sub',
    'section.sheet .card-grid > *',
    'section.sheet .timeline-card',
    'section.sheet .volunteer-split > .card',
    'section.sheet .wrap > div > .photo-slot',
    'section.sheet .wrap > div > div > p',
    'section.sheet .wrap > div > div > .btn',
    'section.sheet .contact-list li',
    'section.sheet .detail-header',
    'section.sheet .detail-photo',
    'section.sheet .detail-block'
  ].join(','));

  var observer = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  targets.forEach(function(el){
    // Stagger siblings in the same row/grid so they cascade in.
    var siblings = el.parentElement ? Array.prototype.indexOf.call(el.parentElement.children, el) : 0;
    el.style.animationDelay = Math.min(siblings, 5) * 0.08 + 's';
    el.classList.add('reveal');
    observer.observe(el);
  });
})();
