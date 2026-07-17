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
});
