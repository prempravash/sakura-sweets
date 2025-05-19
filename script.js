const flower = document.getElementById('sakura-flower');
const ripple = document.querySelector('.ripple');

flower.addEventListener('click', () => {
  ripple.classList.remove('animate');
  void ripple.offsetWidth; // Trigger reflow
  ripple.classList.add('animate');
});

