function SeletorPecas(seletor) {
  const elemento = Array.from(document.querySelectorAll(seletor));
  this.elements = elemento;
  this.addClass = function (classe) {
    for (let c = 0; c < elemento.length; c++) {
      elemento[c].addEventListener("click", () => {
        const active = elemento[c].classList.contains(classe);
        elemento.forEach((element) => {
          element.classList.remove(classe);
        });
        if (elemento[c].innerHTML !== "") {
          elemento[c].classList.add(classe);
          // Movimentos do peão Brnaco
          if (elemento[c].innerHTML === '<span class="peaoBranco">♙</span>') {
            if (elemento[c - 1]) elemento[c - 1].classList.add(classe);
            if (elemento[c - 2]) elemento[c - 2].classList.add(classe);
            if (elemento[c - 9]) elemento[c - 9].classList.add(classe);
            if (elemento[c + 7]) elemento[c + 7].classList.add(classe);
          }
          // Movimentos do peão Preto
          if (elemento[c].innerHTML === '<span class="peaoPreto">♟</span>') {
            // peacaPretas.elements.forEach((item) => {});
            if (elemento[c + 1]) elemento[c + 1].classList.add(classe);
            if (elemento[c + 2]) elemento[c + 2].classList.add(classe);
            if (elemento[c + 9]) elemento[c + 9].classList.add(classe);
            if (elemento[c - 7]) elemento[c - 7].classList.add(classe);
          }
        }
        if (active) {
          // Movimentos do peão Branco
          if (elemento[c].innerHTML === '<span class="peaoBranco">♙</span>') {
            elemento[c].classList.remove(classe);
            if (elemento[c - 1]) elemento[c - 1].classList.remove(classe);
            if (elemento[c - 2]) elemento[c - 2].classList.remove(classe);
            if (elemento[c - 9]) elemento[c - 9].classList.remove(classe);
            if (elemento[c + 7]) elemento[c + 7].classList.remove(classe);
          }
          // Movimentos do peão Preto
          if (elemento[c].innerHTML === '<span class="peaoPreto">♟</span>') {
            elemento[c].classList.remove(classe);
            if (elemento[c + 1]) elemento[c + 1].classList.remove(classe);
            if (elemento[c + 2]) elemento[c + 2].classList.remove(classe);
            if (elemento[c + 9]) elemento[c + 9].classList.remove(classe);
            if (elemento[c - 7]) elemento[c - 7].classList.remove(classe);
          }
        }
      });
    }
  };
}
const celula = new SeletorPecas("div");
const peacaPretas = new SeletorPecas(
  ".peaoPreto, .torrePreta, .reiPreto, .rainhaPreta, .cavaloPreto, .bispoPreto"
);

celula.addClass("ativo");

/* Quando o span tiver a classe ativo a div irar fazer um loop com for e serar adiconado a classe ativo de acordo com a peça no span */
