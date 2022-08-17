export default function initiMovimentoPeaoPreto() {
  const pontoPeca = Array.from(document.querySelectorAll("div"));
  const eventos = ["click", "tochstart"];


  function pontoDoClick(events) {
    if (events.target.className === "peaoPreto") {
      for (let c = 0; c < pontoPeca.length; c++) {
        if (
          pontoPeca[c].classList.contains("ativo") &&
          pontoPeca[c].classList.contains("preto")
        ) {
          if (
            pontoPeca[c + 1].classList.contains("preto") ||
            pontoPeca[c + 1].classList.contains("branco")
          ) {
            null;
          } else {
            pontoPeca[c + 1].classList.add("ativo");
            if (pontoPeca[c + 2]) {
              if (
                pontoPeca[c + 2].classList.contains("branco") ||
                pontoPeca[c + 2].classList.contains("preto")
              ) {
                null;
              } else if (
                pontoPeca[c].id === "a7" ||
                pontoPeca[c].id === "b7" ||
                pontoPeca[c].id === "c7" ||
                pontoPeca[c].id === "d7" ||
                pontoPeca[c].id === "e7" ||
                pontoPeca[c].id === "f7" ||
                pontoPeca[c].id === "g7" ||
                pontoPeca[c].id === "h7"
              ) {
                pontoPeca[c + 2].classList.add("ativo");
              }
            }
          }
          if (pontoPeca[c - 7]) {
            if (
              pontoPeca[c - 7].classList.contains("preto") ||
              pontoPeca[c - 7].innerHTML === ""
            ) {
              null;
            } else {
              pontoPeca[c - 7].classList.add("ativo");
            }
          }
          if (pontoPeca[c + 9]) {
            if (
              pontoPeca[c + 9].classList.contains("preto") ||
              pontoPeca[c + 9].innerHTML === ""
            ) {
              null;
            } else {
              pontoPeca[c + 9].classList.add("ativo");
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
