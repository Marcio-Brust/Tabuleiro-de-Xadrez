export default function initiMovimentoGeral() {}

const pontoPeca = Array.from(document.querySelectorAll("div"));
const eventos = ["click", "tochstart"];

//console.log(pecasBrancas);

function movimentoGeral(events) {
  const peca = document.querySelector(".ativo.branco");
  const pecaPreta = document.querySelector(".ativo.preto");
  const tabuleiro = document.querySelector(".tabuleiro");
  if (tabuleiro.classList.contains("movimentoBranco")) {
    if (peca) {
      if (
        tabuleiro.classList.contains("movimentoBranco") &&
        this.classList.contains("ativo")
      ) {
        if (this.classList.contains("branco")) {
          null;
        } else {
          this.innerHTML = peca.innerHTML;
          peca.innerHTML = "";
          this.classList.add("branco");
          this.classList.remove("preto");
          tabuleiro.classList.remove("movimentoBranco");
          tabuleiro.classList.add("movimentoPreto");
        }
      }
    }
  } else {
    if (pecaPreta) {
      if (
        tabuleiro.classList.contains("movimentoPreto") &&
        this.classList.contains("ativo")
      ) {
        if (this.classList.contains("preto")) {
          null;
        } else {
          this.innerHTML = pecaPreta.innerHTML;
          pecaPreta.innerHTML = "";
          this.classList.add("preto");
          this.classList.remove("branco");
          tabuleiro.classList.remove("movimentoPreto");
          tabuleiro.classList.add("movimentoBranco");
        }
      }
    }
  }
}

pontoPeca.forEach((item) => {
  eventos.forEach((click) => {
    item.addEventListener(click, movimentoGeral);
  });
});
