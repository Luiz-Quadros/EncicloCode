const btnEnviar = document.getElementById('btnEnviar');
const conteudoEnviar = document.getElementById('conteudoEnviar');

btnEnviar.addEventListener('click', () => {
    if (conteudoEnviar.classList.contains('ativo')) return;

    conteudoEnviar.classList.add('ativo');

    setTimeout(() => {
        conteudoEnviar.classList.remove('ativo');
    }, 5000);
});