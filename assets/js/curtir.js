const curtido = "../../assets/img/coraçãoCheio.svg";
const naoCurtido = "../../assets/img/curtida.svg";
document.querySelectorAll(".botaoCurtida").forEach(botaoCoracao => {
    botaoCoracao.addEventListener("click", function() {
        if(this.src.endsWith("curtida.svg")) {
            this.src = curtido;
        } else {
            this.src = naoCurtido;
        }
    });
});