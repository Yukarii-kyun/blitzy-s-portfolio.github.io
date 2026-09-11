document.addEventListener('DOMContentLoaded', () => {
  const year = document.querySelector('#current-year');
  if (year) year.textContent = new Date().getFullYear();

  const revealItems = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) return;

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12 });

  revealItems.forEach((item) => {
    item.classList.add('reveal-on-scroll');
    revealObserver.observe(item);
  });
});
