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

  function reveal(el, delay) {
    el.classList.add("reveal");
    if (delay) el.style.setProperty("--reveal-delay", delay + "s");
  }

  // containers de texto: cada filho sobe em cascata (estilo Framer)
  document.querySelectorAll(".hero-inner, .section-head, .processo-head, .split-body").forEach(function (c) {
    Array.prototype.forEach.call(c.children, function (child, i) {
      reveal(child, Math.min(i * 0.1, 0.6));
    });
  });

  // blocos inteiros que sobem juntos
  document.querySelectorAll(
    ".split-img, .cta-card, .collage-grid, .foot-top, .processo-side"
  ).forEach(function (el) { reveal(el, 0); });

  // itens de grid: revelam em cascata pela ordem
  document.querySelectorAll(
    ".blob-grid > *, .feat-grid > *, .steps > .step, .tgrid > *, .plans > *, .tags > span, .faq-list > *, .stats > *"
  ).forEach(function (el) {
    var i = Array.prototype.indexOf.call(el.parentElement.children, el);
    reveal(el, Math.min(i * 0.08, 0.5));
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

// ===== Carrossel 3D: cards orbitando um centro a um raio (vitrine giratória) =====
(function () {
  var car = document.getElementById("svcCarousel");
  if (!car) return;
  var track = car.querySelector(".bcar-track");
  var base = Array.prototype.slice.call(track.children);
  if (!base.length) return;
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // distribui N cards igualmente ao redor do círculo (duplica os produtos base)
  var N = base.length * Math.ceil(6 / base.length); // >= 6, múltiplo do nº de produtos
  var step = 360 / N;                               // ângulo entre cards (graus)
  track.innerHTML = "";
  var cards = [];
  for (var k = 0; k < N; k++) {
    var clone = base[k % base.length].cloneNode(true);
    track.appendChild(clone);
    cards.push(clone);
  }

  var rot = 0;          // rotação atual do anel (graus)
  var radius = 400;     // raio da órbita (px) — calculado em measure()
  var speed = 10;       // graus por segundo (giro contínuo)
  var faceFactor = 0.4; // quanto o card acompanha a curva: 0 = sempre de frente p/ tela, 1 = radial
  var dragging = false, lastX = 0;

  function measure() {
    var w = cards[0].offsetWidth || 360;
    var h = cards[0].offsetHeight || w;
    // raio que espaça os cards no círculo sem sobreposição excessiva
    radius = (w / 2) / Math.tan(Math.PI / N) * 1.12;
    for (var i = 0; i < cards.length; i++) {
      var c = cards[i];
      c.style.position = "absolute";
      c.style.left = "0"; c.style.top = "0";
      c.style.marginLeft = (-w / 2) + "px";
      c.style.marginTop = (-h / 2) + "px";
    }
  }
  measure();

  car.addEventListener("pointerdown", function (e) {
    dragging = true; lastX = e.clientX; car.classList.add("grabbing");
    try { car.setPointerCapture(e.pointerId); } catch (_) {}
  });
  car.addEventListener("pointermove", function (e) {
    if (!dragging) return;
    rot += (e.clientX - lastX) * 0.25; // arrastar gira o anel
    lastX = e.clientX;
  });
  function endDrag() {
    if (!dragging) return;
    dragging = false; car.classList.remove("grabbing");
  }
  car.addEventListener("pointerup", endDrag);
  car.addEventListener("pointercancel", endDrag);

  function place() {
    for (var i = 0; i < cards.length; i++) {
      var ang = rot + i * step;
      var rel = ((ang % 360) + 540) % 360 - 180; // ângulo p/ a frente, em [-180,180]
      var abs = Math.abs(rel);
      var rad = rel * Math.PI / 180;
      // posição na órbita circular (raio); frente em z=0, laterais recuam pro fundo
      var x = Math.sin(rad) * radius;
      var z = Math.cos(rad) * radius - radius;
      var face = rel * faceFactor;               // gira só uma fração → mais virado pra tela
      cards[i].style.transform =
        "translate3d(" + x.toFixed(1) + "px,0," + z.toFixed(1) + "px) rotateY(" + face.toFixed(1) + "deg)";
      // some ao virar pro fundo (não exibe o verso); foco no arco da frente
      var op = abs <= 55 ? 1 : (abs >= 90 ? 0 : (90 - abs) / 35);
      cards[i].style.opacity = op;
      cards[i].style.zIndex = String(1000 - Math.round(abs));
      cards[i].style.pointerEvents = abs < 50 ? "auto" : "none";
    }
  }

  var lastT = null;
  function loop(t) {
    if (lastT === null) lastT = t;
    var dt = Math.min((t - lastT) / 1000, 0.05); // clamp evita salto ao voltar de aba inativa
    lastT = t;
    if (!dragging && !reduce) rot -= speed * dt;  // giro contínuo em torno do centro
    place();
    requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);

  var rt;
  window.addEventListener("resize", function () {
    clearTimeout(rt);
    rt = setTimeout(measure, 200);
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

// ===== Hero: blur azul ambiente em deriva lenta (estilo Framer) =====
(function () {
  // cada blob tem seu próprio ritmo/fase para um movimento orgânico e dessincronizado
  var blobs = [
    { el: document.getElementById("heroGlow"),  ax: 170, ay: 120, fx: 0.13, fy: 0.095, fs: 0.11, sc: 0.16, ph: 0 },
    { el: document.getElementById("heroGlow2"), ax: 140, ay: 100, fx: 0.105, fy: 0.14, fs: 0.085, sc: 0.13, ph: 2.4 }
  ].filter(function (b) { return b.el; });
  if (!blobs.length) return;
  var TAU = Math.PI * 2;
  function frame(t) {
    var e = t / 1000; // segundos
    for (var i = 0; i < blobs.length; i++) {
      var b = blobs[i];
      var x = Math.sin(e * b.fx * TAU + b.ph) * b.ax;
      var y = Math.cos(e * b.fy * TAU + b.ph) * b.ay;
      var s = 1 + Math.sin(e * b.fs * TAU + b.ph) * b.sc;
      b.el.style.transform = "translate(" + x + "px," + y + "px) scale(" + s + ")";
    }
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
})();
