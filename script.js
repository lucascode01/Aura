// ===== Smooth scroll (Lenis) — inércia parecida com o Framer =====
(function () {
  if (typeof Lenis === "undefined") return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  var lenis = new Lenis({ lerp: 0.1, wheelMultiplier: 1, smoothWheel: true });
  function raf(t) { lenis.raf(t); requestAnimationFrame(raf); }
  requestAnimationFrame(raf);
  window.lenis = lenis;

  // Âncoras internas rolam suavemente pelo Lenis
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener("click", function (e) {
      var id = a.getAttribute("href");
      if (id.length > 1) {
        var el = document.querySelector(id);
        if (el) { e.preventDefault(); lenis.scrollTo(el, { offset: -90 }); }
      }
    });
  });
})();

// ===== Menu mobile =====
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

function closeMenu() { document.body.classList.remove("menu-open"); }

hamburger.addEventListener("click", function () {
  document.body.classList.toggle("menu-open");
});

// Fecha o menu ao clicar em qualquer link dele
mobileMenu.querySelectorAll("a").forEach(function (a) {
  a.addEventListener("click", closeMenu);
});

// Fecha ao redimensionar para desktop
window.addEventListener("resize", function () {
  if (window.innerWidth > 820) closeMenu();
});

// ===== Navbar some ao rolar pra baixo, reaparece ao rolar pra cima =====
(function () {
  var navWrap = document.querySelector(".nav-wrap");
  if (!navWrap) return;

  var lastY = window.pageYOffset || 0;
  var ticking = false;
  var DELTA = 6;       // ignora micro-rolagens
  var SHOW_UNTIL = 80; // sempre visível perto do topo

  function update() {
    ticking = false;
    var y = window.pageYOffset || 0;

    // perto do topo ou com o menu mobile aberto: sempre mostra
    if (y <= SHOW_UNTIL || document.body.classList.contains("menu-open")) {
      navWrap.classList.remove("nav-hidden");
      lastY = y;
      return;
    }

    if (Math.abs(y - lastY) < DELTA) return;

    if (y > lastY) navWrap.classList.add("nav-hidden");   // descendo
    else navWrap.classList.remove("nav-hidden");          // subindo

    lastY = y;
  }

  window.addEventListener("scroll", function () {
    if (!ticking) { ticking = true; requestAnimationFrame(update); }
  }, { passive: true });
})();

// ===== Scroll reveal (entrada das seções, como no Framer) =====
(function () {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  // blocos inteiros que sobem juntos
  var blocks = document.querySelectorAll(
    ".section-head, .processo-head, .split-grid, .hero-strip, .cta-card, .collage-grid, .foot-top"
  );
  // itens de grid: revelam em cascata
  var gridItems = document.querySelectorAll(
    ".blob-grid > *, .feat-grid > *, .steps > .step, .tgrid > *, .plans > *, .tags > span, .faq-list > *, .stats > *"
  );

  blocks.forEach(function (el) { el.classList.add("reveal"); });
  gridItems.forEach(function (el) {
    el.classList.add("reveal");
    var i = Array.prototype.indexOf.call(el.parentElement.children, el);
    el.style.setProperty("--reveal-delay", Math.min(i * 0.08, 0.5) + "s");
  });

  var io = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    },
    { rootMargin: "0px 0px -60px 0px", threshold: 0.08 }
  );
  document.querySelectorAll(".reveal").forEach(function (el) { io.observe(el); });

  // garante que nada fique invisível se já estiver na tela ao carregar
  window.addEventListener("load", function () {
    document.querySelectorAll(".reveal").forEach(function (el) {
      var r = el.getBoundingClientRect();
      if (r.top < window.innerHeight && r.bottom > 0) el.classList.add("in");
    });
  });
})();

