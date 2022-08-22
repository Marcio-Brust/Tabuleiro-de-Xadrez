export default function initiMovimentoCaptura() {
  const pontoPeca = Array.from(document.querySelectorAll("div"));
  const eventos = ["click", "tochstart"];
  const tabuleiro = document.querySelector(".tabuleiro");

  function captura() {
    for (let c = 0; c < pontoPeca.length; c++) {
      if (pontoPeca[c].innerHTML === '<span class="peaoBranco">♙</span>') {
        if (pontoPeca[c + 7]) pontoPeca[c + 7].classList.add("captura");
      }
      if (
        pontoPeca[c].innerHTML === "" &&
        pontoPeca[c].classList.contains("capture")
      ) {
        pontoPeca[c].classList.remove("capture");
      }
    }
  }

  pontoPeca.forEach((item) => {
    eventos.forEach((click) => {
      item.addEventListener(click, captura());
    });
  });
}
