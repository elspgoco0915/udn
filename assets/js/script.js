var showloading = document.getElementById('loading');
var contents = document.getElementById('wrapper');
window.addEventListener('load', function () {
  showloading.style.display = 'none';
  contents.classList.remove('hidden');
});