// ===== Empilhamento "leque" dos cards de portfólio ao rolar =====
(function () {
  var cards = Array.prototype.slice.call(document.querySelectorAll(".bigproj"));
  if (cards.length < 2) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  var ticking = false;
  function update() {
    ticking = false;
    for (var i = 0; i < cards.length; i++) {
      var card = cards[i];
      var next = cards[i + 1];
      if (!next) { card.style.transform = ""; card.style.filter = ""; continue; }
      var cTop = card.getBoundingClientRect().top;
      var nTop = next.getBoundingClientRect().top;
      // distância do topo deste card até o próximo: encolhe conforme o próximo sobe e cobre
      var dist = nTop - cTop;
      var range = card.offsetHeight;
      var p = 1 - Math.min(Math.max(dist / range, 0), 1); // 0 = descoberto, 1 = totalmente coberto
      var scale = 1 - 0.05 * p;
      var ty = -10 * p;
      card.style.transform = "translateY(" + ty + "px) scale(" + scale + ")";
      card.style.filter = "brightness(" + (1 - 0.22 * p) + ")";
    }
  }
  function onScroll() {
    if (!ticking) { ticking = true; requestAnimationFrame(update); }
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  update();
})();

// ===== Bolinha branca que segue o cursor =====
(function () {
  var dot = document.getElementById("cursorDot");
  if (!dot) return;
  if (window.matchMedia("(hover: none), (pointer: coarse)").matches) return;

  var hasLabel = !!document.getElementById("viewCursor");
  var tx = -100, ty = -100, x = -100, y = -100, shown = 0, over = 0;

  window.addEventListener("mousemove", function (e) { tx = e.clientX; ty = e.clientY; shown = 1; });
  document.addEventListener("mouseleave", function () { shown = 0; });
  document.addEventListener("mouseenter", function () { shown = 1; });
  if (hasLabel) {
    document.querySelectorAll(".bigproj").forEach(function (c) {
      c.addEventListener("mouseenter", function () { over = 1; });
      c.addEventListener("mouseleave", function () { over = 0; });
    });
  }
  (function loop() {
    x += (tx - x) * 0.3;
    y += (ty - y) * 0.3;
    dot.style.transform = "translate(" + x + "px," + y + "px) translate(-50%,-50%)";
    dot.style.opacity = (shown && !over) ? 1 : 0;
    requestAnimationFrame(loop);
  })();
})();

// ===== Cursor "View Now" sobre os cards de portfólio =====
(function () {
  var cur = document.getElementById("viewCursor");
  if (!cur) return;
  if (window.matchMedia("(hover: none), (pointer: coarse)").matches) return;

  var tx = -100, ty = -100, x = -100, y = -100, vis = 0, target = 0;

  document.querySelectorAll(".bigproj").forEach(function (card) {
    card.addEventListener("mouseenter", function () { target = 1; x = tx; y = ty; });
    card.addEventListener("mouseleave", function () { target = 0; });
  });
  window.addEventListener("mousemove", function (e) { tx = e.clientX; ty = e.clientY; });

  (function loop() {
    x += (tx - x) * 0.22;
    y += (ty - y) * 0.22;
    vis += (target - vis) * 0.2;
    var s = 0.4 + 0.6 * vis;
    cur.style.transform = "translate(" + x + "px," + y + "px) translate(-50%,-50%) scale(" + s + ")";
    cur.style.opacity = vis;
    requestAnimationFrame(loop);
  })();
})();

// ===== Carrossel de serviços (ticker com foco central, arrastável) — réplica do Framer =====
(function () {
  var car = document.getElementById("svcCarousel");
  if (!car) return;
  var track = car.querySelector(".bcar-track");
  var base = Array.prototype.slice.call(track.children);
  if (!base.length) return;
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // clona o conjunto até cobrir 2x a largura visível (loop sem buracos)
  function ensureCopies() {
    var need = car.clientWidth * 2 + 1200;
    var guard = 0;
    while (track.scrollWidth < need && guard < 20) {
      base.forEach(function (c) { track.appendChild(c.cloneNode(true)); });
      guard++;
    }
  }
  ensureCopies();

  var cards = Array.prototype.slice.call(track.children);
  var step = 1, setW = 1, baseCenter = 0;
  function measure() {
    step = cards[1].offsetLeft - cards[0].offsetLeft;          // card + gap
    setW = cards[base.length].offsetLeft - cards[0].offsetLeft; // 1 conjunto
    baseCenter = car.clientWidth / 2 - cards[0].offsetWidth / 2; // offset que centraliza um card
  }
  measure();

  var offset = baseCenter, target = baseCenter;
  var dragging = false, lastX = 0, paused = false;

  function snapTarget() { target = baseCenter - Math.round((baseCenter - offset) / step) * step; }

  car.addEventListener("pointerdown", function (e) {
    dragging = true; lastX = e.clientX; car.classList.add("grabbing");
    try { car.setPointerCapture(e.pointerId); } catch (_) {}
  });
  car.addEventListener("pointermove", function (e) {
    if (!dragging) return;
    offset += e.clientX - lastX; lastX = e.clientX; target = offset;
  });
  function endDrag() {
    if (!dragging) return;
    dragging = false; car.classList.remove("grabbing"); snapTarget();
  }
  car.addEventListener("pointerup", endDrag);
  car.addEventListener("pointercancel", endDrag);
  car.addEventListener("mouseenter", function () { paused = true; });
  car.addEventListener("mouseleave", function () { paused = false; });

  // avança 1 card a cada 3s (glide suave até a próxima posição)
  setInterval(function () {
    if (!dragging && !paused && !reduce) target -= step;
  }, 3000);

  function applyFocus() {
    var r = car.getBoundingClientRect();
    var cx = r.left + r.width / 2;
    for (var i = 0; i < cards.length; i++) {
      var cr = cards[i].getBoundingClientRect();
      var ds = (cr.left + cr.width / 2 - cx) / step; // distância em "passos" (cards) a partir do centro
      var c = Math.max(-1.6, Math.min(1.6, ds));     // limita o ângulo das laterais
      var abs = Math.min(Math.abs(ds), 2);
      var ry = -c * 38;                               // rotação em Y (coverflow)
      var tz = -abs * 180;                            // laterais recuam em profundidade
      var sc = 1 - Math.min(abs, 1) * 0.16;           // card central maior
      var op = 1 - Math.min(abs, 1) * 0.45;           // laterais mais apagadas
      cards[i].style.transform =
        "translateZ(" + tz + "px) rotateY(" + ry + "deg) scale(" + sc + ")";
      cards[i].style.opacity = op;
      cards[i].style.transformOrigin = "50% 50%";
      cards[i].style.zIndex = String(1000 - Math.round(abs * 100));
    }
  }

  function loop() {
    if (!dragging) offset += (target - offset) * 0.09; // glide com easing
    // wrap contínuo (o conteúdo repete a cada setW → sem salto visível)
    while (offset <= baseCenter - setW) { offset += setW; target += setW; }
    while (offset > baseCenter) { offset -= setW; target -= setW; }
    track.style.transform = "translateX(" + offset + "px)";
    applyFocus();
    requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);

  var rt;
  window.addEventListener("resize", function () {
    clearTimeout(rt);
    rt = setTimeout(function () {
      ensureCopies();
      cards = Array.prototype.slice.call(track.children);
      measure(); snapTarget();
    }, 200);
  });
})();

// ===== FAQ accordion =====
document.querySelectorAll(".faq-item").forEach(function (item) {
  const q = item.querySelector(".faq-q");
  const a = item.querySelector(".faq-a");
  q.addEventListener("click", function () {
    const isOpen = item.classList.contains("open");
    // fecha todos
    document.querySelectorAll(".faq-item").forEach(function (other) {
      other.classList.remove("open");
      other.querySelector(".faq-a").style.maxHeight = null;
    });
    if (!isOpen) {
      item.classList.add("open");
      a.style.maxHeight = a.scrollHeight + "px";
    }
  });
});
