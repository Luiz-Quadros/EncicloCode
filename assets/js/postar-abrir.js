const postagem = document.getElementById('minhaPostagem');
const toggleBtn = document.getElementById('toggleBtn');

toggleBtn.addEventListener('click', function (e) {
  postagem.classList.toggle('aberto');
});