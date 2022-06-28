function MovimentoPecas(seletor) {
  const movimento = Array.from(document.querySelectorAll(seletor));
  this.elements = movimento;
  this.addClass = function (classe) {
    for (let c = 0; c < movimento.length; c++) {
      movimento[c].addEventListener("click", () => {
        const active = movimento[c].classList.contains(classe);
        movimento.forEach((element) => {
          element.classList.remove(classe);
        });
        movimento[c].classList.add(classe);
        if (active) {
          movimento[c].classList.remove(classe);
        }
      });
    }
  };
}
const celula = new MovimentoPecas("span");
celula.addClass("ativo");

/* Quando o span tiver a classe ativo a div irar fazer um loop com for e serar adiconado a classe ativo de acordo com a peça no span */
