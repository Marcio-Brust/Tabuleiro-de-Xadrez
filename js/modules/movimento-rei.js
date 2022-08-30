export default function initiMovimentoRei() {
  const pontoPeca = Array.from(document.querySelectorAll("div"));
  const eventos = ["click", "tochstart"];

  function pontoDoClick(events) {
    if (events.target.className === "reiBranco") {
      for (let c = 0; c < pontoPeca.length; c++) {
        if (
          pontoPeca[c].classList.contains("ativo") &&
          pontoPeca[c].classList.contains("branco") &&
          pontoPeca[c].classList.contains("movimento")
        ) {
          if (pontoPeca[c - 1]) {
            if (pontoPeca[c - 1].classList.contains("branco")) {
              null;
            } else {
              if (
                pontoPeca[c].id === "a8" ||
                pontoPeca[c].id === "b8" ||
                pontoPeca[c].id === "c8" ||
                pontoPeca[c].id === "d8" ||
                pontoPeca[c].id === "e8" ||
                pontoPeca[c].id === "f8" ||
                pontoPeca[c].id === "g8" ||
                pontoPeca[c].id === "h8"
              ) {
                null;
              } else {
                pontoPeca[c - 1].classList.add("ativo");
              }
            }
            if (pontoPeca[c - 9]) {
              if (pontoPeca[c - 9].classList.contains("branco")) {
                null;
              } else if (
                pontoPeca[c].id === "a8" ||
                pontoPeca[c].id === "b8" ||
                pontoPeca[c].id === "c8" ||
                pontoPeca[c].id === "d8" ||
                pontoPeca[c].id === "e8" ||
                pontoPeca[c].id === "f8" ||
                pontoPeca[c].id === "g8" ||
                pontoPeca[c].id === "h8" ||
                pontoPeca[c].id === "a1" ||
                pontoPeca[c].id === "a2" ||
                pontoPeca[c].id === "a3" ||
                pontoPeca[c].id === "a4" ||
                pontoPeca[c].id === "a5" ||
                pontoPeca[c].id === "a6" ||
                pontoPeca[c].id === "a7"
              ) {
                null;
              } else {
                pontoPeca[c - 9].classList.add("ativo");
              }
            }

            if (pontoPeca[c - 8]) {
              if (pontoPeca[c - 8].classList.contains("branco")) {
                null;
              } else {
                if (
                  pontoPeca[c].id === "a1" ||
                  pontoPeca[c].id === "a2" ||
                  pontoPeca[c].id === "a3" ||
                  pontoPeca[c].id === "a4" ||
                  pontoPeca[c].id === "a5" ||
                  pontoPeca[c].id === "a6" ||
                  pontoPeca[c].id === "a7" ||
                  pontoPeca[c].id === "a8"
                ) {
                  null;
                } else {
                  pontoPeca[c - 8].classList.add("ativo");
                }
              }
              if (pontoPeca[c - 7]) {
                if (pontoPeca[c - 7].classList.contains("branco")) {
                  null;
                } else {
                  if (
                    pontoPeca[c].id === "a1" ||
                    pontoPeca[c].id === "a2" ||
                    pontoPeca[c].id === "a3" ||
                    pontoPeca[c].id === "a4" ||
                    pontoPeca[c].id === "a5" ||
                    pontoPeca[c].id === "a6" ||
                    pontoPeca[c].id === "a7" ||
                    pontoPeca[c].id === "a8" ||
                    pontoPeca[c].id === "b1" ||
                    pontoPeca[c].id === "c1" ||
                    pontoPeca[c].id === "d1" ||
                    pontoPeca[c].id === "e1" ||
                    pontoPeca[c].id === "f1" ||
                    pontoPeca[c].id === "g1" ||
                    pontoPeca[c].id === "h1"
                  ) {
                    null;
                  } else {
                    pontoPeca[c - 7].classList.add("ativo");
                  }
                }
              }
            }
            if (pontoPeca[c + 9]) {
              if (pontoPeca[c + 9].classList.contains("branco")) {
                null;
              } else {
                if (
                  pontoPeca[c].id === "a1" ||
                  pontoPeca[c].id === "b1" ||
                  pontoPeca[c].id === "c1" ||
                  pontoPeca[c].id === "d1" ||
                  pontoPeca[c].id === "e1" ||
                  pontoPeca[c].id === "f1" ||
                  pontoPeca[c].id === "g1" ||
                  pontoPeca[c].id === "h1" ||
                  pontoPeca[c].id === "h2" ||
                  pontoPeca[c].id === "h3" ||
                  pontoPeca[c].id === "h4" ||
                  pontoPeca[c].id === "h5" ||
                  pontoPeca[c].id === "h6" ||
                  pontoPeca[c].id === "h7" ||
                  pontoPeca[c].id === "h8"
                ) {
                  null;
                } else {
                  pontoPeca[c + 9].classList.add("ativo");
                }
              }
            }
          }
          if (pontoPeca[c + 8]) {
            if (pontoPeca[c + 8].classList.contains("branco")) {
              null;
            } else {
              if (
                pontoPeca[c].id === "h1" ||
                pontoPeca[c].id === "h2" ||
                pontoPeca[c].id === "h3" ||
                pontoPeca[c].id === "h4" ||
                pontoPeca[c].id === "h5" ||
                pontoPeca[c].id === "h6" ||
                pontoPeca[c].id === "h7" ||
                pontoPeca[c].id === "h8"
              ) {
                null;
              } else {
                pontoPeca[c + 8].classList.add("ativo");
              }
            }
          }
          if (pontoPeca[c + 7]) {
            if (pontoPeca[c + 7].classList.contains("branco")) {
              null;
            } else {
              if (
                pontoPeca[c].id === "h1" ||
                pontoPeca[c].id === "h2" ||
                pontoPeca[c].id === "h3" ||
                pontoPeca[c].id === "h4" ||
                pontoPeca[c].id === "h5" ||
                pontoPeca[c].id === "h6" ||
                pontoPeca[c].id === "h7" ||
                pontoPeca[c].id === "h8" ||
                pontoPeca[c].id === "a8" ||
                pontoPeca[c].id === "b8" ||
                pontoPeca[c].id === "c8" ||
                pontoPeca[c].id === "d8" ||
                pontoPeca[c].id === "e8" ||
                pontoPeca[c].id === "f8" ||
                pontoPeca[c].id === "g8"
              ) {
                null;
              } else {
                pontoPeca[c + 7].classList.add("ativo");
              }
            }
          }
          if (pontoPeca[c + 1]) {
            if (pontoPeca[c + 1].classList.contains("branco")) {
              null;
            } else {
              if (
                pontoPeca[c].id === "a1" ||
                pontoPeca[c].id === "b1" ||
                pontoPeca[c].id === "c1" ||
                pontoPeca[c].id === "d1" ||
                pontoPeca[c].id === "e1" ||
                pontoPeca[c].id === "f1" ||
                pontoPeca[c].id === "g1" ||
                pontoPeca[c].id === "h1"
              ) {
                null;
              } else {
                pontoPeca[c + 1].classList.add("ativo");
              }
            }
          }
        }
      }
    }
    if (events.target.className === "reiPreto") {
      for (let c = 0; c < pontoPeca.length; c++) {
        if (
          pontoPeca[c].classList.contains("ativo") &&
          pontoPeca[c].classList.contains("preto") &&
          pontoPeca[c].classList.contains("movimento")
        ) {
          if (pontoPeca[c - 1]) {
            if (pontoPeca[c - 1].classList.contains("preto")) {
              null;
            } else {
              if (
                pontoPeca[c].id === "a8" ||
                pontoPeca[c].id === "b8" ||
                pontoPeca[c].id === "c8" ||
                pontoPeca[c].id === "d8" ||
                pontoPeca[c].id === "e8" ||
                pontoPeca[c].id === "f8" ||
                pontoPeca[c].id === "g8" ||
                pontoPeca[c].id === "h8"
              ) {
                null;
              } else {
                pontoPeca[c - 1].classList.add("ativo");
              }
            }
            if (pontoPeca[c - 9]) {
              if (pontoPeca[c - 9].classList.contains("preto")) {
                null;
              } else if (
                pontoPeca[c].id === "a8" ||
                pontoPeca[c].id === "b8" ||
                pontoPeca[c].id === "c8" ||
                pontoPeca[c].id === "d8" ||
                pontoPeca[c].id === "e8" ||
                pontoPeca[c].id === "f8" ||
                pontoPeca[c].id === "g8" ||
                pontoPeca[c].id === "h8" ||
                pontoPeca[c].id === "a1" ||
                pontoPeca[c].id === "a2" ||
                pontoPeca[c].id === "a3" ||
                pontoPeca[c].id === "a4" ||
                pontoPeca[c].id === "a5" ||
                pontoPeca[c].id === "a6" ||
                pontoPeca[c].id === "a7"
              ) {
                null;
              } else {
                pontoPeca[c - 9].classList.add("ativo");
              }
            }

            if (pontoPeca[c - 8]) {
              if (pontoPeca[c - 8].classList.contains("preto")) {
                null;
              } else {
                if (
                  pontoPeca[c].id === "a1" ||
                  pontoPeca[c].id === "a2" ||
                  pontoPeca[c].id === "a3" ||
                  pontoPeca[c].id === "a4" ||
                  pontoPeca[c].id === "a5" ||
                  pontoPeca[c].id === "a6" ||
                  pontoPeca[c].id === "a7" ||
                  pontoPeca[c].id === "a8"
                ) {
                  null;
                } else {
                  pontoPeca[c - 8].classList.add("ativo");
                }
              }
              if (pontoPeca[c - 7]) {
                if (pontoPeca[c - 7].classList.contains("preto")) {
                  null;
                } else {
                  if (
                    pontoPeca[c].id === "a1" ||
                    pontoPeca[c].id === "a2" ||
                    pontoPeca[c].id === "a3" ||
                    pontoPeca[c].id === "a4" ||
                    pontoPeca[c].id === "a5" ||
                    pontoPeca[c].id === "a6" ||
                    pontoPeca[c].id === "a7" ||
                    pontoPeca[c].id === "a8" ||
                    pontoPeca[c].id === "b1" ||
                    pontoPeca[c].id === "c1" ||
                    pontoPeca[c].id === "d1" ||
                    pontoPeca[c].id === "e1" ||
                    pontoPeca[c].id === "f1" ||
                    pontoPeca[c].id === "g1" ||
                    pontoPeca[c].id === "h1"
                  ) {
                    null;
                  } else {
                    pontoPeca[c - 7].classList.add("ativo");
                  }
                }
              }
            }
            if (pontoPeca[c + 9]) {
              if (pontoPeca[c + 9].classList.contains("preto")) {
                null;
              } else {
                if (
                  pontoPeca[c].id === "a1" ||
                  pontoPeca[c].id === "b1" ||
                  pontoPeca[c].id === "c1" ||
                  pontoPeca[c].id === "d1" ||
                  pontoPeca[c].id === "e1" ||
                  pontoPeca[c].id === "f1" ||
                  pontoPeca[c].id === "g1" ||
                  pontoPeca[c].id === "h1" ||
                  pontoPeca[c].id === "h2" ||
                  pontoPeca[c].id === "h3" ||
                  pontoPeca[c].id === "h4" ||
                  pontoPeca[c].id === "h5" ||
                  pontoPeca[c].id === "h6" ||
                  pontoPeca[c].id === "h7" ||
                  pontoPeca[c].id === "h8"
                ) {
                  null;
                } else {
                  pontoPeca[c + 9].classList.add("ativo");
                }
              }
            }
          }
          if (pontoPeca[c + 8]) {
            if (pontoPeca[c + 8].classList.contains("preto")) {
              null;
            } else {
              if (
                pontoPeca[c].id === "h1" ||
                pontoPeca[c].id === "h2" ||
                pontoPeca[c].id === "h3" ||
                pontoPeca[c].id === "h4" ||
                pontoPeca[c].id === "h5" ||
                pontoPeca[c].id === "h6" ||
                pontoPeca[c].id === "h7" ||
                pontoPeca[c].id === "h8"
              ) {
                null;
              } else {
                pontoPeca[c + 8].classList.add("ativo");
              }
            }
          }
          if (pontoPeca[c + 7]) {
            if (pontoPeca[c + 7].classList.contains("preto")) {
              null;
            } else {
              if (
                pontoPeca[c].id === "h1" ||
                pontoPeca[c].id === "h2" ||
                pontoPeca[c].id === "h3" ||
                pontoPeca[c].id === "h4" ||
                pontoPeca[c].id === "h5" ||
                pontoPeca[c].id === "h6" ||
                pontoPeca[c].id === "h7" ||
                pontoPeca[c].id === "h8" ||
                pontoPeca[c].id === "a8" ||
                pontoPeca[c].id === "b8" ||
                pontoPeca[c].id === "c8" ||
                pontoPeca[c].id === "d8" ||
                pontoPeca[c].id === "e8" ||
                pontoPeca[c].id === "f8" ||
                pontoPeca[c].id === "g8"
              ) {
                null;
              } else {
                pontoPeca[c + 7].classList.add("ativo");
              }
            }
          }
          if (pontoPeca[c + 1]) {
            if (pontoPeca[c + 1].classList.contains("preto")) {
              null;
            } else {
              if (
                pontoPeca[c].id === "a1" ||
                pontoPeca[c].id === "b1" ||
                pontoPeca[c].id === "c1" ||
                pontoPeca[c].id === "d1" ||
                pontoPeca[c].id === "e1" ||
                pontoPeca[c].id === "f1" ||
                pontoPeca[c].id === "g1" ||
                pontoPeca[c].id === "h1"
              ) {
                null;
              } else {
                pontoPeca[c + 1].classList.add("ativo");
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
