export default function initiSelecionarPecas() {
  const pontoPeca = Array.from(document.querySelectorAll("div"));
  const eventos = ["click", "tochstart"];

  function pontoDoClick(events) {
    if (events.target.className === "peaoBranco") {
      console.log(this);
    }
  }
  pontoPeca.forEach((item) => {
    eventos.forEach((click) => {
      item.addEventListener(click, pontoDoClick);
    });
  });
}
