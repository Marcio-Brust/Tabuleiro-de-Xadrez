export default function initiMovimentoBispoBranco() {
  const pontoPeca = Array.from(document.querySelectorAll("div"));
  const eventos = ["click", "tochstart"];
  const tabuleiro = document.querySelector(".tabuleiro");

  function pontoDoClick(events) {
    if (tabuleiro.classList.contains("movimentoBranco")) {
      {
        if (events.target.className === "bispoBranco") {
          for (let i = 0; i < pontoPeca.length; i++) {
            if (pontoPeca[i].classList.contains("movimento")) {
              for (let n = 0; ; n += 7) {
                if (pontoPeca[i + 7 + n].classList.contains("branco")) {
                  break;
                }
                if (pontoPeca[i + 7 + n].classList.contains("preto")) {
                  console.log("oi");
                  pontoPeca[i + 7 + n].classList.add("ativo");
                  break;
                }
                pontoPeca[i + 7 + n].classList.add("ativo");
                console.log(n);
                if (
                  pontoPeca[i + 7 + n].classList.contains("h8") ||
                  pontoPeca[i + 7 + n].classList.contains("g8") ||
                  pontoPeca[i + 7 + n].classList.contains("f8") ||
                  pontoPeca[i + 7 + n].classList.contains("e8") ||
                  pontoPeca[i + 7 + n].classList.contains("d8") ||
                  pontoPeca[i + 7 + n].classList.contains("c8") ||
                  pontoPeca[i + 7 + n].classList.contains("b8") ||
                  pontoPeca[i + 7 + n].classList.contains("a8") ||
                  pontoPeca[i + 7 + n].classList.contains("h1") ||
                  pontoPeca[i + 7 + n].classList.contains("g1") ||
                  pontoPeca[i + 7 + n].classList.contains("e1") ||
                  pontoPeca[i + 7 + n].classList.contains("d1") ||
                  pontoPeca[i + 7 + n].classList.contains("c1") ||
                  pontoPeca[i + 7 + n].classList.contains("b1") ||
                  pontoPeca[i + 7 + n].classList.contains("a1") ||
                  pontoPeca[i + 7 + n].classList.contains("a2") ||
                  pontoPeca[i + 7 + n].classList.contains("a3") ||
                  pontoPeca[i + 7 + n].classList.contains("a4") ||
                  pontoPeca[i + 7 + n].classList.contains("a5") ||
                  pontoPeca[i + 7 + n].classList.contains("a6") ||
                  pontoPeca[i + 7 + n].classList.contains("a7") ||
                  pontoPeca[i + 7 + n].classList.contains("h2") ||
                  pontoPeca[i + 7 + n].classList.contains("h3") ||
                  pontoPeca[i + 7 + n].classList.contains("h4") ||
                  pontoPeca[i + 7 + n].classList.contains("h5") ||
                  pontoPeca[i + 7 + n].classList.contains("h6") ||
                  pontoPeca[i + 7 + n].classList.contains("h7")
                ) {
                  console.log("oi");
                  break;
                }
              }
            }
            if (pontoPeca[i].classList.contains("movimento")) {
              for (let n = 0; ; n += 7) {
                if (pontoPeca[i - 7 - n].classList.contains("branco")) {
                  break;
                }
                if (pontoPeca[i - 7 - n].classList.contains("preto")) {
                  pontoPeca[i - 7 - n].classList.add("ativo");
                  console.log("oi");
                  break;
                }

                if (
                  pontoPeca[i - 7 - n].classList.contains("h8") ||
                  pontoPeca[i - 7 - n].classList.contains("g8") ||
                  pontoPeca[i - 7 - n].classList.contains("f8") ||
                  pontoPeca[i - 7 - n].classList.contains("e8") ||
                  pontoPeca[i - 7 - n].classList.contains("d8") ||
                  pontoPeca[i - 7 - n].classList.contains("c8") ||
                  pontoPeca[i - 7 - n].classList.contains("b8") ||
                  pontoPeca[i - 7 - n].classList.contains("a8") ||
                  pontoPeca[i - 7 - n].classList.contains("h1") ||
                  pontoPeca[i - 7 - n].classList.contains("g1") ||
                  pontoPeca[i - 7 - n].classList.contains("e1") ||
                  pontoPeca[i - 7 - n].classList.contains("d1") ||
                  pontoPeca[i - 7 - n].classList.contains("c1") ||
                  pontoPeca[i - 7 - n].classList.contains("b1") ||
                  pontoPeca[i - 7 - n].classList.contains("a1") ||
                  pontoPeca[i - 7 - n].classList.contains("a2") ||
                  pontoPeca[i - 7 - n].classList.contains("a3") ||
                  pontoPeca[i - 7 - n].classList.contains("a4") ||
                  pontoPeca[i - 7 - n].classList.contains("a5") ||
                  pontoPeca[i - 7 - n].classList.contains("a6") ||
                  pontoPeca[i - 7 - n].classList.contains("a7") ||
                  pontoPeca[i - 7 - n].classList.contains("h2") ||
                  pontoPeca[i - 7 - n].classList.contains("h3") ||
                  pontoPeca[i - 7 - n].classList.contains("h4") ||
                  pontoPeca[i - 7 - n].classList.contains("h5") ||
                  pontoPeca[i - 7 - n].classList.contains("h6") ||
                  pontoPeca[i - 7 - n].classList.contains("h7")
                ) {
                  console.log("oi");
                  break;
                }
              }
            }
          }
        }
      }
    } else if (tabuleiro.classList.contains("movimentoPreto")) {
      if (events.target.className === "bispoPreto") {
        for (let i = 0; i < pontoPeca.length; i++) {
          if (pontoPeca[i].classList.contains("movimento")) {
            for (let n = 0; ; n += 7) {
              if (pontoPeca[i + 7 + n].classList.contains("preto")) {
                break;
              }
              if (pontoPeca[i + 7 + n].classList.contains("branco")) {
                pontoPeca[i + 7 + n].classList.add("ativo");
                console.log("oi");
                break;
              }
              pontoPeca[i + 7 + n].classList.add("ativo");
              console.log(n);
              if (
                pontoPeca[i + 7 + n].classList.contains("h8") ||
                pontoPeca[i + 7 + n].classList.contains("g8") ||
                pontoPeca[i + 7 + n].classList.contains("f8") ||
                pontoPeca[i + 7 + n].classList.contains("e8") ||
                pontoPeca[i + 7 + n].classList.contains("d8") ||
                pontoPeca[i + 7 + n].classList.contains("c8") ||
                pontoPeca[i + 7 + n].classList.contains("b8") ||
                pontoPeca[i + 7 + n].classList.contains("a8") ||
                pontoPeca[i + 7 + n].classList.contains("h1") ||
                pontoPeca[i + 7 + n].classList.contains("g1") ||
                pontoPeca[i + 7 + n].classList.contains("e1") ||
                pontoPeca[i + 7 + n].classList.contains("d1") ||
                pontoPeca[i + 7 + n].classList.contains("c1") ||
                pontoPeca[i + 7 + n].classList.contains("b1") ||
                pontoPeca[i + 7 + n].classList.contains("a1") ||
                pontoPeca[i + 7 + n].classList.contains("a2") ||
                pontoPeca[i + 7 + n].classList.contains("a3") ||
                pontoPeca[i + 7 + n].classList.contains("a4") ||
                pontoPeca[i + 7 + n].classList.contains("a5") ||
                pontoPeca[i + 7 + n].classList.contains("a6") ||
                pontoPeca[i + 7 + n].classList.contains("a7") ||
                pontoPeca[i + 7 + n].classList.contains("h2") ||
                pontoPeca[i + 7 + n].classList.contains("h3") ||
                pontoPeca[i + 7 + n].classList.contains("h4") ||
                pontoPeca[i + 7 + n].classList.contains("h5") ||
                pontoPeca[i + 7 + n].classList.contains("h6") ||
                pontoPeca[i + 7 + n].classList.contains("h7")
              ) {
                console.log("oi");
                break;
              }
            }
          }
          if (pontoPeca[i].classList.contains("movimento")) {
            for (let n = 0; ; n += 7) {
              if (pontoPeca[i - 7 - n].classList.contains("preto")) {
                break;
              }
              if (pontoPeca[i - 7 - n].classList.contains("branco")) {
                pontoPeca[i - 7 - n].classList.add("ativo");
                console.log("oi");
                break;
              }
              pontoPeca[i - 7 - n].classList.add("ativo");
              console.log(n);
              if (
                pontoPeca[i - 7 - n].classList.contains("h8") ||
                pontoPeca[i - 7 - n].classList.contains("g8") ||
                pontoPeca[i - 7 - n].classList.contains("f8") ||
                pontoPeca[i - 7 - n].classList.contains("e8") ||
                pontoPeca[i - 7 - n].classList.contains("d8") ||
                pontoPeca[i - 7 - n].classList.contains("c8") ||
                pontoPeca[i - 7 - n].classList.contains("b8") ||
                pontoPeca[i - 7 - n].classList.contains("a8") ||
                pontoPeca[i - 7 - n].classList.contains("h1") ||
                pontoPeca[i - 7 - n].classList.contains("g1") ||
                pontoPeca[i - 7 - n].classList.contains("e1") ||
                pontoPeca[i - 7 - n].classList.contains("d1") ||
                pontoPeca[i - 7 - n].classList.contains("c1") ||
                pontoPeca[i - 7 - n].classList.contains("b1") ||
                pontoPeca[i - 7 - n].classList.contains("a1") ||
                pontoPeca[i - 7 - n].classList.contains("a2") ||
                pontoPeca[i - 7 - n].classList.contains("a3") ||
                pontoPeca[i - 7 - n].classList.contains("a4") ||
                pontoPeca[i - 7 - n].classList.contains("a5") ||
                pontoPeca[i - 7 - n].classList.contains("a6") ||
                pontoPeca[i - 7 - n].classList.contains("a7") ||
                pontoPeca[i - 7 - n].classList.contains("h2") ||
                pontoPeca[i - 7 - n].classList.contains("h3") ||
                pontoPeca[i - 7 - n].classList.contains("h4") ||
                pontoPeca[i - 7 - n].classList.contains("h5") ||
                pontoPeca[i - 7 - n].classList.contains("h6") ||
                pontoPeca[i - 7 - n].classList.contains("h7")
              ) {
                console.log("oi");
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
