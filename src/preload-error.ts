window.addEventListener('vite:preloadError', (e) => {
  e.preventDefault();
  window.location.reload();
});
