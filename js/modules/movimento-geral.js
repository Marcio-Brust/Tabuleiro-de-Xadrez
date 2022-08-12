export default function initiMovimentoGeral() {}

const pontoPeca = Array.from(document.querySelectorAll("div"));
const eventos = ["click", "tochstart"];

function movimentoGeral() {
  if (this.className === "branco") {
    const peca = this.innerHTML;
  }
}

pontoPeca.forEach((item) => {
  eventos.forEach((click) => {
    item.addEventListener(click, movimentoGeral);
  });
});
