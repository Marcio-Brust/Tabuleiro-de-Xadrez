export default function initiAddClass() {
  function SeletorPecas(seletor) {
    const elemento = Array.from(document.querySelectorAll(seletor));

    this.addClass = function (classe) {
      elemento.forEach((item) => {
        item.addEventListener("click", () => {
          if (item.classList.contains(classe)) {
            for (let i = 0; i < elemento.length; i++) {
              elemento[i].classList.remove(classe);
              elemento[i].classList.remove("movimento");
            }
          } else {
            for (let i = 0; i < elemento.length; i++) {
              elemento[i].classList.remove(classe);
              elemento[i].classList.remove("movimento");
            }
            if (item.innerHTML !== "") {
              const tabuleiro = document.querySelector(".tabuleiro");
              if (tabuleiro.classList.contains("movimentoBranco")) {
                if (item.classList.contains("branco")) {
                  item.classList.add(classe);
                  item.classList.add("movimento");
                }
              }

              if (tabuleiro.classList.contains("movimentoPreto")) {
                if (item.classList.contains("preto")) {
                  item.classList.add(classe);
                  item.classList.add("movimento");
                }
              }
            }
          }
        });
      });
    };
  }
  const celula = new SeletorPecas("div");
  celula.addClass("ativo");
}
