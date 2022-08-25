export default function initiMovimentoCaptura() {
  const pontoPeca = Array.from(document.querySelectorAll("div"));

  const tabuleiro = document.querySelector(".tabuleiro");

  pontoPeca.forEach((item) => {
    item.addEventListener("click", captura);
  });

  function captura() {
    console.log(this.innerHTML);
    for (let c = 0; c < pontoPeca.length; c++) {
      if (pontoPeca[c].innerHTML === '<span class="peaoBranco">♙</span>') {
        if (pontoPeca[c + 7]) {
          pontoPeca[c + 7].classList.add("captura");
        }
        if (pontoPeca[c - 9]) {
          pontoPeca[c - 9].classList.add("captura");
        }
      }
      if (pontoPeca[c].innerHTML === '<span class="bispoBranco">♗</span>') {
        for (let n = 0; ; n += 7) {
          if (
            pontoPeca[c].classList.contains("h1") ||
            pontoPeca[c].classList.contains("h2") ||
            pontoPeca[c].classList.contains("h3") ||
            pontoPeca[c].classList.contains("h4") ||
            pontoPeca[c].classList.contains("h5") ||
            pontoPeca[c].classList.contains("h6") ||
            pontoPeca[c].classList.contains("h7") ||
            pontoPeca[c].classList.contains("h8") ||
            pontoPeca[c].classList.contains("a8") ||
            pontoPeca[c].classList.contains("b8") ||
            pontoPeca[c].classList.contains("c8") ||
            pontoPeca[c].classList.contains("d8") ||
            pontoPeca[c].classList.contains("e8") ||
            pontoPeca[c].classList.contains("f8") ||
            pontoPeca[c].classList.contains("g8")
          ) {
            break;
          }
          if (pontoPeca[c + 7 + n]) {
            pontoPeca[c + 7 + n].classList.add("captura");
          }
          if (pontoPeca[c + 7 + n] === undefined) {
            break;
          }
          if (
            pontoPeca[c + 7 + n].classList.contains("h1") ||
            pontoPeca[c + 7 + n].classList.contains("h2") ||
            pontoPeca[c + 7 + n].classList.contains("h3") ||
            pontoPeca[c + 7 + n].classList.contains("h4") ||
            pontoPeca[c + 7 + n].classList.contains("h5") ||
            pontoPeca[c + 7 + n].classList.contains("h6") ||
            pontoPeca[c + 7 + n].classList.contains("h7") ||
            pontoPeca[c + 7 + n].classList.contains("h8") ||
            pontoPeca[c + 7 + n].classList.contains("a8") ||
            pontoPeca[c + 7 + n].classList.contains("b8") ||
            pontoPeca[c + 7 + n].classList.contains("c8") ||
            pontoPeca[c + 7 + n].classList.contains("d8") ||
            pontoPeca[c + 7 + n].classList.contains("e8") ||
            pontoPeca[c + 7 + n].classList.contains("f8") ||
            pontoPeca[c + 7 + n].classList.contains("g8")
          ) {
            break;
          }
        }
        for (let n = 0; ; n += 7) {
          if (
            pontoPeca[c].classList.contains("a1") ||
            pontoPeca[c].classList.contains("a2") ||
            pontoPeca[c].classList.contains("a3") ||
            pontoPeca[c].classList.contains("a4") ||
            pontoPeca[c].classList.contains("a5") ||
            pontoPeca[c].classList.contains("a6") ||
            pontoPeca[c].classList.contains("a7") ||
            pontoPeca[c].classList.contains("a8") ||
            pontoPeca[c].classList.contains("b1") ||
            pontoPeca[c].classList.contains("c1") ||
            pontoPeca[c].classList.contains("d1") ||
            pontoPeca[c].classList.contains("e1") ||
            pontoPeca[c].classList.contains("f1") ||
            pontoPeca[c].classList.contains("g1") ||
            pontoPeca[c].classList.contains("h1")
          ) {
            break;
          }
          if (pontoPeca[c - 7 - n]) {
            pontoPeca[c - 7 - n].classList.add("captura");
          }
          if (pontoPeca[c - 7 - n] === undefined) {
            break;
          }
          if (
            pontoPeca[c - 7 - n].classList.contains("a1") ||
            pontoPeca[c - 7 - n].classList.contains("a2") ||
            pontoPeca[c - 7 - n].classList.contains("a3") ||
            pontoPeca[c - 7 - n].classList.contains("a4") ||
            pontoPeca[c - 7 - n].classList.contains("a5") ||
            pontoPeca[c - 7 - n].classList.contains("a6") ||
            pontoPeca[c - 7 - n].classList.contains("a7") ||
            pontoPeca[c - 7 - n].classList.contains("a8") ||
            pontoPeca[c - 7 - n].classList.contains("b1") ||
            pontoPeca[c - 7 - n].classList.contains("c1") ||
            pontoPeca[c - 7 - n].classList.contains("d1") ||
            pontoPeca[c - 7 - n].classList.contains("e1") ||
            pontoPeca[c - 7 - n].classList.contains("f1") ||
            pontoPeca[c - 7 - n].classList.contains("g1") ||
            pontoPeca[c - 7 - n].classList.contains("h1")
          ) {
            break;
          }
        }
      }
    }
  }
  tabuleiro.addEventListener("click", captura);
}
