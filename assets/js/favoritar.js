const estrelaCheia = "../../assets/img/estrelaPreenchida.svg";
const estrelaVaziaImg = "../../assets/img/favorito.svg";
document.querySelectorAll(".estrelaVazia").forEach(estrela => {
    estrela.addEventListener("click", function() {
        if(this.src.includes("favorito.svg")) {
            this.src = estrelaCheia;
        } else {
            this.src = estrelaVaziaImg;
        }
    });
});