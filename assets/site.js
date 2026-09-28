/* Rapid Tow Fayetteville — site behavior
   ONE place to change the call-tracking number for the renter. */
window.RT_CONFIG = {
  display: '(910) 555-0142',   // ← call-tracking number (display)
  tel: '+19105550142',         // ← same number, E.164 for tel: links
  leadEmail: 'leads@rapidtowfayetteville.com'
};

(function () {
  var C = window.RT_CONFIG;
  window.dataLayer = window.dataLayer || [];

  // 1. Stamp the tracking number on every call element
  document.querySelectorAll('[data-call]').forEach(function (a) {
    a.setAttribute('href', 'tel:' + C.tel);
    a.addEventListener('click', function () {
      window.dataLayer.push({ event: 'call_click', page: location.pathname, placement: a.getAttribute('data-call') || 'inline' });
    });
  });
  document.querySelectorAll('[data-num]').forEach(function (n) { n.textContent = C.display; });

  // 2. Mobile menu
  var btn = document.querySelector('.menu-btn'), menu = document.querySelector('.menu');
  if (btn && menu) btn.addEventListener('click', function () {
    var on = menu.classList.toggle('on');
    btn.setAttribute('aria-expanded', on); btn.textContent = on ? 'Close' : 'Menu';
  });

  // 3. "Show my GPS" — for people who don't know where they are
  document.querySelectorAll('[data-locate]').forEach(function (b) {
    b.addEventListener('click', function () {
      var out = b.parentElement.querySelector('.loc-out');
      if (!navigator.geolocation) { out.textContent = 'GPS not available on this device. Look for an exit sign, mile marker, or the nearest business name.'; return; }
      out.textContent = 'Finding you…';
      navigator.geolocation.getCurrentPosition(function (p) {
        var la = p.coords.latitude.toFixed(5), lo = p.coords.longitude.toFixed(5);
        out.innerHTML = '<strong>' + la + ', ' + lo + '</strong>±' + Math.round(p.coords.accuracy) + ' m · read these numbers to dispatch · <a target="_blank" rel="noopener" href="https://maps.google.com/?q=' + la + ',' + lo + '">open in Maps</a>';
        window.dataLayer.push({ event: 'gps_located', page: location.pathname });
      }, function () {
        out.textContent = 'Couldn’t get GPS. Look for an exit number, a green mile marker, or the nearest business sign.';
      }, { enableHighAccuracy: true, timeout: 10000 });
    });
  });

  // 4. Quote form (backup CTA) — prototype: shows confirmation, logs lead
  document.querySelectorAll('form[data-quote]').forEach(function (f) {
    f.addEventListener('submit', function (e) {
      e.preventDefault();
      var data = Object.fromEntries(new FormData(f).entries());
      window.dataLayer.push({ event: 'quote_submit', page: location.pathname, lead: data });
      f.style.display = 'none';
      var s = f.parentElement.querySelector('.sent'); if (s) s.style.display = 'block';
    });
  });
})();
