(function () {
  "use strict";
  var WHATSAPP_NUMBER = "905069534098";

  /* ---- WhatsApp link builder ---- */
  document.querySelectorAll(".wa-link").forEach(function (el) {
    var text = el.getAttribute("data-wa-text") || "Merhaba! Golden Grape Travel hakkında bilgi almak istiyorum.";
    el.setAttribute("href", "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(text));
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener noreferrer");
  });

  /* ---- Theme toggle ---- */
  var root = document.documentElement;
  var toggle = document.getElementById("theme-toggle");
  var iconSun = document.getElementById("icon-sun");
  var iconMoon = document.getElementById("icon-moon");
  var stored = localStorage.getItem("kv-theme");

  function syncThemeIcon() {
    var isDark = (root.getAttribute("data-theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")) === "dark";
    iconSun.classList.toggle("hidden", isDark);
    iconMoon.classList.toggle("hidden", !isDark);
  }
  if (stored) root.setAttribute("data-theme", stored);
  syncThemeIcon();
  toggle.addEventListener("click", function () {
    var current = root.getAttribute("data-theme") ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    var next = current === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    localStorage.setItem("kv-theme", next);
    syncThemeIcon();
  });

  /* ---- Mobile menu ---- */
  var menuToggle = document.getElementById("menu-toggle");
  var mobileMenu = document.getElementById("mobile-menu");
  menuToggle.addEventListener("click", function () {
    mobileMenu.classList.toggle("hidden");
  });
  document.querySelectorAll(".mobile-link").forEach(function (a) {
    a.addEventListener("click", function () { mobileMenu.classList.add("hidden"); });
  });

  /* ---- Sticky nav on scroll ---- */
  var nav = document.getElementById("site-nav");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 40) nav.classList.add("scrolled");
    else nav.classList.remove("scrolled");
  });

  /* ---- Scroll reveal ---- */
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var revealEls = document.querySelectorAll(".reveal");
  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(function (el) { io.observe(el); });
  }

  /* ---- Hero slider (image banner, independent from header) ---- */
  (function () {
    var heroSlides = Array.prototype.slice.call(document.querySelectorAll("#hero-track .hero-slide"));
    if (!heroSlides.length) return;
    var heroDotsWrap = document.getElementById("hero-dots");
    var heroPrev = document.getElementById("hero-prev");
    var heroNext = document.getElementById("hero-next");
    var heroIndex = 0;
    var heroTimer = null;

    heroSlides.forEach(function (_, i) {
      var dot = document.createElement("button");
      dot.className = "slider-dot" + (i === 0 ? " active" : "");
      dot.setAttribute("aria-label", "Slayt " + (i + 1));
      dot.addEventListener("click", function () { goToHeroSlide(i); stopHeroAutoplay(); startHeroAutoplay(); });
      heroDotsWrap.appendChild(dot);
    });
    var heroDots = Array.prototype.slice.call(heroDotsWrap.children);

    function goToHeroSlide(i) {
      heroIndex = (i + heroSlides.length) % heroSlides.length;
      heroSlides.forEach(function (slide, si) {
        if (si === heroIndex) slide.setAttribute("data-active", "true");
        else slide.removeAttribute("data-active");
      });
      heroDots.forEach(function (d, di) { d.classList.toggle("active", di === heroIndex); });
    }

    function startHeroAutoplay() {
      if (reduceMotion) return;
      heroTimer = setInterval(function () { goToHeroSlide(heroIndex + 1); }, 6000);
    }
    function stopHeroAutoplay() { if (heroTimer) clearInterval(heroTimer); heroTimer = null; }

    heroPrev.addEventListener("click", function () { goToHeroSlide(heroIndex - 1); stopHeroAutoplay(); startHeroAutoplay(); });
    heroNext.addEventListener("click", function () { goToHeroSlide(heroIndex + 1); stopHeroAutoplay(); startHeroAutoplay(); });
    document.getElementById("top").addEventListener("mouseenter", stopHeroAutoplay);
    document.getElementById("top").addEventListener("mouseleave", startHeroAutoplay);

    startHeroAutoplay();
  })();

  /* ---- FAQ data + accordion ---- */
  var faqData = [
    { q: "Gün doğumu turu saat kaçta başlıyor?", a: "Kalkış saati mevsime göre değişir; genellikle gün doğumundan yaklaşık 45 dakika önce, saat 05:30–06:30 arasında başlar. Kesin saati rezervasyon sırasında WhatsApp'tan teyit ediyoruz." },
    { q: "ATV kullanmak için ehliyet gerekli mi?", a: "Evet, ATV'yi kendiniz kullanmak isterseniz geçerli bir sürücü belgesi gereklidir. Ehliyetiniz yoksa çift kişilik ATV'lerde rehberimizin yanında yolcu olarak katılabilirsiniz." },
    { q: "Yaş sınırı var mı?", a: "ATV sürücüleri için minimum yaş 10'dur. Yolcu koltuğunda 8 yaş ve üzeri çocuklar bir yetişkinle birlikte katılabilir. Klasik otomobil turlarında yaş sınırı yoktur." },
    { q: "Tura ne giymeliyim?", a: "Kapalı ve rahat ayakkabı, rüzgar geçirmeyen bir kıyafet önerilir. Toz gözlüğü ve kask tarafımızdan sağlanır; gün doğumu turları için sabah serinliğine karşı ince bir mont almanızı öneririz." },
    { q: "Klasik otomobil turunda kaç kişi oturabiliyor?", a: "Araç modeline göre değişmekle birlikte klasik otomobillerimiz genellikle 3-4 yolcu kapasitelidir. Daha kalabalık gruplar için birden fazla araç ayarlayabiliriz." },
    { q: "Rezervasyonu iptal edebilir miyim, hava kötü olursa ne olur?", a: "Tur saatinden 24 saat öncesine kadar ücretsiz iptal/değişiklik yapılabilir. Yoğun yağış veya rüzgar gibi güvenlik riski oluşturan durumlarda turu sizinle birlikte başka bir tarihe erteliyoruz." },
    { q: "Otelden transfer var mı?", a: "Göreme, Uçhisar, Ortahisar ve Avanos'taki otellerden ücretsiz transfer sağlıyoruz. Farklı bir bölgede kalıyorsanız WhatsApp'tan sorabilirsiniz." },
    { q: "Turlara fotoğraf çekimi dahil mi?", a: "Rehberlerimiz gün doğumu/batımı noktalarında ve fotoğraf molalarında çekim konusunda size yardımcı olur. Profesyonel fotoğrafçı eşliğinde çekim, kombine turlarda ek hizmet olarak talep edilebilir." }
  ];

  var faqList = document.getElementById("faq-list");
  faqData.forEach(function (item) {
    var wrap = document.createElement("div");
    wrap.className = "faq-item";
    wrap.innerHTML =
      '<button class="faq-trigger w-full flex items-center justify-between gap-4 text-left px-6 py-5" aria-expanded="false">' +
        '<span class="font-display font-bold text-base md:text-lg pr-4">' + item.q + '</span>' +
        '<span class="faq-chevron w-8 h-8 grid place-items-center rounded-full border border-hair">' +
          '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14"/></svg>' +
        '</span>' +
      '</button>' +
      '<div class="faq-panel"><p class="text-muted text-sm leading-relaxed px-6 pb-6 pr-12">' + item.a + '</p></div>';
    faqList.appendChild(wrap);
  });
  faqList.addEventListener("click", function (e) {
    var trigger = e.target.closest(".faq-trigger");
    if (!trigger) return;
    var item = trigger.closest(".faq-item");
    var isOpen = item.classList.contains("open");
    item.classList.toggle("open", !isOpen);
    trigger.setAttribute("aria-expanded", String(!isOpen));
  });

  /* ---- Route toggle (ATV tour cards) ---- */
  document.querySelectorAll(".route-toggle").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var item = btn.closest(".route-item");
      var isOpen = item.classList.contains("open");
      item.classList.toggle("open", !isOpen);
      btn.setAttribute("aria-expanded", String(!isOpen));
    });
  });

  /* ---- Reusable horizontal drag/snap slider (used by gallery + testimonials) ---- */
  function createTrackSlider(opts) {
    var track = opts.track;
    var slides = opts.items;
    var dotsWrap = opts.dotsWrap;
    var activeIndex = 0;
    var autoplayTimer = null;
    var isDown = false, startX = 0, scrollStart = 0, dragged = false;

    slides.forEach(function (_, i) {
      var dot = document.createElement("button");
      dot.className = "slider-dot" + (i === 0 ? " active" : "");
      dot.setAttribute("aria-label", "Slayt " + (i + 1));
      dot.addEventListener("click", function () { scrollToSlide(i); resetAutoplay(); });
      dotsWrap.appendChild(dot);
    });
    var dots = Array.prototype.slice.call(dotsWrap.children);

    function setActive(i) {
      activeIndex = i;
      dots.forEach(function (d, di) { d.classList.toggle("active", di === i); });
    }

    function scrollToSlide(i) {
      var target = slides[(i + slides.length) % slides.length];
      track.scrollTo({ left: target.offsetLeft - track.offsetLeft - 20, behavior: reduceMotion ? "auto" : "smooth" });
    }

    if (opts.prevBtn) opts.prevBtn.addEventListener("click", function () { resetAutoplay(); scrollToSlide(activeIndex - 1); });
    if (opts.nextBtn) opts.nextBtn.addEventListener("click", function () { resetAutoplay(); scrollToSlide(activeIndex + 1); });

    if ("IntersectionObserver" in window) {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting && entry.intersectionRatio > 0.6) {
            setActive(slides.indexOf(entry.target));
          }
        });
      }, { root: track, threshold: [0.6] });
      slides.forEach(function (s) { observer.observe(s); });
    }

    /* Drag to scroll — mouse/pen only. Touch already scrolls natively (overflow-x-auto);
       also driving scrollLeft from pointermove on touch fights the browser's own touch
       scroll and makes it stutter, so touch pointers are left alone here. */
    track.addEventListener("pointerdown", function (e) {
      if (e.pointerType === "touch") return;
      isDown = true; dragged = false;
      startX = e.clientX; scrollStart = track.scrollLeft;
      track.classList.add("cursor-grabbing");
      stopAutoplay();
    });
    window.addEventListener("pointermove", function (e) {
      if (!isDown || e.pointerType === "touch") return;
      var dx = e.clientX - startX;
      if (Math.abs(dx) > 4) dragged = true;
      track.scrollLeft = scrollStart - dx;
    });
    window.addEventListener("pointerup", function (e) {
      if (e.pointerType === "touch") return;
      isDown = false;
      track.classList.remove("cursor-grabbing");
      startAutoplay();
    });

    function startAutoplay() {
      stopAutoplay();
      if (reduceMotion || !opts.autoplayMs) return;
      autoplayTimer = setInterval(function () { scrollToSlide(activeIndex + 1); }, opts.autoplayMs);
    }
    function stopAutoplay() { if (autoplayTimer) clearInterval(autoplayTimer); autoplayTimer = null; }
    function resetAutoplay() { stopAutoplay(); startAutoplay(); }
    track.addEventListener("mouseenter", stopAutoplay);
    track.addEventListener("mouseleave", startAutoplay);
    startAutoplay();

    return {
      slides: slides,
      isDragged: function () { return dragged; }
    };
  }

  /* ---- Gallery slider ---- */
  var galleryTrack = document.getElementById("slider-track");
  var gallerySlider = createTrackSlider({
    track: galleryTrack,
    items: Array.prototype.slice.call(galleryTrack.querySelectorAll(".slide")),
    dotsWrap: document.getElementById("slider-dots"),
    prevBtn: document.getElementById("slider-prev"),
    nextBtn: document.getElementById("slider-next"),
    autoplayMs: 5000
  });
  var gallerySlides = gallerySlider.slides;

  /* ---- Lightbox (opens the clicked gallery slide, click doesn't fire after a drag) ---- */
  var lightbox = document.getElementById("lightbox");
  var lbImage = document.getElementById("lightbox-image");
  var lbCaption = document.getElementById("lightbox-caption");
  var lbIndex = 0;

  function openLightbox(i) {
    lbIndex = (i + gallerySlides.length) % gallerySlides.length;
    var img = gallerySlides[lbIndex].querySelector("img");
    lbImage.src = img.src;
    lbImage.alt = img.alt;
    lbCaption.textContent = img.alt;
    lightbox.classList.add("open");
    document.body.style.overflow = "hidden";
  }
  function closeLightbox() {
    lightbox.classList.remove("open");
    document.body.style.overflow = "";
  }

  gallerySlides.forEach(function (slide, i) {
    slide.addEventListener("click", function () {
      if (gallerySlider.isDragged()) return;
      openLightbox(i);
    });
  });
  document.getElementById("lightbox-close").addEventListener("click", closeLightbox);
  document.getElementById("lightbox-prev").addEventListener("click", function () { openLightbox(lbIndex - 1); });
  document.getElementById("lightbox-next").addEventListener("click", function () { openLightbox(lbIndex + 1); });
  lightbox.addEventListener("click", function (e) { if (e.target === lightbox) closeLightbox(); });
  document.addEventListener("keydown", function (e) {
    if (!lightbox.classList.contains("open")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") openLightbox(lbIndex - 1);
    if (e.key === "ArrowRight") openLightbox(lbIndex + 1);
  });
})();
