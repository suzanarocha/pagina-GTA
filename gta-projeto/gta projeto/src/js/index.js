const botao = document.querySelector(".btn-plataforma");
const elementoPlataformas = document.querySelector(".btn-plataforma .plataformas");

botao.addEventListener("click", () => {
    const botaoEstaAberto = elementoPlataformas.classList.toggle("ativo");
});