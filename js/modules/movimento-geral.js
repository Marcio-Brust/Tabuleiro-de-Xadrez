export default function initiMovimentoGeral() {}

const pontoPeca = Array.from(document.querySelectorAll("div"));
const eventos = ["click", "tochstart"];

//console.log(pecasBrancas);

function movimentoGeral(events) {
  const classepeca = events.target.className;
  const peca = document.querySelector(".ativo.branco");
  const pecaPreta = document.querySelector(".ativo.preto");
  if (peca) {
    if (this.className === "ativo") {
      this.innerHTML = peca.innerHTML;
      peca.innerHTML = "";
      this.classList.add("branco");
    }
  }
}

pontoPeca.forEach((item) => {
  eventos.forEach((click) => {
    item.addEventListener(click, movimentoGeral);
  });
});
