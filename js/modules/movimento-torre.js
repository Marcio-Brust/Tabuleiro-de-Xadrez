export default function initiMovimentoTorre() {
  const pontoPeca = Array.from(document.querySelectorAll("div"));
  const eventos = ["click", "tochstart"];
  const tabuleiro = document.querySelector(".tabuleiro");

  function pontoDoClick(events) {
    if (tabuleiro.classList.contains("movimentoBranco")) {
      {
        if (
          events.target.className === "torreBranca" ||
          events.target.className === "rainhaBranca"
        ) {
          for (let i = 0; i < pontoPeca.length; i++) {
            if (pontoPeca[i].classList.contains("movimento")) {
              for (let n = 0; ; n += 1) {
                if (
                  pontoPeca[i].classList.contains("h8") ||
                  pontoPeca[i].classList.contains("a8") ||
                  pontoPeca[i].classList.contains("b8") ||
                  pontoPeca[i].classList.contains("c8") ||
                  pontoPeca[i].classList.contains("d8") ||
                  pontoPeca[i].classList.contains("e8") ||
                  pontoPeca[i].classList.contains("f8") ||
                  pontoPeca[i].classList.contains("g8")
                ) {
                  break;
                }
                if (pontoPeca[i - 1 - n].classList.contains("branco")) {
                  break;
                }
                if (pontoPeca[i - 1 - n].classList.contains("preto")) {
                  pontoPeca[i - 1 - n].classList.add("ativo");
                  break;
                }
                pontoPeca[i - 1 - n].classList.add("ativo");

                if (
                  pontoPeca[i - 1 - n].classList.contains("h8") ||
                  pontoPeca[i - 1 - n].classList.contains("a8") ||
                  pontoPeca[i - 1 - n].classList.contains("b8") ||
                  pontoPeca[i - 1 - n].classList.contains("c8") ||
                  pontoPeca[i - 1 - n].classList.contains("d8") ||
                  pontoPeca[i - 1 - n].classList.contains("e8") ||
                  pontoPeca[i - 1 - n].classList.contains("f8") ||
                  pontoPeca[i - 1 - n].classList.contains("g8")
                ) {
                  break;
                }
              }
            }
            if (pontoPeca[i].classList.contains("movimento")) {
              for (let n = 0; ; n += 1) {
                if (
                  pontoPeca[i].classList.contains("h1") ||
                  pontoPeca[i].classList.contains("a1") ||
                  pontoPeca[i].classList.contains("b1") ||
                  pontoPeca[i].classList.contains("c1") ||
                  pontoPeca[i].classList.contains("d1") ||
                  pontoPeca[i].classList.contains("e1") ||
                  pontoPeca[i].classList.contains("f1") ||
                  pontoPeca[i].classList.contains("g1")
                ) {
                  break;
                }
                if (pontoPeca[i + 1 + n].classList.contains("branco")) {
                  break;
                }
                if (pontoPeca[i + 1 + n].classList.contains("preto")) {
                  pontoPeca[i + 1 + n].classList.add("ativo");

                  break;
                }
                if (pontoPeca[i + 1 + n]) {
                  pontoPeca[i + 1 + n].classList.add("ativo");
                }

                if (
                  pontoPeca[i + 1 + n].classList.contains("h1") ||
                  pontoPeca[i + 1 + n].classList.contains("a1") ||
                  pontoPeca[i + 1 + n].classList.contains("b1") ||
                  pontoPeca[i + 1 + n].classList.contains("c1") ||
                  pontoPeca[i + 1 + n].classList.contains("d1") ||
                  pontoPeca[i + 1 + n].classList.contains("e1") ||
                  pontoPeca[i + 1 + n].classList.contains("f1") ||
                  pontoPeca[i + 1 + n].classList.contains("g1")
                ) {
                  break;
                }
              }
            }
          }
        }
      }
    } else if (tabuleiro.classList.contains("movimentoPreto")) {
      if (
        events.target.className === "torrePreta" ||
        events.target.className === "rainhaPreta"
      ) {
        for (let i = 0; i < pontoPeca.length; i++) {
          if (pontoPeca[i].classList.contains("movimento")) {
            for (let n = 0; ; n += 1) {
              if (
                pontoPeca[i].classList.contains("h1") ||
                pontoPeca[i].classList.contains("a1") ||
                pontoPeca[i].classList.contains("b1") ||
                pontoPeca[i].classList.contains("c1") ||
                pontoPeca[i].classList.contains("d1") ||
                pontoPeca[i].classList.contains("e1") ||
                pontoPeca[i].classList.contains("f1") ||
                pontoPeca[i].classList.contains("g1")
              ) {
                break;
              }
              if (pontoPeca[i + 1 + n].classList.contains("preto")) {
                break;
              }
              if (pontoPeca[i + 1 + n].classList.contains("branco")) {
                pontoPeca[i + 1 + n].classList.add("ativo");
                break;
              }
              if (pontoPeca[i + 1 + n]) {
                pontoPeca[i + 1 + n].classList.add("ativo");
              }

              if (
                pontoPeca[i + 1 + n].classList.contains("h1") ||
                pontoPeca[i + 1 + n].classList.contains("a1") ||
                pontoPeca[i + 1 + n].classList.contains("b1") ||
                pontoPeca[i + 1 + n].classList.contains("c1") ||
                pontoPeca[i + 1 + n].classList.contains("d1") ||
                pontoPeca[i + 1 + n].classList.contains("e1") ||
                pontoPeca[i + 1 + n].classList.contains("f1") ||
                pontoPeca[i + 1 + n].classList.contains("g1")
              ) {
                break;
              }
            }
          }
          if (pontoPeca[i].classList.contains("movimento")) {
            for (let n = 0; ; n += 1) {
              if (
                pontoPeca[i].classList.contains("h8") ||
                pontoPeca[i].classList.contains("a8") ||
                pontoPeca[i].classList.contains("b8") ||
                pontoPeca[i].classList.contains("c8") ||
                pontoPeca[i].classList.contains("d8") ||
                pontoPeca[i].classList.contains("e8") ||
                pontoPeca[i].classList.contains("f8") ||
                pontoPeca[i].classList.contains("g8")
              ) {
                break;
              }
              if (pontoPeca[i - 1 - n].classList.contains("preto")) {
                break;
              }
              if (pontoPeca[i - 1 - n].classList.contains("branco")) {
                pontoPeca[i - 1 - n].classList.add("ativo");

                break;
              }
              if (pontoPeca[i - 1 - n]) {
                pontoPeca[i - 1 - n].classList.add("ativo");
              }

              if (
                pontoPeca[i - 1 - n].classList.contains("h8") ||
                pontoPeca[i - 1 - n].classList.contains("a8") ||
                pontoPeca[i - 1 - n].classList.contains("b8") ||
                pontoPeca[i - 1 - n].classList.contains("c8") ||
                pontoPeca[i - 1 - n].classList.contains("d8") ||
                pontoPeca[i - 1 - n].classList.contains("e8") ||
                pontoPeca[i - 1 - n].classList.contains("f8") ||
                pontoPeca[i - 1 - n].classList.contains("g8")
              ) {
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
