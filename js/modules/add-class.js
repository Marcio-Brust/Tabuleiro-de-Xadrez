export default function initiAddClass() {
  function SeletorPecas(seletor) {
    const elemento = Array.from(document.querySelectorAll(seletor));

    this.addClass = function (classe) {
      elemento.forEach((item) => {
        item.addEventListener("click", () => {
          for (let i = 0; i < elemento.length; i++) {
            elemento[i].classList.remove(classe);
          }
          if (item.innerHTML !== "") {
            item.classList.add(classe);
          }
        });
      });
    };
  }
  const celula = new SeletorPecas("div");
  celula.addClass("ativo");
}
