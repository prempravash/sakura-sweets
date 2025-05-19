document.addEventListener("DOMContentLoaded", () => {
  const fadeElements = document.querySelectorAll('.fade-in');
  fadeElements.forEach(el => {
    el.style.animationPlayState = 'running';
  });
});
