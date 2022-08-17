export default function initiMovimentoBispoBranco() {
  const pontoPeca = Array.from(document.querySelectorAll("div"));
  const eventos = ["click", "tochstart"];
  const tabuleiro = document.querySelector(".tabuleiro");

  function pontoDoClick(events) {
    if (tabuleiro.classList.contains("movimentoBranco")) {
      if (events.target.className === "bispoBranco") {
        for (let c = 0; c < pontoPeca.length; c++) {
          if (
            pontoPeca[c].classList.contains("ativo") &&
            pontoPeca[c].classList.contains("branco") &&
            pontoPeca[c].classList.contains("movimento")
          ) {
            if (pontoPeca[c + 7]) {
              for (let n = 0; ; n += 7) {
                if (pontoPeca[c + 7]) {
                  if (pontoPeca[c + 7 + n].classList.contains("branco")) {
                    break;
                  }
                  pontoPeca[c + 7 + n].classList.add("ativo");
                  if (pontoPeca[c + 7 + n].classList.contains("preto")) {
                    break;
                  }
                }
                if (
                  pontoPeca[c + 7 + n + 7] === undefined ||
                  pontoPeca[c + 7 + n + 7].classList.contains("h8") ||
                  pontoPeca[c + 7 + n + 7].classList.contains("g8") ||
                  pontoPeca[c + 7 + n + 7].classList.contains("f8") ||
                  pontoPeca[c + 7 + n + 7].classList.contains("e8") ||
                  pontoPeca[c + 7 + n + 7].classList.contains("d8") ||
                  pontoPeca[c + 7 + n + 7].classList.contains("c8") ||
                  pontoPeca[c + 7 + n + 7].classList.contains("b8") ||
                  pontoPeca[c + 7 + n + 7].classList.contains("a8")
                ) {
                  if (pontoPeca[c + 7 + n + 7] === undefined) {
                    break;
                  } else {
                    pontoPeca[c + 7 + n + 7].classList.add("ativo");
                    break;
                  }
                }
              }
              for (let n = 0; ; n += 9) {
                if (pontoPeca[c - 9]) {
                  if (pontoPeca[c - 9 - n].classList.contains("branco")) {
                    break;
                  }
                  pontoPeca[c - 9 - n].classList.add("ativo");
                  if (pontoPeca[c - 9 - n].classList.contains("preto")) {
                    break;
                  }
                }

                if (pontoPeca[c - 9 - n - 9] === undefined) {
                  break;
                }
              }
            }
          }
        }
      }
    } else if (tabuleiro.classList.contains("movimentoPreto")) {
      if (events.target.className === "bispoPreto") {
        for (let c = 0; c < pontoPeca.length; c++) {
          if (
            pontoPeca[c].classList.contains("ativo") &&
            pontoPeca[c].classList.contains("preto") &&
            pontoPeca[c].classList.contains("movimento")
          ) {
            if (pontoPeca[c - 7]) {
              for (let n = 0; ; n += 7) {
                if (pontoPeca[c - 7]) {
                  if (pontoPeca[c - 7 - n].classList.contains("preto")) {
                    break;
                  }
                  pontoPeca[c - 7 - n].classList.add("ativo");
                  if (pontoPeca[c - 7 - n].classList.contains("branco")) {
                    break;
                  }
                }
                if (
                  pontoPeca[c - 7 - n - 7] === undefined ||
                  pontoPeca[c - 7 - n - 7].classList.contains("h1") ||
                  pontoPeca[c - 7 - n - 7].classList.contains("g1") ||
                  pontoPeca[c - 7 - n - 7].classList.contains("f1") ||
                  pontoPeca[c - 7 - n - 7].classList.contains("e1") ||
                  pontoPeca[c - 7 - n - 7].classList.contains("d1") ||
                  pontoPeca[c - 7 - n - 7].classList.contains("c1") ||
                  pontoPeca[c - 7 - n - 7].classList.contains("b1") ||
                  pontoPeca[c - 7 - n - 7].classList.contains("a1")
                ) {
                  if (pontoPeca[c - 7 - n - 7] === undefined) {
                    break;
                  } else {
                    pontoPeca[c - 7 - n - 7].classList.add("ativo");
                    break;
                  }
                }
              }
              for (let n = 0; ; n += 9) {
                if (pontoPeca[c + 9]) {
                  if (pontoPeca[c + 9 + n].classList.contains("preto")) {
                    break;
                  }
                  pontoPeca[c + 9 + n].classList.add("ativo");
                  if (pontoPeca[c + 9 + n].classList.contains("branco")) {
                    break;
                  }
                }

                if (pontoPeca[c + 9 + n + 9] === undefined) {
                  break;
                }
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
