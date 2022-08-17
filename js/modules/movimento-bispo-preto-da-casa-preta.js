export default function initiMovimentoBispoBrancoDaCasaBranca() {
  const pontoPeca = Array.from(document.querySelectorAll("div"));
  const eventos = ["click", "tochstart"];

  function pontoDoClick(events) {
    if (events.target.className === "bispoBranco") {
      for (let c = 0; c < pontoPeca.length; c++) {
        if (
          pontoPeca[c].classList.contains("ativo") &&
          pontoPeca[c].classList.contains("branco")
        ) {
          if (pontoPeca[c + 7]) {
            for (let n = 0; ; n += 7) {
              console.log(pontoPeca[c + 7]);
              pontoPeca[c + 7 + n].classList.add("ativo");
              console.log(n);
              if (pontoPeca[c + 7 + n + 7] === undefined) {
                break;
              }
            }
            for (let n = 0; ; n += 9) {
              console.log(pontoPeca[c - 9]);
              pontoPeca[c - 9 - n].classList.add("ativo");
              console.log(n);
              if (pontoPeca[c - 9 - n - 9] === undefined) {
                break;
              }
            }
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
