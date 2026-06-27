/* ==========================================================================
   Mobile Menu Toggle and Scroll Handler
   ========================================================================== */
function myFunction() {
   const x = document.getElementById("myLinks");
   x.classList.toggle("hidden");
   x.classList.toggle("flex");
}

// Automatically close the mobile menu if the user starts scrolling
window.addEventListener('scroll', function() {
   const x = document.getElementById("myLinks");
   if (!x.classList.contains("hidden")) {
      x.classList.add("hidden");
      x.classList.remove("flex");
   }
});

/* ==========================================================================
   Scroll Fade-In Animation (Desktop & Mobile Friendly)
   ========================================================================== */
document.addEventListener("DOMContentLoaded", function () {
   const fadeElements = document.querySelectorAll('.fade-in-element');

   const observerOptions = {
      root: null,
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
   };

   // FIXED: Corrected the syntax structure for the IntersectionObserver instantiation
   const appearanceObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(entry => {
         if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0', 'translate-y-8');
            observer.unobserve(entry.target);
         }
      });
   }, observerOptions);

   fadeElements.forEach(element => {
      appearanceObserver.observe(element);
   });
});