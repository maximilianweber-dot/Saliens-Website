/* Saliens — minimales, progressives JS.
   Bewusst klein gehalten: FAQ nutzt natives <details>/<summary> (kein JS nötig),
   der Hero-Reveal läuft rein über CSS. Kein localStorage/sessionStorage. */

(function () {
  "use strict";

  // Aktuelles Jahr im Footer setzen (Fallback-Text steht bereits im HTML).
  var year = String(new Date().getFullYear());
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = year;
  });
})();
