export default function initiMovimentoCavalo() {
  const pontoPeca = Array.from(document.querySelectorAll("div"));
  const eventos = ["click", "tochstart"];
  const tabuleiro = document.querySelector(".tabuleiro");

  function pontoDoClick(events) {
    console.log("oi");
    if (tabuleiro.classList.contains("movimentoBranco")) {
      if (events.target.className === "cavaloBranco") {
        for (let i = 0; i < pontoPeca.length; i++) {
          if (
            pontoPeca[i].classList.contains("ativo") &&
            pontoPeca[i].classList.contains("branco") &&
            pontoPeca[i].classList.contains("movimento")
          ) {
          }
        }
      }
    }
  }
  pontoPeca.forEach((item) => {
    eventos.forEach((click) => {
      item.addEventListener(click, pontoDoClick);
    });
  });
}
//nextElementSibling proximo elemento
// previousElementSibling elemento anterior
