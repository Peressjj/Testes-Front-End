console.log("JS conectado!");

const botao = document.querySelector('button');
const paragrafo = document.querySelector('p');

botao.addEventListener('click', () => {
    paragrafo.textContent = 'Voce clicou no botao!\n';
});