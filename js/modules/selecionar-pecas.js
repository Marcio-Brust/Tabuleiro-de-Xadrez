export default function initiSelecionarPecas() {
  const pontoPeca = Array.from(document.querySelectorAll("div"));
  const eventos = ["click", "tochstart"];

  pontoPeca.forEach((item) => {
    eventos.forEach((click) => {
      item.addEventListener(click, pontoDoClick);
    });
  });
  function pontoDoClick(events) {
    function loopCelula() {}
    if (events.target.className === "peaoBranco") {
    }
  }
}
