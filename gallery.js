/* =======================================================
   Pedro — Engineering Portfolio
   Project page gallery: a grid of photo/video previews and a
   full-screen viewer (lightbox) with captions, arrows, keyboard
   and swipe support.

   Usage (from project.html):
     ProjectGallery.render(gridEl, items)   // builds the preview grid
     ProjectGallery.open(items, index)      // opens the viewer
   where each item is
     { type: 'image', src, thumb, caption }  or
     { type: 'video', src, poster, thumb, caption, duration }
   ======================================================= */

var ProjectGallery = (function(){
  var box, stage, captionEl, counterEl, prevBtn, nextBtn, closeBtn;
  var items = [], index = 0, lastFocus = null;

  function build(){
    box = document.createElement('div');
    box.className = 'lightbox';
    box.hidden = true;
    box.setAttribute('role', 'dialog');
    box.setAttribute('aria-modal', 'true');
    box.setAttribute('aria-label', 'Project photos and videos');
    box.innerHTML =
      '<button type="button" class="lb-btn lb-close" aria-label="Close">&times;</button>' +
      '<button type="button" class="lb-btn lb-prev" aria-label="Previous">&#8249;</button>' +
      '<figure class="lb-figure"><div class="lb-stage"></div>' +
      '<figcaption class="lb-caption"><span class="lb-text"></span><span class="lb-counter"></span></figcaption></figure>' +
      '<button type="button" class="lb-btn lb-next" aria-label="Next">&#8250;</button>';
    document.body.appendChild(box);

    stage = box.querySelector('.lb-stage');
    captionEl = box.querySelector('.lb-text');
    counterEl = box.querySelector('.lb-counter');
    prevBtn = box.querySelector('.lb-prev');
    nextBtn = box.querySelector('.lb-next');
    closeBtn = box.querySelector('.lb-close');

    prevBtn.addEventListener('click', function(){ go(-1); });
    nextBtn.addEventListener('click', function(){ go(1); });
    closeBtn.addEventListener('click', close);
    // Click on the dark backdrop (not the media) closes the viewer.
    box.addEventListener('click', function(e){ if (e.target === box) close(); });

    document.addEventListener('keydown', function(e){
      if (box.hidden) return;
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowLeft') go(-1);
      else if (e.key === 'ArrowRight') go(1);
      else if (e.key === 'Tab') trapFocus(e);
    });

    // Swipe left/right on touch screens.
    var startX = null;
    box.addEventListener('touchstart', function(e){ startX = e.touches[0].clientX; }, {passive:true});
    box.addEventListener('touchend', function(e){
      if (startX === null) return;
      var dx = e.changedTouches[0].clientX - startX;
      if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
      startX = null;
    });
  }

  function trapFocus(e){
    var f = Array.prototype.filter.call(box.querySelectorAll('button, video'), function(el){ return !el.hidden; });
    if (!f.length) return;
    var first = f[0], last = f[f.length - 1];
    if (e.shiftKey && document.activeElement === first){ last.focus(); e.preventDefault(); }
    else if (!e.shiftKey && document.activeElement === last){ first.focus(); e.preventDefault(); }
  }

  function show(){
    var it = items[index];
    stage.innerHTML = '';
    var el;
    if (it.type === 'video'){
      el = document.createElement('video');
      el.src = it.src;
      el.poster = it.poster || '';
      el.controls = true;
      el.playsInline = true;
      el.preload = 'metadata';
      el.autoplay = true;
    } else {
      el = document.createElement('img');
      el.src = it.src;
      el.alt = it.caption || 'Project photo';
    }
    el.className = 'lb-media';
    stage.appendChild(el);
    captionEl.textContent = it.caption || '';
    counterEl.textContent = items.length > 1 ? (index + 1) + ' / ' + items.length : '';
    prevBtn.hidden = nextBtn.hidden = items.length < 2;
  }

  function go(step){
    if (items.length < 2) return;
    index = (index + step + items.length) % items.length;
    show();
  }

  function open(list, i){
    if (!box) build();
    items = list; index = i || 0;
    lastFocus = document.activeElement;
    box.hidden = false;
    document.documentElement.classList.add('lb-open');
    show();
    closeBtn.focus();
  }

  function close(){
    stage.innerHTML = '';            // stops any playing video
    box.hidden = true;
    document.documentElement.classList.remove('lb-open');
    if (lastFocus) lastFocus.focus();
  }

  function render(grid, list, offset){
    offset = offset || 0;
    list.forEach(function(it, i){
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'gallery-item' + (it.type === 'video' ? ' is-video' : '');
      b.setAttribute('aria-label', (it.type === 'video' ? 'Play video: ' : 'View photo: ') + (it.caption || 'project media'));
      var img = document.createElement('img');
      img.src = it.thumb || it.poster || it.src;
      img.alt = '';
      img.loading = 'lazy';
      b.appendChild(img);
      if (it.type === 'video'){
        var badge = document.createElement('span');
        badge.className = 'gallery-play';
        badge.setAttribute('aria-hidden', 'true');
        b.appendChild(badge);
        if (it.duration){
          var d = document.createElement('span');
          d.className = 'gallery-duration';
          d.textContent = Math.floor(it.duration / 60) + ':' + ('0' + (it.duration % 60)).slice(-2);
          b.appendChild(d);
        }
      }
      if (it.caption){
        var cap = document.createElement('span');
        cap.className = 'gallery-caption';
        cap.textContent = it.caption;
        b.appendChild(cap);
      }
      b.addEventListener('click', function(){ open(allItems || list, i + offset); });
      grid.appendChild(b);
    });
  }

  // The viewer can step through more than the grid shows (e.g. the main
  // photo first, then the gallery), so the page can register the full list.
  var allItems = null;
  function setAll(list){ allItems = list; }

  return { render: render, open: open, setAll: setAll };
})();
