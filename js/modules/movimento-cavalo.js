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
            if (
              pontoPeca[i].id === "h1" ||
              pontoPeca[i].id === "h2" ||
              pontoPeca[i].id === "h3" ||
              pontoPeca[i].id === "h3" ||
              pontoPeca[i].id === "h4" ||
              pontoPeca[i].id === "h5" ||
              pontoPeca[i].id === "h5" ||
              pontoPeca[i].id === "h6" ||
              pontoPeca[i].id === "h7" ||
              pontoPeca[i].id === "h8" ||
              pontoPeca[i].id === "b7" ||
              pontoPeca[i].id === "b8" ||
              pontoPeca[i].id === "c7" ||
              pontoPeca[i].id === "c8" ||
              pontoPeca[i].id === "d7" ||
              pontoPeca[i].id === "d8" ||
              pontoPeca[i].id === "e7" ||
              pontoPeca[i].id === "e8" ||
              pontoPeca[i].id === "f7" ||
              pontoPeca[i].id === "f8" ||
              pontoPeca[i].id === "g7" ||
              pontoPeca[i].id === "g8" ||
              pontoPeca[i].id === "h7" ||
              pontoPeca[i].id === "h8"
            ) {
              null;
            } else {
              if (pontoPeca[i + 6]) {
                if (pontoPeca[i + 6].classList.contains("branco")) {
                  null;
                } else {
                  pontoPeca[i + 6].classList.add("ativo");
                }
              }
            }
            if (
              pontoPeca[i].id === "h1" ||
              pontoPeca[i].id === "h2" ||
              pontoPeca[i].id === "h3" ||
              pontoPeca[i].id === "h3" ||
              pontoPeca[i].id === "h4" ||
              pontoPeca[i].id === "h5" ||
              pontoPeca[i].id === "h5" ||
              pontoPeca[i].id === "h6" ||
              pontoPeca[i].id === "h7" ||
              pontoPeca[i].id === "h8" ||
              pontoPeca[i].id === "a1" ||
              pontoPeca[i].id === "a2" ||
              pontoPeca[i].id === "b1" ||
              pontoPeca[i].id === "b2" ||
              pontoPeca[i].id === "c1" ||
              pontoPeca[i].id === "c2" ||
              pontoPeca[i].id === "d1" ||
              pontoPeca[i].id === "d2" ||
              pontoPeca[i].id === "e1" ||
              pontoPeca[i].id === "e2" ||
              pontoPeca[i].id === "f1" ||
              pontoPeca[i].id === "f2" ||
              pontoPeca[i].id === "g1" ||
              pontoPeca[i].id === "g2"
            ) {
              null;
            } else {
              if (pontoPeca[i + 10]) {
                if (pontoPeca[i + 10].classList.contains("branco")) {
                  null;
                } else {
                  pontoPeca[i + 10].classList.add("ativo");
                }
              }
            }
            if (
              pontoPeca[i].id === "a8" ||
              pontoPeca[i].id === "b8" ||
              pontoPeca[i].id === "c8" ||
              pontoPeca[i].id === "d8" ||
              pontoPeca[i].id === "e8" ||
              pontoPeca[i].id === "f8" ||
              pontoPeca[i].id === "g8" ||
              pontoPeca[i].id === "h8"
            ) {
              null;
            } else {
              if (pontoPeca[i + 15]) {
                if (pontoPeca[i + 15].classList.contains("branco")) {
                  null;
                } else {
                  pontoPeca[i + 15].classList.add("ativo");
                }
              }
            }
            if (
              pontoPeca[i].id === "a1" ||
              pontoPeca[i].id === "b1" ||
              pontoPeca[i].id === "c1" ||
              pontoPeca[i].id === "d1" ||
              pontoPeca[i].id === "e1" ||
              pontoPeca[i].id === "f1" ||
              pontoPeca[i].id === "g1" ||
              pontoPeca[i].id === "h1"
            ) {
              null;
            } else {
              if (pontoPeca[i + 17]) {
                if (pontoPeca[i + 17].classList.contains("branco")) {
                  null;
                } else {
                  pontoPeca[i + 17].classList.add("ativo");
                }
              }
            }

            if (
              pontoPeca[i].id === "a1" ||
              pontoPeca[i].id === "a2" ||
              pontoPeca[i].id === "a3" ||
              pontoPeca[i].id === "a3" ||
              pontoPeca[i].id === "a4" ||
              pontoPeca[i].id === "a5" ||
              pontoPeca[i].id === "a5" ||
              pontoPeca[i].id === "a6" ||
              pontoPeca[i].id === "a7" ||
              pontoPeca[i].id === "a8" ||
              pontoPeca[i].id === "b1" ||
              pontoPeca[i].id === "b2" ||
              pontoPeca[i].id === "c1" ||
              pontoPeca[i].id === "c2" ||
              pontoPeca[i].id === "d1" ||
              pontoPeca[i].id === "d2" ||
              pontoPeca[i].id === "e1" ||
              pontoPeca[i].id === "e2" ||
              pontoPeca[i].id === "f1" ||
              pontoPeca[i].id === "f2" ||
              pontoPeca[i].id === "g1" ||
              pontoPeca[i].id === "g2" ||
              pontoPeca[i].id === "h1" ||
              pontoPeca[i].id === "h2"
            ) {
              null;
            } else {
              if (pontoPeca[i - 6]) {
                if (pontoPeca[i - 6].classList.contains("branco")) {
                  null;
                } else {
                  pontoPeca[i - 6].classList.add("ativo");
                }
              }
            }
            if (
              pontoPeca[i].id === "a1" ||
              pontoPeca[i].id === "a2" ||
              pontoPeca[i].id === "a3" ||
              pontoPeca[i].id === "a3" ||
              pontoPeca[i].id === "a4" ||
              pontoPeca[i].id === "a5" ||
              pontoPeca[i].id === "a5" ||
              pontoPeca[i].id === "a6" ||
              pontoPeca[i].id === "a7" ||
              pontoPeca[i].id === "a8" ||
              pontoPeca[i].id === "b7" ||
              pontoPeca[i].id === "b8" ||
              pontoPeca[i].id === "c7" ||
              pontoPeca[i].id === "c8" ||
              pontoPeca[i].id === "d7" ||
              pontoPeca[i].id === "d8" ||
              pontoPeca[i].id === "e7" ||
              pontoPeca[i].id === "e8" ||
              pontoPeca[i].id === "f7" ||
              pontoPeca[i].id === "f8" ||
              pontoPeca[i].id === "g7" ||
              pontoPeca[i].id === "g8" ||
              pontoPeca[i].id === "h7" ||
              pontoPeca[i].id === "h8"
            ) {
              null;
            } else {
              if (pontoPeca[i - 10]) {
                if (pontoPeca[i - 10].classList.contains("branco")) {
                  null;
                } else {
                  pontoPeca[i - 10].classList.add("ativo");
                }
              }
            }
            if (
              pontoPeca[i].id === "a1" ||
              pontoPeca[i].id === "b1" ||
              pontoPeca[i].id === "c1" ||
              pontoPeca[i].id === "d1" ||
              pontoPeca[i].id === "e1" ||
              pontoPeca[i].id === "f1" ||
              pontoPeca[i].id === "g1" ||
              pontoPeca[i].id === "h1"
            ) {
              null;
            } else {
              if (pontoPeca[i - 15]) {
                if (pontoPeca[i - 15].classList.contains("branco")) {
                  null;
                } else {
                  pontoPeca[i - 15].classList.add("ativo");
                }
              }
            }
            if (
              pontoPeca[i].id === "a8" ||
              pontoPeca[i].id === "b8" ||
              pontoPeca[i].id === "c8" ||
              pontoPeca[i].id === "d8" ||
              pontoPeca[i].id === "e8" ||
              pontoPeca[i].id === "f8" ||
              pontoPeca[i].id === "g8" ||
              pontoPeca[i].id === "h8"
            ) {
              null;
            } else {
              if (pontoPeca[i - 17]) {
                if (pontoPeca[i - 17].classList.contains("branco")) {
                  null;
                } else {
                  pontoPeca[i - 17].classList.add("ativo");
                }
              }
            }
          }
        }
      }
    }
    if (tabuleiro.classList.contains("movimentoPreto")) {
      if (events.target.className === "cavaloPreto") {
        for (let i = 0; i < pontoPeca.length; i++) {
          if (
            pontoPeca[i].classList.contains("ativo") &&
            pontoPeca[i].classList.contains("preto") &&
            pontoPeca[i].classList.contains("movimento")
          ) {
            if (
              pontoPeca[i].id === "h1" ||
              pontoPeca[i].id === "h2" ||
              pontoPeca[i].id === "h3" ||
              pontoPeca[i].id === "h3" ||
              pontoPeca[i].id === "h4" ||
              pontoPeca[i].id === "h5" ||
              pontoPeca[i].id === "h5" ||
              pontoPeca[i].id === "h6" ||
              pontoPeca[i].id === "h7" ||
              pontoPeca[i].id === "h8" ||
              pontoPeca[i].id === "b7" ||
              pontoPeca[i].id === "b8" ||
              pontoPeca[i].id === "c7" ||
              pontoPeca[i].id === "c8" ||
              pontoPeca[i].id === "d7" ||
              pontoPeca[i].id === "d8" ||
              pontoPeca[i].id === "e7" ||
              pontoPeca[i].id === "e8" ||
              pontoPeca[i].id === "f7" ||
              pontoPeca[i].id === "f8" ||
              pontoPeca[i].id === "g7" ||
              pontoPeca[i].id === "g8" ||
              pontoPeca[i].id === "h7" ||
              pontoPeca[i].id === "h8"
            ) {
              null;
            } else {
              if (pontoPeca[i + 6]) {
                if (pontoPeca[i + 6].classList.contains("preto")) {
                  null;
                } else {
                  pontoPeca[i + 6].classList.add("ativo");
                }
              }
            }
            if (
              pontoPeca[i].id === "h1" ||
              pontoPeca[i].id === "h2" ||
              pontoPeca[i].id === "h3" ||
              pontoPeca[i].id === "h3" ||
              pontoPeca[i].id === "h4" ||
              pontoPeca[i].id === "h5" ||
              pontoPeca[i].id === "h5" ||
              pontoPeca[i].id === "h6" ||
              pontoPeca[i].id === "h7" ||
              pontoPeca[i].id === "h8" ||
              pontoPeca[i].id === "a1" ||
              pontoPeca[i].id === "a2" ||
              pontoPeca[i].id === "b1" ||
              pontoPeca[i].id === "b2" ||
              pontoPeca[i].id === "c1" ||
              pontoPeca[i].id === "c2" ||
              pontoPeca[i].id === "d1" ||
              pontoPeca[i].id === "d2" ||
              pontoPeca[i].id === "e1" ||
              pontoPeca[i].id === "e2" ||
              pontoPeca[i].id === "f1" ||
              pontoPeca[i].id === "f2" ||
              pontoPeca[i].id === "g1" ||
              pontoPeca[i].id === "g2"
            ) {
              null;
            } else {
              if (pontoPeca[i + 10]) {
                if (pontoPeca[i + 10].classList.contains("preto")) {
                  null;
                } else {
                  pontoPeca[i + 10].classList.add("ativo");
                }
              }
            }
            if (
              pontoPeca[i].id === "a8" ||
              pontoPeca[i].id === "b8" ||
              pontoPeca[i].id === "c8" ||
              pontoPeca[i].id === "d8" ||
              pontoPeca[i].id === "e8" ||
              pontoPeca[i].id === "f8" ||
              pontoPeca[i].id === "g8" ||
              pontoPeca[i].id === "h8"
            ) {
              null;
            } else {
              if (pontoPeca[i + 15]) {
                if (pontoPeca[i + 15].classList.contains("preto")) {
                  null;
                } else {
                  pontoPeca[i + 15].classList.add("ativo");
                }
              }
            }
            if (
              pontoPeca[i].id === "a1" ||
              pontoPeca[i].id === "b1" ||
              pontoPeca[i].id === "c1" ||
              pontoPeca[i].id === "d1" ||
              pontoPeca[i].id === "e1" ||
              pontoPeca[i].id === "f1" ||
              pontoPeca[i].id === "g1" ||
              pontoPeca[i].id === "h1"
            ) {
              null;
            } else {
              if (pontoPeca[i + 17]) {
                if (pontoPeca[i + 17].classList.contains("preto")) {
                  null;
                } else {
                  pontoPeca[i + 17].classList.add("ativo");
                }
              }
            }

            if (
              pontoPeca[i].id === "a1" ||
              pontoPeca[i].id === "a2" ||
              pontoPeca[i].id === "a3" ||
              pontoPeca[i].id === "a3" ||
              pontoPeca[i].id === "a4" ||
              pontoPeca[i].id === "a5" ||
              pontoPeca[i].id === "a5" ||
              pontoPeca[i].id === "a6" ||
              pontoPeca[i].id === "a7" ||
              pontoPeca[i].id === "a8" ||
              pontoPeca[i].id === "b1" ||
              pontoPeca[i].id === "b2" ||
              pontoPeca[i].id === "c1" ||
              pontoPeca[i].id === "c2" ||
              pontoPeca[i].id === "d1" ||
              pontoPeca[i].id === "d2" ||
              pontoPeca[i].id === "e1" ||
              pontoPeca[i].id === "e2" ||
              pontoPeca[i].id === "f1" ||
              pontoPeca[i].id === "f2" ||
              pontoPeca[i].id === "g1" ||
              pontoPeca[i].id === "g2" ||
              pontoPeca[i].id === "h1" ||
              pontoPeca[i].id === "h2"
            ) {
              null;
            } else {
              if (pontoPeca[i - 6]) {
                if (pontoPeca[i - 6].classList.contains("preto")) {
                  null;
                } else {
                  pontoPeca[i - 6].classList.add("ativo");
                }
              }
            }
            if (
              pontoPeca[i].id === "a1" ||
              pontoPeca[i].id === "a2" ||
              pontoPeca[i].id === "a3" ||
              pontoPeca[i].id === "a3" ||
              pontoPeca[i].id === "a4" ||
              pontoPeca[i].id === "a5" ||
              pontoPeca[i].id === "a5" ||
              pontoPeca[i].id === "a6" ||
              pontoPeca[i].id === "a7" ||
              pontoPeca[i].id === "a8" ||
              pontoPeca[i].id === "b7" ||
              pontoPeca[i].id === "b8" ||
              pontoPeca[i].id === "c7" ||
              pontoPeca[i].id === "c8" ||
              pontoPeca[i].id === "d7" ||
              pontoPeca[i].id === "d8" ||
              pontoPeca[i].id === "e7" ||
              pontoPeca[i].id === "e8" ||
              pontoPeca[i].id === "f7" ||
              pontoPeca[i].id === "f8" ||
              pontoPeca[i].id === "g7" ||
              pontoPeca[i].id === "g8" ||
              pontoPeca[i].id === "h7" ||
              pontoPeca[i].id === "h8"
            ) {
              null;
            } else {
              if (pontoPeca[i - 10]) {
                if (pontoPeca[i - 10].classList.contains("preto")) {
                  null;
                } else {
                  pontoPeca[i - 10].classList.add("ativo");
                }
              }
            }
            if (
              pontoPeca[i].id === "a1" ||
              pontoPeca[i].id === "b1" ||
              pontoPeca[i].id === "c1" ||
              pontoPeca[i].id === "d1" ||
              pontoPeca[i].id === "e1" ||
              pontoPeca[i].id === "f1" ||
              pontoPeca[i].id === "g1" ||
              pontoPeca[i].id === "h1"
            ) {
              null;
            } else {
              if (pontoPeca[i - 15]) {
                if (pontoPeca[i - 15].classList.contains("preto")) {
                  null;
                } else {
                  pontoPeca[i - 15].classList.add("ativo");
                }
              }
            }
            if (
              pontoPeca[i].id === "a8" ||
              pontoPeca[i].id === "b8" ||
              pontoPeca[i].id === "c8" ||
              pontoPeca[i].id === "d8" ||
              pontoPeca[i].id === "e8" ||
              pontoPeca[i].id === "f8" ||
              pontoPeca[i].id === "g8" ||
              pontoPeca[i].id === "h8"
            ) {
              null;
            } else {
              if (pontoPeca[i - 17]) {
                if (pontoPeca[i - 17].classList.contains("preto")) {
                  null;
                } else {
                  pontoPeca[i - 17].classList.add("ativo");
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
