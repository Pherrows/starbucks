const coverEl = document.querySelector("body .cover");

window.addEventListener('scroll', function () {
  if (window.scrollY > 1500) {
    coverEl.style.display = 'flex';
  } else {
    coverEl.style.display = 'none';
  }
});