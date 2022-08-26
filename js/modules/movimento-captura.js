export default function initiMovimentoCaptura() {
  const pontoPeca = Array.from(document.querySelectorAll("div"));

  const tabuleiro = document.querySelector(".tabuleiro");

  pontoPeca.forEach((item) => {
    item.addEventListener("click", captura);
  });

  function captura() {
    for (let c = 0; c < pontoPeca.length; c++) {
      if (pontoPeca[c].innerHTML === '<span class="peaoBranco">♙</span>') {
        if (pontoPeca[c + 7]) {
          pontoPeca[c + 7].classList.add("captura");
        }
        if (pontoPeca[c - 9]) {
          pontoPeca[c - 9].classList.add("captura");
        }
      }
      if (pontoPeca[c].innerHTML === '<span class="peaoPreto">♟</span>') {
        if (pontoPeca[c - 7]) {
          pontoPeca[c - 7].classList.add("capturaPreto");
        }
        if (pontoPeca[c + 9]) {
          pontoPeca[c + 9].classList.add("capturaPreto");
        }
      }
      if (
        pontoPeca[c].innerHTML === '<span class="bispoBranco">♗</span>' ||
        pontoPeca[c].innerHTML === '<span class="rainhaBranca">♕</span>'
      ) {
        for (let n = 0; ; n += 7) {
          if (
            pontoPeca[c].classList.contains("h1") ||
            pontoPeca[c].classList.contains("h2") ||
            pontoPeca[c].classList.contains("h3") ||
            pontoPeca[c].classList.contains("h4") ||
            pontoPeca[c].classList.contains("h5") ||
            pontoPeca[c].classList.contains("h6") ||
            pontoPeca[c].classList.contains("h7") ||
            pontoPeca[c].classList.contains("h8") ||
            pontoPeca[c].classList.contains("a8") ||
            pontoPeca[c].classList.contains("b8") ||
            pontoPeca[c].classList.contains("c8") ||
            pontoPeca[c].classList.contains("d8") ||
            pontoPeca[c].classList.contains("e8") ||
            pontoPeca[c].classList.contains("f8") ||
            pontoPeca[c].classList.contains("g8")
          ) {
            break;
          }
          if (pontoPeca[c + 7 + n].classList.contains("branco")) {
            break;
          }
          if (pontoPeca[c + 7 + n].classList.contains("preto")) {
            pontoPeca[c + 7 + n].classList.add("captura");
            break;
          }
          if (pontoPeca[c + 7 + n]) {
            pontoPeca[c + 7 + n].classList.add("captura");
          }
          if (pontoPeca[c + 7 + n] === undefined) {
            break;
          }
          if (
            pontoPeca[c + 7 + n].classList.contains("h1") ||
            pontoPeca[c + 7 + n].classList.contains("h2") ||
            pontoPeca[c + 7 + n].classList.contains("h3") ||
            pontoPeca[c + 7 + n].classList.contains("h4") ||
            pontoPeca[c + 7 + n].classList.contains("h5") ||
            pontoPeca[c + 7 + n].classList.contains("h6") ||
            pontoPeca[c + 7 + n].classList.contains("h7") ||
            pontoPeca[c + 7 + n].classList.contains("h8") ||
            pontoPeca[c + 7 + n].classList.contains("a8") ||
            pontoPeca[c + 7 + n].classList.contains("b8") ||
            pontoPeca[c + 7 + n].classList.contains("c8") ||
            pontoPeca[c + 7 + n].classList.contains("d8") ||
            pontoPeca[c + 7 + n].classList.contains("e8") ||
            pontoPeca[c + 7 + n].classList.contains("f8") ||
            pontoPeca[c + 7 + n].classList.contains("g8")
          ) {
            break;
          }
        }
        for (let n = 0; ; n += 7) {
          if (
            pontoPeca[c].classList.contains("a1") ||
            pontoPeca[c].classList.contains("a2") ||
            pontoPeca[c].classList.contains("a3") ||
            pontoPeca[c].classList.contains("a4") ||
            pontoPeca[c].classList.contains("a5") ||
            pontoPeca[c].classList.contains("a6") ||
            pontoPeca[c].classList.contains("a7") ||
            pontoPeca[c].classList.contains("a8") ||
            pontoPeca[c].classList.contains("b1") ||
            pontoPeca[c].classList.contains("c1") ||
            pontoPeca[c].classList.contains("d1") ||
            pontoPeca[c].classList.contains("e1") ||
            pontoPeca[c].classList.contains("f1") ||
            pontoPeca[c].classList.contains("g1") ||
            pontoPeca[c].classList.contains("h1")
          ) {
            break;
          }
          if (pontoPeca[c - 7 - n].classList.contains("branco")) {
            break;
          }
          if (pontoPeca[c - 7 - n].classList.contains("preto")) {
            pontoPeca[c - 7 - n].classList.add("captura");
            break;
          }
          if (pontoPeca[c - 7 - n]) {
            pontoPeca[c - 7 - n].classList.add("captura");
          }
          if (pontoPeca[c - 7 - n] === undefined) {
            break;
          }
          if (
            pontoPeca[c - 7 - n].classList.contains("a1") ||
            pontoPeca[c - 7 - n].classList.contains("a2") ||
            pontoPeca[c - 7 - n].classList.contains("a3") ||
            pontoPeca[c - 7 - n].classList.contains("a4") ||
            pontoPeca[c - 7 - n].classList.contains("a5") ||
            pontoPeca[c - 7 - n].classList.contains("a6") ||
            pontoPeca[c - 7 - n].classList.contains("a7") ||
            pontoPeca[c - 7 - n].classList.contains("a8") ||
            pontoPeca[c - 7 - n].classList.contains("b1") ||
            pontoPeca[c - 7 - n].classList.contains("c1") ||
            pontoPeca[c - 7 - n].classList.contains("d1") ||
            pontoPeca[c - 7 - n].classList.contains("e1") ||
            pontoPeca[c - 7 - n].classList.contains("f1") ||
            pontoPeca[c - 7 - n].classList.contains("g1") ||
            pontoPeca[c - 7 - n].classList.contains("h1")
          ) {
            break;
          }
        }
      }
      if (
        pontoPeca[c].innerHTML === '<span class="bispoBranco">♗</span>' ||
        pontoPeca[c].innerHTML === '<span class="rainhaBranca">♕</span>'
      ) {
        for (let n = 0; ; n += 9) {
          if (
            pontoPeca[c].classList.contains("a1") ||
            pontoPeca[c].classList.contains("a2") ||
            pontoPeca[c].classList.contains("a3") ||
            pontoPeca[c].classList.contains("a4") ||
            pontoPeca[c].classList.contains("a5") ||
            pontoPeca[c].classList.contains("a6") ||
            pontoPeca[c].classList.contains("a7") ||
            pontoPeca[c].classList.contains("a8") ||
            pontoPeca[c].classList.contains("b8") ||
            pontoPeca[c].classList.contains("c8") ||
            pontoPeca[c].classList.contains("d8") ||
            pontoPeca[c].classList.contains("e8") ||
            pontoPeca[c].classList.contains("f8") ||
            pontoPeca[c].classList.contains("g8") ||
            pontoPeca[c].classList.contains("h8")
          ) {
            break;
          }
          if (pontoPeca[c - 9 - n].classList.contains("branco")) {
            break;
          }
          if (pontoPeca[c - 9 - n].classList.contains("preto")) {
            pontoPeca[c - 9 - n].classList.add("captura");
            break;
          }
          if (pontoPeca[c - 9 - n]) {
            pontoPeca[c - 9 - n].classList.add("captura");
          }
          if (pontoPeca[c - 9 - n] === undefined) {
            break;
          }
          if (
            pontoPeca[c - 9 - n].classList.contains("a1") ||
            pontoPeca[c - 9 - n].classList.contains("a2") ||
            pontoPeca[c - 9 - n].classList.contains("a3") ||
            pontoPeca[c - 9 - n].classList.contains("a4") ||
            pontoPeca[c - 9 - n].classList.contains("a5") ||
            pontoPeca[c - 9 - n].classList.contains("a6") ||
            pontoPeca[c - 9 - n].classList.contains("a7") ||
            pontoPeca[c - 9 - n].classList.contains("a8") ||
            pontoPeca[c - 9 - n].classList.contains("b8") ||
            pontoPeca[c - 9 - n].classList.contains("c8") ||
            pontoPeca[c - 9 - n].classList.contains("d8") ||
            pontoPeca[c - 9 - n].classList.contains("e8") ||
            pontoPeca[c - 9 - n].classList.contains("f8") ||
            pontoPeca[c - 9 - n].classList.contains("g8") ||
            pontoPeca[c - 9 - n].classList.contains("h8")
          ) {
            break;
          }
        }
        for (let n = 0; ; n += 9) {
          if (
            pontoPeca[c].classList.contains("h1") ||
            pontoPeca[c].classList.contains("h2") ||
            pontoPeca[c].classList.contains("h3") ||
            pontoPeca[c].classList.contains("h4") ||
            pontoPeca[c].classList.contains("h5") ||
            pontoPeca[c].classList.contains("h6") ||
            pontoPeca[c].classList.contains("h7") ||
            pontoPeca[c].classList.contains("h8") ||
            pontoPeca[c].classList.contains("a1") ||
            pontoPeca[c].classList.contains("b1") ||
            pontoPeca[c].classList.contains("c1") ||
            pontoPeca[c].classList.contains("d1") ||
            pontoPeca[c].classList.contains("e1") ||
            pontoPeca[c].classList.contains("f1") ||
            pontoPeca[c].classList.contains("g1")
          ) {
            break;
          }
          if (pontoPeca[c + 9 + n].classList.contains("branco")) {
            break;
          }
          if (pontoPeca[c + 9 + n].classList.contains("preto")) {
            pontoPeca[c + 9 + n].classList.add("captura");
            break;
          }
          if (pontoPeca[c + 9 + n]) {
            pontoPeca[c + 9 + n].classList.add("captura");
          }
          if (pontoPeca[c + 9 + n] === undefined) {
            break;
          }
          if (
            pontoPeca[c + 9 + n].classList.contains("h1") ||
            pontoPeca[c + 9 + n].classList.contains("h2") ||
            pontoPeca[c + 9 + n].classList.contains("h3") ||
            pontoPeca[c + 9 + n].classList.contains("h4") ||
            pontoPeca[c + 9 + n].classList.contains("h5") ||
            pontoPeca[c + 9 + n].classList.contains("h6") ||
            pontoPeca[c + 9 + n].classList.contains("h7") ||
            pontoPeca[c + 9 + n].classList.contains("h8") ||
            pontoPeca[c + 9 + n].classList.contains("a1") ||
            pontoPeca[c + 9 + n].classList.contains("b1") ||
            pontoPeca[c + 9 + n].classList.contains("c1") ||
            pontoPeca[c + 9 + n].classList.contains("d1") ||
            pontoPeca[c + 9 + n].classList.contains("e1") ||
            pontoPeca[c + 9 + n].classList.contains("f1") ||
            pontoPeca[c + 9 + n].classList.contains("g1")
          ) {
            break;
          }
        }
      }
      if (
        pontoPeca[c].innerHTML === '<span class="bispoPreto">♝</span>' ||
        pontoPeca[c].innerHTML === '<span class="rainhaPreta">♛</span>'
      ) {
        for (let n = 0; ; n += 7) {
          if (
            pontoPeca[c].classList.contains("h1") ||
            pontoPeca[c].classList.contains("h2") ||
            pontoPeca[c].classList.contains("h3") ||
            pontoPeca[c].classList.contains("h4") ||
            pontoPeca[c].classList.contains("h5") ||
            pontoPeca[c].classList.contains("h6") ||
            pontoPeca[c].classList.contains("h7") ||
            pontoPeca[c].classList.contains("h8") ||
            pontoPeca[c].classList.contains("a8") ||
            pontoPeca[c].classList.contains("b8") ||
            pontoPeca[c].classList.contains("c8") ||
            pontoPeca[c].classList.contains("d8") ||
            pontoPeca[c].classList.contains("e8") ||
            pontoPeca[c].classList.contains("f8") ||
            pontoPeca[c].classList.contains("g8")
          ) {
            break;
          }
          if (pontoPeca[c + 7 + n].classList.contains("preto")) {
            break;
          }
          if (pontoPeca[c + 7 + n].classList.contains("branco")) {
            pontoPeca[c + 7 + n].classList.add("capturaPreto");
            break;
          }
          if (pontoPeca[c + 7 + n]) {
            pontoPeca[c + 7 + n].classList.add("capturaPreto");
          }
          if (pontoPeca[c + 7 + n] === undefined) {
            break;
          }
          if (
            pontoPeca[c + 7 + n].classList.contains("h1") ||
            pontoPeca[c + 7 + n].classList.contains("h2") ||
            pontoPeca[c + 7 + n].classList.contains("h3") ||
            pontoPeca[c + 7 + n].classList.contains("h4") ||
            pontoPeca[c + 7 + n].classList.contains("h5") ||
            pontoPeca[c + 7 + n].classList.contains("h6") ||
            pontoPeca[c + 7 + n].classList.contains("h7") ||
            pontoPeca[c + 7 + n].classList.contains("h8") ||
            pontoPeca[c + 7 + n].classList.contains("a8") ||
            pontoPeca[c + 7 + n].classList.contains("b8") ||
            pontoPeca[c + 7 + n].classList.contains("c8") ||
            pontoPeca[c + 7 + n].classList.contains("d8") ||
            pontoPeca[c + 7 + n].classList.contains("e8") ||
            pontoPeca[c + 7 + n].classList.contains("f8") ||
            pontoPeca[c + 7 + n].classList.contains("g8")
          ) {
            break;
          }
        }
        for (let n = 0; ; n += 7) {
          if (
            pontoPeca[c].classList.contains("a1") ||
            pontoPeca[c].classList.contains("a2") ||
            pontoPeca[c].classList.contains("a3") ||
            pontoPeca[c].classList.contains("a4") ||
            pontoPeca[c].classList.contains("a5") ||
            pontoPeca[c].classList.contains("a6") ||
            pontoPeca[c].classList.contains("a7") ||
            pontoPeca[c].classList.contains("a8") ||
            pontoPeca[c].classList.contains("b1") ||
            pontoPeca[c].classList.contains("c1") ||
            pontoPeca[c].classList.contains("d1") ||
            pontoPeca[c].classList.contains("e1") ||
            pontoPeca[c].classList.contains("f1") ||
            pontoPeca[c].classList.contains("g1") ||
            pontoPeca[c].classList.contains("h1")
          ) {
            break;
          }
          if (pontoPeca[c - 7 - n].classList.contains("preto")) {
            break;
          }
          if (pontoPeca[c - 7 - n].classList.contains("branco")) {
            pontoPeca[c - 7 - n].classList.add("capturaPreto");
            break;
          }
          if (pontoPeca[c - 7 - n]) {
            pontoPeca[c - 7 - n].classList.add("capturaPreto");
          }
          if (pontoPeca[c - 7 - n] === undefined) {
            break;
          }
          if (
            pontoPeca[c - 7 - n].classList.contains("a1") ||
            pontoPeca[c - 7 - n].classList.contains("a2") ||
            pontoPeca[c - 7 - n].classList.contains("a3") ||
            pontoPeca[c - 7 - n].classList.contains("a4") ||
            pontoPeca[c - 7 - n].classList.contains("a5") ||
            pontoPeca[c - 7 - n].classList.contains("a6") ||
            pontoPeca[c - 7 - n].classList.contains("a7") ||
            pontoPeca[c - 7 - n].classList.contains("a8") ||
            pontoPeca[c - 7 - n].classList.contains("b1") ||
            pontoPeca[c - 7 - n].classList.contains("c1") ||
            pontoPeca[c - 7 - n].classList.contains("d1") ||
            pontoPeca[c - 7 - n].classList.contains("e1") ||
            pontoPeca[c - 7 - n].classList.contains("f1") ||
            pontoPeca[c - 7 - n].classList.contains("g1") ||
            pontoPeca[c - 7 - n].classList.contains("h1")
          ) {
            break;
          }
        }
      }
      if (
        pontoPeca[c].innerHTML === '<span class="bispoPreto">♝</span>' ||
        pontoPeca[c].innerHTML === '<span class="rainhaPreta">♛</span>'
      ) {
        for (let n = 0; ; n += 9) {
          if (
            pontoPeca[c].classList.contains("a1") ||
            pontoPeca[c].classList.contains("a2") ||
            pontoPeca[c].classList.contains("a3") ||
            pontoPeca[c].classList.contains("a4") ||
            pontoPeca[c].classList.contains("a5") ||
            pontoPeca[c].classList.contains("a6") ||
            pontoPeca[c].classList.contains("a7") ||
            pontoPeca[c].classList.contains("a8") ||
            pontoPeca[c].classList.contains("b8") ||
            pontoPeca[c].classList.contains("c8") ||
            pontoPeca[c].classList.contains("d8") ||
            pontoPeca[c].classList.contains("e8") ||
            pontoPeca[c].classList.contains("f8") ||
            pontoPeca[c].classList.contains("g8") ||
            pontoPeca[c].classList.contains("h8")
          ) {
            break;
          }
          if (pontoPeca[c - 9 - n].classList.contains("preto")) {
            break;
          }
          if (pontoPeca[c - 9 - n].classList.contains("branco")) {
            pontoPeca[c - 9 - n].classList.add("capturaPreto");
            break;
          }
          if (pontoPeca[c - 9 - n]) {
            pontoPeca[c - 9 - n].classList.add("capturaPreto");
          }
          if (pontoPeca[c - 9 - n] === undefined) {
            break;
          }
          if (
            pontoPeca[c - 9 - n].classList.contains("a1") ||
            pontoPeca[c - 9 - n].classList.contains("a2") ||
            pontoPeca[c - 9 - n].classList.contains("a3") ||
            pontoPeca[c - 9 - n].classList.contains("a4") ||
            pontoPeca[c - 9 - n].classList.contains("a5") ||
            pontoPeca[c - 9 - n].classList.contains("a6") ||
            pontoPeca[c - 9 - n].classList.contains("a7") ||
            pontoPeca[c - 9 - n].classList.contains("a8") ||
            pontoPeca[c - 9 - n].classList.contains("b8") ||
            pontoPeca[c - 9 - n].classList.contains("c8") ||
            pontoPeca[c - 9 - n].classList.contains("d8") ||
            pontoPeca[c - 9 - n].classList.contains("e8") ||
            pontoPeca[c - 9 - n].classList.contains("f8") ||
            pontoPeca[c - 9 - n].classList.contains("g8") ||
            pontoPeca[c - 9 - n].classList.contains("h8")
          ) {
            break;
          }
        }
        for (let n = 0; ; n += 9) {
          if (
            pontoPeca[c].classList.contains("h1") ||
            pontoPeca[c].classList.contains("h2") ||
            pontoPeca[c].classList.contains("h3") ||
            pontoPeca[c].classList.contains("h4") ||
            pontoPeca[c].classList.contains("h5") ||
            pontoPeca[c].classList.contains("h6") ||
            pontoPeca[c].classList.contains("h7") ||
            pontoPeca[c].classList.contains("h8") ||
            pontoPeca[c].classList.contains("a1") ||
            pontoPeca[c].classList.contains("b1") ||
            pontoPeca[c].classList.contains("c1") ||
            pontoPeca[c].classList.contains("d1") ||
            pontoPeca[c].classList.contains("e1") ||
            pontoPeca[c].classList.contains("f1") ||
            pontoPeca[c].classList.contains("g1")
          ) {
            break;
          }
          if (pontoPeca[c + 9 + n].classList.contains("preto")) {
            break;
          }
          if (pontoPeca[c + 9 + n].classList.contains("branco")) {
            pontoPeca[c + 9 + n].classList.add("capturaPreto");
            break;
          }
          if (pontoPeca[c + 9 + n]) {
            pontoPeca[c + 9 + n].classList.add("capturaPreto");
          }
          if (pontoPeca[c + 9 + n] === undefined) {
            break;
          }
          if (
            pontoPeca[c + 9 + n].classList.contains("h1") ||
            pontoPeca[c + 9 + n].classList.contains("h2") ||
            pontoPeca[c + 9 + n].classList.contains("h3") ||
            pontoPeca[c + 9 + n].classList.contains("h4") ||
            pontoPeca[c + 9 + n].classList.contains("h5") ||
            pontoPeca[c + 9 + n].classList.contains("h6") ||
            pontoPeca[c + 9 + n].classList.contains("h7") ||
            pontoPeca[c + 9 + n].classList.contains("h8") ||
            pontoPeca[c + 9 + n].classList.contains("a1") ||
            pontoPeca[c + 9 + n].classList.contains("b1") ||
            pontoPeca[c + 9 + n].classList.contains("c1") ||
            pontoPeca[c + 9 + n].classList.contains("d1") ||
            pontoPeca[c + 9 + n].classList.contains("e1") ||
            pontoPeca[c + 9 + n].classList.contains("f1") ||
            pontoPeca[c + 9 + n].classList.contains("g1")
          ) {
            break;
          }
        }
      }
      //Torre
      if (
        pontoPeca[c].innerHTML === '<span class="torreBranca">♖</span>' ||
        pontoPeca[c].innerHTML === '<span class="rainhaBranca">♕</span>'
      ) {
        for (let n = 0; ; n += 1) {
          if (
            pontoPeca[c].classList.contains("h8") ||
            pontoPeca[c].classList.contains("a8") ||
            pontoPeca[c].classList.contains("b8") ||
            pontoPeca[c].classList.contains("c8") ||
            pontoPeca[c].classList.contains("d8") ||
            pontoPeca[c].classList.contains("e8") ||
            pontoPeca[c].classList.contains("f8") ||
            pontoPeca[c].classList.contains("g8")
          ) {
            break;
          }
          if (pontoPeca[c - 1 - n].classList.contains("branco")) {
            break;
          }
          if (pontoPeca[c - 1 - n].classList.contains("preto")) {
            pontoPeca[c - 1 - n].classList.add("captura");
            break;
          }
          if (pontoPeca[c - 1 - n]) {
            pontoPeca[c - 1 - n].classList.add("captura");
          }
          if (pontoPeca[c - 1 - n] === undefined) {
            break;
          }
          if (
            pontoPeca[c - 1 - n].classList.contains("h8") ||
            pontoPeca[c - 1 - n].classList.contains("a8") ||
            pontoPeca[c - 1 - n].classList.contains("b8") ||
            pontoPeca[c - 1 - n].classList.contains("c8") ||
            pontoPeca[c - 1 - n].classList.contains("d8") ||
            pontoPeca[c - 1 - n].classList.contains("e8") ||
            pontoPeca[c - 1 - n].classList.contains("f8") ||
            pontoPeca[c - 1 - n].classList.contains("g8")
          ) {
            break;
          }
        }
        for (let n = 0; ; n += 1) {
          if (
            pontoPeca[c].classList.contains("h1") ||
            pontoPeca[c].classList.contains("a1") ||
            pontoPeca[c].classList.contains("b1") ||
            pontoPeca[c].classList.contains("c1") ||
            pontoPeca[c].classList.contains("d1") ||
            pontoPeca[c].classList.contains("e1") ||
            pontoPeca[c].classList.contains("f1") ||
            pontoPeca[c].classList.contains("g1")
          ) {
            break;
          }
          if (pontoPeca[c + 1 + n].classList.contains("branco")) {
            break;
          }
          if (pontoPeca[c + 1 + n].classList.contains("preto")) {
            pontoPeca[c + 1 + n].classList.add("captura");
            break;
          }
          if (pontoPeca[c + 1 + n]) {
            pontoPeca[c + 1 + n].classList.add("captura");
          }
          if (pontoPeca[c + 1 + n] === undefined) {
            break;
          }
          if (
            pontoPeca[c + 1 + n].classList.contains("h1") ||
            pontoPeca[c + 1 + n].classList.contains("a1") ||
            pontoPeca[c + 1 + n].classList.contains("b1") ||
            pontoPeca[c + 1 + n].classList.contains("c1") ||
            pontoPeca[c + 1 + n].classList.contains("d1") ||
            pontoPeca[c + 1 + n].classList.contains("e1") ||
            pontoPeca[c + 1 + n].classList.contains("f1") ||
            pontoPeca[c + 1 + n].classList.contains("g1")
          ) {
            break;
          }
        }
      }
      if (
        pontoPeca[c].innerHTML === '<span class="torreBranca">♖</span>' ||
        pontoPeca[c].innerHTML === '<span class="rainhaBranca">♕</span>'
      ) {
        for (let n = 0; ; n += 8) {
          if (
            pontoPeca[c].classList.contains("h1") ||
            pontoPeca[c].classList.contains("h2") ||
            pontoPeca[c].classList.contains("h3") ||
            pontoPeca[c].classList.contains("h4") ||
            pontoPeca[c].classList.contains("h5") ||
            pontoPeca[c].classList.contains("h6") ||
            pontoPeca[c].classList.contains("h7") ||
            pontoPeca[c].classList.contains("h8")
          ) {
            break;
          }
          if (pontoPeca[c + 8 + n].classList.contains("branco")) {
            break;
          }
          if (pontoPeca[c + 8 + n].classList.contains("preto")) {
            pontoPeca[c + 8 + n].classList.add("captura");
            break;
          }
          if (pontoPeca[c + 8 + n]) {
            pontoPeca[c + 8 + n].classList.add("captura");
          }
          if (pontoPeca[c + 8 + n] === undefined) {
            break;
          }
          if (
            pontoPeca[c + 8 + n].classList.contains("h1") ||
            pontoPeca[c + 8 + n].classList.contains("h2") ||
            pontoPeca[c + 8 + n].classList.contains("h3") ||
            pontoPeca[c + 8 + n].classList.contains("h4") ||
            pontoPeca[c + 8 + n].classList.contains("h5") ||
            pontoPeca[c + 8 + n].classList.contains("h6") ||
            pontoPeca[c + 8 + n].classList.contains("h7") ||
            pontoPeca[c + 8 + n].classList.contains("h8")
          ) {
            break;
          }
        }
        for (let n = 0; ; n += 8) {
          if (
            pontoPeca[c].classList.contains("a1") ||
            pontoPeca[c].classList.contains("a2") ||
            pontoPeca[c].classList.contains("a3") ||
            pontoPeca[c].classList.contains("a4") ||
            pontoPeca[c].classList.contains("a5") ||
            pontoPeca[c].classList.contains("a6") ||
            pontoPeca[c].classList.contains("a7") ||
            pontoPeca[c].classList.contains("a8")
          ) {
            break;
          }
          if (pontoPeca[c - 8 - n].classList.contains("branco")) {
            break;
          }
          if (pontoPeca[c - 8 - n].classList.contains("preto")) {
            pontoPeca[c - 8 - n].classList.add("captura");
            break;
          }
          if (pontoPeca[c - 8 - n]) {
            pontoPeca[c - 8 - n].classList.add("captura");
          }
          if (pontoPeca[c - 8 - n] === undefined) {
            break;
          }
          if (
            pontoPeca[c - 8 - n].classList.contains("a1") ||
            pontoPeca[c - 8 - n].classList.contains("a2") ||
            pontoPeca[c - 8 - n].classList.contains("a3") ||
            pontoPeca[c - 8 - n].classList.contains("a4") ||
            pontoPeca[c - 8 - n].classList.contains("a5") ||
            pontoPeca[c - 8 - n].classList.contains("a6") ||
            pontoPeca[c - 8 - n].classList.contains("a7") ||
            pontoPeca[c - 8 - n].classList.contains("a8")
          ) {
            break;
          }
        }
      }
      if (
        pontoPeca[c].innerHTML === '<span class="torrePreta">♜</span>' ||
        pontoPeca[c].innerHTML === '<span class="rainhaPreta">♛</span>'
      ) {
        for (let n = 0; ; n += 1) {
          if (
            pontoPeca[c].classList.contains("h1") ||
            pontoPeca[c].classList.contains("a1") ||
            pontoPeca[c].classList.contains("b1") ||
            pontoPeca[c].classList.contains("c1") ||
            pontoPeca[c].classList.contains("d1") ||
            pontoPeca[c].classList.contains("e1") ||
            pontoPeca[c].classList.contains("f1") ||
            pontoPeca[c].classList.contains("g1")
          ) {
            break;
          }
          if (pontoPeca[c + 1 + n].classList.contains("preto")) {
            break;
          }
          if (pontoPeca[c + 1 + n].classList.contains("branco")) {
            pontoPeca[c + 1 + n].classList.add("capturaPreto");
            break;
          }
          if (pontoPeca[c + 1 + n]) {
            pontoPeca[c + 1 + n].classList.add("capturaPreto");
          }
          if (pontoPeca[c + 1 + n] === undefined) {
            break;
          }
          if (
            pontoPeca[c + 1 + n].classList.contains("h1") ||
            pontoPeca[c + 1 + n].classList.contains("a1") ||
            pontoPeca[c + 1 + n].classList.contains("b1") ||
            pontoPeca[c + 1 + n].classList.contains("c1") ||
            pontoPeca[c + 1 + n].classList.contains("d1") ||
            pontoPeca[c + 1 + n].classList.contains("e1") ||
            pontoPeca[c + 1 + n].classList.contains("f1") ||
            pontoPeca[c + 1 + n].classList.contains("g1")
          ) {
            break;
          }
        }
        for (let n = 0; ; n += 1) {
          if (
            pontoPeca[c].classList.contains("h8") ||
            pontoPeca[c].classList.contains("a8") ||
            pontoPeca[c].classList.contains("b8") ||
            pontoPeca[c].classList.contains("c8") ||
            pontoPeca[c].classList.contains("d8") ||
            pontoPeca[c].classList.contains("e8") ||
            pontoPeca[c].classList.contains("f8") ||
            pontoPeca[c].classList.contains("g8")
          ) {
            break;
          }
          if (pontoPeca[c - 1 - n].classList.contains("preto")) {
            break;
          }
          if (pontoPeca[c - 1 - n].classList.contains("branco")) {
            pontoPeca[c - 1 - n].classList.add("capturaPreto");
            break;
          }
          if (pontoPeca[c - 1 - n]) {
            pontoPeca[c - 1 - n].classList.add("capturaPreto");
          }
          if (pontoPeca[c - 1 - n] === undefined) {
            break;
          }
          if (
            pontoPeca[c - 1 - n].classList.contains("h8") ||
            pontoPeca[c - 1 - n].classList.contains("a8") ||
            pontoPeca[c - 1 - n].classList.contains("b8") ||
            pontoPeca[c - 1 - n].classList.contains("c8") ||
            pontoPeca[c - 1 - n].classList.contains("d8") ||
            pontoPeca[c - 1 - n].classList.contains("e8") ||
            pontoPeca[c - 1 - n].classList.contains("f8") ||
            pontoPeca[c - 1 - n].classList.contains("g8")
          ) {
            break;
          }
        }
      }
      if (
        pontoPeca[c].innerHTML === '<span class="torrePreta">♜</span>' ||
        pontoPeca[c].innerHTML === '<span class="rainhaPreta">♛</span>'
      ) {
        for (let n = 0; ; n += 8) {
          if (
            pontoPeca[c].classList.contains("a1") ||
            pontoPeca[c].classList.contains("a2") ||
            pontoPeca[c].classList.contains("a3") ||
            pontoPeca[c].classList.contains("a4") ||
            pontoPeca[c].classList.contains("a5") ||
            pontoPeca[c].classList.contains("a6") ||
            pontoPeca[c].classList.contains("a7") ||
            pontoPeca[c].classList.contains("a8")
          ) {
            break;
          }
          if (pontoPeca[c - 8 - n].classList.contains("preto")) {
            break;
          }
          if (pontoPeca[c - 8 - n].classList.contains("branco")) {
            pontoPeca[c - 8 - n].classList.add("capturaPreto");
            break;
          }
          if (pontoPeca[c - 8 - n]) {
            pontoPeca[c - 8 - n].classList.add("capturaPreto");
          }
          if (pontoPeca[c - 8 - n] === undefined) {
            break;
          }
          if (
            pontoPeca[c - 8 - n].classList.contains("a1") ||
            pontoPeca[c - 8 - n].classList.contains("a2") ||
            pontoPeca[c - 8 - n].classList.contains("a3") ||
            pontoPeca[c - 8 - n].classList.contains("a4") ||
            pontoPeca[c - 8 - n].classList.contains("a5") ||
            pontoPeca[c - 8 - n].classList.contains("a6") ||
            pontoPeca[c - 8 - n].classList.contains("a7") ||
            pontoPeca[c - 8 - n].classList.contains("a8")
          ) {
            break;
          }
        }
        for (let n = 0; ; n += 8) {
          if (
            pontoPeca[c].classList.contains("h1") ||
            pontoPeca[c].classList.contains("h2") ||
            pontoPeca[c].classList.contains("h3") ||
            pontoPeca[c].classList.contains("h4") ||
            pontoPeca[c].classList.contains("h5") ||
            pontoPeca[c].classList.contains("h6") ||
            pontoPeca[c].classList.contains("h7") ||
            pontoPeca[c].classList.contains("h8")
          ) {
            break;
          }
          if (pontoPeca[c + 8 + n].classList.contains("preto")) {
            break;
          }
          if (pontoPeca[c + 8 + n].classList.contains("branco")) {
            pontoPeca[c + 8 + n].classList.add("capturaPreto");
            break;
          }
          if (pontoPeca[c + 8 + n]) {
            pontoPeca[c + 8 + n].classList.add("capturaPreto");
          }
          if (pontoPeca[c + 8 + n] === undefined) {
            break;
          }
          if (
            pontoPeca[c + 8 + n].classList.contains("h1") ||
            pontoPeca[c + 8 + n].classList.contains("h2") ||
            pontoPeca[c + 8 + n].classList.contains("h3") ||
            pontoPeca[c + 8 + n].classList.contains("h4") ||
            pontoPeca[c + 8 + n].classList.contains("h5") ||
            pontoPeca[c + 8 + n].classList.contains("h6") ||
            pontoPeca[c + 8 + n].classList.contains("h7") ||
            pontoPeca[c + 8 + n].classList.contains("h8")
          ) {
            break;
          }
        }
      }
    }
  }
  tabuleiro.addEventListener("click", captura);
}
