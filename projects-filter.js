/* =======================================================
   Pedro — Engineering Portfolio
   Projects page: filter project cards by skill tag.

   The filter buttons are built from the tags already on the
   cards in projects.html, so adding or renaming a tag on a
   card updates the filter automatically. The chosen tag is
   kept in the URL (projects.html?tag=CAD) so a filtered view
   can be shared or linked to from a project's detail page.
   ======================================================= */

(function(){
  var bar = document.getElementById('tag-filter');
  if (!bar) return;
  var chipsEl = bar.querySelector('.filter-chips');
  var statusEl = bar.querySelector('.filter-status');
  var cards = Array.prototype.slice.call(document.querySelectorAll('section.sheet .card-grid > .card'));
  var sections = Array.prototype.slice.call(document.querySelectorAll('section.sheet'));

  function tagsOf(card){
    return Array.prototype.map.call(card.querySelectorAll('.tags span'), function(s){ return s.textContent.trim(); });
  }

  // Count how many projects use each tag; most-used first, then A–Z.
  var counts = {};
  cards.forEach(function(card){
    tagsOf(card).forEach(function(t){ counts[t] = (counts[t] || 0) + 1; });
  });
  var tags = Object.keys(counts).sort(function(a, b){
    return counts[b] - counts[a] || a.localeCompare(b);
  });

  function makeChip(label, value, count){
    var b = document.createElement('button');
    b.type = 'button';
    b.className = 'chip';
    b.setAttribute('data-tag', value);
    b.setAttribute('aria-pressed', 'false');
    b.innerHTML = '<span class="chip-label"></span><span class="chip-count"></span>';
    b.querySelector('.chip-label').textContent = label;
    b.querySelector('.chip-count').textContent = count;
    b.addEventListener('click', function(){
      apply(value === active ? '' : value, true);
    });
    chipsEl.appendChild(b);
  }
  makeChip('All projects', '', cards.length);
  tags.forEach(function(t){ makeChip(t, t, counts[t]); });

  var active = '';

  function apply(tag, updateUrl){
    if (tag && !counts[tag]) tag = '';
    active = tag;

    Array.prototype.forEach.call(chipsEl.children, function(chip){
      var on = chip.getAttribute('data-tag') === tag;
      chip.classList.toggle('is-active', on);
      chip.setAttribute('aria-pressed', on ? 'true' : 'false');
    });

    var shown = 0;
    cards.forEach(function(card){
      var match = !tag || tagsOf(card).indexOf(tag) !== -1;
      card.hidden = !match;
      if (match) shown++;
      // Highlight the matching tag on each visible card.
      Array.prototype.forEach.call(card.querySelectorAll('.tags span'), function(s){
        s.classList.toggle('is-match', !!tag && s.textContent.trim() === tag);
      });
    });

    // Hide a whole section (e.g. Nevada DOT) when none of its projects match.
    sections.forEach(function(sec){
      var grid = sec.querySelector('.card-grid');
      if (!grid) return;
      var any = Array.prototype.some.call(grid.children, function(c){ return !c.hidden; });
      sec.hidden = !any;
    });
    // Sub-nav links only for sections that are still visible.
    Array.prototype.forEach.call(document.querySelectorAll('nav.subnav a'), function(a){
      var target = document.querySelector(a.getAttribute('href'));
      a.hidden = !!(target && target.hidden);
    });

    statusEl.textContent = tag
      ? 'Showing ' + shown + ' of ' + cards.length + ' projects tagged “' + tag + '”.'
      : 'Showing all ' + cards.length + ' projects.';

    if (updateUrl && window.history && history.replaceState){
      var url = location.pathname + (tag ? '?tag=' + encodeURIComponent(tag) : '');
      history.replaceState(null, '', url);
    }
  }

  var initial = new URLSearchParams(location.search).get('tag') || '';
  apply(initial, false);
})();
