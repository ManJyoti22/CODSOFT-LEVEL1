document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll('.hero, .features, .about, .services');
  elements.forEach((el, index) => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(50px)';
    el.style.transition = 'all 0.8s ease';
    setTimeout(() => {
      el.style.opacity = 1;
      el.style.transform = 'translateY(0)';
    }, index * 300);
  });
});