export default function initiMovimentoPeaoBranco() {
  const pontoPeca = Array.from(document.querySelectorAll("div"));
  const eventos = ["click", "tochstart"];

  function pontoDoClick(events) {
    if (events.target.className === "peaoBranco") {
      for (let c = 0; c < pontoPeca.length; c++) {
        if (
          pontoPeca[c].classList.contains("ativo") &&
          pontoPeca[c].classList.contains("branco") &&
          pontoPeca[c].classList.contains("movimento")
        ) {
          if (
            pontoPeca[c - 1].classList.contains("branco") ||
            pontoPeca[c - 1].classList.contains("preto")
          ) {
            null;
          } else {
            pontoPeca[c - 1].classList.add("ativo");
            if (pontoPeca[c - 2]) {
              if (
                pontoPeca[c - 2].classList.contains("branco") ||
                pontoPeca[c - 2].classList.contains("preto")
              ) {
                null;
              } else if (
                pontoPeca[c].id === "a2" ||
                pontoPeca[c].id === "b2" ||
                pontoPeca[c].id === "c2" ||
                pontoPeca[c].id === "d2" ||
                pontoPeca[c].id === "e2" ||
                pontoPeca[c].id === "f2" ||
                pontoPeca[c].id === "g2" ||
                pontoPeca[c].id === "h2"
              ) {
                pontoPeca[c - 2].classList.add("ativo");
              }
            }
          }
          if (pontoPeca[c + 7]) {
            if (
              pontoPeca[c + 7].classList.contains("branco") ||
              pontoPeca[c + 7].innerHTML === ""
            ) {
              null;
            } else {
              pontoPeca[c + 7].classList.add("ativo");
            }
          }
          if (pontoPeca[c - 9]) {
            if (
              pontoPeca[c - 9].classList.contains("branco") ||
              pontoPeca[c - 9].innerHTML === ""
            ) {
              null;
            } else {
              pontoPeca[c - 9].classList.add("ativo");
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
