/* === Mobile Navigation & Throttle Controller === */
let isScrolling = false;

function myFunction() {
   const x = document.getElementById("myLinks");
   if (x) {
      x.classList.toggle("hidden");
      x.classList.toggle("flex");
   }
}

// FIXED: High-performance passive scrolling throttle to maximize Lighthouse scores
window.addEventListener('scroll', function() {
   if (!isScrolling) {
      window.requestAnimationFrame(function() {
         const x = document.getElementById("myLinks");
         if (x && !x.classList.contains("hidden")) {
            x.classList.add("hidden");
            x.classList.remove("flex");
         }
         isScrolling = false;
      });
      isScrolling = true;
   }
}, { passive: true }); // Passive flag forces instant touch rendering layout speeds

/* === Primary Initialization Event === */
document.addEventListener("DOMContentLoaded", function () {
   
   // Ensure menu links are hidden by default when page registers
   const mobileLinks = document.getElementById("myLinks");
   if (mobileLinks) {
      mobileLinks.classList.add("hidden");
      mobileLinks.classList.remove("flex");
   }

   // --- 1. Scroll Fade-In System ---
   const fadeElements = document.querySelectorAll('.fade-in-element');
   const observerOptions = { root: null, threshold: 0.1, rootMargin: "0px 0px -50px 0px" };

   const appearanceObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(entry => {
         if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0', 'translate-y-8');
            observer.unobserve(entry.target);
         }
      });
   }, observerOptions);

   fadeElements.forEach(element => appearanceObserver.observe(element));

   // --- 2. Inverted Neon Cursor Engine ---
   const cursorDot = document.getElementById("custom-cursor-dot");
   const cursorGlow = document.getElementById("custom-cursor-glow");

   if (cursorDot && cursorGlow) {
      let posX = 0, posY = 0, mouseX = 0, mouseY = 0, initialized = false;

      function showCursor() {
         if (!initialized) {
            document.body.classList.add("custom-cursor-ready");
            initialized = true;
         }
         cursorGlow.style.opacity = "1";
         cursorDot.style.opacity = "1";
      }

      function hideCursor() {
         cursorGlow.style.opacity = "0";
         cursorDot.style.opacity = "0";
      }

      window.addEventListener("mousemove", function (e) {
         mouseX = e.clientX;
         mouseY = e.clientY;
         cursorDot.style.left = `${mouseX}px`;
         cursorDot.style.top = `${mouseY}px`;
         showCursor();
      });

      function renderCursorLoop() {
         posX += (mouseX - posX) * 0.15;
         posY += (mouseY - posY) * 0.15;
         cursorGlow.style.left = `${posX}px`;
         cursorGlow.style.top = `${posY}px`;
         requestAnimationFrame(renderCursorLoop);
      }
      requestAnimationFrame(renderCursorLoop);

      window.addEventListener("focus", showCursor);
      document.addEventListener("visibilitychange", function() {
         if (document.visibilityState === "visible") showCursor();
      });

      const interactiveTargets = document.querySelectorAll('a, button, input, textarea, select, [role="button"], .project-card');
      interactiveTargets.forEach(target => {
         target.addEventListener("mouseenter", () => document.body.classList.add("cursor-hover-active"));
         target.addEventListener("mouseleave", () => document.body.classList.remove("cursor-hover-active"));
      });

      document.addEventListener("mouseleave", hideCursor);
   }
});