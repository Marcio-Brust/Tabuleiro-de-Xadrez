export default function initiMovimentoCaptura() {
  const pontoPeca = Array.from(document.querySelectorAll("div"));
  const eventos = ["Load"];
  const tabuleiro = document.querySelector(".tabuleiro");
  function captura() {
    for (let c = 0; c < pontoPeca.length; c++) {
      if (pontoPeca[c].innerHTML === '<span class="peaoBranco">♙</span>') {
        if (pontoPeca[c].classList.contains("branco")) {
          if (pontoPeca[c + 7]) {
            pontoPeca[c + 7].classList.add("captura");
          }
        }
        if (pontoPeca[c - 9]) {
          pontoPeca[c - 9].classList.add("captura");
        }
      }
    }
  }
  captura();
}
